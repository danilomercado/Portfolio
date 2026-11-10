// Resorte con "damping" y "response" como los de Apple: damping 1 = sin rebote, menos = rebota.
// response = segundos aproximados para llegar al destino. Integración semi-implícita.
export const spring = (x = 0, v = 0) => ({ x, v });

export function stepSpring(s, target, dt, response = 0.5, damping = 0.8) {
  const w = (2 * Math.PI) / response;
  s.v += (-w * w * (s.x - target) - 2 * damping * w * s.v) * dt;
  s.x += s.v * dt;
  return s;
}

export const settled = (s, target, eps = 0.05) =>
  Math.abs(s.x - target) < eps && Math.abs(s.v) < eps;

// Resistencia progresiva: cuanto más lejos del origen, menos sigue al puntero.
export function rubberband(offset, dimension = 240, c = 0.55) {
  const a = Math.abs(offset);
  return Math.sign(offset) * ((a * dimension * c) / (dimension + c * a));
}

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
