import React from "react";
import { useTranslation } from "react-i18next";
import ScrubText from "../scrubText/ScrubText";
import Draggable from "../draggable/Draggable";
import LiveText from "../liveText/LiveText";

// Sobre mí: la intro se revela al leerla; cada idea es un globo vivo cuyo texto respira, flota y se deforma con él
const AboutMe = () => {
  const { t } = useTranslation("about-me");
  const { t: tHome } = useTranslation("inicio");

  const fields = [
    { title: t("card1Title"), text: t("card1Text"), tone: "violet", lag: "40px", dur: "11s", delay: "0s" },
    { title: t("card2Title"), text: t("card2Text"), tone: "ink", lag: "110px", dur: "15s", delay: "-4s" },
    { title: t("card3Title"), text: t("card3Text"), tone: "pop", lag: "70px", dur: "13s", delay: "-8s" },
  ];

  return (
    <section id="sobre-mi" className="sheet sheet-paper">
      <div className="wrap section">
        <h2 className="display h-xl" data-reveal>
          {t("title")}
        </h2>

        <div className="mt-12">
          <ScrubText text={t("intro")} />
        </div>

        <div className="fields pause-off">
          {fields.map((f) => (
            <div key={f.title} className="note-wrap" data-scrub="pass" style={{ "--lag": f.lag }}>
              <Draggable
                className={`blob-note tone-${f.tone}`}
                cursor={tHome("drag")}
                style={{ "--dur": f.dur, "--delay": f.delay }}
              >
                <div className="live">
                  <LiveText as="h3" text={f.title} />
                  <LiveText as="p" text={f.text} />
                </div>
              </Draggable>
            </div>
          ))}
        </div>
        <p className="hint">{t("hint")}</p>

        <div className="about-wrap pause-off">
          <span className="orb orb-violet o1" aria-hidden="true" />
          <span className="orb orb-mid o2" aria-hidden="true" />

          <div className="about-cols">
            <div className="bio">
              <p data-reveal>{t("p1")}</p>
              <p data-reveal style={{ "--d": 1 }}>{t("p2")}</p>
              <p data-reveal style={{ "--d": 2 }}>{t("p3")}</p>
            </div>

            <div className="side" data-reveal>
              <div className="glass">
                <h3>{t("sideTitle1")}</h3>
                <p>{t("sideText1")}</p>
              </div>
              <div className="glass">
                <h3>{t("sideTitle2")}</h3>
                <p>{t("sideText2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
