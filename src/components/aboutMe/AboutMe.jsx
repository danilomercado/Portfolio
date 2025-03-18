import {
  IconUserFilled,
  IconBrandGithub,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandPython,
  IconCode,
} from "@tabler/icons-react";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation("about-me");
  return (
    <section
      id="sobre-mi"
      className="w-full mx-auto lg:w-[740px] py-16 px-4 container lg:max-w-4xl md:max-w-2xl"
    >
      <div>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6 flex gap-x-3 items-center">
          <IconUserFilled strokeWidth={2} className="size-9" />
          {t("about-me")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
          {t("text")} <span className="font-semibold">{t("text2")}</span>{" "}
          {t("text3")}
          <strong>{t("text4")}</strong>
          {t("text5")}{" "}
          <span className="text-blue-500 font-medium">{t("text6")}</span>{" "}
          {t("text7")} <span className="font-medium">{t("text8")}</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
