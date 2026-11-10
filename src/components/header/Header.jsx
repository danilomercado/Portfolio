import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonLanguage from "../buttonLanguage/ButtonLanguage";
import LogoMark from "../logo/LogoMark";

// Dock flotante: una píldora con un fondo que se desliza (con resorte) hacia el link bajo el mouse
function Header() {
  const { t } = useTranslation("header");
  const [open, setOpen] = useState(false);
  const [ind, setInd] = useState({ x: 0, w: 0, show: false });
  const nav = useRef(null);

  const links = [
    { href: "#experiencia", label: t("experience") },
    { href: "#proyectos", label: t("text1") },
    { href: "#sobre-mi", label: t("text2") },
    { href: "#contacto", label: t("text3") },
  ];

  const enter = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const n = nav.current.getBoundingClientRect();
    setInd({ x: r.left - n.left, w: r.width, show: true });
  };

  return (
    <header className="dock-wrap">
      <div className="dock">
        <a href="#/" className="brand" aria-label="Danilo Mercado" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="brand-name">Danilo Mercado</span>
        </a>

        <nav
          ref={nav}
          className="dock-links"
          aria-label="Principal"
          onMouseLeave={() => setInd((s) => ({ ...s, show: false }))}
        >
          <span
            className="dock-ind"
            style={{ transform: `translateX(${ind.x}px)`, width: ind.w, opacity: ind.show ? 1 : 0 }}
          />
          {links.map((l) => (
            <a key={l.href} href={l.href} onMouseEnter={enter} onFocus={enter}>
              {l.label}
            </a>
          ))}
        </nav>

        <ButtonLanguage />
        <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          {open ? "×" : "Menu"}
        </button>
        <i className="dock-progress" aria-hidden="true" />
      </div>

      {open && (
        <nav className="dock-menu" aria-label="Móvil">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
