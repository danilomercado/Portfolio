import React, { useEffect, useRef } from "react";
import { spring, stepSpring, settled } from "../../lib/spring";

// Cursor propio: un punto que sigue al mouse con resorte y se infla con una etiqueta
// cuando pasás por algo con data-cursor="..." o por un link/botón.
// El bucle se duerme cuando el punto llegó a destino.
const Cursor = () => {
  const dot = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const x = spring(-100);
    const y = spring(-100);
    const s = spring(1);
    let tx = -100, ty = -100, ts = 1, raf = 0, last = 0, text = "", big = 1;

    const loop = (t) => {
      const dt = Math.min(0.032, (t - last) / 1000 || 0.016);
      last = t;
      if (reduce) {
        x.x = tx; y.x = ty; s.x = ts;
      } else {
        stepSpring(x, tx, dt, 0.18, 0.9);
        stepSpring(y, ty, dt, 0.18, 0.9);
        stepSpring(s, ts, dt, 0.35, 0.65);
      }
      dot.current.style.transform = `translate3d(${x.x.toFixed(1)}px,${y.x.toFixed(1)}px,0) translate(-50%,-50%) scale(${s.x.toFixed(3)})`;
      if (!reduce && settled(x, tx, 0.1) && settled(y, ty, 0.1) && settled(s, ts, 0.01)) { raf = 0; return; }
      raf = requestAnimationFrame(loop);
    };
    const kick = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } };

    const move = (e) => { tx = e.clientX; ty = e.clientY; kick(); };
    const over = (e) => {
      const el = e.target.closest?.("[data-cursor],a,button");
      if (!el) {
        ts = 1; big = 1; text = "";
        dot.current.classList.remove("on");
        kick();
        return;
      }
      text = el.dataset.cursor || "";
      big = text ? Math.min(8, 3.2 + text.length * 0.45) : 2.6;
      ts = big;
      label.current.textContent = text;
      dot.current.classList.toggle("on", !!text);
      kick();
    };
    const down = () => { ts *= 0.82; kick(); };
    const up = () => { ts = big; kick(); };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div ref={dot} className="cursor" aria-hidden="true">
      <span ref={label} />
    </div>
  );
};

export default Cursor;
