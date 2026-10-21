import {
  IconBrandGithub,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandPython,
  IconCpu,
  IconCode,
  IconExternalLink,
} from "@tabler/icons-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { RpgCorner } from "../rpg/RpgOrnaments";
import { rpgAudio } from "../rpg/SoundManager";
import { Code2, Sparkles, FolderGit2 } from "lucide-react";

// Sección de proyectos con estructura en cuadrícula RPG y terminología profesional
const CardProyects = () => {
  const { t } = useTranslation("proyects");

  const TAGS = {
    REACT: { name: "React", icon: IconBrandReact, color: "text-cyan-300 border-cyan-500/40 bg-cyan-950/40" },
    TAILWIND: { name: "Tailwind CSS", icon: IconBrandTailwind, color: "text-sky-300 border-sky-500/40 bg-sky-950/40" },
    NODE: { name: "Node.js", icon: IconBrandNodejs, color: "text-emerald-300 border-emerald-500/40 bg-emerald-950/40" },
    MYSQL: { name: "MySQL", icon: IconBrandMysql, color: "text-amber-300 border-amber-500/40 bg-amber-950/40" },
    PYTHON: { name: "Python", icon: IconBrandPython, color: "text-yellow-300 border-yellow-500/40 bg-yellow-950/40" },
    LANGCHAIN: { name: "LangChain", icon: IconCpu, color: "text-purple-300 border-purple-500/40 bg-purple-950/40" },
    DOTNET: { name: ".NET", icon: IconCode, color: "text-indigo-300 border-indigo-500/40 bg-indigo-950/40" },
    POSTGRES: { name: "PostgreSQL", icon: IconBrandMysql, color: "text-blue-300 border-blue-500/40 bg-blue-950/40" },
    EF: { name: "Entity Framework", icon: IconCode, color: "text-rose-300 border-rose-500/40 bg-rose-950/40" },
    JWT: { name: "JWT", icon: IconCode, color: "text-amber-400 border-amber-500/40 bg-amber-950/40" },
    EXPRESS: { name: "Express", icon: IconCode, color: "text-zinc-300 border-zinc-500/40 bg-zinc-900/60" },
    PRISMA: { name: "Prisma", icon: IconCode, color: "text-teal-300 border-teal-500/40 bg-teal-950/40" },
    XMLRPC: { name: "XML-RPC", icon: IconCode, color: "text-orange-300 border-orange-500/40 bg-orange-950/40" },
  };

  const PROYECTS = [
    {
      id: 1,
      title: "Odoo AI Agent",
      category: "IA & Automatización",
      categoryColor: "text-purple-300 border-purple-500/50 bg-purple-950/50",
      description: t("OdooAgent.text-proyect"),
      github: "https://github.com/danilomercado/Odoo-AI-Agent",
      image: "/odoo.png",
      tags: [TAGS.PYTHON, TAGS.LANGCHAIN, TAGS.XMLRPC, TAGS.POSTGRES],
    },
    {
      id: 2,
      title: "YumeTrack",
      category: "Full Stack .NET & React",
      categoryColor: "text-amber-300 border-amber-500/50 bg-amber-950/50",
      description: t("YumeTrack.text-proyect"),
      github: "https://github.com/danilomercado/YumeTrack",
      image: "/yumePort.png",
      tags: [
        TAGS.REACT,
        TAGS.TAILWIND,
        TAGS.DOTNET,
        TAGS.POSTGRES,
        TAGS.EF,
        TAGS.JWT,
      ],
    },
    {
      id: 3,
      title: "ArmaF5",
      category: "Full Stack & Algoritmos",
      categoryColor: "text-rose-300 border-rose-500/50 bg-rose-950/50",
      description: t("ArmaF5.text-proyect"),
      github: "https://github.com/danilomercado/FUTBOL5",
      image: "/f5Port.png",
      tags: [
        TAGS.REACT,
        TAGS.TAILWIND,
        TAGS.NODE,
        TAGS.EXPRESS,
        TAGS.POSTGRES,
        TAGS.PRISMA,
        TAGS.JWT,
      ],
    },
    {
      id: 4,
      title: "CanchaYa",
      category: "Plataforma Web",
      categoryColor: "text-sky-300 border-sky-500/50 bg-sky-950/50",
      description: t("CanchaYa.text-proyect"),
      github: "https://github.com/danilomercado/CanchaYa.git",
      image: "/canchaya.png",
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.NODE],
    },
  ];

  return (
    <section
      id="proyectos"
      className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Encabezado de proyectos */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-sm border border-[#d4a737]/40 bg-[#171224] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#facc15] shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          <FolderGit2 size={14} className="text-[#facc15]" />
          <span>Proyectos Destacados</span>
        </div>

        <h2 className="mt-3 flex items-center gap-3 font-['Cinzel_Decorative'] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="flex size-12 items-center justify-center rounded-sm border border-[#d4a737] bg-[#1a1429] shadow-[0_0_15px_rgba(212,167,55,0.3)]">
            <Code2 className="size-6 text-[#facc15]" />
          </span>
          <span className="rpg-text-gold">{t("title")}</span>
        </h2>

        <p className="mt-4 max-w-2xl font-['Cinzel'] text-sm leading-relaxed text-[#c7beaf] sm:text-base">
          Proyectos reales enfocados en frontend, experiencia de usuario e
          integración full stack.
        </p>

        <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#d4a737]/60 via-[#d4a737]/20 to-transparent" />
      </div>

      {/* Cuadrícula moderna 2x2 de proyectos con marcos RPG */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROYECTS.map(
          ({ id, image, title, category, categoryColor, description, tags, github, link, status }) => (
            <article
              key={id}
              className="rpg-card rpg-corner-brackets group flex flex-col justify-between overflow-hidden rounded-sm transition-all duration-300 hover:border-[#facc15]/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(212,167,55,0.25)] hover:-translate-y-1"
            >
              <RpgCorner position="top-left" />
              <RpgCorner position="top-right" />
              <RpgCorner position="bottom-left" />
              <RpgCorner position="bottom-right" />

              <div>
                {/* Ventana de previsualización */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-[#d4a737]/30 bg-[#09070f]">
                  <img
                    alt={title}
                    className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    src={image}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#140f21] via-transparent to-transparent opacity-90" />

                  {/* Insignia de categoría técnica */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-sm border px-2.5 py-0.5 font-['Cinzel'] text-[10px] font-bold ${categoryColor} shadow-md`}
                    >
                      <Sparkles size={11} />
                      {category}
                    </span>
                  </div>

                  {status === "in-progress" && (
                    <div className="absolute top-3 right-3">
                      <span className="rounded-sm border border-yellow-500/50 bg-yellow-950/70 px-2 py-0.5 font-['Cinzel'] text-[10px] font-bold text-yellow-300">
                        En desarrollo
                      </span>
                    </div>
                  )}
                </div>

                {/* Contenido descriptivo */}
                <div className="p-6">
                  <h3 className="font-['Cinzel'] text-xl font-bold tracking-tight text-white drop-shadow sm:text-2xl group-hover:text-[#fef08a] transition-colors">
                    {title}
                  </h3>

                  {/* Etiquetas de tecnologías */}
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <li key={tag.name}>
                        <span
                          className={`inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 font-mono text-[11px] font-semibold ${tag.color}`}
                        >
                          <tag.icon className="size-3" />
                          {tag.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-[#c7beaf] line-clamp-3">
                    {description}
                  </p>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="border-t border-[#d4a737]/20 bg-[#100c1c]/60 p-6 pt-4 flex flex-wrap gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => rpgAudio.playItemClick()}
                    className="rpg-btn text-xs"
                  >
                    <IconBrandGithub className="size-4 text-[#a855f7]" />
                    <span>GitHub</span>
                  </a>
                )}

                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => rpgAudio.playItemClick()}
                    className="rpg-btn-mana rpg-btn text-xs"
                  >
                    <IconExternalLink className="size-4" />
                    <span>{t("preview")}</span>
                  </a>
                )}
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
};

export default CardProyects;
