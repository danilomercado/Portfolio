import React, { useState } from "react";
import { CVIcon } from "../../icons/Icons";
import { useTranslation } from "react-i18next";

const ViewCV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("view-cv");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex justify-center items-center ">
        {/* Botón para abrir el modal */}
        <div className="flex items-center">
          <button
            className="relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gray-900 text-white font-medium border border-transparent transition-all duration-300
      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-500  before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100 hover:text-white hover:shadow-lg focus:ring-2 focus:ring-blue-500"
            type="button"
            onClick={openModal}
          >
            <CVIcon className="size-5 text-white opacity-90" />
            <span className="relative z-10 text-base">{t("view-cv")}</span>
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-[#1f2020] rounded-lg shadow-lg w-full max-w-4xl">
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
                  src="/CV - Danilo Mercado.pdf"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Footer */}
              <div className="flex justify-end border-t p-4">
                <button
                  className="text-white bg-gray-800 border border-gray-300 focus:outline-none hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  onClick={closeModal}
                >
                  {t("cerrar")}
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
