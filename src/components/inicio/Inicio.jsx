import React from "react";
import Badge from "../badge/Badge";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../../icons/Icons";
import ViewCV from "../viewCV/ViewCV";

const Inicio = () => {
  return (
    <>
      <div id="/" className="w-full mx-auto lg:w-[740px] py-20 px-4">
        <div className="flex gap-4 mb-4">
          <img
            className="rounded-full size-25"
            src="/Screenshot_12.png"
            alt="photo cv portfolio"
          ></img>
          <a
            href="https://www.linkedin.com/in/danilo-mercado-9316642aa/"
            target="_blank"
            rel="noopener"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <Badge />
          </a>
        </div>
        <h1 className="text-xl font-bold lg:text-5xl flex flex-row gap-x-4  tracking-tight text-gray-800 sm:text-5xl dark:text-white">
          Hola, soy Danilo
        </h1>
        <p className="mt-6 text-xl lg:text-2xl text-pretty max-w-[700px] text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
          <strong>Desarrollador Junior </strong>
          <span> de </span>
          <span className="text-sky-300/90 opacity-100">
            Argentina, Santa Fe, Rosario
          </span>
          , que busca aprender dia a dia. Actualmente estudiando desarrolo de
          software.
        </p>
        <nav className="flex flex-wrap gap-4 mt-8">
          <LinkedInIcon />
          <MailIcon />
          <GitHubIcon />
        </nav>
      </div>
    </>
  );
};

export default Inicio;
