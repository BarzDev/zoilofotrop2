"use client";

import { useState, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";

export const Typing = ({ words }) => {
  const [textColor, setTextColor] = useState("rgb(250 250 250)");

  const config = useMemo(() => {
    return words.flatMap((word) => [
      word.title,
      word.time,
      () => setTextColor(word.color),
    ]);
  }, [words]);

  return (
    <div style={{ color: textColor }}>
      <TypeAnimation sequence={config} repeat={Infinity} />
    </div>
  );
};
