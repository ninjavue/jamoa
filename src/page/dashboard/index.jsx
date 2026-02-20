import { useEffect, useState } from "react";
// import { sendRpcRequest } from "../../api/webClient";
import { METHOD } from "../../api/zirhrpc";
import "./dashboard.css";
import { useZirhStref } from "../../context/ZirhContext";
import { useNavigate } from "react-router-dom";
import { sendRpcRequest } from "../../rpc/rpcClient";

const Card = ({ label, value, icon, accent = "teal" }) => {
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return (
    <div
      className="stat-card group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 bg-gradient-to-br from-white via-white to-slate-50 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2b2c40]/80 dark:from-[#2b2c40] dark:via-[#2b2c40] dark:to-[#222433]"
      data-accent={accent}
    >
      <div className="stat-card__top">
        <div className="stat-card__label text-sm font-medium tracking-wide text-[#718193] dark:text-gray-200">
          {label}
        </div>
        <div
          className="stat-card__icon rounded-xl p-3 shadow-inner"
          style={{
            color: accent == "muted" ? "#8592a3" : accent,
            background: hexToRgba(accent, 0.1),
          }}
          aria-hidden
        >
          <i
            className={`${icon} text-3xl`}
            style={{ width: 36, height: 36 }}
          ></i>
          {/* <iconify-icon icon={icon} width="36" height="36" /> */}
        </div>
      </div>
      <div className="stat-card__value text-3xl font-semibold text-[#566a7f] dark:text-gray-300">
        {value}
      </div>
    </div>
  );
};

const Section = ({ title, items }) => (
  <section className="stats-section">
    <h3 className="stats-section__title">{title}</h3>
    <div className="stats-grid">
      {items.map((it, i) => (
        <Card
          key={i}
          label={it.label}
          value={it.value}
          icon={it.icon}
          accent={it.accent}
        />
      ))}
    </div>
  </section>
);

const DashboardPage = () => {

    const [countS, setCountS] = useState(0);
  const [statusCountS, setStatusCountS] = useState([]);
  
  const [count, setCount] = useState(0);
  const [statusCount, setStatusCount] = useState([]);

 const system = [
    {
      id: 0,
      label: "Jami:",
      value: countS,
      accent: "blue",
      icon: "bx bxs-circle",
    },
    {
      id: 1,
      label: "Shartnoma kelgan:",
      value:  statusCountS.find((item) => item.id === 1)?.count || 0,
      accent: "green",
      icon: "bx bxs-circle-half",
    },
    {
      id: 9,
      label: "To'liq yakunlangan:",
      value: statusCountS.find((item) => item.id === 9)?.count || 0,
      accent: "green",
      icon: "bx bxs-circle-half",
    },
    {
      id: 7,
      label: "Qisman yakunlangan:",
      value: statusCountS.find((item) => item.id === 7)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 3,
      label: "Xat chiqarilgan:",
      value: statusCountS.find((item) => item.id === 3)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 4,
      label: "Xat kelgan:",
      value: statusCountS.find((item) => item.id === 4)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 5,
      label: "Jarayonda:",
      value: statusCountS.find((item) => item.id === 5)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-half",
    },
    {
      id: 67,
      label: "O'tib ketgan:",
      value: 0,
      accent: "red",
      icon: "bx bxs-circle-half",
    },
    {
      id: 6,
      label: "Hisobotga chiqarilgan:",
      value: statusCountS.find((item) => item.id === 6)?.count || 0,
      accent: "blue",
      icon: "bx bxs-circle-three-quarter",
    },
    {
      id: 8,
      label: "Qayta ekspertizada:",
      value: statusCountS.find((item) => item.id === 8)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 10,
      label: "Vaqtincha to'xtatilgan:",
      value: statusCountS.find((item) => item.id === 10)?.count || 0,
      accent: "red",
      icon: "bx bxs-circle-three-quarter",
    },
    {
      id: 2,
      label: "Tizimga qo'shilgan:",
      value: statusCountS.find((item) => item.id === 2)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
  ];

   const mobile = [
    {
      id: 0,
      label: "Jami:",
      value: count,
      accent: "blue",
      icon: "bx bxs-circle",
    },
    {
      id: 1,
      label: "Shartnoma kelgan:",
      value: statusCount.find((item) => item.id === 1)?.count || 0,
      accent: "green",
      icon: "bx bxs-circle-half",
    },
    {
      id: 9,
      label: "To'liq yakunlangan:",
      value: statusCount.find((item) => item.id === 9)?.count || 0,
      accent: "green",
      icon: "bx bxs-circle-half",
    },
    {
      id: 7,
      label: "Qisman yakunlangan:",
      value: statusCount.find((item) => item.id === 7)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 3,
      label: "Xat chiqarilgan:",
      value: statusCount.find((item) => item.id === 3)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 4,
      label: "Xat kelgan:",
      value: statusCount.find((item) => item.id === 4)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 5,
      label: "Jarayonda:",
      value: statusCount.find((item) => item.id === 5)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-half",
    },
    {
      id: 67,
      label: "O'tib ketgan:",
      value: 0,
      accent: "red",
      icon: "bx bxs-circle-half",
    },
    {
      id: 6,
      label: "Hisobotga chiqarilgan:",
      value: statusCount.find((item) => item.id === 6)?.count || 0,
      accent: "blue",
      icon: "bx bxs-circle-three-quarter",
    },
    {
      id: 8,
      label: "Qayta ekspertizada:",
      value: statusCount.find((item) => item.id === 8)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 10,
      label: "Vaqtincha to'xtatilgan:",
      value: statusCount.find((item) => item.id === 10)?.count || 0,
      accent: "red",
      icon: "bx bxs-circle-three-quarter",
    },
    {
      id: 2,
      label: "Tizimga qo'shilgan:",
      value: statusCount.find((item) => item.id === 2)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
  ];

  const { stRef } = useZirhStref();
  const navigate = useNavigate();
  

  useEffect(() => {
    const getUser = async () => {
      const resU = await sendRpcRequest(stRef, METHOD.USER_GET, {});
      if(resU.status === METHOD.OK){
      }else if(resU.status === METHOD.Not_Found){
        localStorage.removeItem("checkUser")
        navigate("/login");
      }
    };

    getUser();
    getExpertizeCount();
    getExpertizeCount1();
  }, []);


    const getExpertizeCount = async () => {
      try {
        const res = await sendRpcRequest(stRef, METHOD.ORDER_GET_COUNT, { 3: 2 });
        if (res.status === METHOD.OK) {
          const totalCount = res[1]?.reduce(
            (sum, item) => sum + (item.count || 0),
            0,
          );
  
          const allCount = res[1]?.map((item) => {
            return { id: item._id, count: item.count || 0 };
          });
          setCount(totalCount);
          setStatusCount(allCount);
        }
      } catch (error) {
        console.log(error);
      }
    };

       const getExpertizeCount1 = async () => {
      try {
        const res = await sendRpcRequest(stRef, METHOD.ORDER_GET_COUNT, { 3: 1 });
        if (res.status === METHOD.OK) {
          const totalCount = res[1]?.reduce(
            (sum, item) => sum + (item.count || 0),
            0,
          );
  
          const allCount = res[1]?.map((item) => {
            return { id: item._id, count: item.count || 0 };
          });
          setCountS(totalCount);
          setStatusCountS(allCount);
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div
      className="dashboard-page "
      style={{ margin: "-20px", maxHeight: "105vh" }}
    >
      <div className="mt-4 text-xl text-gray-400 font-medium mb-4 ">
        {" "}
        Bosh sahifa / <span className="text-gray-600">Tizim ekspertizalar</span>
      </div>

      <Section title="Tizim ekspertizalar" items={system} />

      <div className="mt-8 text-xl text-gray-400 font-medium mb-4 ">
        {" "}
        Bosh sahifa / <span className="text-gray-600">Mobil ekspertizalar</span>
      </div>

      <Section title="Mobil ekspertizalar" items={mobile} />

      <div className="mt-10 text-xl text-gray-400 font-medium mb-2 ">
        {" "}
        Bosh sahifa / <span className="text-gray-600">Kunlik topshiriqlar</span>
      </div>

      <div className="mt-4">
        <div className="lt-row">
          <div className="lt-card group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 bg-gradient-to-br from-white via-white to-slate-50 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2b2c40]/80 dark:from-[#2b2c40] dark:via-[#2b2c40] dark:to-[#222433]">
            <div
              className="lt-card__dot w-8 h-8 rounded-xl shadow-inner"
              style={{ background: "var(--accent-purple)" }}
            ></div>
            <div className="lt-card__label text-sm font-medium tracking-wide text-[#718193] dark:text-gray-200">
              Jami
            </div>
            <div className="lt-card__value text-2xl font-semibold text-[#566a7f] dark:text-gray-300">
              0
            </div>
          </div>
          <div className="lt-card group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 bg-gradient-to-br from-white via-white to-slate-50 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2b2c40]/80 dark:from-[#2b2c40] dark:via-[#2b2c40] dark:to-[#222433]">
            <div
              className="lt-card__dot w-8 h-8 rounded-xl shadow-inner"
              style={{ color: "var(--accent-green)" }}
            >
              <i class="bx bxs-time-five text-success display-6 text-2xl"></i>
            </div>
            <div className="lt-card__label text-sm font-medium tracking-wide text-[#718193] dark:text-gray-200">
              Tugatilgan
            </div>
            <div className="lt-card__value text-2xl font-semibold text-[#566a7f] dark:text-gray-300">
              0
            </div>
          </div>
          <div className="lt-card group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 bg-gradient-to-br from-white via-white to-slate-50 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2b2c40]/80 dark:from-[#2b2c40] dark:via-[#2b2c40] dark:to-[#222433]">
            <div
              className="lt-card__dot w-8 h-8 rounded-xl shadow-inner"
              style={{ color: "var(--accent-teal)" }}
            >
              <i class="bx bxs-time text-info display-6 text-2xl"></i>
            </div>
            <div className="lt-card__label text-sm font-medium tracking-wide text-[#718193] dark:text-gray-200">
              Jarayonda
            </div>
            <div className="lt-card__value text-2xl font-semibold text-[#566a7f] dark:text-gray-300">
              0
            </div>
          </div>
          <div className="lt-card group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 bg-gradient-to-br from-white via-white to-slate-50 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2b2c40]/80 dark:from-[#2b2c40] dark:via-[#2b2c40] dark:to-[#222433]">
            <div
              className="lt-card__dot w-8 h-8 rounded-xl shadow-inner"
              style={{ color: "var(--accent-red)" }}
            >
              <i class="bx bxs-time text-danger display-6 text-2xl"></i>
            </div>
            <div className="lt-card__label text-sm font-medium tracking-wide text-[#718193] dark:text-gray-200">
              Vaqti o'tib ketgan
            </div>
            <div className="lt-card__value text-2xl font-semibold text-[#566a7f] dark:text-gray-300">
              0
            </div>
          </div>
          <div className="lt-card group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 bg-gradient-to-br from-white via-white to-slate-50 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2b2c40]/80 dark:from-[#2b2c40] dark:via-[#2b2c40] dark:to-[#222433]">
            <div
              className="lt-card__dot w-8 h-8 rounded-xl shadow-inner"
              style={{ color: "#8592a3" }}
            >
              <i class="bx bxs-time text-secondary display-6 text-2xl"></i>
            </div>
            <div className="lt-card__label text-sm font-medium tracking-wide text-[#718193] dark:text-gray-200">
              Bajarilmagan
            </div>
            <div className="lt-card__value text-2xl font-semibold text-[#566a7f] dark:text-gray-300">
              0
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-xl text-gray-400 font-medium mb-2 ">
        {" "}
        Bosh sahifa / <span className="text-gray-600">Summa</span>
      </div>

      <div className="mt-4">
        <div className="lt-sum group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 bg-gradient-to-br from-white via-white to-slate-50 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2b2c40]/80 dark:from-[#2b2c40] dark:via-[#2b2c40] dark:to-[#222433]">
          <div
            className="lt-sum__dot w-8 h-8 rounded-xl shadow-inner"
            style={{ background: "var(--accent-purple)" }}
          ></div>
          <div className="lt-sum__label text-sm font-medium tracking-wide text-[#718193] dark:text-gray-200">
            Jami summa
          </div>
          <div className="lt-sum__value text-2xl font-semibold text-[#566a7f] dark:text-gray-300">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
