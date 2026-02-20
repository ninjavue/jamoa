import React, { useEffect, useState } from "react";

const Footer = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeTashkent = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Tashkent" })
  );
  const timeText = new Intl.DateTimeFormat("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Tashkent",
  }).format(timeTashkent);

  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const day = String(timeTashkent.getDate()).padStart(2, "0");
  const monthText = months[timeTashkent.getMonth()];
  const year = timeTashkent.getFullYear();
  const dateText = `${day} ${monthText}, ${year}`;

  return (
    <footer className="d-footer">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-[#bb9769]">
          <div className="flex items-center gap-2">
            <div className="clock-block">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  data-figma-bg-blur-radius="0.470426"
                  width="40"
                  height="40"
                  rx="5.11692"
                  fill="url(#paint0_linear_5929_45775)"
                  fillOpacity="0.3"
                />
                <circle cx="20" cy="20" r="17.9642" fill="#FBFBFB" />
                <text
                  x="27.5"
                  y="7.00961894323342"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  1
                </text>
                <text
                  x="32.99038105676658"
                  y="12.499999999999998"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  2
                </text>
                <text
                  x="35"
                  y="20"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  3
                </text>
                <text
                  x="32.99038105676658"
                  y="27.499999999999996"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  4
                </text>
                <text
                  x="27.5"
                  y="32.99038105676658"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  5
                </text>
                <text
                  x="20.000000000000004"
                  y="35"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  6
                </text>
                <text
                  x="12.499999999999998"
                  y="32.99038105676658"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  7
                </text>
                <text
                  x="7.0096189432334235"
                  y="27.500000000000007"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  8
                </text>
                <text
                  x="5"
                  y="20.000000000000004"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  9
                </text>
                <text
                  x="7.009618943233422"
                  y="12.499999999999998"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  10
                </text>
                <text
                  x="12.499999999999993"
                  y="7.0096189432334235"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  11
                </text>
                <text
                  x="19.999999999999996"
                  y="5"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial"
                  fontSize="5.5"
                  fill="#57534E"
                  fontWeight="500"
                >
                  12
                </text>
                <path
                  d="M20 12V20"
                  stroke="#57534E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "20px 20px",
                    transform: `rotate(${
                      ((timeTashkent.getHours() % 12) +
                        timeTashkent.getMinutes() / 60 +
                        timeTashkent.getSeconds() / 3600) *
                      30
                    }deg)`,
                  }}
                />
                <path
                  d="M20 8V20"
                  stroke="#57534E"
                  strokeWidth="1"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "20px 20px",
                    transform: `rotate(${
                      (timeTashkent.getMinutes() +
                        timeTashkent.getSeconds() / 60) *
                      6
                    }deg)`,
                  }}
                />
                <path
                  d="M20 6V20"
                  stroke="#D0B28B"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "20px 20px",
                    transform: `rotate(${
                      timeTashkent.getSeconds() * 6
                    }deg)`,
                  }}
                />
                <circle cx="20" cy="20" r="1.5" fill="#57534E" />
                <defs>
                  <linearGradient
                    id="paint0_linear_5929_45775"
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E3E7EF" />
                    <stop offset="1" stopColor="#D6D7D3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{timeText}</div>
              <div className="text-sm">Toshkent</div>
            </div>
          </div>
        </div>


        <div className="text-[#bb9769] font-semibold">{dateText}</div>
      </div>
    </footer>
  );
};

export default Footer;
