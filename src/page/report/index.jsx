import React, { useState } from 'react'
import { Modal } from '../../components'

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";


const Report = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [value, setValue] = useState(dayjs(new Date()));

  const items = [
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
        <div className="bg-white dark:bg-[#2b2c40] rounded-lg shadow-md overflow-hidden pt-16">
          <div className="p-6 border-b border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <TextField id="outlined-basic" label="Qidiruv" variant="outlined" />
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Sana tanlang"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Sana tanlang"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div>
              <button className="bg-[#696cff] text-white font-bold py-2 px-4 rounded-md ml-4 hover:bg-[#565edc] transition-colors">
                Qidiruv
              </button>
              <button className="bg-[#696cff] text-white font-bold py-2 px-4 rounded-md ml-4 hover:bg-[#565edc] transition-colors">
                <iconify-icon icon="material-symbols:cloud-download text-xl"></iconify-icon>
                Yuklab olish
              </button>
            </div>
          </div>

          <div className="overflow-x-scroll report-table w-[83vw]">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">N</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">TASHKILOT NOMI</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Axborot  tizimining nomi</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Kelib tushgan xat raqami</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Markaz tomonidan yuborilgan xat (shartnoma)</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Shartnoma imzolangan sanasi</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Kelib tushgan mablag' sanasi</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Hodim nomi</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Ajratilgan mutaxasislar soni</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Ekspertizaning boshlanish sanasi</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Ekspertizaning yakunlanish sanasi</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Hisobot yuborilgan sana</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Qayta ekspertizaga yuborilgan sana</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Qayta ekspertiza natijalari</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Hisobotga chiqarilgan sana</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Qayta ekspertiza sana</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Vaqtincha to'xtatilgan sana</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Qisman yakunlangan sana</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Qaysi bosqichda</th>
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

export default Report
