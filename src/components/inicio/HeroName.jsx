import React, { useEffect, useRef } from "react";
import { spring, stepSpring, settled, clamp } from "../../lib/spring";

const BASE = 850;

// Nombre gigante hecho de letras sueltas: las cercanas al cursor se afinan, se inclinan y se apartan
// con resorte (la fuente es variable: peso, "blandura" y "rareza" cambian en vivo).
const HeroName = ({ lines }) => {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const letters = [...root.current.querySelectorAll(".ltr")];
    const S = letters.map(() => ({ x: spring(), y: spring(), r: spring(), w: spring(BASE) }));
    let mouse = null, raf = 0, last = 0;

    const lock = () =>
      letters.forEach((l) => {
        l.style.width = "";
        l.style.width = `${l.offsetWidth}px`;
      });
    document.fonts?.ready.then(lock);

    const loop = (t) => {
      const dt = Math.min(0.032, (t - last) / 1000 || 0.016);
      last = t;
      const reach = Math.max(180, window.innerWidth * 0.16);
      let rest = true;

      letters.forEach((el, i) => {
        const line = el.parentElement.getBoundingClientRect();
        const cx = line.left + el.offsetLeft + el.offsetWidth / 2;
        const cy = line.top + el.offsetTop + el.offsetHeight / 2;
        let tx = 0, ty = 0, tr = 0, tw = BASE, inf = 0;
        if (mouse) {
          const dx = cx - mouse.x, dy = cy - mouse.y;
          const d = Math.hypot(dx, dy) || 1;
          inf = clamp(1 - d / reach) ** 2;
          tx = (dx / d) * inf * reach * 0.34;
          ty = (dy / d) * inf * reach * 0.34;
          tr = (dx / reach) * inf * 16;
          tw = BASE - 520 * inf;
        }
        const s = S[i];
        stepSpring(s.x, tx, dt, 0.42, 0.55);
        stepSpring(s.y, ty, dt, 0.42, 0.55);
        stepSpring(s.r, tr, dt, 0.42, 0.55);
        stepSpring(s.w, tw, dt, 0.3, 0.8);
        if (!(settled(s.x, tx) && settled(s.y, ty) && settled(s.r, tr, 0.1) && settled(s.w, tw, 0.5))) rest = false;
        el.style.transform = `translate3d(${s.x.x.toFixed(1)}px,${s.y.x.toFixed(1)}px,0) rotate(${s.r.x.toFixed(2)}deg)`;
        const w = Math.round(s.w.x / 12) * 12;
        const key = `${w}${inf > 0.25 ? 1 : 0}`;
        if (el._k !== key) {
          el._k = key;
          el.style.fontVariationSettings = `"wght" ${w}, "SOFT" 100, "WONK" ${inf > 0.25 ? 1 : 0}`;
        }
      });

      if (rest) { raf = 0; return; }
      raf = requestAnimationFrame(loop);
    };
    const kick = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } };

    const move = (e) => { mouse = { x: e.clientX, y: e.clientY }; kick(); };
    const leave = () => { mouse = null; kick(); };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    window.addEventListener("resize", lock);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("resize", lock);
    };
  }, []);

  let n = 0;
  return (
    <h1 ref={root} className="hero-name" aria-label={lines.join(" ")}>
      {lines.map((text) => (
        <span className="line" key={text} aria-hidden="true">
          {text.split("").map((c) => (
            <span key={n} className="ltr" style={{ "--i": n++ }}>
              {c}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};

export default HeroName;
