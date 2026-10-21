import React, { useState } from "react";
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
import { Layers, Sparkles } from "lucide-react";

// Componente del Stack Tecnológico con carrusel de movimiento infinito y desglose por categorías
const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const CATEGORIES = [
    { id: "all", label: "Todas las Tecnologías" },
    { id: "backend", label: "Backend & APIs" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "database", label: "Bases de Datos & SQL" },
    { id: "tools", label: "Herramientas & Prácticas" },
  ];

  const TECHNOLOGIES = [
    // Backend
    {
      name: "ASP.NET Core / C#",
      category: "backend",
      icon: IconCode,
      color: "text-indigo-400 border-indigo-500/40 bg-indigo-950/40",
      description: "APIs RESTful de alto rendimiento, Clean Architecture, inyección de dependencias y LINQ.",
    },
    {
      name: "Node.js & Express",
      category: "backend",
      icon: IconBrandNodejs,
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40",
      description: "Servicios web asíncronos, middlewares modulares, routing y microservicios escalables.",
    },
    {
      name: "Python & LangChain",
      category: "backend",
      icon: IconBrandPython,
      color: "text-yellow-400 border-yellow-500/40 bg-yellow-950/40",
      description: "Desarrollo de agentes de IA, automatización con XML-RPC e integración con LLMs.",
    },
    {
      name: "Entity Framework Core",
      category: "backend",
      icon: IconServer,
      color: "text-rose-400 border-rose-500/40 bg-rose-950/40",
      description: "ORM para .NET con enfoque Code-First, migraciones automáticas y consultas optimizadas.",
    },
    {
      name: "Autenticación JWT",
      category: "backend",
      icon: IconShieldLock,
      color: "text-amber-400 border-amber-500/40 bg-amber-950/40",
      description: "Control de acceso seguro basado en roles (RBAC), tokens cifrados y protección de rutas.",
    },

    // Frontend
    {
      name: "React",
      category: "frontend",
      icon: IconBrandReact,
      color: "text-cyan-400 border-cyan-500/40 bg-cyan-950/40",
      description: "Single Page Applications interactivas, Custom Hooks, arquitectura de componentes y estado.",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: IconBrandTailwind,
      color: "text-sky-400 border-sky-500/40 bg-sky-950/40",
      description: "Diseño responsivo móvil-primero, micro-animaciones fluidas y sistemas de diseño modernos.",
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      icon: IconBrandJavascript,
      color: "text-amber-300 border-amber-500/40 bg-amber-950/40",
      description: "Promesas, Async/Await, manipulación del DOM, programación funcional y modularización.",
    },
    {
      name: "HTML5 & CSS3 Avanzado",
      category: "frontend",
      icon: IconTerminal2,
      color: "text-orange-400 border-orange-500/40 bg-orange-950/40",
      description: "Estructuras semánticas accesibles, Grid, Flexbox, variables CSS y animaciones aceleradas.",
    },

    // Bases de Datos
    {
      name: "PostgreSQL",
      category: "database",
      icon: IconDatabase,
      color: "text-blue-400 border-blue-500/40 bg-blue-950/40",
      description: "Modelado relacional robusto, claves foráneas, índices de alto rendimiento y transacciones ACID.",
    },
    {
      name: "SQL Server",
      category: "database",
      icon: IconDatabase,
      color: "text-red-400 border-red-500/40 bg-red-950/40",
      description: "Consultas T-SQL avanzadas, procedimientos almacenados e integración nativa con el ecosistema .NET.",
    },
    {
      name: "MySQL",
      category: "database",
      icon: IconBrandMysql,
      color: "text-amber-400 border-amber-500/40 bg-amber-950/40",
      description: "Diseño de esquemas eficientes, normalización y conexión con arquitecturas Node.js.",
    },
    {
      name: "Prisma ORM",
      category: "database",
      icon: IconCpu,
      color: "text-teal-400 border-teal-500/40 bg-teal-950/40",
      description: "Tipado estricto extremo con esquemas declarativos, migraciones seguras y consultas TypeScript/Node.",
    },

    // Herramientas & Arquitectura
    {
      name: "Git & GitHub",
      category: "tools",
      icon: IconBrandGit,
      color: "text-orange-400 border-orange-500/40 bg-orange-950/40",
      description: "Control de versiones distribuido, ramas, pull requests y mantenimiento de repositorios limpios.",
    },
    {
      name: "Clean Architecture",
      category: "tools",
      icon: IconLayersLinked,
      color: "text-purple-400 border-purple-500/40 bg-purple-950/40",
      description: "Patrones de diseño desacoplados, separación de capas (Dominio, Aplicación, Infraestructura, API).",
    },
    {
      name: "Docker & Contenedores",
      category: "tools",
      icon: IconBrandDocker,
      color: "text-sky-400 border-sky-500/40 bg-sky-950/40",
      description: "Virtualización ligera de entornos de desarrollo y despliegues reproducibles multiplataforma.",
    },
  ];

  const handleCategorySelect = (id) => {
    rpgAudio.playItemClick();
    setSelectedCategory(id);
  };

  const filteredTechs =
    selectedCategory === "all"
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((t) => t.category === selectedCategory);

  return (
    <div className="mt-20">
      {/* Encabezado del Stack */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-sm border border-[#d4a737]/40 bg-[#171224] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#facc15] shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          <Layers size={14} className="text-[#facc15]" />
          <span>Ecosistema & Dominio Técnico</span>
        </div>

        <h3 className="mt-3 font-['Cinzel_Decorative'] text-2xl font-extrabold sm:text-3xl lg:text-4xl">
          <span className="rpg-text-gold">Stack Tecnológico</span>
        </h3>

        <p className="mt-2 font-['Cinzel'] text-sm leading-relaxed text-[#c7beaf]">
          Herramientas, lenguajes y arquitecturas utilizadas en producción para desarrollar software robusto.
        </p>
      </div>

      {/* Cinta infinita con movimiento continuo de insignias tecnológicas */}
      <div className="relative mb-12 overflow-hidden rounded-sm border border-[#d4a737]/40 bg-[#0d0a14] py-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
        {/* Degradados de desvanecimiento en los extremos */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d0a14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d0a14] to-transparent" />

        <div className="animate-marquee flex items-center gap-4">
          {/* Duplicamos la lista para garantizar el ciclo infinito sin saltos */}
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
                  {tech.category}
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
