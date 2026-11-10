import React, { useEffect, useMemo, useRef, useState } from "react";
import { EDGES, neighborsOf } from "./stackData";

const CAT_ANGLE = { backend: -2.4, frontend: -0.7, database: 0.8, tools: 2.4 };
const CATS = ["backend", "frontend", "database", "tools"];

// Mapa del stack como red de resortes: cada tecnología tira de las que usa y se empuja con las demás.
// Se agarran y se sueltan (la red se reacomoda), se filtran por categoría y al elegir una se resaltan sus conexiones.
// El bucle se duerme cuando todo se calma y se pausa fuera de pantalla.
const StackGraph = ({ items, onPick, activeId, cursorLabel, labels }) => {
  const box = useRef(null);
  const nodes = useRef([]);
  const lines = useRef([]);
  const api = useRef({});
  const [cat, setCat] = useState("all");

  const degree = useMemo(() => {
    const d = {};
    EDGES.forEach(([a, b]) => { d[a] = (d[a] || 0) + 1; d[b] = (d[b] || 0) + 1; });
    return d;
  }, []);
  const near = useMemo(() => (activeId ? new Set([activeId, ...neighborsOf(activeId)]) : null), [activeId]);

  useEffect(() => {
    const el = box.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const list = [...nodes.current];
    const edgeEls = [...lines.current];
    let W = el.clientWidth;
    let H = el.clientHeight;
    const index = Object.fromEntries(items.map((it, i) => [it.id, i]));
    const links = EDGES.map(([a, b]) => [index[a], index[b]]);

    const sim = items.map((it, i) => {
      const ang = CAT_ANGLE[it.cat] + (Math.random() - 0.5) * 0.9;
      const r = Math.min(W, H) * (0.15 + Math.random() * 0.25);
      return { x: W / 2 + Math.cos(ang) * r * 1.6, y: H / 2 + Math.sin(ang) * r, vx: 0, vy: 0, w: 110, h: 42, drag: false, el: list[i] };
    });
    const measure = () => sim.forEach((n) => { n.w = n.el.offsetWidth; n.h = n.el.offsetHeight; });

    let raf = 0, last = 0, calm = 0, active = false, visible = false;

    const render = () => {
      sim.forEach((n) => {
        n.el.style.transform = `translate3d(${(n.x - n.w / 2).toFixed(1)}px,${(n.y - n.h / 2).toFixed(1)}px,0)`;
      });
      links.forEach(([a, b], i) => {
        const l = edgeEls[i];
        l.setAttribute("x1", sim[a].x.toFixed(1));
        l.setAttribute("y1", sim[a].y.toFixed(1));
        l.setAttribute("x2", sim[b].x.toFixed(1));
        l.setAttribute("y2", sim[b].y.toFixed(1));
      });
    };

    const step = (k) => {
      const rest = Math.max(105, Math.min(180, W * 0.14));
      for (let i = 0; i < sim.length; i++) {
        for (let j = i + 1; j < sim.length; j++) {
          const a = sim[i], b = sim[j];
          const dx = b.x - a.x, dy = (b.y - a.y) * 1.5;
          const d2 = dx * dx + dy * dy + 120;
          const d = Math.sqrt(d2);
          const f = Math.min(5, 26000 / d2);
          const fx = (dx / d) * f, fy = ((dy / d) * f) * 1.5;
          if (!a.drag) { a.vx -= fx * k; a.vy -= fy * k; }
          if (!b.drag) { b.vx += fx * k; b.vy += fy * k; }
          // las etiquetas no se pisan: si dos rectángulos se superponen, se separan por el lado más corto
          const ox = (a.w + b.w) / 2 + 12 - Math.abs(b.x - a.x);
          const oy = (a.h + b.h) / 2 + 10 - Math.abs(b.y - a.y);
          if (ox > 0 && oy > 0) {
            const px = ox < oy ? Math.sign(b.x - a.x || 1) * ox * 0.6 : 0;
            const py = ox < oy ? 0 : Math.sign(b.y - a.y || 1) * oy * 0.6;
            if (!a.drag) { a.x -= px * 0.5; a.y -= py * 0.5; }
            if (!b.drag) { b.x += px * 0.5; b.y += py * 0.5; }
            if (a.drag && !b.drag) { b.x += px; b.y += py; }
            if (b.drag && !a.drag) { a.x -= px; a.y -= py; }
          }
        }
      }
      links.forEach(([i, j]) => {
        const a = sim[i], b = sim[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 1;
        const f = (d - rest) * 0.014;
        const fx = (dx / d) * f, fy = (dy / d) * f;
        if (!a.drag) { a.vx += fx * k; a.vy += fy * k; }
        if (!b.drag) { b.vx -= fx * k; b.vy -= fy * k; }
      });
      const damp = Math.pow(0.86, k);
      sim.forEach((n) => {
        if (n.drag) return;
        n.vx += (W / 2 - n.x) * 0.0022 * k;
        n.vy += (H / 2 - n.y) * 0.0034 * k;
        n.vx *= damp; n.vy *= damp;
        n.x += n.vx * k; n.y += n.vy * k;
        const mx = n.w / 2 + 8, my = n.h / 2 + 8;
        if (n.x < mx) { n.x = mx; n.vx *= -0.3; }
        if (n.x > W - mx) { n.x = W - mx; n.vx *= -0.3; }
        if (n.y < my) { n.y = my; n.vy *= -0.3; }
        if (n.y > H - my) { n.y = H - my; n.vy *= -0.3; }
      });
    };

    const frame = (t) => {
      raf = 0;
      const dt = Math.min(0.05, (t - last) / 1000 || 0.016);
      last = t;
      step(Math.min(2, dt * 60));
      render();
      const energy = sim.reduce((s, n) => s + Math.abs(n.vx) + Math.abs(n.vy), 0);
      const grabbed = sim.some((n) => n.drag);
      calm = energy < 0.25 && !grabbed ? calm + dt : 0;
      if (calm < 0.7) raf = requestAnimationFrame(frame);
    };
    const wake = () => {
      calm = 0;
      if (!raf && active && visible) { last = performance.now(); raf = requestAnimationFrame(frame); }
    };

    api.current = {
      shake: () => {
        sim.forEach((n) => { n.vx += (Math.random() - 0.5) * 36; n.vy += (Math.random() - 0.5) * 36; });
        wake();
      },
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) return;
      if (!active) {
        active = true;
        measure();
        if (reduce) {
          for (let n = 0; n < 500; n++) step(1);
          render();
          return;
        }
      }
      wake();
    }, { threshold: 0.2 });
    io.observe(el);

    const ro = new ResizeObserver(() => {
      W = el.clientWidth; H = el.clientHeight;
      measure();
      wake();
    });
    ro.observe(el);

    // de vez en cuando una tecnología se mueve sola para que la red no quede quieta
    const nudge = setInterval(() => {
      if (!visible || reduce || sim.some((n) => n.drag)) return;
      const n = sim[Math.floor(Math.random() * sim.length)];
      n.vx += (Math.random() - 0.5) * 9;
      n.vy += (Math.random() - 0.5) * 9;
      wake();
    }, 2600);

    const grab = new Map();
    const down = (e) => {
      const n = sim[list.indexOf(e.currentTarget)];
      const rect = el.getBoundingClientRect();
      e.currentTarget.setPointerCapture(e.pointerId);
      grab.set(e.pointerId, { n, ox: e.clientX - rect.left - n.x, oy: e.clientY - rect.top - n.y });
      n.drag = true; n.vx = n.vy = 0;
      n.el.dataset.drag = "1";
      onPick(items[list.indexOf(e.currentTarget)].id);
      wake();
    };
    const move = (e) => {
      const g = grab.get(e.pointerId);
      if (!g) return;
      const rect = el.getBoundingClientRect();
      g.n.x = Math.min(W - g.n.w / 2, Math.max(g.n.w / 2, e.clientX - rect.left - g.ox));
      g.n.y = Math.min(H - g.n.h / 2, Math.max(g.n.h / 2, e.clientY - rect.top - g.oy));
      wake();
      if (!raf) render();
    };
    const up = (e) => {
      const g = grab.get(e.pointerId);
      if (!g) return;
      g.n.drag = false;
      delete g.n.el.dataset.drag;
      grab.delete(e.pointerId);
      wake();
    };
    list.forEach((n) => {
      n.addEventListener("pointerdown", down);
      n.addEventListener("pointermove", move);
      n.addEventListener("pointerup", up);
      n.addEventListener("pointercancel", up);
    });
    measure();
    render();

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(nudge);
      io.disconnect();
      ro.disconnect();
      list.forEach((n) => {
        n.removeEventListener("pointerdown", down);
        n.removeEventListener("pointermove", move);
        n.removeEventListener("pointerup", up);
        n.removeEventListener("pointercancel", up);
      });
    };
  }, [items, onPick]);

  const dimNode = (it) => (near && !near.has(it.id)) || (cat !== "all" && it.cat !== cat);

  return (
    <div className="pit-wrap">
      <div className="pit-controls" role="group" aria-label={labels.filter}>
        {["all", ...CATS].map((c) => (
          <button key={c} type="button" className={`btn btn-soft ${cat === c ? "is-on" : ""}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
            {labels.cats[c]}
          </button>
        ))}
        <button type="button" className="btn btn-soft" onClick={() => api.current.shake?.()}>
          {labels.shake}
        </button>
      </div>

      <div ref={box} className="pit graph">
        <svg className="graph-edges" aria-hidden="true">
          {EDGES.map(([a, b], i) => {
            const hot = activeId && (a === activeId || b === activeId);
            const dim = (activeId && !hot) || (cat !== "all" && !(items.find((x) => x.id === a)?.cat === cat && items.find((x) => x.id === b)?.cat === cat));
            return <line key={`${a}-${b}`} ref={(n) => (lines.current[i] = n)} className={`gedge ${hot ? "is-hot" : ""} ${dim && !hot ? "is-dim" : ""}`} />;
          })}
        </svg>

        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            ref={(n) => (nodes.current[i] = n)}
            className={`gnode cat-${it.cat} ${activeId === it.id ? "active" : ""} ${dimNode(it) ? "is-dim" : ""}`}
            style={{ fontSize: `${0.86 + Math.min(degree[it.id] || 0, 6) * 0.06}rem` }}
            data-cursor={cursorLabel}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onPick(it.id)}
          >
            {it.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StackGraph;
