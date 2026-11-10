import React from "react";

// Logo: monograma "DM" dentro de una mancha orgánica, con tres rayas de camino debajo (el auto de Experiencia y el viaje de la web).
// Usa los colores de la paleta tierra a través de las variables del sitio.
const LogoMark = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={`logo-mark ${className}`} aria-hidden="true">
    <path fill="var(--violet)" d="M60 6C88 4 114 26 112 58C110 90 88 116 56 114C24 112 6 88 8 58C10 28 32 8 60 6Z" />
    <path fill="var(--ink)" fillRule="evenodd" d="M22 36H38A23 23 0 0 1 38 82H22ZM31 45H38A14 14 0 0 1 38 73H31Z" />
    <path fill="var(--ink)" d="M64 82V50C64 41 68 37 74 37C79 37 82 40 82 46C82 40 85 37 90 37C96 37 100 41 100 50V82H92V52C92 48 91 46 89 46C87 46 86 48 86 52V82H78V52C78 48 77 46 75 46C73 46 72 48 72 52V82Z" />
    <g fill="var(--paper)">
      <rect x="34" y="92" width="14" height="4.5" rx="2.25" />
      <rect x="53" y="92" width="14" height="4.5" rx="2.25" />
      <rect x="72" y="92" width="14" height="4.5" rx="2.25" />
    </g>
  </svg>
);

export default LogoMark;
