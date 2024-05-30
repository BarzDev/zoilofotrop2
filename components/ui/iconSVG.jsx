"use client";

import clsx from "clsx";
import { useState } from "react";
export const IconSVG = (props) => {
  const { title, path, border, color, hover, bg } = props;

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
      <div className="">
        <svg
          className={clsx("h-10", color)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {path}
        </svg>
      </div>
    </div>
  );
};
