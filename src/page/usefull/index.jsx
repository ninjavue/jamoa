import React, { useState } from 'react'

const Usefull = () => {
  const [isBtn, setIsBtn] = useState(false);
  

  const cards = [
    {
      id: 1,
      title: 'http://10.10.115.60/',
      subtitle: 'http://10.10.115.60/',
      icon: 'mdi:globe',
      color: 'from-blue-100 to-blue-50'
    },
    {
      id: 2,
      title: 'MAXSUS HUJJAT TIZIMI',
      subtitle: 'Document Management System',
      icon: 'mdi:file-document',
      color: 'from-purple-100 to-purple-50'
    },
    {
      id: 3,
      title: 'CVE',
      subtitle: 'CVE Database',
      icon: 'mdi:shield-alert',
      color: 'from-orange-100 to-orange-50'
    },
    {
      id: 4,
      title: 'FOFA',
      subtitle: 'Login: bharitb932@gmail.com',
      icon: 'mdi:magnify',
      color: 'from-red-100 to-red-50'
    },
    {
      id: 5,
      title: 'https://www.hackthebox.com/',
      subtitle: 'kkavalno@gmail.com:Sam.091122',
      icon: 'mdi:cube',
      color: 'from-green-100 to-green-50'
    },
    {
      id: 6,
      title: 'Shodan',
      subtitle: 'BlackSnowman@SpyAgent0%ll',
      icon: 'mdi:bug',
      color: 'from-red-100 to-red-50'
    },
    {
      id: 7,
      title: 'Yangi cve lar',
      subtitle: 'New CVE Vulnerabilities',
      icon: 'mdi:alert-circle',
      color: 'from-yellow-100 to-yellow-50'
    },
    {
      id: 8,
      title: 'Pochata Umumiy',
      subtitle: 'cyberwolf0f0191991@gmail.com',
      icon: 'mdi:email',
      color: 'from-cyan-100 to-cyan-50'
    }
  ]

  return (
    <div className="min-h-screen bg-transparent p-4 md:p-8">
      <div className="development-btns mb-10">
        <button className={` py-2 px-4 rounded ${isBtn ? 'bg-transparent text-gray-500 ' : 'bg-[#696cff] text-white'}`} onClick={() => setIsBtn(false)}>
          Foydali manbalar
        </button>
        <button className={` py-2 px-4 rounded ml-4 ${isBtn ? 'bg-[#696cff] text-white' : 'bg-transparent text-gray-500 '}`} onClick={() => setIsBtn(true)}>
          Fayl va nisbot shablonlari
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:dark:bg-[#2b2c40] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            <div className={`bg-gradient-to-r ${card.color} h-[200px] flex items-center justify-center p-4`}>

            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {card.subtitle}
              </p>

              <div>
                <button className=" px-4 py-2 border-2 border-purple-500 text-purple-500 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200">
                  Ko'proq ...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Usefull
