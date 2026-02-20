import React from 'react'

const Modal = ({ isModal, handleModal, selectedData }) => {
    if (!isModal) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" >
            <div className="modal fade show flex justify-center items-center w-full h-screen" id="exLargeModal" tabIndex="-1" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-lg bg-white rounded-lg w-[1200px] p-10 relative" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-[#566a7f] font-bold mb-10" id="modalCenterTitle">Batafsil</h5>
                            <button onClick={() => handleModal(false)} type="button" className="absolute top-[-10px] right-[-10px] bg-white shadow-md rounded-md hover:right-[-8px] hover:top-[-8px] transition-all px-[6px] py-1">
                                <iconify-icon icon="mdi:close" className="text-2xl text-[#566a7f]"></iconify-icon>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <table className="table table-bordered rounded-[4px]">
                                    <tbody>
                                        <tr>
                                            <td className="text-[#566a7f]" data-label="Tashkilot">Maxsulot nomi</td>
                                            <td className="text-[#566a7f] border-l flex justify-start" data-label="Tashkilot nomi" style={{ fontWeight: "bold" }}>{selectedData?.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#566a7f]" data-label="Axborot tizimining nomi">Vaqti</td>
                                            <td className="text-[#566a7f] border-l flex justify-start" data-label="Tizim nomi" style={{ fontWeight: "bold" }}>{selectedData?.date}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#566a7f]" data-label="Hodim nomi">Maxsus raqam</td>
                                            <td className="text-[#566a7f] border-l flex justify-start" data-label="Hodim nomi" style={{ fontWeight: "bold" }}>{selectedData?.code}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#566a7f]" data-label="Hodim nomi">Soni</td>
                                            <td className="text-[#566a7f] border-l flex justify-start" data-label="Hodim nomi" style={{ fontWeight: "bold" }}>{selectedData?.quantity}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#566a7f]" data-label="Hodim nomi">Narxi</td>
                                            <td className="text-[#566a7f] border-l flex justify-start" data-label="Hodim nomi" style={{ fontWeight: "bold" }}>{selectedData?.price}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#566a7f]" data-label="Ajratilgan mutaxasislar soni">Kimga biriktirilgan</td>
                                            <td className="text-[#566a7f] border-l flex justify-start" data-label="Ajratilgan mutaxasislar soni" style={{ fontWeight: "bold" }}>
                                                {selectedData?.responsible}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#566a7f]" data-label="Ajratilgan mutaxasislar soni">Kimni nomida</td>
                                            <td className="text-[#566a7f] border-l flex justify-start" data-label="Ajratilgan mutaxasislar soni" style={{ fontWeight: "bold" }}>
                                                {selectedData?.holder}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-[#566a7f]" data-label="Ajratilgan mutaxasislar soni">Vosita turi</td>
                                            <td className="text-[#566a7f] border-l flex justify-start" data-label="Ajratilgan mutaxasislar soni" style={{ fontWeight: "bold" }}>
                                                Asosiy
                                            </td>
                                        </tr>
                                         <tr>
                                            <td className="text-[#566a7f]" data-label="Ajratilgan mutaxasislar soni">Jihoz hujjati</td>
                                            <td className="text-[#566a7f] flex justify-start border-l" data-label="Ajratilgan mutaxasislar soni" style={{ fontWeight: "bold" }}>
                                                -
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </div>
    )
}

export default Modal
