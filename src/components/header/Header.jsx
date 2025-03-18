import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation("header");
  const [isEnglish, setIsEnglish] = useState(true);

  const changeLanguaje = () => {
    let languaje = isEnglish ? "es" : "en";
    i18n.changeLanguage(languaje);
  };

  const clickHandler = () => {
    changeLanguaje();
    setIsEnglish(!isEnglish);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 neutral-900 backdrop-blur-md border-b border-white-700">
      <div className="text-white flex justify-center items-center py-4 w-full xl:w-[1120px] mx-auto">
        <nav className="flex flex-row gap-x-10 text-lg font-medium">
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
          <div
            // className="border-gray-300 flex gap-2 border w-[85.4px] rounded-md py-2 px-4 cursor-pointer hover:bg-gray-500 active:bg-gray-600 active:bg-opacity-10  hover:bg-opacity-10 mr-10 md:mr-0 my-2 header:my-0"
            onClick={clickHandler}
          >
            Cambiar Lenguaje
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
