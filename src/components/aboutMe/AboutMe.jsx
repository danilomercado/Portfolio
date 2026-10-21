import React from "react";
import { IconUserFilled } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { RpgCorner, WaxSeal } from "../rpg/RpgOrnaments";
import { ShieldCheck, Zap, Sparkles, Scroll, Compass, Trophy, UserCheck } from "lucide-react";
import TechStack from "../techStack/TechStack";

// Sección sobre mí con estética medieval sobria y desglose de stack tecnológico
const AboutMe = () => {
  const { t } = useTranslation("about-me");

  return (
    <section
      id="sobre-mi"
      className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Encabezado */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-sm border border-[#d4a737]/40 bg-[#171224] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#facc15] shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            <UserCheck size={14} className="text-[#facc15]" />
            <span>Perfil & Enfoque</span>
          </div>

          <h2 className="mt-3 flex items-center justify-center gap-3 font-['Cinzel_Decorative'] text-3xl font-extrabold tracking-tight sm:justify-start sm:text-4xl lg:text-5xl">
            <span className="flex size-12 items-center justify-center rounded-sm border border-[#d4a737] bg-[#1a1429] shadow-[0_0_15px_rgba(212,167,55,0.3)]">
              <IconUserFilled strokeWidth={2} className="size-6 text-[#facc15]" />
            </span>
            <span className="rpg-text-gold">{t("title")}</span>
          </h2>

          <p className="mt-4 max-w-3xl font-['Cinzel'] text-sm leading-relaxed text-[#c7beaf] sm:text-base">
            {t("intro")}
          </p>

          <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#d4a737]/60 via-[#d4a737]/20 to-transparent" />
        </div>

        {/* 3 Cartas de Atributos y Forma de Trabajo */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Carta 1 */}
          <div className="rpg-card rpg-corner-brackets group rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#facc15] hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,167,55,0.2)]">
            <RpgCorner position="top-left" />
            <RpgCorner position="bottom-right" />
            <div className="mb-4 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-sm border border-[#d4a737]/40 bg-[#1e172e] text-[#facc15]">
                <ShieldCheck size={20} />
              </span>
              <span className="font-['Cinzel'] text-xs font-bold text-[#d4a737]">
                01
              </span>
            </div>
            <p className="font-['Cinzel'] text-xs font-bold uppercase tracking-wider text-[#d4a737]">
              {t("card1Title")}
            </p>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-white group-hover:text-[#fef08a] transition-colors">
              {t("card1Text")}
            </p>
          </div>

          {/* Carta 2 */}
          <div className="rpg-card rpg-corner-brackets group rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#facc15] hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,167,55,0.2)]">
            <RpgCorner position="top-left" />
            <RpgCorner position="bottom-right" />
            <div className="mb-4 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-sm border border-[#d4a737]/40 bg-[#1e172e] text-[#38bdf8]">
                <Zap size={20} />
              </span>
              <span className="font-['Cinzel'] text-xs font-bold text-[#38bdf8]">
                02
              </span>
            </div>
            <p className="font-['Cinzel'] text-xs font-bold uppercase tracking-wider text-[#d4a737]">
              {t("card2Title")}
            </p>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-white group-hover:text-[#fef08a] transition-colors">
              {t("card2Text")}
            </p>
          </div>

          {/* Carta 3 */}
          <div className="rpg-card rpg-corner-brackets group rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#facc15] hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,167,55,0.2)]">
            <RpgCorner position="top-left" />
            <RpgCorner position="bottom-right" />
            <div className="mb-4 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-sm border border-[#d4a737]/40 bg-[#1e172e] text-[#a855f7]">
                <Sparkles size={20} />
              </span>
              <span className="font-['Cinzel'] text-xs font-bold text-[#a855f7]">
                03
              </span>
            </div>
            <p className="font-['Cinzel'] text-xs font-bold uppercase tracking-wider text-[#d4a737]">
              {t("card3Title")}
            </p>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-white group-hover:text-[#fef08a] transition-colors">
              {t("card3Text")}
            </p>
          </div>
        </div>

        {/* Biografía principal y datos de situación */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Manuscrito / Filosofía de trabajo */}
          <div className="rpg-card rpg-corner-brackets relative rounded-sm p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <RpgCorner position="top-left" />
            <RpgCorner position="top-right" />
            <RpgCorner position="bottom-left" />
            <RpgCorner position="bottom-right" />

            <div className="mb-6 flex items-center justify-between border-b border-[#d4a737]/30 pb-4">
              <div className="flex items-center gap-2">
                <Scroll size={18} className="text-[#facc15]" />
                <h4 className="font-['Cinzel'] text-sm font-bold tracking-widest text-[#fef08a] uppercase">
                  Filosofía & Desarrollo
                </h4>
              </div>
              <WaxSeal text="DM" className="size-9 text-[10px]" />
            </div>

            <div className="space-y-5 text-sm leading-relaxed text-[#c7beaf] sm:text-base">
              <p className="border-l-2 border-[#d4a737]/60 pl-4 italic">
                {t("p1")}
              </p>

              <p className="border-l-2 border-[#38bdf8]/60 pl-4">
                {t("p2")}
              </p>

              <p className="border-l-2 border-[#a855f7]/60 pl-4 font-medium text-white/90">
                {t("p3")}
              </p>
            </div>
          </div>

          {/* Tarjetas laterales de Estado Actual y Especialidad */}
          <div className="flex flex-col gap-6 justify-between">
            {/* Estado actual */}
            <div className="rpg-card rpg-corner-brackets rounded-sm p-6 transition-all duration-300 hover:border-[#facc15]/60 hover:bg-[#181226]">
              <RpgCorner position="top-left" />
              <RpgCorner position="bottom-right" />
              <div className="flex items-center gap-2.5 text-[#38bdf8]">
                <Compass size={18} />
                <p className="font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                  {t("sideTitle1")}
                </p>
              </div>
              <p className="mt-3 font-['Cinzel'] text-base font-bold text-white sm:text-lg">
                {t("sideText1")}
              </p>
            </div>

            {/* Especialidad técnica */}
            <div className="rpg-card rpg-corner-brackets rounded-sm p-6 transition-all duration-300 hover:border-[#facc15]/60 hover:bg-[#181226]">
              <RpgCorner position="top-left" />
              <RpgCorner position="bottom-right" />
              <div className="flex items-center gap-2.5 text-[#facc15]">
                <Trophy size={18} />
                <p className="font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#facc15]">
                  {t("sideTitle2")}
                </p>
              </div>
              <p className="mt-3 font-['Cinzel'] text-base font-bold text-white sm:text-lg">
                {t("sideText2")}
              </p>
            </div>
          </div>
        </div>

        {/* Stack Tecnológico interactivo con carrusel en movimiento */}
        <TechStack />
      </div>
    </section>
  );
};

export default AboutMe;
