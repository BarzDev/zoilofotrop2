"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Hello = (props) => {
  const { word1, word2, word3, word4 } = props;
  const [textColor, setTextColor] = useState("black");
  return (
    <div
      style={{
        color: textColor,
      }}
    >
      <TypeAnimation
        sequence={[
          word1,
          800,
          () => setTextColor("aqua"),
          word2,
          800,
          () => setTextColor("deeppink"),
          word3,
          1000,
          () => setTextColor("red"),
          word4,
        ]}
        repeat={Infinity}
      />
    </div>
  );
};

export const Title = () => {
  const [textColor, setTextColor] = useState("black");
  return (
    <div
      style={{
        // fontSize: "35px",
        color: textColor,
      }}
    >
      <TypeAnimation
        sequence={[
          "My Mini Project..",
          800,
          () => setTextColor("aqua"),
          "",
          800,
          () => setTextColor("deeppink"),
          "My Mini Project..",
          1000,
          () => setTextColor("red"),
          "",
        ]}
        repeat={Infinity}
      />
    </div>
  );
};
