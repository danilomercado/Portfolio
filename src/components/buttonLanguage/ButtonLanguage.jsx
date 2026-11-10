import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function ButtonLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");

  const toggleLanguage = () => {
    const newLanguage = language.startsWith("en") ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage} title="Cambiar idioma / Toggle Language" className="lang-btn">
      {language.slice(0, 2).toUpperCase()}
    </button>
  );
}

export default ButtonLanguage;
