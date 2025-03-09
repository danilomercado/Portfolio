import { IconCode } from "@tabler/icons-react";
import React from "react";

import CardProyectItem from "../cardProyectItem/CardProyectItem";

const CardProyects = () => {
  const PROYECTS = [
    {
      title: "ArmaF5",
      descripcion: "Pagina para armar equipos de F5 de 10 o 8 personas",
      link: "https://armarequipof5.netlify.app/",
      github: "#ttps://github.com/danilomercado/FUTBOL5",
      image: "/public/422shots_so.webp",
      // tags: [TAGS.REACT, TAGS.TAILWIND],
    },
  ];

  return (
    <>
      <section
        id="proyectos"
        className="w-full mx-auto lg:w-[740px] py-20 px-4 mt-20 scroll-m-20  container lg:max-w-4xl md:max-w-2xl"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6 flex gap-x-3 items-center">
          <IconCode stroke={2} className="size-9" />
          Proyectos
        </h2>
        <div>
          {PROYECTS.map(({ image, title, descripcion, tags }) => (
            <article>
              <h3 className="text-2xl font-semibold text-yellow-200 mb-2">
                {title}
              </h3>
              <p className="text-lg mb-4 text-pretty">{descripcion}</p>
              {/* <ul>
                {tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul> */}
              <img
                className="rounded shadow-2xl shadow-white/10"
                src={image}
                alt={"Captura de pantalla del proyecto ${image}"}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardProyects;
