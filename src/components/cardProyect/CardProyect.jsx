import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandTailwind,
  IconCode,
  IconLink,
} from "@tabler/icons-react";
import React from "react";

const CardProyects = () => {
  const TAGS = {
    REACT: {
      name: "React",
      class:
        "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md rounded-md px-2 py-1 flex items-center gap-x-1 hover:opacity-90",
      icon: IconBrandReact,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class:
        "bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-md rounded-md px-2 py-1 flex items-center gap-x-1 hover:opacity-90",
      icon: IconBrandTailwind,
    },
  };

  const PROYECTS = [
    {
      title: "ArmaF5",
      description: "Página para armar equipos de F5 de 10 o 8 personas.",
      link: "https://armarequipof5.netlify.app/",
      github: "https://github.com/danilomercado/FUTBOL5",
      image: "/public/422shots_so.webp",
      tags: [TAGS.REACT, TAGS.TAILWIND],
    },
  ];

  return (
    <section
      id="proyectos"
      className="w-full mx-auto lg:w-[740px] py-16 px-4 container lg:max-w-4xl md:max-w-2xl"
    >
      <h2 className="text-3xl lg:text-4xl font-semibold mb-6 flex gap-x-3 items-center">
        <IconCode stroke={2} className="size-9" />
        Proyectos
      </h2>

      <div className="flex flex-col gap-y-12">
        {PROYECTS.map(({ image, title, description, tags, link, github }) => (
          <article className="flex flex-col md:flex-row md:space-x-6 group">
            {/* Imagen */}
            <div className="w-full md:w-1/2">
              <div className="relative flex items-center shadow-xl overflow-hidden rounded-xl z-10 md:group-hover:-translate-y-1 transition duration-300">
                <img
                  alt={title}
                  className="object-cover w-full h-48 md:h-56 transition duration-300 md:group-hover:scale-105"
                  loading="lazy"
                  src={image}
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h3>

              <ul className="flex flex-wrap mt-2 gap-x-2">
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <span
                      className={`flex items-center gap-x-2 rounded-full text-xs font-medium px-2 py-1 ${tag.class}`}
                    >
                      <tag.icon className="size-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-lg  text-pretty mt-2 text-gray-700 dark:text-gray-400">
                {description}
              </p>

              {/* Botones */}
              <footer className="flex items-end justify-start mt-4 gap-x-4">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full border border-gray-700 hover:bg-gray-700 transition"
                  >
                    <IconBrandGithub className="size-5" />
                    GitHub
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full border border-gray-700 hover:bg-gray-700 transition"
                  >
                    <IconLink className="size-5" />
                    Preview
                  </a>
                )}
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CardProyects;
