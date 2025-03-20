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
      className="flex items-center justify-center border rounded-2xl gap-2 px-4 py-2 text-white hover:text-sky-400 transition duration-300 cursor-pointer"
    >
      <Globe size={18} className="inline-block" />{" "}
      <span className="text-lg font-medium">{language.toUpperCase()}</span>
    </button>
  );
}

export default ButtonLanguage;
