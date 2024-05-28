"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const TypeChangeColor = (props) => {
  const { word1, word2, word3, word4 } = props;
  const [textColor, setTextColor] = useState("rgb(250 250 250)");
  return (
    <div
      className=""
      style={{
        color: textColor,
      }}
    >
      <TypeAnimation
        sequence={[
          word1,
          800,
          // () => setTextColor("rgb(13 148 136)"),
          word2,
          800,
          // () => setTextColor("deeppink"),
          word3,
          1000,
          // () => setTextColor("rgb(220 38 38)"),
          word4,
        ]}
        repeat={Infinity}
      />
    </div>
  );
};

export const Typing = ({ words }) => {
  const config = () => {
    return words.flatMap((word) => [
      word.title,
      word.time,
      () => setTextColor(word.color),
    ]);
  };

  const [textColor, setTextColor] = useState("rgb(250 250 250)");
  return (
    <div
      style={{
        color: textColor,
      }}
    >
      <TypeAnimation sequence={config()} repeat={Infinity} />
    </div>
  );
};
