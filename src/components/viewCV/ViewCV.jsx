import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RpgCorner, WaxSeal } from "../rpg/RpgOrnaments";
import { rpgAudio } from "../rpg/SoundManager";
import { FileText, X } from "lucide-react";

// Modal de visualización de currículum con estética medieval y contenido formal
const ViewCV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("view-cv");

  const openModal = () => {
    rpgAudio.playScrollOpen();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    rpgAudio.playItemClick();
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="rpg-btn group text-xs sm:text-sm"
        type="button"
        onClick={openModal}
      >
        <FileText className="size-4 text-[#facc15] transition-transform duration-300 group-hover:scale-110" />
        <span className="font-['Cinzel'] tracking-wider">{t("view-cv")}</span>
      </button>

      {/* Modal con estética de pergamino medieval */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md">
          <div className="rpg-card rpg-corner-brackets relative w-full max-w-5xl overflow-hidden rounded-sm border-2 border-[#d4a737] shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
            <RpgCorner position="top-left" />
            <RpgCorner position="top-right" />
            <RpgCorner position="bottom-left" />
            <RpgCorner position="bottom-right" />

            {/* Barra superior */}
            <div className="flex items-center justify-between border-b border-[#d4a737]/40 bg-[#161024] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <WaxSeal text="CV" className="size-8 text-[9px]" />
                <div>
                  <h5 className="font-['Cinzel'] text-base font-bold text-[#fef08a] sm:text-lg">
                    Curriculum Vitae
                  </h5>
                  <p className="font-['Cinzel'] text-xs text-[#38bdf8]">
                    Danilo Mercado · Software Developer
                  </p>
                </div>
              </div>

              <button
                className="flex size-9 items-center justify-center rounded-sm border border-red-500/50 bg-red-950/40 text-red-200 transition-all hover:border-red-400 hover:bg-red-800 hover:text-white"
                onClick={closeModal}
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Contenedor del documento PDF */}
            <div className="h-[70vh] bg-[#0c0914] p-3 sm:p-5">
              <iframe
                src="/CV - Danilo.pdf"
                className="h-full w-full rounded-sm border border-[#d4a737]/30 bg-white shadow-inner"
                title="CV Danilo Mercado"
              />
            </div>

            {/* Barra inferior */}
            <div className="flex items-center justify-between border-t border-[#d4a737]/40 bg-[#161024] px-5 py-3.5 sm:px-6">
              <span className="font-['Cinzel'] text-xs text-[#d4a737]">
                Rosario, Santa Fe, Argentina
              </span>

              <button
                className="rpg-btn text-xs py-1.5 px-4"
                onClick={closeModal}
              >
                {t("cerrar")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewCV;
