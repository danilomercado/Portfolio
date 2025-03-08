import React from "react";

function Header() {
  return (
    <>
      <div className="text-white flex justify-center items-center py-5 w-[1120px] mx-auto">
        <nav className="py-1 flex flex-row gap-x-10 opacity-80">
          <a href="/">Home</a>
          <a href="/about">Sobre mi</a>
          <a href="/proyects">Proyectos</a>
          <a href="/contact">Contacto</a>
        </nav>
      </div>
    </>
  );
}

export default Header;
