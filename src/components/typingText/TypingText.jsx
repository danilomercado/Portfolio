import { useEffect, useState } from "react";

const TypingText = ({ texts, speed = 80, delay = 1500 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    if (!deleting && subIndex === texts[index].length) {
      setTimeout(() => setDeleting(true), delay);
      return;
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

  return (
    <span className="border-r-2 border-sky-400 pr-1 animate-pulse">
      {texts[index].substring(0, subIndex)}
    </span>
  );
};

export default TypingText;
