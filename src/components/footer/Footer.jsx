import { IconArrowNarrowUp } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full xl:w-[1120px] mx-auto text-white py-5 flex flex-col items-center gap-4 opacity-80">
      <div className="flex justify-between w-full px-4 md:px-8">
        <span className="text-sm text-gray-300">
          © 2025{" "}
          <a href="#" className="hover:underline text-white">
            Danilo Mercado
          </a>
          . Casi todos los derechos reservados.
        </span>
        <nav className="flex gap-6">
          <a href="#sobre-mi" className="hover:underline">
            Sobre Mi
          </a>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
