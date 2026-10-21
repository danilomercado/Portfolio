import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { rpgAudio } from "../rpg/SoundManager";

function ButtonLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");

  const toggleLanguage = () => {
    rpgAudio.playSpellChime();
    const newLanguage = language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      title="Cambiar idioma / Toggle Language"
      className="group relative flex items-center gap-2 rounded-sm border border-[#d4a737]/60 bg-[#151020] px-3 py-1.5 text-xs font-bold text-[#fef08a] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#facc15] hover:bg-[#231a34] hover:shadow-[0_0_12px_rgba(250,204,21,0.35)]"
    >
      <Globe size={14} className="text-[#facc15] transition-transform duration-300 group-hover:rotate-45" />
      <span className="font-['Cinzel'] tracking-wider">
        {language.toUpperCase()}
      </span>
      <span className="text-[10px] text-amber-400/70">✦</span>
    </button>
  );
}

export default ButtonLanguage;
