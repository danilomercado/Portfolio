import React, { useEffect, useRef } from "react";

// Fondo animado de brasas y partículas arcanas flotantes
const ArcaneBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Genera partículas arcanas y brasas mágicas
    const particleCount = Math.min(45, Math.floor(width / 35));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.2,
      color:
        Math.random() > 0.4
          ? "rgba(234, 179, 8, " // Brasa dorada
          : "rgba(56, 189, 248, ", // Chispa de maná
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulse: Math.random() * Math.PI,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;

        const currentOpacity =
          p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Destello sutil alrededor de partículas grandes
        if (p.size > 2) {
          ctx.fillStyle = `${p.color}${currentOpacity * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Gradientes atmosféricos de antorchas y magia arcana */}
      <div className="absolute inset-0 bg-[#08060c]" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-600/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-purple-900/15 blur-[140px]" />
      <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-sky-900/15 blur-[130px]" />

      {/* Trama sutil de piedra y runas */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #facc15 1.5%, transparent 0%), radial-gradient(circle at 75px 75px, #38bdf8 1.5%, transparent 0%)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Capa de partículas de fuego y maná en canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Viñeta oscura periférica estilo mazmorra */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(4,3,6,0.85)_100%)]" />
    </div>
  );
};

export default ArcaneBackground;
