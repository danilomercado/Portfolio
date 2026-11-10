import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconBrandGithub } from "@tabler/icons-react";
import { spring, stepSpring } from "../../lib/spring";

const DATA = [
  { id: 0, key: "OdooAgent", title: "Odoo AI Agent", github: "https://github.com/danilomercado/Odoo-AI-Agent", image: "/img/odoo.webp", tags: ["Python", "LangChain", "XML-RPC", "PostgreSQL"] },
  { id: 1, key: "YumeTrack", title: "YumeTrack", github: "https://github.com/danilomercado/YumeTrack", image: "/img/yumePort.webp", tags: ["React", "Tailwind CSS", ".NET", "PostgreSQL", "Entity Framework", "JWT"] },
  { id: 2, key: "ArmaF5", title: "ArmaF5", github: "https://github.com/danilomercado/FUTBOL5", image: "/img/f5Port.webp", tags: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"] },
  { id: 3, key: "CanchaYa", title: "CanchaYa", github: "https://github.com/danilomercado/CanchaYa.git", image: "/img/canchaya.webp", tags: ["React", "Tailwind CSS", "Node.js"] },
];

// Proyectos como mazo de cartas: se agarra la de arriba y se tira hacia un costado (con inercia);
// si el tiro es flojo vuelve con resorte; si es fuerte vuela y se va al fondo del mazo.
const CardProyects = () => {
  const { t } = useTranslation("proyects");
  const { t: tHome } = useTranslation("inicio");
  const [order, setOrder] = useState(DATA.map((d) => d.id));
  const [entering, setEntering] = useState(null);
  const orderRef = useRef(order);
  orderRef.current = order;
  const els = useRef({});
  const st = useRef({});

  const state = (id) => (st.current[id] ||= { x: spring(), y: spring(), raf: 0, drag: null, hist: [], busy: false });

  const apply = (id) => {
    const s = state(id);
    const el = els.current[id];
    if (!el) return;
    el.style.setProperty("--x", `${s.x.x.toFixed(1)}px`);
    el.style.setProperty("--y", `${s.y.x.toFixed(1)}px`);
    el.style.setProperty("--dr", `${(s.x.x * 0.045).toFixed(2)}deg`);
  };

  const finishThrow = (id) => {
    const s = state(id);
    const el = els.current[id];
    s.busy = false;
    el.classList.add("snap");
    s.x.x = s.y.x = s.x.v = s.y.v = 0;
    apply(id);
    setOrder((o) => [...o.filter((x) => x !== id), id]);
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("snap", "moving")));
  };

  const run = (id, targetX, throwing) => {
    const s = state(id);
    const el = els.current[id];
    cancelAnimationFrame(s.raf);
    el.classList.add("moving");
    s.busy = true;
    let last = performance.now();
    const loop = (now) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      stepSpring(s.x, targetX, dt, throwing ? 0.55 : 0.45, throwing ? 1 : 0.6);
      stepSpring(s.y, throwing ? s.y.x + s.y.v * 0.05 : 0, dt, 0.5, 1);
      apply(id);
      if (throwing && Math.abs(s.x.x) > window.innerWidth * 0.62) return finishThrow(id);
      if (!throwing && Math.abs(s.x.x) < 0.3 && Math.abs(s.x.v) < 0.5 && Math.abs(s.y.x) < 0.3) {
        s.x.x = s.y.x = s.x.v = s.y.v = 0;
        apply(id);
        s.busy = false;
        el.classList.remove("moving");
        return;
      }
      s.raf = requestAnimationFrame(loop);
    };
    s.raf = requestAnimationFrame(loop);
  };

  const down = (e, id) => {
    if (id !== orderRef.current[0] || e.button || e.target.closest("a,button")) return;
    const s = state(id);
    if (s.busy) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    s.drag = { px: e.clientX, py: e.clientY, bx: s.x.x, by: s.y.x };
    s.hist = [{ t: performance.now(), x: e.clientX }];
    els.current[id].classList.add("moving", "grabbed");
  };
  const move = (e, id) => {
    const s = state(id);
    if (!s.drag) return;
    s.x.x = s.drag.bx + e.clientX - s.drag.px;
    s.y.x = s.drag.by + (e.clientY - s.drag.py) * 0.6;
    const now = performance.now();
    s.hist.push({ t: now, x: e.clientX });
    s.hist = s.hist.filter((h) => now - h.t < 100);
    apply(id);
  };
  const up = (id) => {
    const s = state(id);
    if (!s.drag) return;
    const a = s.hist[0], b = s.hist[s.hist.length - 1];
    const vx = ((b.x - a.x) / Math.max(0.016, (b.t - a.t) / 1000)) * 0.9;
    s.drag = null;
    els.current[id].classList.remove("grabbed");
    s.x.v = vx;
    s.y.v = 0;
    const projected = s.x.x + vx * 0.22;
    if (Math.abs(projected) > 140) run(id, Math.sign(projected) * (window.innerWidth + 400), true);
    else run(id, 0, false);
  };

  const next = () => {
    const id = orderRef.current[0];
    const s = state(id);
    if (s.busy) return;
    s.x.v = -1500;
    run(id, -(window.innerWidth + 400), true);
  };
  const prev = () => {
    const o = orderRef.current;
    const id = o[o.length - 1];
    setEntering(id);
    setOrder([id, ...o.slice(0, -1)]);
    setTimeout(() => setEntering(null), 600);
  };
  const bring = (id) => {
    const o = orderRef.current;
    const i = o.indexOf(id);
    setOrder([...o.slice(i), ...o.slice(0, i)]);
  };

  useEffect(() => () => Object.values(st.current).forEach((s) => cancelAnimationFrame(s.raf)), []);

  return (
    <section id="proyectos" className="sheet sheet-violet">
      <div className="wrap section deck-grid">
        <div className="deck-intro">
          <h2 className="display h-lg" data-reveal>
            {t("title")}
          </h2>
          <p className="lead" data-reveal style={{ "--d": 1 }}>
            {t("subtitle")}
          </p>

          <div className="deck-controls" data-reveal style={{ "--d": 2 }}>
            <button type="button" className="btn btn-soft" onClick={prev}>
              ← {t("prev")}
            </button>
            <button type="button" className="btn" onClick={next}>
              {t("next")} →
            </button>
            <span className="deck-count" aria-live="polite">
              {order[0] + 1} / {DATA.length}
            </span>
          </div>

          <ol className="deck-list">
            {DATA.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  className={order[0] === p.id ? "is-on" : ""}
                  aria-current={order[0] === p.id ? "true" : undefined}
                  onClick={() => bring(p.id)}
                >
                  <span>{p.title}</span>
                  <small>{p.tags.slice(0, 3).join(" · ")}</small>
                </button>
              </li>
            ))}
          </ol>
          <p className="hint">{t("deckHint")}</p>
        </div>

        <div className="deck">
          {DATA.map((p) => {
            const k = order.indexOf(p.id);
            return (
              <article
                key={p.id}
                ref={(n) => (els.current[p.id] = n)}
                className={`deck-card ${p.id % 2 ? "deck-ink" : "deck-paper"} ${entering === p.id ? "entering" : ""}`}
                style={{ "--k": k, "--kc": Math.min(k, 2), "--ks": Math.min(k, 3), "--sg": k % 2 ? 1 : -1, zIndex: 10 - k, pointerEvents: k === 0 ? "auto" : "none" }}
                data-cursor={k === 0 ? tHome("drag") : undefined}
                onPointerDown={(e) => down(e, p.id)}
                onPointerMove={(e) => move(e, p.id)}
                onPointerUp={() => up(p.id)}
                onPointerCancel={() => up(p.id)}
                aria-hidden={k !== 0}
              >
                <div className="deck-frame">
                  <img alt={p.title} loading="lazy" decoding="async" width="920" height="518" src={p.image} draggable="false" />
                </div>
                <div className="deck-body">
                  <h3 className="display">{p.title}</h3>
                  <p className="tags">{p.tags.join(" · ")}</p>
                  <p className="desc">{t(`${p.key}.text-proyect`)}</p>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn" tabIndex={k === 0 ? 0 : -1}>
                    <IconBrandGithub className="size-5" />
                    GitHub
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardProyects;
