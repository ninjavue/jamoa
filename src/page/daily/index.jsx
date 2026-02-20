import "../dashboard/dashboard.css";


const Daily = () => {
  return (
    <div>
      <div className="mt-8">
        <div className="lt-row">
          <div className="lt-card lt-card bg-gradient-to-r from-cyan-600/10 to-bg-white border border-gray-200 dark:border-neutral-600  bg-white dark:bg-[#2b2c40]">
            <div className="lt-card__dot w-6 h-6" style={{ background: 'var(--accent-purple)' }}></div>
            <div className="lt-card__label dark:text-gray-200">Jami</div>
            <div className="lt-card__value dark:text-gray-300">0</div>
          </div>
          <div className="lt-card lt-card bg-gradient-to-r from-cyan-600/10 to-bg-white border border-gray-200 dark:border-neutral-600  bg-white dark:bg-[#2b2c40]">
            <div className="lt-card__dot w-6 h-6" style={{ color: 'var(--accent-green)' }}>
              <i class="bx bxs-time-five text-success display-6 text-2xl"></i>
            </div>
            <div className="lt-card__label dark:text-gray-200">Tugatilgan</div>
            <div className="lt-card__value dark:text-gray-300">0</div>
          </div>
          <div className="lt-card lt-card bg-gradient-to-r from-cyan-600/10 to-bg-white border border-gray-200 dark:border-neutral-600  bg-white dark:bg-[#2b2c40]">
            <div className="lt-card__dot w-6 h-6" style={{ color: 'var(--accent-teal)' }}>
              <i class="bx bxs-time text-info display-6 text-2xl"></i>
            </div>
            <div className="lt-card__label dark:text-gray-200">Jarayonda</div>
            <div className="lt-card__value dark:text-gray-300">0</div>
          </div>
          <div className="lt-card lt-card bg-gradient-to-r from-cyan-600/10 to-bg-white border border-gray-200 dark:border-neutral-600  bg-white dark:bg-[#2b2c40]">
            <div className="lt-card__dot w-6 h-6" style={{ color: 'var(--accent-red)' }}>
              <i class="bx bxs-time text-danger display-6 text-2xl"></i>
            </div>
            <div className="lt-card__label dark:text-gray-200">Vaqti o'tib ketgan</div>
            <div className="lt-card__value dark:text-gray-300">0</div>
          </div>
          <div className="lt-card lt-card bg-gradient-to-r from-cyan-600/10 to-bg-white border border-gray-200 dark:border-neutral-600  bg-white dark:bg-[#2b2c40]">
            <div className="lt-card__dot w-6 h-6" style={{ color: '#8592a3' }}>
              <i class="bx bxs-time text-secondary display-6 text-2xl"></i>
            </div>
            <div className="lt-card__label dark:text-gray-200">Bajarilmagan</div>
            <div className="lt-card__value dark:text-gray-300">0</div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-white rounded-md shadow-sm pb-20 dark:bg-[#2b2c40] pt-10">
          <div className="mb-6 px-6 pt-3 border-t mt-14">
            <div className="mt-3 flex items-center gap-4">
  
              <div className="ml-auto">
                <div className="relative">
                  <input className="border rounded-md px-3 py-2 text-sm text-slate-500 outline-none bg-transparent" placeholder="Qidirish..." />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                    <iconify-icon icon="mdi:magnify" width="18" height="18"></iconify-icon>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-slate-400 text-xs border-t border-b">
                  <th className="px-4 py-3 text-[14px] font-normal border-r">N</th>
                  <th className="px-4 py-3 text-[14px] font-normal border-r">TOPSHIRIQ NOMI</th>
                  <th className="px-4 py-3 text-[14px] font-normal border-r">NAZORATCHI</th>
                  <th className="px-4 py-3 text-[14px] font-normal border-r">BAJARUVCHI</th>
                  <th className="px-4 py-3 text-[14px] font-normal border-r uppercase">Boshlanish sanasi</th>
                  <th className="px-4 py-3 text-[14px] font-normal border-r uppercase">Yakunlash sanasi</th>
                  <th className="px-4 py-3 text-[14px] font-normal border-r uppercase">Ball</th>
                  <th className="px-4 py-3 text-[14px] font-normal border-r uppercase">Jarayon holati</th>
                  <th className="px-4 py-3 text-[14px] font-normal border-r uppercase">Holat</th>
                </tr>
              </thead>
              <tbody>
                {[].map((r, i) => (
                  <tr key={r.id} className="border-b align-middle py-6 hover:bg-gray-50 dark:hover:bg-[#2b2c40]">
                    <td className="px-4 py-4 align-top text-[15px] text-[#8895a4] border-r">{i + 1}</td>
                    <td className="px-4 py-4 align-top text-[15px] text-[#8895a4] border-r">{r.org}</td>
                    <td className="px-4 py-4 align-top text-[15px] text-[#8895a4] border-r">{r.system}</td>
                    <td className="px-4 py-4 align-top text-[15px] text-[#8895a4] border-r">{r.contract}</td>
                    <td className="px-4 py-4 align-top text-[15px] text-[#8895a4] border-r">{r.nazoratchi}</td>
                    <td className="px-4 py-4 align-top border-r">
                      <span className="inline-block px-2 py-1 text-xs rounded-md bg-red-100 text-red-600 text-[13px] uppercase">{r.hisobot}</span>
                    </td>
                    <td className="px-4 py-4 align-top text-[15px] text-[#8895a4] border-r">{r.ball}</td>
                    <td className="px-4 py-4 align-top border-r"><span className="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-[#8895a4] text-nowrap text-[13px] font-medium">{r.stage}</span></td>
                    <td className="px-4 py-4 align-top">
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-md bg-sky-50 text-sky-400 font-bold">
                          <iconify-icon icon="tabler:edit" width="20" height="20"></iconify-icon>
                        </button>
                        <button className="p-2 rounded-md bg-violet-50 text-violet-600">
                          <iconify-icon icon="mdi:dots-vertical" width="20" height="20"></iconify-icon>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Daily
