import React from "react";
import { useTranslation } from "react-i18next";
import MagneticCopy from "../magnetic/MagneticCopy";

// Cierre: botón con imán que copia el mail, y el nombre gigante que entra con el scroll
const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer id="contacto" className="sheet sheet-ink">
      <div className="wrap foot pause-off">
        <span className="orb orb-mid" aria-hidden="true" />
        <h2 className="display h-lg" data-reveal>
          {t("cta")}
        </h2>

        <div className="foot-mail">
          <MagneticCopy text="danilomercado61@gmail.com" label={t("copy")} doneLabel={t("copied")} />
        </div>

        <div className="foot-row">
          <nav>
            <a href="mailto:danilomercado61@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/danilo-mercado-9316642aa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/danilomercado" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#experiencia">{t("experience")}</a>
            <a href="#proyectos">{t("projects")}</a>
          </nav>
          <span>© 2026 Danilo Mercado{t("text")}</span>
        </div>

        <div className="foot-name display" data-scrub="pass" aria-hidden="true">
          Danilo Mercado
        </div>
      </div>
    </footer>
  );
};

export default Footer;
