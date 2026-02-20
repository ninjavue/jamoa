import React, { useEffect, useState } from 'react'
import { Modal } from '../../components'
import { useZirhStref } from '../../context/ZirhContext';
import { useZirhEvent } from '../../api/useZirh';
import { sendRpcRequest } from '../../api/webClient';
import { METHOD } from '../../api/zirhrpc';
import WordMobile from '../../components/word/WordMobile';



// WordMobile (Ruxsat xat) uchun data — tartib va maydonlar:
// orgName: tashkilot nomi
// orgType: tashkilot turi (masalan: "DAK", "MCHJ")
// ordName: mobil ilova nomi (ekspertiza qilinayotgan ilova)
// contractDate: shartnoma sanasi — "YYYY-MM-DD" formatida
// contractNumber: shartnoma raqami
const data = {
  orgName: "Tashkilot nomi",
  orgType: "MCHJ",
  ordName: "Mobil ilova nomi",
  contractDate: "2024-12-15",
  contractNumber: "07-12/456"
}

const Development = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isBtn, setIsBtn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { stRef } = useZirhStref();


  const [items, setItems] = useState([
    {
      id: 1,
      name: "Test Reja 1",
      date: "2024-11-12",
      status: "Yangi",
    },
  ]);


  const handleData = (id) => {
    const data = items.find(item => item.id === id);
    setSelectedData(data);
    setModalOpen(true);
  }

  const handleModal = (value) => {
    setModalOpen(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    status: "",
  });




  // useZirhEvent(null, (data) => {
  //   console.log("data:", data);
  // });


  const fetchProfile = async () => {
    const profile = await sendRpcRequest(
      stRef,
      METHOD.CAPTCHA_GET,
      { }
    );
    if(profile.status == METHOD.OK)
      console.log(profile[1]);
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleCreate = () => {
    if (!formData.name || !formData.date || !formData.status) return;

    setItems([
      ...items,
      {
        id: Date.now(),
        ...formData,
      },
    ]);

    setFormData({ name: "", date: "", status: "" });
    closeDrawer();
  };


  useEffect(() => {
    const fetchData = async () => {
      await fetchProfile();
    };

    fetchData();
  }, []);


  return (

    <>
      {drawerOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white dark:bg-[#2b2c40] z-50 transform transition-transform duration-300
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-500">Yangi reja qo'shish</h2>
          <button onClick={closeDrawer} className="text-xl">✕</button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-sm text-gray-500 uppercase">Reja haqida</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
              placeholder="..."
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 uppercase">Yakunlanish sanasi</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 uppercase">Holati</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
            >
              <option value="">Tanlang</option>
              <option value="Yangi">Yangi</option>
              <option value="Jarayonda">Jarayonda</option>
              <option value="Yakunlandi">Yakunlandi</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleCreate}
              className="bg-[#696cff] text-white px-4 py-2 rounded-md"
            >
              Yaratish
            </button>
            <button
              onClick={closeDrawer}
              className="bg-gray-200 px-4 py-2 rounded-md"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-transparent p-4 md:p-8">
        <div className="development-btns mb-10">
          <button className={`font-bold py-2 px-4 rounded ${isBtn ? 'bg-transparent text-gray-500 ' : 'bg-[#696cff] text-white'}`} onClick={() => setIsBtn(false)}>
            Rejalar
          </button>
          <button className={`font-bold py-2 px-4 rounded ml-4 ${isBtn ? 'bg-[#696cff] text-white' : 'bg-transparent text-gray-500 '}`} onClick={() => setIsBtn(true)}>
            Fayllar
          </button>
          <WordMobile data={data} />
        </div>
        <div className="bg-white dark:bg-[#2b2c40] rounded-lg shadow-md overflow-hidden pt-2">
          <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>

            </div>
            <div className="flex">

              <input
                type="text"
                placeholder="Qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 text-sm bg-transparent dark:text-white"
              />

              <button className="bg-[#696cff] text-white font-bold py-2 px-4 rounded-md ml-4 hover:bg-[#565edc] transition-colors" onClick={openDrawer}>
                + Yangi reja qo'shish
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">N</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">REJA NOMI</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">Topshirish muddati</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">HOLAT</th>
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
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.status}</td>
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

export default Development
