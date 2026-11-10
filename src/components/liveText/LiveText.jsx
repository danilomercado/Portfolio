import React from "react";

// Texto "vivo": cada palabra flota y se inclina un poco, desfasada de la anterior, para que se mueva con su globo.
const LiveText = ({ text, as: Tag = "p", className = "" }) => {
  const words = text.split(" ");
  return (
    <Tag className={`live-text ${className}`}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="lw" style={{ "--i": i }}>
            {w}
          </span>{" "}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default LiveText;
