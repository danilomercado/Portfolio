import React from "react";

// Auto dibujado en código: frente a la derecha (parabrisas inclinado, capó corto y faro adelante).
// Con className "scroll" las ruedas giran según la variable --roll en vez de girar solas.
const CarArt = ({ color = "var(--violet)", className = "", style }) => (
  <svg viewBox="0 0 160 84" className={`car-art ${className}`} style={style} aria-hidden="true">
    <g className="car-bob">
      <path d="M8 58 L8 46 Q8 40 15 40 L34 38 L46 21 Q50 16 58 16 L92 16 Q101 16 107 22 L124 38 L147 42 Q154 44 154 52 L154 64 L8 64 Z" fill={color} />
      <path d="M52 36 L58 22 L76 22 L76 36 Z" fill="var(--ink)" opacity="0.85" />
      <path d="M81 36 L81 22 L94 22 Q99 22 103 26 L116 36 Z" fill="var(--ink)" opacity="0.85" />
      <rect x="147" y="46" width="8" height="8" rx="4" fill="var(--paper)" />
      <rect x="8" y="46" width="6" height="9" rx="3" fill="var(--ink)" opacity="0.55" />
    </g>
    {[42, 118].map((cx) => (
      <g key={cx} className="car-wheel">
        <circle cx={cx} cy="66" r="15" fill="var(--ink)" />
        <circle cx={cx} cy="66" r="6" fill="var(--lilac)" />
        <rect x={cx - 1.5} y="53" width="3" height="26" fill="var(--ink-soft)" />
        <rect x={cx - 13} y="64.5" width="26" height="3" fill="var(--ink-soft)" />
      </g>
    ))}
  </svg>
);

export default CarArt;
