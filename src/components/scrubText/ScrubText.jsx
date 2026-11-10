import React from "react";

// Texto que se va "llenando" palabra por palabra a medida que se lo lee
const ScrubText = ({ text, as: Tag = "p" }) => {
  const words = text.split(" ");
  return (
    <Tag className="scrub-text" data-scrub="read" style={{ "--n": words.length }}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="scrub-word" style={{ "--i": i }}>
            {w}
          </span>{" "}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default ScrubText;
