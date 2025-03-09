import React from "react";
import Badge from "../badge/Badge";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../../icons/Icons";
import ViewCV from "../viewCV/ViewCV";

const Inicio = () => {
  return (
    <>
      <div id="/" class="w-full mx-auto lg:w-[740px] py-20 px-4">
        <div class="flex gap-4 mb-4">
          <img
            className="rounded-full size-25"
            src="https://scontent.fros8-1.fna.fbcdn.net/v/t39.30808-6/464660547_3279934075482283_5431706201991899581_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFy2_6ROPC6VlxmZDY_nkrnPLLunpa9IAo8su6elr0gCj3Uz-KtG1a5TqXF7cV8arDZC7_b2SouRVtilW5c7ErT&_nc_ohc=eQUZ0tbpEhcQ7kNvgGxEknn&_nc_oc=AdhsiEfS27av8Mjlg1ezjKuEgmyvbL9vyJAYnh-Nak43CRZ8zBRgGkkmlOChx-Js5t4&_nc_zt=23&_nc_ht=scontent.fros8-1.fna&_nc_gid=Au93jG-RNXDtuu9sIRpt7eo&oh=00_AYHJcu6Wk4OUKdnSgkgNx_jW9TZxlRDyNowsUqqHu3L4cg&oe=67D1446C"
            alt="photo cv portfolio"
          ></img>
          <a
            href="https://www.linkedin.com/in/danilo-mercado-9316642aa/"
            target="_blank"
            rel="noopener"
            class="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <Badge />
          </a>
        </div>
        <h1 className="text-xl font-bold lg:text-5xl flex flex-row gap-x-4  tracking-tight text-gray-800 sm:text-5xl dark:text-white">
          Hola, soy Danilo
        </h1>
        <p class="mt-6 text-xl lg:text-2xl text-pretty max-w-[700px] text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
          <strong>Desarrollador Junior </strong>
          <span> de </span>
          <span className="text-sky-300/90 opacity-100">
            Argentina, Santa Fe, Rosario
          </span>
          , que busca aprender dia a dia. Actualmente estudiando desarrolo de
          software.
        </p>
        <nav class="flex flex-wrap gap-4 mt-8">
          <LinkedInIcon />
          <MailIcon />
          <GitHubIcon />
        </nav>
      </div>
    </>
  );
};

export default Inicio;
