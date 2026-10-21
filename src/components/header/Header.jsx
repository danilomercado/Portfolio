import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Shield, Swords, ScrollText } from "lucide-react";
import ButtonLanguage from "../buttonLanguage/ButtonLanguage";
import SoundToggle from "../rpg/SoundToggle";
import { rpgAudio } from "../rpg/SoundManager";

function Header() {
  const { t } = useTranslation("header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    rpgAudio.playScrollOpen();
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    rpgAudio.playItemClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#d4a737]/40 bg-[#0c0914]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
      {/* Detalle decorativo dorado superior */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#facc15] to-transparent" />

      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Emblema y nombre de personaje */}
        <a
          href="#/"
          onClick={() => rpgAudio.playItemClick()}
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
        >
          <div className="relative flex size-10 items-center justify-center rounded-sm border border-[#d4a737] bg-[#1c152b] shadow-[0_0_12px_rgba(212,167,55,0.4)]">
            <Shield className="size-5 text-[#facc15] transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute -top-1 -right-1 size-2 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
          </div>

          <div className="flex flex-col">
            <span className="font-['Cinzel_Decorative'] text-lg font-bold tracking-wider text-white group-hover:text-[#fef08a] transition-colors">
              Danilo<span className="text-[#38bdf8]">.dev</span>
            </span>
            <span className="font-['Cinzel'] text-[10px] font-semibold tracking-wider text-[#d4a737]">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Navegación de escritorio estilo pestañas de quest log */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#proyectos"
            onClick={handleNavClick}
            className="group flex items-center gap-2 rounded-sm border border-transparent px-4 py-2 font-['Cinzel'] text-sm font-semibold tracking-wider text-white/80 transition-all duration-200 hover:border-[#d4a737]/50 hover:bg-[#1a1429] hover:text-[#fef08a] hover:shadow-[0_0_12px_rgba(212,167,55,0.25)]"
          >
            <Swords size={16} className="text-[#38bdf8] transition-transform duration-300 group-hover:rotate-45" />
            <span>{t("text1")}</span>
          </a>

          <a
            href="#sobre-mi"
            onClick={handleNavClick}
            className="group flex items-center gap-2 rounded-sm border border-transparent px-4 py-2 font-['Cinzel'] text-sm font-semibold tracking-wider text-white/80 transition-all duration-200 hover:border-[#d4a737]/50 hover:bg-[#1a1429] hover:text-[#fef08a] hover:shadow-[0_0_12px_rgba(212,167,55,0.25)]"
          >
            <ScrollText size={16} className="text-[#facc15] transition-transform duration-300 group-hover:scale-110" />
            <span>{t("text2")}</span>
          </a>
        </nav>

        {/* Accesorios del HUD: SFX + Idioma + Menú móvil */}
        <div className="flex items-center gap-2 sm:gap-3">
          <SoundToggle />
          <ButtonLanguage />

          <button
            onClick={toggleMobileMenu}
            className="flex size-10 items-center justify-center rounded-sm border border-[#d4a737]/60 bg-[#151020] text-[#fef08a] md:hidden shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable tipo pergamino medieval */}
      {mobileMenuOpen && (
        <div className="border-t border-[#d4a737]/40 bg-[#100c1c]/98 px-6 py-6 shadow-[0_20px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <p className="font-['Cinzel'] text-xs font-bold tracking-widest text-[#d4a737] uppercase">
              Menú de Navegación
            </p>

            <a
              href="#proyectos"
              onClick={handleNavClick}
              className="flex items-center gap-3 rounded-sm border border-[#d4a737]/30 bg-[#1a1429] p-3 font-['Cinzel'] text-base font-bold text-white transition hover:border-[#facc15] hover:text-[#fef08a]"
            >
              <Swords size={18} className="text-[#38bdf8]" />
              <span>{t("text1")}</span>
            </a>

            <a
              href="#sobre-mi"
              onClick={handleNavClick}
              className="flex items-center gap-3 rounded-sm border border-[#d4a737]/30 bg-[#1a1429] p-3 font-['Cinzel'] text-base font-bold text-white transition hover:border-[#facc15] hover:text-[#fef08a]"
            >
              <ScrollText size={18} className="text-[#facc15]" />
              <span>{t("text2")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
