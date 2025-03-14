import {
  IconUserFilled,
  IconBrandGithub,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandPython,
  IconCode,
} from "@tabler/icons-react";
import React from "react";

const AboutMe = () => {
  return (
    <section
      id="sobre-mi"
      className="w-full mx-auto lg:w-[740px] py-16 px-4 container lg:max-w-4xl md:max-w-2xl"
    >
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6 flex gap-x-3 items-center">
          <IconUserFilled stroke={2} className="size-9" />
          Sobre Mí
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
          Me llamo <span className="font-semibold">Danilo Mercado</span> y tengo
          20 años. Desde <strong>2023</strong>, estudio una carrera de{" "}
          <span className="text-blue-500 font-medium">
            Desarrolo de Software
          </span>{" "}
          en la <span className="font-medium">UTN de Rosario</span>.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          Tecnologías que utilizo
        </h3>
      </div>
    </section>
  );
};

export default AboutMe;
