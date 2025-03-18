import { IconArrowNarrowUp } from "@tabler/icons-react";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="w-full xl:w-[1120px] mx-auto text-white py-5 flex flex-col items-center gap-4 opacity-80">
      <div className="flex justify-between w-full px-4 md:px-8">
        <span className="text-sm text-gray-300">
          © 2025{" "}
          <a href="#" className="hover:underline text-white">
            Danilo Mercado
          </a>
          {t("text")}
        </span>
        <nav className="flex gap-6">
          <a href="#sobre-mi" className="hover:underline">
            {t("about-me")}
          </a>
          <a href="#contacto" className="hover:underline">
            {t("contact")}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
