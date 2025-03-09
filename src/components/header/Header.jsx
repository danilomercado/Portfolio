import React from "react";

function Header() {
  return (
    <>
      <div className="text-white flex justify-center items-center py-5 w-[1120px] mx-auto">
        <nav className="py-1  flex flex-row gap-x-10 opacity-80">
          <a href="/">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre Mi</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </>
  );
}

export default Header;
