import React from "react";
import { IconUserFilled } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation("about-me");

  return (
    <section
      id="sobre-mi"
      className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <IconUserFilled strokeWidth={2} className="size-6 text-sky-300" />
            </span>
            {t("title")}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05]">
            <p className="text-sm text-white/50">{t("card1Title")}</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-white">
              {t("card1Text")}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05]">
            <p className="text-sm text-white/50">{t("card2Title")}</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-white">
              {t("card2Text")}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05]">
            <p className="text-sm text-white/50">{t("card3Title")}</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-white">
              {t("card3Text")}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              {t("p1")}
            </p>

            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              {t("p2")}
            </p>

            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              {t("p3")}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-white/50">{t("sideTitle1")}</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {t("sideText1")}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-white/50">{t("sideTitle2")}</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {t("sideText2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
