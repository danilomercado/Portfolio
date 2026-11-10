import { useEffect } from "react";
import { clamp } from "../../lib/spring";

// Motor de scroll. Pensado para no trabar la página:
//  - lee todas las medidas primero y escribe después (sin forzar layout varias veces por frame)
//  - escribe las variables solo en los elementos que las usan (no en <html>, que recalcularía todo el árbol)
//  - pausa las animaciones infinitas de lo que está fuera de pantalla (.pause-off)
//
//   data-scrub="pass"   progreso (--p) mientras el elemento cruza la pantalla
//   data-scrub="read"   progreso para revelar texto mientras se lee
//   data-scrub="leave"  progreso mientras el elemento sale por arriba
//   data-scrub-to=".a,.b" aplica --p solo a esos hijos
//   data-reveal         aparece una vez al entrar
const ScrollFx = () => {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    root.classList.add("js");

    let frame = 0;
    let reveals = [];
    let scrubs = [];
    let bar = null;
    let seal = null;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-off", !e.isIntersecting)),
      { rootMargin: "120px" },
    );

    const collect = () => {
      reveals = [...document.querySelectorAll("[data-reveal]:not(.in)")];
      scrubs = [...document.querySelectorAll("[data-scrub]")].map((el) => ({
        el,
        mode: el.dataset.scrub,
        targets: el.dataset.scrubTo ? [...el.querySelectorAll(el.dataset.scrubTo)] : [el],
      }));
      bar = document.querySelector(".dock-progress");
      seal = document.querySelector(".seal svg");
      document.querySelectorAll(".pause-off").forEach((el) => io.observe(el));
    };

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const y = window.scrollY;
      const max = root.scrollHeight - vh;

      // 1) lecturas
      const toReveal = reveals.filter((el) => el.getBoundingClientRect().top < vh * 0.92);
      const values = reduce.matches
        ? []
        : scrubs.map((s) => {
            const r = s.el.getBoundingClientRect();
            let p;
            if (s.mode === "leave") p = -r.top / r.height;
            else if (s.mode === "read") p = (vh * 0.9 - r.top) / (r.height + vh * 0.4);
            else p = (vh - r.top) / (vh + r.height);
            return clamp(p);
          });

      // 2) escrituras
      if (bar) bar.style.transform = `scaleX(${max > 0 ? clamp(y / max).toFixed(4) : 0})`;
      if (seal && !reduce.matches) seal.style.transform = `rotate(${(y * 0.28).toFixed(1)}deg)`;
      if (toReveal.length) {
        toReveal.forEach((el) => el.classList.add("in"));
        reveals = reveals.filter((el) => !toReveal.includes(el));
      }
      scrubs.forEach((s, i) => {
        if (values[i] === undefined) return;
        const v = values[i].toFixed(3);
        s.targets.forEach((t) => t.style.setProperty("--p", v));
      });
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const relayout = () => {
      collect();
      request();
    };

    relayout();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", relayout);
    window.addEventListener("load", relayout);
    const observer = new ResizeObserver(relayout);
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", relayout);
      window.removeEventListener("load", relayout);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default ScrollFx;
