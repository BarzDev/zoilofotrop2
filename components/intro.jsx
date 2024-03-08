"use client";

import { Button } from "flowbite-react";
import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    let sec1 = document.getElementById("sec1");
    let sec2 = document.getElementById("sec2");

    const handleScroll = () => {
      const value = window.scrollY;

      sec1.style.top = value * -2.5 + "px";
      sec2.style.bottom = value * -2.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen relative bg-sky-900">
      <div
        id="sec1"
        className="caveat font-bold sm:text-9xl text-7xl flex items-center sm:justify-start justify-center sm:ps-40 ps-0 absolute w-screen h-3/6 left-0 border bg-green-100 z-30 flex-col sm:flex-row "
      >
        Hello...
      </div>
      <div
        id="sec2"
        className="caveat font-bold sm:text-9xl text-6xl flex items-center sm:justify-end justify-center sm:pe-40 sm:ps-5 ps-0  text-center absolute w-ful h-3/6 bottom-0 right-0 left-0 border bg-blue-100 z-20"
      >
        I&apos;m Fakhrul Akbar
      </div>
    </div>
  );
};

export default Intro;
