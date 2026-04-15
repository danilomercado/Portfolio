import {
  IconBrandGithub,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconCode,
  IconExternalLink,
} from "@tabler/icons-react";
import React from "react";
import { useTranslation } from "react-i18next";

const CardProyects = () => {
  const { t } = useTranslation("proyects");

  const TAGS = {
    REACT: { name: "React", icon: IconBrandReact },
    TAILWIND: { name: "Tailwind CSS", icon: IconBrandTailwind },
    NODE: { name: "Node.js", icon: IconBrandNodejs },
    MYSQL: { name: "MySQL", icon: IconBrandMysql },

    DOTNET: { name: ".NET", icon: IconCode },
    POSTGRES: { name: "PostgreSQL", icon: IconBrandMysql },
    EF: { name: "Entity Framework", icon: IconCode },
    JWT: { name: "JWT", icon: IconCode },
    EXPRESS: { name: "Express", icon: IconCode },
    PRISMA: { name: "Prisma", icon: IconCode },
  };

  const PROYECTS = [
    {
      id: 1,
      title: "YumeTrack",
      description: t("YumeTrack.text-proyect"),
      github: "https://github.com/danilomercado/YumeTrack",
      image: "/yumePort.png",
      // status: "in-progress",
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
      id: 2,
      title: "ArmaF5",
      description: t("ArmaF5.text-proyect"),
      link: "https://armarequipof5.netlify.app/",
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
      id: 3,
      title: "CanchaYa",
      description: t("CanchaYa.text-proyect"),
      github: "https://github.com/danilomercado/CanchaYa.git",
      image: "/canchaya.png",
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.NODE],
    },
  ];

  return (
    <section
      id="proyectos"
      className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mb-12">
        <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <IconCode strokeWidth={2} className="size-6 text-sky-300" />
          </span>
          {t("title")}
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          Proyectos reales enfocados en frontend, experiencia de usuario e
          integración full stack.
        </p>
      </div>

      <div className="grid gap-8">
        {PROYECTS.map(
          ({ id, image, title, description, tags, github, status }) => (
            <article
              key={id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]"
            >
              <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
                <div className="relative overflow-hidden border-b border-white/10 md:border-b-0 md:border-r">
                  <img
                    alt={title}
                    className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    src={image}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#050816]/50 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    {status === "in-progress" && (
                      <span className="inline-block mb-3 rounded-full bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300 border border-yellow-400/20">
                        En desarrollo
                      </span>
                    )}

                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {title}
                    </h3>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <li key={tag.name}>
                          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                            <tag.icon className="size-4" />
                            {tag.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                      {description}
                    </p>
                  </div>

                  <footer className="mt-8 flex flex-wrap gap-3">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-sky-400/30 hover:bg-sky-400/10"
                      >
                        <IconBrandGithub className="size-5" />
                        GitHub
                      </a>
                    )}

                    {/* {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-200 transition hover:bg-sky-400/20"
                      >
                        <IconExternalLink className="size-5" />
                        {t("preview")}
                      </a>
                    )} */}
                  </footer>
                </div>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
};

export default CardProyects;
