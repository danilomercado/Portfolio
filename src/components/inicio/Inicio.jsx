import React from "react";
import Badge from "../badge/Badge";

const Dashboar = () => {
  return (
    <>
      <div>
        <section className="w-full mx-auto lg:w-[740px]  py-44">
          <img
            className="rounded-full w-20 h-20"
            src="https://scontent.fros8-1.fna.fbcdn.net/v/t39.30808-6/464660547_3279934075482283_5431706201991899581_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFy2_6ROPC6VlxmZDY_nkrnPLLunpa9IAo8su6elr0gCj3Uz-KtG1a5TqXF7cV8arDZC7_b2SouRVtilW5c7ErT&_nc_ohc=eQUZ0tbpEhcQ7kNvgGxEknn&_nc_oc=AdhsiEfS27av8Mjlg1ezjKuEgmyvbL9vyJAYnh-Nak43CRZ8zBRgGkkmlOChx-Js5t4&_nc_zt=23&_nc_ht=scontent.fros8-1.fna&_nc_gid=Au93jG-RNXDtuu9sIRpt7eo&oh=00_AYHJcu6Wk4OUKdnSgkgNx_jW9TZxlRDyNowsUqqHu3L4cg&oe=67D1446C"
            alt="photo cv portfolio"
          ></img>
          <a
            href="https://www.linkedin.com/in/danilo-mercado-9316642aa/"
            target="_blank"
            rel="noopener"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <Badge>Disponible para trabajar</Badge>
          </a>

          <h1 className="text-white text-5xl font-bold flex gap-x-4 pb-10">
            Hola, soy Danilo
          </h1>
          <h2 className="text-xl text-wrap" href="/about">
            <span className="text-yellow-200/90">Desarrollador Junior </span>
            <span className="text-white opacity-80">
              aprendiendo cada dia. Estudiante de desarrolo de software en la
              UTN.
            </span>
            <span className="text-blue-200/90"> De Argentina, Rosario </span>
          </h2>
        </section>
      </div>
    </>
  );
};

export default Dashboar;
