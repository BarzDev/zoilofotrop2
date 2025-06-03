"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export const AboutMe = () => {
  return (
    <div className="md:ps-48 ps-0 md:text-left text-center">
      <p className=" md:text-3xl text-2xl font-bold md:pb-10 pb-5">About me</p>
      <p className="md:text-xl text-sm font-semibold text-justify  md:pe-48 pe-5 md:p-0 px-5 ">
        Hi there! I&lsquo;m a passionate software developer with a strong
        interest in crafting clean, efficient, and impactful digital solutions.
        From building responsive web apps to creating seamless Android
        experiences, I thrive on turning ideas into reliable, real-world
        applications. I believe in writing clean code, thoughtful design, and
        continuously learning to grow as both a developer and a problem-solver.
        And you can find me on:
      </p>

      <div className="flex gap-2 w-full items-end justify-end md:pe-48 ps-0">
        <LinkProfile
          title="My LinkedIn"
          img="icon/linkedin.svg"
          border="border-blue-500"
          color="text-blue-500"
          hover="hover:w-32"
          link="https://www.linkedin.com/in/fakhrul-akbar/"
        />

        <LinkProfile
          title="My GitHub"
          img="icon/github.svg"
          border="border-black"
          color="text-black"
          bg="bg-white"
          hover="hover:w-32"
          link="https://github.com/BarzDev"
        />
      </div>
    </div>
  );
};

const LinkProfile = (props) => {
  const { title, img, border, color, hover, bg, link } = props;

  const [isHovered, setIsHovered] = useState(false);
  const click = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={click}
      className={clsx(
        "w-16  h-18 flex items-center justify-center border-2 rounded-lg p-2 cursor-pointer ",
        color,
        hover,
        border,
        bg
      )}
      style={{ transition: "all .5s ease" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-40 h-10 z-10">
        <Image src={img} alt={title} fill style={{ objectFit: "contain" }} />
      </div>
      <p
        className={clsx(
          "transition-width text-center font-bold",
          isHovered ? `w-20 ${color}  ms-2` : "w-0 overflow-hidden"
        )}
        style={{ transition: "width .2s ease" }}
      >
        {title}
      </p>
    </div>
  );
};
