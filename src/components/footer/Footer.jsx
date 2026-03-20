import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-white/60 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <span>
          © 2025{" "}
          <a
            href="#/"
            className="font-medium text-white transition hover:text-sky-300"
          >
            Danilo Mercado
          </a>{" "}
          {t("text")}
        </span>

        <nav className="flex items-center gap-6">
          <a href="#proyectos" className="transition hover:text-sky-300">
            {t("about-me")}
          </a>

          <a href="#sobre-mi" className="transition hover:text-sky-300">
            {t("contact")}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
