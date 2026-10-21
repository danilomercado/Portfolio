import React from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../../icons/Icons";
import { useTranslation } from "react-i18next";
import TypingText from "../typingText/TypingText";
import { RpgCorner, StatBar, WaxSeal } from "../rpg/RpgOrnaments";
import { Sparkles, Compass, Target, Layers, FileText } from "lucide-react";
import ViewCV from "../viewCV/ViewCV";

// Sección de presentación estilizada con estética RPG medieval y contenido profesional
const Inicio = () => {
  const { t } = useTranslation("inicio");

  return (
    <section
      id="/"
      className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Columna izquierda: Retrato, título y habilidades */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Retrato con marco dorado ornamental */}
          <div className="relative mb-8">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500/20 via-sky-500/20 to-purple-600/20 blur-2xl" />

            <div className="relative flex size-44 sm:size-52 items-center justify-center rounded-full border-2 border-[#d4a737] bg-[#140f21] p-2 shadow-[0_0_30px_rgba(212,167,55,0.35),inset_0_0_20px_rgba(0,0,0,0.8)]">
              {/* Anillo rúnico decorativo */}
              <div className="absolute inset-1 rounded-full border border-dashed border-[#facc15]/40 animate-spin [animation-duration:40s]" />

              {/* Imagen del perfil */}
              <div className="relative size-full overflow-hidden rounded-full border-2 border-[#fef08a]/60 bg-[#0c0914]">
                <img
                  src="/cv.png"
                  alt="Foto de perfil de Danilo Mercado"
                  className="size-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Insignia inferior con título profesional */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-[#d4a737] bg-gradient-to-r from-[#2a1f3d] via-[#1c152b] to-[#2a1f3d] px-3.5 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                <span className="font-['Cinzel'] text-[11px] font-bold tracking-wider text-[#fef08a]">
                  Danilo Mercado
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl">
            {/* Subtítulo con efecto de escritura mágica */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-sm border border-[#d4a737]/40 bg-[#161124] px-3 py-1 font-['Cinzel'] text-xs font-bold tracking-widest text-[#facc15] shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              <Sparkles size={12} className="text-[#38bdf8]" />
              <TypingText
                texts={[
                  t("typing1"),
                  t("typing2"),
                  t("typing3"),
                  t("typing4"),
                  t("typing5"),
                ]}
              />
            </div>

            {/* Título profesional en fuente de fantasía medieval */}
            <h1 className="font-['Cinzel_Decorative'] text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="rpg-text-gold">{t("title")}</span>
            </h1>

            {/* Texto descriptivo */}
            <p className="mt-5 text-base leading-relaxed text-[#e2d9cc] sm:text-lg">
              <strong className="font-['Cinzel'] font-bold text-[#facc15] drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                {t("text1")}{" "}
              </strong>
              <span>{t("text2")} </span>
              <span className="font-medium text-[#38bdf8] drop-shadow-[0_0_6px_rgba(56,189,248,0.4)]">
                {t("localidad")}
              </span>
              <span>{t("text3")}</span>
            </p>

            {/* Barras de competencias técnicas */}
            <div className="my-6 space-y-2.5 rounded-sm border border-[#d4a737]/30 bg-[#110d1c]/80 p-4 shadow-[inset_0_0_15px_rgba(0,0,0,0.7)] text-left">
              <StatBar
                label="BACKEND & APIS"
                value="ASP.NET Core · Node.js"
                current={95}
                max={100}
                type="hp"
              />
              <StatBar
                label="FRONTEND & UI"
                value="React · Tailwind CSS"
                current={90}
                max={100}
                type="mp"
              />
              <StatBar
                label="BASES DE DATOS"
                value="PostgreSQL · SQL Server"
                current={88}
                max={100}
                type="exp"
              />
            </div>

            {/* Botones de acción social y CV */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <LinkedInIcon />
              <GitHubIcon />
              <MailIcon />
              <div className="inline-block">
                <ViewCV />
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha: Ficha técnica / Perfil */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-[#d4a737]/20 via-[#38bdf8]/15 to-[#a855f7]/15 blur-2xl" />

          <div className="rpg-card rpg-corner-brackets rounded-sm p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <RpgCorner position="top-left" />
            <RpgCorner position="top-right" />
            <RpgCorner position="bottom-left" />
            <RpgCorner position="bottom-right" />

            {/* Encabezado de la ficha */}
            <div className="mb-6 flex items-center justify-between border-b border-[#d4a737]/30 pb-4">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#facc15] shadow-[0_0_8px_#facc15]" />
                <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest text-[#fef08a] uppercase">
                  Ficha Profesional
                </h3>
              </div>
              <WaxSeal text="DM" className="size-9 text-[10px]" />
            </div>

            <div className="space-y-5">
              {/* Bloque Stack */}
              <div className="rounded-sm border border-[#d4a737]/25 bg-[#0e0a17]/90 p-4 transition-all duration-300 hover:border-[#facc15]/60 hover:bg-[#150f22]">
                <div className="flex items-center gap-2 text-[#d4a737]">
                  <Layers size={16} />
                  <p className="font-['Cinzel'] text-xs font-bold tracking-wider uppercase text-[#d4a737]">
                    {t("stackTitle")}
                  </p>
                </div>

                <p className="mt-2 font-['Cinzel'] text-base font-bold text-white drop-shadow">
                  {t("stackValue")}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-[#c7beaf]">
                  {t("stackDescription")}
                </p>
              </div>

              {/* Bloque Especialización */}
              <div className="rounded-sm border border-[#d4a737]/25 bg-[#0e0a17]/90 p-4 transition-all duration-300 hover:border-[#facc15]/60 hover:bg-[#150f22]">
                <div className="flex items-center gap-2 text-[#38bdf8]">
                  <Target size={16} />
                  <p className="font-['Cinzel'] text-xs font-bold tracking-wider uppercase text-[#38bdf8]">
                    {t("focusTitle")}
                  </p>
                </div>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white">
                  {t("focusValue")}
                </p>
              </div>

              {/* Bloque Ubicación */}
              <div className="rounded-sm border border-[#d4a737]/25 bg-[#0e0a17]/90 p-4 transition-all duration-300 hover:border-[#facc15]/60 hover:bg-[#150f22]">
                <div className="flex items-center gap-2 text-[#a855f7]">
                  <Compass size={16} />
                  <p className="font-['Cinzel'] text-xs font-bold tracking-wider uppercase text-[#a855f7]">
                    {t("locationTitle")}
                  </p>
                </div>
                <p className="mt-2 font-['Cinzel'] text-sm font-semibold text-white">
                  {t("locationValue")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
