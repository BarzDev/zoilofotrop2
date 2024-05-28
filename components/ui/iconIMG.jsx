"use client";

import Image from "next/image";

import { useState } from "react";
export const IconImage = (props) => {
  const { title, img, color, w, bg } = props;

  const fontColor = color ? `text-${color}-500` : "text-black";
  const border = color ? `border-${color}-500` : "";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-14 hover:w-${w} hover:h-18 border h-18 flex items-center justify-center border border-2 ${border} rounded-lg p-2 cursor-pointer ${bg}`}
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
      <div className="relative w-40 h-10 z-10">
        <Image src={img} alt="html" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
};
