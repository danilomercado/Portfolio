import { useEffect, useState } from "react";

// Texto con efecto de escritura y cursor parpadeante
const TypingText = ({ texts, speed = 80, delay = 1500 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts || index >= texts.length) return;

    if (!deleting && subIndex === texts[index].length) {
      const timeout = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, delay]);

  if (!texts || texts.length === 0) return null;

  return (
    <span>
      {texts[index].substring(0, subIndex)}
      <span className="caret" />
    </span>
  );
};

export default TypingText;
