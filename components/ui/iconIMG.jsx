"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export const IconImage = (props) => {
  const { title, img, border, color, hover, bg } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={clsx(
        "w-14  h-18 flex items-center justify-center border-2 rounded-lg p-2 cursor-pointer ",
        color,
        hover,
        border,
        bg
      )}
      style={{ transition: "all .5s ease" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={clsx(
          "transition-width text-center font-bold",
          isHovered ? `w-20 ${color}` : "w-0 overflow-hidden"
        )}
        style={{ transition: "width .2s ease" }}
      >
        {title}
      </p>
      <div className="relative w-40 h-10 z-10">
        <Image src={img} alt={title} fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
};
