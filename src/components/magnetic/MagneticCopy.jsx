import React, { useEffect, useRef, useState } from "react";
import { spring, stepSpring, settled } from "../../lib/spring";

// Botón gigante con imán: se acerca al cursor cuando estás cerca y vuelve con resorte. Al click copia el texto.
const MagneticCopy = ({ text, label, doneLabel }) => {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = spring(), y = spring();
    let tx = 0, ty = 0, raf = 0, last = 0;

    const loop = (t) => {
      const dt = Math.min(0.032, (t - last) / 1000 || 0.016);
      last = t;
      stepSpring(x, tx, dt, 0.45, 0.55);
      stepSpring(y, ty, dt, 0.45, 0.55);
      el.style.transform = `translate3d(${x.x.toFixed(1)}px,${y.x.toFixed(1)}px,0)`;
      if (tx === 0 && ty === 0 && settled(x, 0) && settled(y, 0)) { raf = 0; return; }
      raf = requestAnimationFrame(loop);
    };
    const kick = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } };

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const reach = Math.max(r.width, r.height) * 0.9;
      if (Math.hypot(dx, dy) < reach) { tx = dx * 0.28; ty = dy * 0.28; }
      else { tx = 0; ty = 0; }
      kick();
    };
    window.addEventListener("pointermove", move);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);

  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* sin permiso: queda el mailto */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button ref={ref} type="button" className="magnet" onClick={copy} data-cursor={copied ? doneLabel : label}>
      <span>{copied ? doneLabel : text}</span>
    </button>
  );
};

export default MagneticCopy;
