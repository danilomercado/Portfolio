import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { CVIcon } from "../../icons/Icons";

// Modal con el PDF del currículum. Mientras está abierto la página queda bloqueada:
// no hace scroll, no se puede tocar ni tabular lo de atrás (inert) y el foco queda adentro.
// Se cierra con Escape, con el botón o tocando afuera, y el foco vuelve al botón que lo abrió.
const ViewCV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("view-cv");
  const trigger = useRef(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    if (!isModalOpen) return;
    const html = document.documentElement;
    const app = document.getElementById("root");
    const scrollbar = window.innerWidth - html.clientWidth;
    const prev = { overflow: html.style.overflow, padding: html.style.paddingRight };

    html.style.overflow = "hidden";
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    if (app) app.inert = true;
    closeBtn.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "Tab") {
        // el foco da vueltas entre el botón de cerrar y el PDF, sin salir del modal
        const frame = document.querySelector(".modal iframe");
        const next = document.activeElement === closeBtn.current ? frame : closeBtn.current;
        if (e.shiftKey || document.activeElement === closeBtn.current || document.activeElement === frame) {
          e.preventDefault();
          next?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      html.style.overflow = prev.overflow;
      html.style.paddingRight = prev.padding;
      if (app) app.inert = false;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [isModalOpen]);

  return (
    <>
      <button ref={trigger} className="btn" type="button" onClick={() => setIsModalOpen(true)}>
        <CVIcon />
        <span>{t("view-cv")}</span>
      </button>

      {isModalOpen &&
        createPortal(
          <div className="modal" role="dialog" aria-modal="true" aria-label="Curriculum Vitae" onClick={() => setIsModalOpen(false)}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
              <div className="modal-bar">
                <div>
                  <h2 className="display">Curriculum Vitae</h2>
                  <p>Danilo Mercado · Software Developer</p>
                </div>
                <button ref={closeBtn} className="modal-close" onClick={() => setIsModalOpen(false)}>
                  {t("cerrar")}
                </button>
              </div>
              <iframe src="/CVO - Danilo.pdf" title="CV Danilo Mercado" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ViewCV;
