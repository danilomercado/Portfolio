import React from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../../icons/Icons";
import { useTranslation } from "react-i18next";
import TypingText from "../typingText/TypingText";

const Inicio = () => {
  const { t } = useTranslation("inicio");

  return (
    <section
      id="/"
      className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="relative mx-auto mb-8 flex w-full max-w-[380px] items-center justify-center lg:mx-0">
            <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-slate-200/30 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:h-[320px] sm:w-[320px]">
              <div className="absolute h-[92%] w-[92%] rounded-full border-2 border-dashed border-sky-200/50" />

              <div className="relative h-[82%] w-[82%] overflow-hidden rounded-full border-4 border-sky-100/70 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.14)]">
                <img
                  src="/cv.png"
                  alt="Foto de perfil de Danilo Mercado"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <span className="absolute left-3 top-10 h-4 w-4 rounded-full border-2 border-sky-400/80 bg-white/70" />
            <span className="absolute bottom-8 right-3 h-4 w-4 rounded-full border-2 border-slate-400/70 bg-white/70" />
          </div>

          <div className="max-w-3xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-sky-300/80">
              <TypingText
                texts={[
                  t("typing1"),
                  t("typing2"),
                  t("typing3"),
                  t("typing4"),
                  t("typing5"),
                ]}
              />
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t("title")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              <strong className="font-semibold text-yellow-300">
                {t("text1")}{" "}
              </strong>
              <span>{t("text2")} </span>
              <span className="font-medium text-sky-300">{t("localidad")}</span>
              <span>{t("text3")}</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <LinkedInIcon />
              <GitHubIcon />
              <MailIcon />
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-transparent blur-3xl" />

          <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                <p className="text-sm text-white/50">{t("stackTitle")}</p>

                <p className="mt-2 text-lg font-medium leading-relaxed text-white">
                  {t("stackValue")}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t("stackDescription")}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                <p className="text-sm text-white/50">{t("goalTitle")}</p>
                <p className="mt-2 text-lg font-medium leading-relaxed text-white">
                  {t("goalValue")}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                <p className="text-sm text-white/50">{t("locationTitle")}</p>
                <p className="mt-2 text-lg font-medium text-white">
                  {t("locationValue")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
