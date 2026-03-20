import React from "react";
import { useTranslation } from "react-i18next";
import ButtonLanguage from "../buttonLanguage/ButtonLanguage";

function Header() {
  const { t } = useTranslation("header");

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#/"
          className="text-lg font-semibold tracking-tight text-white transition hover:text-sky-300"
        >
          Danilo<span className="text-sky-400">.dev</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#proyectos"
            className="text-sm font-medium text-white/80 transition hover:text-sky-300"
          >
            {t("text1")}
          </a>

          <a
            href="#sobre-mi"
            className="text-sm font-medium text-white/80 transition hover:text-sky-300"
          >
            {t("text2")}
          </a>
        </nav>

        <div className="flex items-center">
          <ButtonLanguage />
        </div>
      </div>
    </header>
  );
}

export default Header;
