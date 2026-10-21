import React from "react";

// Esquina dorada ornamental para marcos y cartas
export const RpgCorner = ({ position = "top-left", className = "" }) => {
  const getStyles = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0 rotate-90";
      case "bottom-left":
        return "bottom-0 left-0 -rotate-90";
      case "bottom-right":
        return "bottom-0 right-0 rotate-180";
      default:
        return "top-0 left-0";
    }
  };

  return (
    <div
      className={`pointer-events-none absolute z-10 size-5 text-[#d4a737] ${getStyles()} ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
        <path
          d="M2 2h8v2H4v6H2V2z"
          fill="currentColor"
          stroke="#fef08a"
          strokeWidth="0.5"
        />
        <rect x="2" y="2" width="3" height="3" fill="#ef4444" />
      </svg>
    </div>
  );
};

// Sello de cera medieval
export const WaxSeal = ({ text = "DM", className = "" }) => {
  return (
    <div
      className={`relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-red-600 via-red-800 to-red-950 shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.3)] ring-2 ring-red-900/60 ${className}`}
    >
      <div className="absolute inset-1 rounded-full border border-red-400/40" />
      <span className="font-['Cinzel'] text-xs font-black tracking-wider text-amber-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
        {text}
      </span>
    </div>
  );
};

// Divisor dorado ornamental con gema central
export const RpgDivider = ({ icon = "⚔", title = "" }) => {
  return (
    <div className="my-8 flex items-center justify-center gap-4">
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#d4a737]/60 to-[#d4a737]" />
      <div className="flex items-center gap-2 rounded border border-[#d4a737]/80 bg-[#171224] px-3 py-1 shadow-[0_0_12px_rgba(212,167,55,0.3)]">
        <span className="text-sm text-[#facc15]">{icon}</span>
        {title && (
          <span className="font-['Cinzel'] text-xs font-bold tracking-widest text-[#fef08a] uppercase">
            {title}
          </span>
        )}
      </div>
      <div className="h-[2px] flex-1 bg-gradient-to-r from-[#d4a737] via-[#d4a737]/60 to-transparent" />
    </div>
  );
};

// Barra de estado de personaje RPG (HP / MP / EXP)
export const StatBar = ({
  label,
  value,
  max = 100,
  current = 100,
  type = "hp",
}) => {
  const percent = Math.min(100, Math.max(0, (current / max) * 100));

  const colors = {
    hp: {
      bar: "from-red-600 via-rose-500 to-red-700",
      glow: "rgba(239, 68, 68, 0.4)",
      border: "border-red-900/80",
      badge: "text-red-400",
    },
    mp: {
      bar: "from-sky-600 via-cyan-400 to-blue-700",
      glow: "rgba(56, 189, 248, 0.4)",
      border: "border-sky-900/80",
      badge: "text-sky-300",
    },
    exp: {
      bar: "from-amber-600 via-yellow-400 to-amber-700",
      glow: "rgba(245, 158, 11, 0.4)",
      border: "border-amber-900/80",
      badge: "text-amber-300",
    },
  }[type];

  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-xs font-bold">
        <span className={`font-['Press_Start_2P'] text-[10px] tracking-wider ${colors.badge}`}>
          {label}
        </span>
        <span className="font-mono text-xs text-white/80">{value}</span>
      </div>

      <div
        className={`relative h-3.5 w-full overflow-hidden rounded-sm border ${colors.border} bg-[#0c0914] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]`}
      >
        <div
          className={`h-full bg-gradient-to-r ${colors.bar} transition-all duration-700`}
          style={{
            width: `${percent}%`,
            boxShadow: `0 0 8px ${colors.glow}`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </div>
  );
};
