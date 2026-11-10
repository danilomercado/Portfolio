import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { clamp, spring, stepSpring, settled } from "../../lib/spring";
import CarArt from "../carGame/CarArt";

const TONES = ["paper", "ink", "violet"];
const FAR = "M0 200 C 200 80, 380 80, 560 170 S 900 250, 1100 150 S 1500 40, 1700 150 S 2000 230, 2200 130 V300 H0 Z";
const MID = "M0 230 C 160 140, 340 150, 520 210 S 860 270, 1060 190 S 1440 120, 1640 200 S 2000 260, 2200 180 V300 H0 Z";
const NEAR = "M0 260 C 180 200, 360 210, 540 250 S 860 290, 1100 240 S 1500 200, 1720 250 S 2000 285, 2200 245 V300 H0 Z";

const Hill = ({ d, className }) => (
  <svg className={`xp-hill ${className}`} viewBox="0 0 2200 300" preserveAspectRatio="none" aria-hidden="true">
    <path d={d} />
  </svg>
);

// Experiencia como viaje: al scrollear, un auto recorre el camino; el paisaje se mueve a distinta velocidad
// (colinas, sol, nubes) y cada trabajo es una parada que llega deslizándose hasta el centro.
// Todo sigue el scroll con un resorte, así que tiene inercia. En celular queda como lista.
const Experience = () => {
  const { t } = useTranslation("experience");
  const items = t("items", { returnObjects: true });
  const list = Array.isArray(items) ? items : [];
  const [on, setOn] = useState(false);
  const [active, setActive] = useState(0);
  const track = useRef(null);
  const stage = useRef(null);
  const car = useRef(null);
  const cards = useRef([]);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 900px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setOn(wide.matches && !reduce.matches);
    sync();
    wide.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      wide.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!on || list.length < 2) return;
    const s = spring(0);
    let target = 0, raf = 0, last = 0, prev = 0, puff = 0;

    const paint = (dt, now) => {
      const el = stage.current;
      const v = dt ? (s.x - prev) / dt : 0;
      prev = s.x;
      el.style.setProperty("--s", s.x.toFixed(4));
      el.style.setProperty("--rd", `${(-(s.x * 620) % 120).toFixed(1)}px`);
      el.style.setProperty("--roll", `${(s.x * 760).toFixed(1)}deg`);
      el.style.setProperty("--lean", `${clamp(-v * 5, -5, 5).toFixed(2)}deg`);
      el.style.setProperty("--bump", `${(Math.sin(s.x * 90) * 1.6).toFixed(2)}px`);
      cards.current.forEach((c, i) => {
        if (!c) return;
        const d = i - s.x;
        c.style.setProperty("--d", d.toFixed(3));
        c.style.setProperty("--ad", Math.abs(d).toFixed(3));
        c.style.zIndex = String(20 - Math.round(Math.abs(d) * 4));
        c.classList.toggle("near", Math.abs(d) < 0.4);
      });
      // humito del escape cuando va rápido
      if (Math.abs(v) > 0.22 && now - puff > 120 && car.current) {
        puff = now;
        const p = document.createElement("i");
        p.className = "xp-puff";
        p.addEventListener("animationend", () => p.remove());
        car.current.appendChild(p);
      }
    };

    const loop = (now) => {
      const dt = Math.min(0.032, (now - last) / 1000 || 0.016);
      last = now;
      stepSpring(s, target, dt, 0.7, 0.8);
      paint(dt, now);
      if (settled(s, target, 0.0008)) { raf = 0; return; }
      raf = requestAnimationFrame(loop);
    };
    const kick = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } };

    const onScroll = () => {
      const r = track.current.getBoundingClientRect();
      const dist = Math.max(1, r.height - window.innerHeight);
      target = clamp(-r.top / dist) * (list.length - 1);
      setActive(Math.round(target));
      kick();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [on, list.length]);

  const go = (i) => {
    const top = track.current.getBoundingClientRect().top + window.scrollY;
    const dist = track.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + dist * (i / Math.max(1, list.length - 1)), behavior: "smooth" });
  };

  return (
    <section id="experiencia" className={`sheet sheet-ink xp ${on ? "on" : ""}`} style={{ "--n": list.length }}>
      <div className="wrap section xp-head">
        <div className="section-head">
          <h2 className="display h-xl" data-reveal>
            {t("title")}
          </h2>
          <p className="lead" data-reveal style={{ "--d": 1 }}>
            {t("profile")}
          </p>
        </div>

        <div ref={track} className="xp-track">
          <div ref={stage} className="xp-stage">
            <div className="xp-scene pause-off" data-scrub="pass" data-scrub-to=".xp-strip">
              <div className="xp-strip" aria-hidden="true">
                <Hill d={FAR} className="strip-hill" />
                <div className="strip-road">
                  <i />
                </div>
                <div className="strip-car">
                  <CarArt color="var(--violet)" className="scroll" />
                </div>
              </div>

              <div className="xp-deco" aria-hidden="true">
                <span className="xp-sun" />
                <span className="xp-cloud c1" />
                <span className="xp-cloud c2" />
                <span className="xp-cloud c3" />
                <Hill d={FAR} className="far" />
                <Hill d={MID} className="mid" />
                <Hill d={NEAR} className="near" />
                <div className="xp-road">
                  <i />
                </div>
                <div ref={car} className="xp-car">
                  <CarArt color="var(--violet)" className="scroll" />
                </div>
              </div>

              <div className="xp-cards">
                {list.map((item, i) => (
                  <article
                    key={item.company}
                    ref={(n) => (cards.current[i] = n)}
                    className={`xp-card tone-${TONES[i % TONES.length]}`}
                  >
                    <div>
                      {item.kind && <span className="xp-kind">{item.kind}</span>}
                      <h3 className="xp-company display">{item.company}</h3>
                      <p className="xp-meta">
                        {item.period}
                        <span>{item.place}</span>
                      </p>
                    </div>
                    <div className="xp-body glass">
                      <p className="xp-role">{item.role}</p>
                      <ul className="xp-list">
                        {item.bullets.map((b, k) => (
                          <li key={b} style={{ "--k": k }}>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="xp-stops">
              {list.map((item, i) => (
                <button
                  key={item.company}
                  type="button"
                  className={`xp-stop ${i === active ? "is-active" : ""}`}
                  onClick={() => go(i)}
                >
                  {item.company}
                </button>
              ))}
              <span className={`xp-hint ${active === list.length - 1 ? "gone" : ""}`} aria-hidden="true">
                {t("hint")} →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
