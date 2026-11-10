import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import CarArt from "./CarArt";

const BODY = ["var(--violet)", "var(--lilac)", "var(--mid)", "var(--paper)"];

// Cruza la pantalla; si lo tocás en pleno viaje, pega un salto y toca bocina.
const Car = ({ car, honk, onDone }) => {
  const box = useRef(null);
  const body = useRef(null);
  const [bubble, setBubble] = useState(true);

  useEffect(() => {
    const el = box.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const W = window.innerWidth;
    const from = car.dir === 1 ? -220 : W + 70;
    const to = car.dir === 1 ? W + 70 : -220;
    const anim = reduce
      ? el.animate([{ transform: `translateX(${W / 2 - 75}px)`, opacity: 1 }, { transform: `translateX(${W / 2 - 75}px)`, opacity: 0 }], { duration: 1800, delay: 400 })
      : el.animate(
          [{ transform: `translateX(${from}px)` }, { transform: `translateX(${to}px)` }],
          { duration: 3400 + Math.random() * 1200, easing: "cubic-bezier(0.45, 0.05, 0.55, 0.95)" },
        );
    anim.onfinish = onDone;
    const t = setTimeout(() => setBubble(false), 1400);
    return () => { clearTimeout(t); anim.cancel(); };
  }, []);

  const hop = () => {
    setBubble(true);
    setTimeout(() => setBubble(false), 1000);
    body.current.animate(
      [{ transform: "translateY(0) rotate(0)" }, { transform: "translateY(-70px) rotate(-8deg)", offset: 0.45 }, { transform: "translateY(0) rotate(0)" }],
      { duration: 650, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
    );
  };

  return (
    <div ref={box} className="car" style={{ bottom: 14 + car.lane * 46 }} onPointerDown={hop} aria-hidden="true">
      {bubble && <span className="car-honk">{honk}</span>}
      <div ref={body}>
        <CarArt color={car.color} style={{ transform: `scaleX(${car.dir})` }} />
      </div>
    </div>
  );
};

// Botón de la licencia con una flecha dibujada que dice dónde apretar
const CarGame = ({ label, hint, honk, cursor }) => {
  const [cars, setCars] = useState([]);
  const next = useRef(0);

  const launch = () => {
    const n = next.current++;
    setCars((c) => [...c.slice(-5), { id: n, color: BODY[n % BODY.length], dir: n % 2 ? -1 : 1, lane: n % 3 }]);
  };

  return (
    <div className="car-cta">
      <button type="button" className="btn btn-soft" onClick={launch} data-cursor={cursor}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 16h14M3 16v-4l2-5h14l2 5v4M7 16v2M17 16v2" />
          <circle cx="7.5" cy="13" r="1" />
          <circle cx="16.5" cy="13" r="1" />
        </svg>
        <span>{label}</span>
      </button>

      <span className="car-hint" aria-hidden="true">
        <svg viewBox="0 0 80 50" width="64" height="40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M74 44 C 60 8, 30 4, 10 22" />
          <path d="M10 22 L22 20 M10 22 L14 34" />
        </svg>
        <b>{hint}</b>
      </span>

      {createPortal(
        cars.map((car) => (
          <Car key={car.id} car={car} honk={honk} onDone={() => setCars((c) => c.filter((x) => x.id !== car.id))} />
        )),
        document.body,
      )}
    </div>
  );
};

export default CarGame;
