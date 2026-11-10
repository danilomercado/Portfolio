import React, { useEffect, useRef } from "react";
import { spring, stepSpring, settled, rubberband } from "../../lib/spring";

// Se agarra y se estira con resistencia (rubber-band); al soltar vuelve con un resorte
// que hereda la velocidad del gesto, y se puede volver a agarrar en pleno vuelo.
// Expone la velocidad como --vx/--vy para que el contenido se deforme como gelatina.
const Draggable = ({ as: Tag = "div", className = "", style, children, tether = 260, cursor }) => {
  const ref = useRef(null);
  const st = useRef({ x: spring(), y: spring(), raf: 0, hist: [], drag: null });

  const apply = () => {
    const { x, y } = st.current;
    const el = ref.current;
    el.style.setProperty("--x", `${x.x.toFixed(2)}px`);
    el.style.setProperty("--y", `${y.x.toFixed(2)}px`);
    el.style.setProperty("--vx", x.v.toFixed(1));
    el.style.setProperty("--vy", y.v.toFixed(1));
  };

  const run = () => {
    const s = st.current;
    cancelAnimationFrame(s.raf);
    let last = performance.now();
    const loop = (t) => {
      const dt = Math.min(0.032, (t - last) / 1000);
      last = t;
      stepSpring(s.x, 0, dt, 0.5, 0.62);
      stepSpring(s.y, 0, dt, 0.5, 0.62);
      apply();
      if (settled(s.x, 0) && settled(s.y, 0)) {
        s.x.x = s.y.x = s.x.v = s.y.v = 0;
        apply();
        return;
      }
      s.raf = requestAnimationFrame(loop);
    };
    s.raf = requestAnimationFrame(loop);
  };

  useEffect(() => () => cancelAnimationFrame(st.current.raf), []);

  const down = (e) => {
    if (e.button) return;
    const s = st.current;
    cancelAnimationFrame(s.raf);
    e.currentTarget.setPointerCapture(e.pointerId);
    s.drag = { px: e.clientX, py: e.clientY, bx: s.x.x, by: s.y.x };
    s.hist = [{ t: performance.now(), x: e.clientX, y: e.clientY }];
    ref.current.classList.add("is-dragging");
  };
  const move = (e) => {
    const s = st.current;
    if (!s.drag) return;
    s.x.x = s.drag.bx + rubberband(e.clientX - s.drag.px, tether);
    s.y.x = s.drag.by + rubberband(e.clientY - s.drag.py, tether);
    const now = performance.now();
    s.hist.push({ t: now, x: e.clientX, y: e.clientY });
    s.hist = s.hist.filter((h) => now - h.t < 90);
    const a = s.hist[0];
    const dt = Math.max(0.016, (now - a.t) / 1000);
    s.x.v = ((e.clientX - a.x) / dt) * 0.6;
    s.y.v = ((e.clientY - a.y) / dt) * 0.6;
    apply();
  };
  const up = () => {
    const s = st.current;
    if (!s.drag) return;
    const a = s.hist[0];
    const b = s.hist[s.hist.length - 1];
    const dt = Math.max(0.016, (b.t - a.t) / 1000);
    s.x.v = ((b.x - a.x) / dt) * 0.45;
    s.y.v = ((b.y - a.y) / dt) * 0.45;
    s.drag = null;
    ref.current.classList.remove("is-dragging");
    run();
  };

  return (
    <Tag
      ref={ref}
      className={`drag ${className}`}
      style={style}
      data-cursor={cursor}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
    >
      {children}
    </Tag>
  );
};

export default Draggable;
