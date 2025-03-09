import React, { useState } from "react";
import { CVIcon } from "../../icons/Icons";

const ViewCV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex justify-center items-center ">
        {/* Botón para abrir el modal */}
        <div className="flex items-center ">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            type="button"
            onClick={openModal}
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              <CVIcon />
            </span>
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-[#1f2020] rounded-lg shadow-lg w-full max-w-4xl opacity-80">
              {/* Header */}
              <div className="flex justify-between items-center border-b p-4">
                <h5 className="text-lg font-semibold text-white">CV</h5>
                <button
                  className="text-gray-500 hover:text-red-800"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>

              {/* Contenido del PDF */}
              <div className="p-4 h-[500px]">
                <iframe
                  src="public/CV-DANILO-MERCADO.pdf"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Footer */}
              <div className="flex justify-end border-t p-4">
                <button
                  className="text-white bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#5c5f5f] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewCV;
