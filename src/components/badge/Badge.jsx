import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

function ButtonLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-200"
    >
      <Globe size={16} />
      <span>{language.toUpperCase()}</span>
    </button>
  );
}

export default ButtonLanguage;
