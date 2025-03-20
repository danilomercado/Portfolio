import React from "react";
import { useTranslation } from "react-i18next";
import ButtonLanguage from "../buttonLanguage/ButtonLanguage";

function Header() {
  const { t } = useTranslation("header");

  return (
    <header className="fixed top-0 left-0 w-full z-50 neutral-900 backdrop-blur-md border-b border-sky-400 shadow-[0px_0px_10px_2px_rgba(56,189,248,0.5)] transition-shadow duration-500 ease-in-out hover:shadow-[0px_0px_20px_4px_rgba(56,189,248,0.8)]">
      <div className="text-white flex justify-center items-center py-4 w-full xl:w-[1120px] mx-auto">
        <nav className="flex flex-row items-center gap-x-10 text-lg font-medium">
          <a
            href="#proyectos"
            className="hover:text-sky-400 transition duration-300"
          >
            {t("text1")}
          </a>
          <a
            href="#sobre-mi"
            className="hover:text-sky-400 transition duration-300"
          >
            {t("text2")}
          </a>
          <a
            href="#contacto"
            className="hover:text-sky-400 transition duration-300"
          >
            {t("text3")}
          </a>
          <div className="flex  items-center">
            <ButtonLanguage />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
