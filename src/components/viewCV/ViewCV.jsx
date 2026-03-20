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
      <section className="mx-auto -mt-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          <button
            className="inline-flex items-center gap-3 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-medium text-sky-200 transition hover:bg-sky-400/20"
            type="button"
            onClick={openModal}
          >
            <CVIcon className="size-5" />
            <span>{t("view-cv")}</span>
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <h5 className="text-lg font-semibold text-white">CV</h5>

              <button
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70 transition hover:bg-red-500/10 hover:text-red-300"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            <div className="h-[75vh] p-4 sm:p-6">
              <iframe
                src="/CV - Danilo Mercado.pdf"
                className="h-full w-full rounded-2xl bg-white"
                title="CV Danilo Mercado"
              />
            </div>

            <div className="flex justify-end border-t border-white/10 px-5 py-4 sm:px-6">
              <button
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
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
