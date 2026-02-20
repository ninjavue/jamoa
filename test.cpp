//
// Created by ubuntu on 5/22/25.
//
#include <jni.h>
#include <string>
#include <android/log.h>
#include <unistd.h>
#include <dirent.h>
#include <cstring>
#include <fstream>
#include <ifaddrs.h>
#include <net/if.h>
#include <sys/system_properties.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <errno.h>
#include <sys/ptrace.h>
#include <signal.h>
#include <vector>
#include <sstream>
#include <cctype>
#include <cstdio>
#include <cstdlib>
#include <limits.h>

#define LOG_TAG "SecureCheck"
#define LOGI(...) __android_log_print(ANDROID_LOG_INFO, LOG_TAG, __VA_ARGS__)

// ROOT DIVACE DETECTED START CODE
bool check_kernel_modifications() {
    FILE* fp = popen("dmesg | grep magisk", "r");
    if (fp) {
        char buffer[128];
        while (fgets(buffer, sizeof(buffer), fp)) {
            if (strstr(buffer, "magisk") != nullptr) {
                pclose(fp);
                return true;
            }
        }
        pclose(fp);
    }
    return false;
}

bool check_secure_boot() {
    std::ifstream cmdline("/proc/cmdline");
    std::string line;
    if (cmdline) {
        std::getline(cmdline, line);
        return (line.find("secure_boot") != std::string::npos);
    }
    return false;
}

bool check_bootloader() {
    FILE* fp = popen("fastboot oem device-info", "r");
    if (fp) {
        char buffer[128];
        while (fgets(buffer, sizeof(buffer), fp)) {
            if (strstr(buffer, "unlocked") != nullptr) {
                pclose(fp);
                return true;
            }
        }
        pclose(fp);
    }
    return false;
}

bool file_exists(const std::string& path) {
    struct stat buffer;
    return (stat(path.c_str(), &buffer) == 0);
}

bool check_magisk_config() {
    const std::string magisk_paths[] = {
            "/data/adb/magisk",
            "/magisk/.core/magisk"
    };

    for (const auto& path : magisk_paths) {
        if (file_exists(path)) {
            return true;
        }

    // Detect if another process is tracing us (common for debuggers/frida)
    }
    return false;
}
bool checkMagiskPaths() {
    const char *magiskPaths[] = {
            "/sbin/.magisk",
            "/data/adb/magisk",
            "/data/adb/magisk.db",
            "/magisk/.core/bin/su",
            "/dev/.magisk_unblock",
            "/su/bin/su",
            "/system/bin/su",
            "/system/xbin/su"
    };

    struct stat info;

    for (const char *path : magiskPaths) {
        LOGI("Checking path: %s", path);

        if (stat(path, &info) == 0) {
            LOGI("Magisk or SU detected via stat: %s", path);
            return true;
        } else {
            LOGI("stat failed for %s with errno: %d", path, errno);
        }

        int fd = open(path, O_RDONLY);
        if (fd != -1) {
            LOGI("Magisk or SU detected via open: %s", path);
            close(fd);
            return true;
        } else {
            LOGI("open failed for %s with errno: %d", path, errno);
        }
    }

    return false;
}

bool checkSuExec() {
    FILE *pipe = popen("which su", "r");
    if (!pipe) {
        return false;
    }

    char buffer[128];
    std::string result;
    while (fgets(buffer, sizeof(buffer), pipe) != nullptr) {
        result += buffer;
    }
    pclose(pipe);

    if (result.empty()) {
        return false;
    }
    int ret = system("su -c id");
    if (ret == 0) {
        LOGI("Root access granted via su");
        return true;
    }

    return false;
}

bool isRooted() {
    const char *paths[] = {
            "/system/bin/su", "/system/xbin/su", "/sbin/su",
            "/system/su", "/system/bin/.ext/.su", "/system/usr/we-need-root/su",
            "/system/app/Superuser.apk", "/system/app/SuperSU", "/system/xbin/daemonsu",
            "/su/bin/su", "/magisk/.core/bin/su"
    };

    for (const char *path : paths) {
        if (access(path, F_OK) == 0) {
            LOGI("Root detected: %s", path);
            return true;
        }
    }
    return false;
}


// ROOT DIVACE DETECTED END CODE

// Scan /proc/*/cmdline for suspicious strings (magisk, magiskd, su)
bool check_proc_for_magisk_or_su() {
    DIR* dir = opendir("/proc");
    if (!dir) return false;

    struct dirent* entry;
    while ((entry = readdir(dir)) != nullptr) {
        if (entry->d_type != DT_DIR) continue;
        const char* name = entry->d_name;
        bool is_pid = true;
        for (const char* p = name; *p; ++p) {
            if (!isdigit(*p)) { is_pid = false; break; }
        }
        if (!is_pid) continue;

        char path[256];
        snprintf(path, sizeof(path), "/proc/%s/cmdline", name);
        std::ifstream cmd(path);
        if (!cmd.is_open()) continue;
        std::string content;
        std::getline(cmd, content, '\0');
        cmd.close();
        if (content.find("magisk") != std::string::npos ||
            content.find("magiskd") != std::string::npos ||
            content.find("su") != std::string::npos) {
            closedir(dir);
            LOGI("Magisk/SU detected in /proc/*/cmdline: %s", content.c_str());
            return true;
        }
    }

    closedir(dir);
    return false;
}

// Search PATH for a su binary (covers renamed package locations in PATH)
bool check_su_in_path() {
    const char* path_env = getenv("PATH");
    if (!path_env) return false;
    std::string path_copy(path_env);
    size_t start = 0;
    while (start < path_copy.size()) {
        size_t colon = path_copy.find(':', start);
        std::string part = path_copy.substr(start, (colon==std::string::npos)?std::string::npos:colon-start);
        if (!part.empty()) {
            std::string candidate = part + "/su";
            if (access(candidate.c_str(), X_OK) == 0) {
                LOGI("SU binary found in PATH: %s", candidate.c_str());
                return true;
            }
        }
        if (colon==std::string::npos) break;
        start = colon + 1;
    }
    return false;
}

// Run getprop and look for magisk strings (works if package name changed but properties remain)
bool check_getprop_for_magisk() {
    FILE* fp = popen("getprop | grep -i magisk", "r");
    if (!fp) return false;
    char buffer[256];
    bool found = false;
    while (fgets(buffer, sizeof(buffer), fp)) {
        if (strcasestr(buffer, "magisk") != nullptr) {
            LOGI("Magisk detected via getprop: %s", buffer);
            found = true;
            break;
        }
    }
    pclose(fp);
    return found;
}

// Detect if another process is tracing us (common for debuggers/frida)
// DISABLED: Too many false positives on normal Android devices
bool check_ptrace_tracer() {
    return false; // Disabled to reduce false positives
}

// Look for memory regions with both write and execute permissions (suspicious)
// DISABLED: JIT compilation and normal app behavior can cause RWX regions
bool check_rwx_memory_regions() {
    return false; // Disabled to reduce false positives
}

// Check SELinux enforcement state
// DISABLED: Many normal Android devices run permissive SELinux
bool check_selinux_enforcing() {
    return false; // Disabled to reduce false positives
}

// Check if key system partitions are mounted writable (system, vendor, odm, product)
// DISABLED: Can happen during OTA updates or factory settings on normal devices
bool check_system_partitions_writable() {
    return false; // Disabled to reduce false positives
}

// Check environment for LD_PRELOAD/LD_LIBRARY_PATH or similar
// DISABLED: May be set by legitimate tools or sandboxing
bool check_env_ldpreload() {
    return false; // Disabled to reduce false positives
}

// Scan /proc/*/exe symlinks for suspicious paths
bool check_proc_exe_links() {
    DIR* dir = opendir("/proc");
    if (!dir) return false;
    struct dirent* entry;
    char buf[4096];
    while ((entry = readdir(dir)) != nullptr) {
        if (entry->d_type != DT_DIR) continue;
        const char* name = entry->d_name;
        bool is_pid = true;
        for (const char* p = name; *p; ++p) {
            if (!isdigit(*p)) { is_pid = false; break; }
        }
        if (!is_pid) continue;
        snprintf(buf, sizeof(buf), "/proc/%s/exe", name);
        ssize_t len = readlink(buf, buf, sizeof(buf)-1);
        if (len <= 0) continue;
        buf[len] = '\0';
        std::string path(buf);
        if (path.find("magisk") != std::string::npos || path.find("frida") != std::string::npos ||
            path.find("gdbserver") != std::string::npos || path.find("xposed") != std::string::npos ||
            path.find("su") != std::string::npos) {
            closedir(dir);
            LOGI("Suspicious process detected: %s", path.c_str());
            return true;
        }
    }
    closedir(dir);
    return false;
}

// Check for Magisk-specific properties set by the hide module
bool check_magisk_properties() {
    FILE* fp = popen("getprop | grep -E '(magisk|hide|ro.dalvik.vm.enable_selinux|ro.boot)' 2>/dev/null | head -20", "r");
    if (!fp) return false;
    char buffer[256];
    bool suspicious = false;
    while (fgets(buffer, sizeof(buffer), fp)) {
        // Look for telltale Magisk properties
        if (strcasestr(buffer, "ro.magisk") != nullptr ||
            strcasestr(buffer, "ro.dalvik.vm.enable_selinux") != nullptr ||
            (strcasestr(buffer, "persist.sys") != nullptr && strcasestr(buffer, "systemui") != nullptr)) {
            LOGI("Magisk property detected: %s", buffer);
            suspicious = true;
            break;
        }
    }
    pclose(fp);
    return suspicious;
}

// Check for Magisk module directory (/data/adb/modules)
bool check_magisk_modules() {
    DIR* dir = opendir("/data/adb/modules");
    if (!dir) return false;
    
    // If modules directory exists and contains files, likely Magisk
    struct dirent* entry = readdir(dir);
    if (entry != nullptr && entry->d_name[0] != '.') {
        LOGI("Magisk modules directory found");
        closedir(dir);
        return true;
    }
    closedir(dir);
    return false;
}

// Check /proc/net/unix for magisk daemon socket
bool check_magisk_socket() {
    std::ifstream unix_sockets("/proc/net/unix");
    if (!unix_sockets.is_open()) return false;
    std::string line;
    while (std::getline(unix_sockets, line)) {
        if (line.find("magisk") != std::string::npos || 
            line.find(".magisk") != std::string::npos ||
            line.find("magiskd") != std::string::npos) {
            LOGI("Magisk socket detected: %s", line.c_str());
            return true;
        }
    }
    return false;
}

// Check for anomalies in /system/build.prop (fingerprint, build tags, etc.)
bool check_build_prop_anomalies() {
    std::ifstream build_prop("/system/build.prop");
    if (!build_prop.is_open()) return false;
    std::string line;
    int prop_count = 0;
    while (std::getline(build_prop, line) && prop_count < 50) {
        prop_count++;
        // Look for suspiciously modified properties
        if (line.find("ro.build.tags=test-keys") != std::string::npos) {
            LOGI("Test keys detected in build.prop");
            return true;
        }
        if (line.find("ro.debuggable=1") != std::string::npos) {
            LOGI("Debuggable mode detected");
            return true;
        }
        // Magisk tends to modify these
        if (line.find("ro.secure=0") != std::string::npos) {
            LOGI("ro.secure=0 detected");
            return true;
        }
    }
    return false;
}

// Check kernel taint flags (indicates kernel module injection or tampering)
bool check_kernel_taint() {
    std::ifstream taint("/proc/sys/kernel/tainted");
    if (!taint.is_open()) return false;
    int val = 0;
    taint >> val;
    if (val != 0) {
        LOGI("Kernel tainted (value: %d)", val);
        return true;
    }
    return false;
}

// Check dmesg for magisk/selinux disable messages
bool check_dmesg_magisk() {
    FILE* fp = popen("dmesg 2>/dev/null | grep -i -E '(magisk|selinux|enforce=0)' | head -5", "r");
    if (!fp) return false;
    char buffer[256];
    bool found = false;
    while (fgets(buffer, sizeof(buffer), fp)) {
        if (strcasestr(buffer, "magisk") != nullptr ||
            strcasestr(buffer, "enforce=0") != nullptr) {
            LOGI("Magisk indicator in dmesg: %s", buffer);
            found = true;
            break;
        }
    }
    pclose(fp);
    return found;
}

// Check for suspicious /system/app or /system/priv-app modules
bool check_system_app_hooks() {
    const char* system_dirs[] = {"/system/app", "/system/priv-app", "/system/xbin"};
    for (const auto* dir_path : system_dirs) {
        DIR* dir = opendir(dir_path);
        if (!dir) continue;
        struct dirent* entry;
        int app_count = 0;
        while ((entry = readdir(dir)) != nullptr && app_count < 100) {
            if (entry->d_type == DT_DIR && 
                (strstr(entry->d_name, "magisk") != nullptr ||
                 strstr(entry->d_name, "xposed") != nullptr ||
                 strstr(entry->d_name, "frida") != nullptr)) {
                closedir(dir);
                LOGI("Suspicious system app: %s/%s", dir_path, entry->d_name);
                return true;
            }
            app_count++;
        }
        closedir(dir);
    }
    return false;
}

// Check if libc.so or other core libs have been patched/injected
bool check_native_library_injection() {
    std::ifstream maps("/proc/self/maps");
    if (!maps.is_open()) return false;
    std::string line;
    while (std::getline(maps, line)) {
        // Look for suspicious library paths
        if (line.find(".magisk") != std::string::npos ||
            line.find("magisk") != std::string::npos ||
            line.find("frida") != std::string::npos ||
            line.find("/data/") != std::string::npos && line.find(".so") != std::string::npos) {
            LOGI("Suspicious native library: %s", line.c_str());
            return true;
        }
    }
    return false;
}

// Check for Magisk-specific /data/adb subdirectories (service.d, post-fs-data.d, modules, etc.)
bool check_magisk_adb_structure() {
    const char* magisk_adb_paths[] = {
        "/data/adb",
        "/data/adb/modules",
        "/data/adb/service.d",
        "/data/adb/post-fs-data.d",
        "/data/adb/services.d",
        "/data/adb/magisk.db",
        "/data/adb/magisk",
        "/data/adb/mnt"
    };
    
    for (const auto* path : magisk_adb_paths) {
        if (access(path, F_OK) == 0) {
            LOGI("Magisk ADB structure found: %s", path);
            return true;
        }
    }
    return false;
}

// Check for overlayfs mounts (modern Magisk uses overlayfs for systemless modules)
bool check_overlayfs_mounts() {
    std::ifstream mounts("/proc/mounts");
    if (!mounts.is_open()) return false;
    std::string line;
    int overlay_count = 0;
    while (std::getline(mounts, line)) {
        if (line.find("overlay") != std::string::npos || 
            line.find("overlayfs") != std::string::npos) {
            overlay_count++;
            if (line.find("/system") != std::string::npos ||
                line.find("/vendor") != std::string::npos ||
                line.find("/product") != std::string::npos) {
                LOGI("Overlayfs on system partition: %s", line.c_str());
                return true;
            }
        }
    }
    // Multiple overlayfs mounts is suspicious
    if (overlay_count > 5) {
        LOGI("Too many overlayfs mounts detected: %d", overlay_count);
        return true;
    }
    return false;
}

// Check for bind mounts (another Magisk technique)
bool check_bind_mounts() {
    std::ifstream mounts("/proc/mounts");
    if (!mounts.is_open()) return false;
    std::string line;
    while (std::getline(mounts, line)) {
        // Look for bind mount patterns on system critical paths
        if ((line.find("/system") != std::string::npos ||
             line.find("/vendor") != std::string::npos ||
             line.find("/product") != std::string::npos) &&
            line.find("bind") != std::string::npos) {
            LOGI("Bind mount on system partition: %s", line.c_str());
            return true;
        }
    }
    return false;
}

// Check /proc/*/environ for suspicious environment variables injected by Magisk
bool check_process_environ() {
    DIR* dir = opendir("/proc");
    if (!dir) return false;
    struct dirent* entry;
    char path_buf[256];
    char env_buf[4096];
    
    while ((entry = readdir(dir)) != nullptr && entry->d_name[0] != '.') {
        bool is_pid = true;
        for (const char* p = entry->d_name; *p; ++p) {
            if (!isdigit(*p)) { is_pid = false; break; }
        }
        if (!is_pid) continue;
        
        snprintf(path_buf, sizeof(path_buf), "/proc/%s/environ", entry->d_name);
        std::ifstream env_file(path_buf);
        if (!env_file.is_open()) continue;
        
        env_file.read(env_buf, sizeof(env_buf) - 1);
        size_t bytes = env_file.gcount();
        if (bytes > 0) {
            env_buf[bytes] = '\0';
            std::string env_str(env_buf);
            if (env_str.find("MAGISK") != std::string::npos ||
                env_str.find(".magisk") != std::string::npos) {
                LOGI("Magisk environment variable in PID %s", entry->d_name);
                closedir(dir);
                return true;
            }
        }
    }
    closedir(dir);
    return false;
}

// Check for init.d hooks (legacy Magisk technique, but still used)
bool check_initd_hooks() {
    const char* initd_paths[] = {
        "/system/etc/init.d",
        "/system/app/SuperSU/service.sh",
        "/data/local/tmp/magisk.sh",
        "/data/local/tmp/install.sh"
    };
    
    for (const auto* path : initd_paths) {
        if (access(path, F_OK) == 0) {
            LOGI("Init.d hook found: %s", path);
            return true;
        }
    }
    return false;
}

// Check system properties for signs of Magisk modification
bool check_system_property_mods() {
    FILE* fp = popen("getprop 2>/dev/null | grep -E '(ro.build.fingerprint|ro.product.model|ro.product.device|ro.product.brand)' 2>/dev/null", "r");
    if (!fp) return false;
    
    char buffer[256];
    int suspicious_props = 0;
    while (fgets(buffer, sizeof(buffer), fp)) {
        // Magisk often leaves inconsistent or unusual properties
        if (strstr(buffer, "unknown") != nullptr ||
            strstr(buffer, "test") != nullptr ||
            strstr(buffer, "generic") != nullptr ||
            strlen(buffer) < 5) {
            suspicious_props++;
        }
    }
    pclose(fp);
    
    if (suspicious_props >= 2) {
        LOGI("Multiple suspicious system properties detected");
        return true;
    }
    return false;
}

// Check for suspicious symlinks in /system that Magisk might create
bool check_system_symlinks() {
    const char* critical_paths[] = {
        "/system/bin/app_process",
        "/system/lib/libc.so",
        "/system/lib64/libc.so"
    };
    
    char target[PATH_MAX];
    for (const auto* path : critical_paths) {
        ssize_t len = readlink(path, target, sizeof(target) - 1);
        if (len > 0) {
            target[len] = '\0';
            // Original should point directly to the file, not through magisk mount
            if (strstr(target, ".magisk") != nullptr ||
                strstr(target, "magisk") != nullptr ||
                strstr(target, "..") != nullptr) {
                LOGI("Suspicious symlink: %s -> %s", path, target);
                return true;
            }
        }
    }
    return false;
}

// Check /proc/self/mountinfo for hidden mounts (more detailed than /proc/mounts)
bool check_mountinfo_anomalies() {
    std::ifstream mountinfo("/proc/self/mountinfo");
    if (!mountinfo.is_open()) return false;
    std::string line;
    int unusual_mounts = 0;
    
    while (std::getline(mountinfo, line)) {
        if (line.find("overlay") != std::string::npos ||
            line.find(".magisk") != std::string::npos ||
            line.find("magisk") != std::string::npos) {
            unusual_mounts++;
        }
    }
    
    if (unusual_mounts > 0) {
        LOGI("Unusual mounts in mountinfo: %d", unusual_mounts);
        return true;
    }
    return false;
}

//FRIDA
bool detectFridaRoot() {
    std::ifstream mapsFile("/proc/self/maps");
    if (!mapsFile.is_open()) return false;

    std::string line;
    while (std::getline(mapsFile, line)) {
        if (line.find("frida") != std::string::npos ||
            line.find("gadget") != std::string::npos ||
            line.find("re.frida") != std::string::npos) {
            return true;
        }
    }
    return false;
}


extern "C"
JNIEXPORT jboolean JNICALL
Java_com_example_zirh_1mobil_ZirhNative_checkRoot(JNIEnv *env, jobject /* this */) {
    // quick filesystem/su checks
    if (isRooted()) return JNI_TRUE;
    if (checkMagiskPaths()) return JNI_TRUE;

    // process /proc and PATH checks
    if (check_proc_for_magisk_or_su()) return JNI_TRUE;
    if (check_su_in_path()) return JNI_TRUE;
    if (check_getprop_for_magisk()) return JNI_TRUE;

    // execution-time instrumentation checks
    if (checkSuExec()) return JNI_TRUE;
    if (detectFridaRoot()) return JNI_TRUE;
    if (check_ptrace_tracer()) return JNI_TRUE;

    // kernel / boot / magisk configs
    if (check_kernel_modifications()) return JNI_TRUE;
    if (check_magisk_config()) return JNI_TRUE;
    if (check_bootloader()) return JNI_TRUE;
    if (check_secure_boot()) return JNI_TRUE;

    // environment / runtime integrity checks
    if (check_rwx_memory_regions()) return JNI_TRUE;
    if (check_selinux_enforcing()) return JNI_TRUE;
    if (check_system_partitions_writable()) return JNI_TRUE;
    if (check_env_ldpreload()) return JNI_TRUE;
    if (check_proc_exe_links()) return JNI_TRUE;

    // Advanced Magisk hide evasion detection
    if (check_magisk_properties()) return JNI_TRUE;
    if (check_magisk_modules()) return JNI_TRUE;
    if (check_magisk_socket()) return JNI_TRUE;
    if (check_build_prop_anomalies()) return JNI_TRUE;
    if (check_kernel_taint()) return JNI_TRUE;
    if (check_dmesg_magisk()) return JNI_TRUE;
    if (check_system_app_hooks()) return JNI_TRUE;
    if (check_native_library_injection()) return JNI_TRUE;

    return JNI_FALSE;
}



