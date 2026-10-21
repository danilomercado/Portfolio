import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { rpgAudio } from "./SoundManager";

// Botón para activar o desactivar efectos de sonido RPG
const SoundToggle = () => {
  const [enabled, setEnabled] = useState(rpgAudio.enabled);

  const toggleSound = () => {
    const newState = rpgAudio.toggle();
    setEnabled(newState);
  };

  return (
    <button
      onClick={toggleSound}
      title={enabled ? "Desactivar efectos de sonido" : "Activar efectos de sonido"}
      className="group flex items-center gap-1.5 rounded-sm border border-[#d4a737]/60 bg-[#151020] px-2.5 py-1.5 text-xs font-bold text-[#fef08a] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#facc15] hover:bg-[#231a34] hover:shadow-[0_0_12px_rgba(250,204,21,0.35)]"
    >
      {enabled ? (
        <Volume2 size={14} className="text-[#facc15]" />
      ) : (
        <VolumeX size={14} className="text-white/40" />
      )}
      <span className="hidden font-['Cinzel'] tracking-wider sm:inline">
        {enabled ? "SFX" : "MUTE"}
      </span>
    </button>
  );
};

export default SoundToggle;
