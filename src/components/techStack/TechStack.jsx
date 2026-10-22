import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  IconBrandReact,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMysql,
  IconBrandPython,
  IconDatabase,
  IconBrandGit,
  IconBrandDocker,
  IconServer,
  IconShieldLock,
  IconBrandJavascript,
  IconTerminal2,
  IconCpu,
  IconCode,
  IconLayersLinked,
} from "@tabler/icons-react";
import { RpgCorner } from "../rpg/RpgOrnaments";
import { rpgAudio } from "../rpg/SoundManager";
import { Layers } from "lucide-react";

// Componente del Stack Tecnológico totalmente traducible con i18next
const TechStack = () => {
  const { t } = useTranslation("stack");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const CATEGORIES = [
    { id: "all", label: t("categories.all") },
    { id: "backend", label: t("categories.backend") },
    { id: "frontend", label: t("categories.frontend") },
    { id: "database", label: t("categories.database") },
    { id: "tools", label: t("categories.tools") },
  ];

  const TECHNOLOGIES = [
    // Backend
    {
      name: "ASP.NET Core / C#",
      categoryKey: "backend",
      categoryLabel: t("categories.backend"),
      icon: IconCode,
      color: "text-indigo-400 border-indigo-500/40 bg-indigo-950/40",
      description: t("items.dotnet"),
    },
    {
      name: "Node.js & Express",
      categoryKey: "backend",
      categoryLabel: t("categories.backend"),
      icon: IconBrandNodejs,
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40",
      description: t("items.nodejs"),
    },
    {
      name: "Python & LangChain",
      categoryKey: "backend",
      categoryLabel: t("categories.backend"),
      icon: IconBrandPython,
      color: "text-yellow-400 border-yellow-500/40 bg-yellow-950/40",
      description: t("items.python"),
    },
    {
      name: "Entity Framework Core",
      categoryKey: "backend",
      categoryLabel: t("categories.backend"),
      icon: IconServer,
      color: "text-rose-400 border-rose-500/40 bg-rose-950/40",
      description: t("items.ef"),
    },
    {
      name: "Autenticación JWT",
      categoryKey: "backend",
      categoryLabel: t("categories.backend"),
      icon: IconShieldLock,
      color: "text-amber-400 border-amber-500/40 bg-amber-950/40",
      description: t("items.jwt"),
    },

    // Frontend
    {
      name: "React",
      categoryKey: "frontend",
      categoryLabel: t("categories.frontend"),
      icon: IconBrandReact,
      color: "text-cyan-400 border-cyan-500/40 bg-cyan-950/40",
      description: t("items.react"),
    },
    {
      name: "Tailwind CSS",
      categoryKey: "frontend",
      categoryLabel: t("categories.frontend"),
      icon: IconBrandTailwind,
      color: "text-sky-400 border-sky-500/40 bg-sky-950/40",
      description: t("items.tailwind"),
    },
    {
      name: "JavaScript (ES6+)",
      categoryKey: "frontend",
      categoryLabel: t("categories.frontend"),
      icon: IconBrandJavascript,
      color: "text-amber-300 border-amber-500/40 bg-amber-950/40",
      description: t("items.javascript"),
    },
    {
      name: "HTML5 & CSS3",
      categoryKey: "frontend",
      categoryLabel: t("categories.frontend"),
      icon: IconTerminal2,
      color: "text-orange-400 border-orange-500/40 bg-orange-950/40",
      description: t("items.htmlcss"),
    },

    // Bases de Datos
    {
      name: "PostgreSQL",
      categoryKey: "database",
      categoryLabel: t("categories.database"),
      icon: IconDatabase,
      color: "text-blue-400 border-blue-500/40 bg-blue-950/40",
      description: t("items.postgres"),
    },
    {
      name: "SQL Server",
      categoryKey: "database",
      categoryLabel: t("categories.database"),
      icon: IconDatabase,
      color: "text-red-400 border-red-500/40 bg-red-950/40",
      description: t("items.sqlserver"),
    },
    {
      name: "MySQL",
      categoryKey: "database",
      categoryLabel: t("categories.database"),
      icon: IconBrandMysql,
      color: "text-amber-400 border-amber-500/40 bg-amber-950/40",
      description: t("items.mysql"),
    },
    {
      name: "Prisma ORM",
      categoryKey: "database",
      categoryLabel: t("categories.database"),
      icon: IconCpu,
      color: "text-teal-400 border-teal-500/40 bg-teal-950/40",
      description: t("items.prisma"),
    },

    // Herramientas & Arquitectura
    {
      name: "Git & GitHub",
      categoryKey: "tools",
      categoryLabel: t("categories.tools"),
      icon: IconBrandGit,
      color: "text-orange-400 border-orange-500/40 bg-orange-950/40",
      description: t("items.git"),
    },
    {
      name: "Clean Architecture",
      categoryKey: "tools",
      categoryLabel: t("categories.tools"),
      icon: IconLayersLinked,
      color: "text-purple-400 border-purple-500/40 bg-purple-950/40",
      description: t("items.cleanarch"),
    },
    {
      name: "Docker",
      categoryKey: "tools",
      categoryLabel: t("categories.tools"),
      icon: IconBrandDocker,
      color: "text-sky-400 border-sky-500/40 bg-sky-950/40",
      description: t("items.docker"),
    },
  ];

  const handleCategorySelect = (id) => {
    rpgAudio.playItemClick();
    setSelectedCategory(id);
  };

  const filteredTechs =
    selectedCategory === "all"
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((t) => t.categoryKey === selectedCategory);

  return (
    <div className="mt-20">
      {/* Encabezado del Stack */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-sm border border-[#d4a737]/40 bg-[#171224] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#facc15] shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          <Layers size={14} className="text-[#facc15]" />
          <span>{t("badge")}</span>
        </div>

        <h3 className="mt-3 font-['Cinzel_Decorative'] text-2xl font-extrabold sm:text-3xl lg:text-4xl">
          <span className="rpg-text-gold">{t("title")}</span>
        </h3>

        <p className="mt-2 font-['Cinzel'] text-sm leading-relaxed text-[#c7beaf]">
          {t("subtitle")}
        </p>
      </div>

      {/* Cinta infinita con movimiento continuo de insignias tecnológicas */}
      <div className="relative mb-12 overflow-hidden rounded-sm border border-[#d4a737]/40 bg-[#0d0a14] py-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d0a14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d0a14] to-transparent" />

        <div className="animate-marquee flex items-center gap-4">
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 rounded-sm border px-3.5 py-1.5 transition-all duration-300 hover:scale-105 hover:border-[#facc15] hover:shadow-[0_0_12px_rgba(250,204,21,0.3)] ${tech.color}`}
            >
              <tech.icon className="size-4 shrink-0" />
              <span className="font-['Cinzel'] text-xs font-bold text-white whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Selector de categorías */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center sm:justify-start">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategorySelect(cat.id)}
            className={`rounded-sm border px-3.5 py-1.5 font-['Cinzel'] text-xs font-bold tracking-wider transition-all duration-200 ${
              selectedCategory === cat.id
                ? "border-[#facc15] bg-[#2a1f3d] text-[#fef08a] shadow-[0_0_12px_rgba(250,204,21,0.35)]"
                : "border-[#d4a737]/30 bg-[#120e1c] text-[#c7beaf] hover:border-[#d4a737]/60 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cuadrícula de tarjetas de tecnologías detalladas */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTechs.map((tech) => (
          <div
            key={tech.name}
            onClick={() => rpgAudio.playItemClick()}
            className="rpg-card rpg-corner-brackets group rounded-sm p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#facc15]/80 hover:shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(212,167,55,0.2)]"
          >
            <RpgCorner position="top-left" />
            <RpgCorner position="bottom-right" />

            <div className="flex items-center gap-3">
              <div
                className={`flex size-10 items-center justify-center rounded-sm border shadow-sm transition-transform duration-300 group-hover:scale-110 ${tech.color}`}
              >
                <tech.icon className="size-5" />
              </div>

              <div>
                <h4 className="font-['Cinzel'] text-sm font-bold text-white transition-colors group-hover:text-[#fef08a]">
                  {tech.name}
                </h4>
                <span className="font-mono text-[10px] text-[#38bdf8] uppercase">
                  {tech.categoryLabel}
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#c7beaf]">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
