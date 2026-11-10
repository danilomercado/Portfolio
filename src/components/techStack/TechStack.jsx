import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import StackGraph from "../stackGraph/StackGraph";
import { ITEMS, neighborsOf } from "../stackGraph/stackData";

// Stack como red: las tecnologías se unen con resortes según cuáles uso juntas. Se arrastran, se filtran
// por categoría y al elegir una se ve con qué se conecta.
const TechStack = () => {
  const { t } = useTranslation("stack");
  const [pick, setPick] = useState(null);
  const onPick = useCallback((id) => setPick(id), []);
  const current = ITEMS.find((i) => i.id === pick);
  const links = current ? neighborsOf(current.id).map((id) => ITEMS.find((i) => i.id === id)) : [];

  const labels = {
    filter: t("title"),
    shake: t("shake"),
    cats: {
      all: t("categories.all"),
      backend: t("categories.backend"),
      frontend: t("categories.frontend"),
      database: t("categories.database"),
      tools: t("categories.tools"),
    },
  };

  return (
    <section id="stack" className="sheet sheet-lilac">
      <div className="wrap section">
        <div className="section-head">
          <h2 className="display h-xl" data-reveal>
            {t("title")}
          </h2>
          <p className="lead" data-reveal style={{ "--d": 1 }}>
            {t("subtitle")}
          </p>
        </div>

        <div className="pit-grid pause-off">
          <StackGraph items={ITEMS} onPick={onPick} activeId={pick} cursorLabel={t("grab")} labels={labels} />

          <aside className="pit-info" aria-live="polite">
            {current ? (
              <div key={current.id} className="pit-card">
                <p className="pit-cat">{t(`categories.${current.cat}`)}</p>
                <h3>{current.name}</h3>
                <p>{t(`items.${current.id}`)}</p>
                {links.length > 0 && (
                  <>
                    <p className="pit-links-title">{t("connects")}</p>
                    <ul className="pit-links">
                      {links.map((l) => (
                        <li key={l.id}>
                          <button type="button" className={`cat-${l.cat}`} onClick={() => setPick(l.id)}>
                            {l.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ) : (
              <div className="pit-card">
                <h3>{t("pitTitle")}</h3>
                <p>{t("pitHint")}</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
