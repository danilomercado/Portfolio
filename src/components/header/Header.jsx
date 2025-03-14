import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 neutral-900 backdrop-blur-md border-b border-white-700">
      <div className="text-white flex justify-center items-center py-4 w-full xl:w-[1120px] mx-auto">
        <nav className="flex flex-row gap-x-10 text-lg font-medium">
          <a href="#top" className="hover:text-sky-400 transition duration-300">
            Inicio
          </a>
          <a
            href="#proyectos"
            className="hover:text-sky-400 transition duration-300"
          >
            Proyectos
          </a>
          <a
            href="#sobre-mi"
            className="hover:text-sky-400 transition duration-300"
          >
            Sobre Mí
          </a>
          <a
            href="#contacto"
            className="hover:text-sky-400 transition duration-300"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
