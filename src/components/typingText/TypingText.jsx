import { useEffect, useState } from "react";

// Texto con efecto de escritura medieval con cursor rúnico parpadeante
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
    <span className="inline-flex items-center">
      <span className="text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
        {texts[index].substring(0, subIndex)}
      </span>
      <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-[#facc15] shadow-[0_0_8px_#facc15]" />
    </span>
  );
};

export default TypingText;
