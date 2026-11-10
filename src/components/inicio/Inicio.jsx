import React from "react";
import { useTranslation } from "react-i18next";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../../icons/Icons";
import TypingText from "../typingText/TypingText";
import ViewCV from "../viewCV/ViewCV";
import Draggable from "../draggable/Draggable";
import HeroName from "./HeroName";
import CarGame from "../carGame/CarGame";

// Portada: nombre que reacciona al cursor, retrato en forma líquida que se estira, sello giratorio atado al scroll.
// Dos acciones fuertes (CV y Email); LinkedIn y GitHub quedan como íconos.
const Inicio = () => {
  const { t } = useTranslation("inicio");
  const { t: tBadge } = useTranslation("badge");
  const seal = `${tBadge("title").toUpperCase()} · `;

  return (
    <section id="/" data-scrub="leave" data-scrub-to=".hero-name,.hero-blob" className="hero wrap pause-off">
      <span className="hero-blob" aria-hidden="true" />
      <span className="orb orb-lilac orb-b" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-left">
          <HeroName lines={["Danilo", "Mercado"]} />

          <div className="hero-copy" data-reveal>
            <p className="roles">
              <TypingText
                texts={[t("typing1"), t("typing2"), t("typing3"), t("typing4"), t("typing5")]}
              />
            </p>
            <p className="lead">
              <strong>{t("text1")} </strong>
              {t("text2")} {t("localidad")}
              {t("text3")}
            </p>

            <div className="actions">
              <ViewCV />
              <MailIcon />
              <LinkedInIcon iconOnly />
              <GitHubIcon iconOnly />
            </div>

            <dl className="facts">
              <div>
                <dt>{t("stackTitle")}</dt>
                <dd>{t("stackValue")}</dd>
              </div>
              <div>
                <dt>{t("locationTitle")}</dt>
                <dd>{t("locationValue")}</dd>
              </div>
            </dl>

            <div className="avail">
              <div>
                <dt>{t("availTitle")}</dt>
                <dd>{t("availValue")}</dd>
              </div>
              <CarGame label={t("licenseBtn")} hint={t("carHint")} honk={t("honk")} cursor={t("vroom")} />
            </div>
          </div>
        </div>

        <div className="portrait-wrap">
          <Draggable className="portrait-drag" cursor={t("drag")}>
            <div className="portrait">
              <img src="/watermarked_img_4506104087006495303.jpg" alt="Foto de perfil de Danilo Mercado" draggable="false" />
            </div>
          </Draggable>

          <a href="#contacto" className="seal" aria-label={tBadge("title")}>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="seal-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text>
                <textPath href="#seal-path" textLength="270" lengthAdjust="spacing">
                  {seal}
                </textPath>
              </text>
            </svg>
            <span className="seal-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
