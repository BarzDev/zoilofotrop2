"use client";

import { useState } from "react";
export const IconSVG = (props) => {
  const { title, color, w, path } = props;

  const fontColor = `text-${color}-500`;
  const border = `border-${color}-500`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-14 hover:w-${w} hover:h-18 border h-18 flex items-center justify-center border border-2 ${border} rounded-lg p-2 cursor-pointer`}
      style={{ transition: "all .5s ease" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`transition-width ${
          isHovered
            ? `w-20 text-center font-bold ${fontColor}`
            : "w-0 overflow-hidden"
        }`}
        style={{ transition: "width .2s ease" }}
      >
        {title}
      </p>
      <div className="">
        <svg
          className={`${fontColor} h-10`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          //   width="40"
          //   height="40"
        >
          {path}
        </svg>
      </div>
    </div>
  );
};
