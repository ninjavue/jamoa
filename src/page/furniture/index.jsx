import React, { useState } from 'react'
import { Modal } from '../../components'

const Furniture = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const users = [
    {
      id: 1,
      name: 'Ishmuratov A',
      active_visits: 0,
      total_visits: 0,
      events: 0,
      total: 0,
      color: 'bg-blue-100',
      icon: 'bx bxs-circle',
      iconColor: 'text-blue-500'
    },
    {
      id: 2,
      name: 'Ibroximov A',
      active_visits: 2,
      total_visits: 1,
      events: 3,
      total: 0,
      color: 'bg-green-100',
      icon: 'bx bxs-circle-half',
      iconColor: 'text-green-500'
    },
    {
      id: 3,
      name: 'Musayev Sh',
      active_visits: 0,
      total_visits: 0,
      events: 0,
      total: 0,
      color: 'bg-blue-50',
      icon: 'bx bxs-circle-half',
      iconColor: 'text-blue-400'
    }
  ]

  const items = [
    {
      id: 1,
      name: "Персональный компьютер",
      date: "2024-11-12",
      code: "0058/2024",
      quantity: 1,
      price: "36428571.42",
      responsible: "Yoldoshov Umrzoq",
      holder: "Ibroximov A",
      location: "O'zimizda"
    },
    {
      id: 2,
      name: "Карта флеш памяти Engine 1024GB",
      date: "2024-11-12",
      code: "1727",
      quantity: 1,
      price: "1250000",
      responsible: "Yoldoshov Umrzoq",
      holder: "Ibroximov A",
      location: "O'zimizda"
    },
    {
      id: 3,
      name: "Yangi notebook",
      date: "2025-11-21",
      code: "0106/2025",
      quantity: 1,
      price: "50000000",
      responsible: "Yoldoshov Umrzoq",
      holder: "Ibroximov A",
      location: "O'zimizda"
    }
  ]


  const handleData = (id) => {
    const data = items.find(item => item.id === id);
    setSelectedData(data);
    setModalOpen(true);
  }

  const handleModal = (value) => {
    setModalOpen(value);
  };


  return (

    <>
      <Modal isModal={modalOpen} handleModal={handleModal} selectedData={selectedData} />
      <div className="min-h-screen bg-transparent p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white dark:bg-[#2b2c40] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-600 mb-3">
                    {user.name}
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex justify-start gap-4">
                      <span>Umumiy asosiy vositalar:</span>
                      <span className="font-semibold text-gray-600">{user.active_visits}</span>
                    </div>
                    <div className="flex justify-start gap-4">
                      <span>Umumiy vositalar:</span>
                      <span className="font-semibold text-gray-600">{user.total_visits}</span>
                    </div>
                    <div className="flex justify-start gap-4">
                      <span>Jami:</span>
                      <span className="font-semibold text-gray-600">{user.events}</span>
                    </div>
                    <div className="flex justify-start gap-4">
                      <span>Summa:</span>
                      <span className="font-semibold text-gray-600">{user.total}</span>
                    </div>
                  </div>
                </div>
                <div className={`w-20 h-20 ${user.color} ${user.iconColor} rounded-lg flex items-center justify-center`}>
                  <i className={`${user.icon}  text-4xl`} style={{ width: 36, height: 36 }}></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#2b2c40] rounded-lg shadow-md overflow-hidden pt-16">
          <div className="p-6 border-b border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>

            </div>
            <input
              type="text"
              placeholder="Qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 text-sm bg-transparent dark:text-white"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">N</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">MAHSULOT NOMI</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">VAQTI</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">MAXSUS RAQAM</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">SONI</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">NARXI</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">KIMGA BIRIKIRTIRILGAN</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">KIMNI NOMIDA</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">HOLAT</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">IZOH</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-[#2e2f4b] transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{index + 1}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium dark:text-gray-300">{item.name}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.date}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.code}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.quantity}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.price}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.responsible}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.holder}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.location}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-blue-500 hover:text-blue-700 transition-colors bg-[#e7e7ff] rounded-md px-[6px] hover:bg-[#d1d1ff] py-1" onClick={() => handleData(item.id)}>
                        <iconify-icon icon="mdi:dots-vertical" className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Furniture
