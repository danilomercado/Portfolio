import React from "react";
import { useTranslation } from "react-i18next";
import { rpgAudio } from "../rpg/SoundManager";
import { Swords, Shield, ScrollText } from "lucide-react";

// Pie de página con estética medieval sobria y enlaces de navegación
const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="relative mt-24 border-t border-[#d4a737]/40 bg-[#0a0712]/95">
      {/* Insignia central decorativa */}
      <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-sm border border-[#d4a737] bg-[#1a1428] px-4 py-0.5 shadow-[0_0_12px_rgba(212,167,55,0.4)]">
        <Swords size={12} className="text-[#facc15]" />
        <span className="font-['Cinzel'] text-[10px] font-bold tracking-widest text-[#fef08a] uppercase">
          Danilo Mercado
        </span>
        <Swords size={12} className="text-[#facc15]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-xs sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        {/* Derechos y nombre */}
        <div className="flex items-center gap-3">
          <Shield size={16} className="text-[#d4a737]" />
          <span className="font-['Cinzel'] tracking-wide text-[#c7beaf]">
            © 2025{" "}
            <a
              href="#/"
              onClick={() => rpgAudio.playItemClick()}
              className="font-bold text-[#fef08a] transition-colors hover:text-[#38bdf8] hover:underline"
            >
              Danilo Mercado
            </a>{" "}
            {t("text")}
          </span>
        </div>

        {/* Enlaces de navegación */}
        <nav className="flex items-center gap-6">
          <a
            href="#proyectos"
            onClick={() => rpgAudio.playItemClick()}
            className="flex items-center gap-1.5 font-['Cinzel'] font-bold text-[#c7beaf] transition-all hover:text-[#fef08a] hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
          >
            <Swords size={14} className="text-[#38bdf8]" />
            <span>{t("about-me")}</span>
          </a>

          <a
            href="#sobre-mi"
            onClick={() => rpgAudio.playItemClick()}
            className="flex items-center gap-1.5 font-['Cinzel'] font-bold text-[#c7beaf] transition-all hover:text-[#fef08a] hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
          >
            <ScrollText size={14} className="text-[#facc15]" />
            <span>{t("contact")}</span>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
