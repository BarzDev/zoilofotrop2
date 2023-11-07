"use client";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    let top = document.getElementById("top");
    let bot = document.getElementById("bot");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    const handleScroll = () => {
      const value = window.scrollY;
      const color = value * 0.5;

      top.style.borderTop = `10px solid hsl(${color}, 100%, 50%)`;
      bot.style.borderBottom = `10px solid hsl(${color}, 100%, 50%)`;
      top.style.width = value * 1 + "vw";
      bot.style.width = value * 1 + "vw";
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed h-screen w-screen z-20">
      <span
        id="top"
        className="absolute top-0 right-0  "
        style={{
          borderTop: "10px solid hsl(0, 100%, 50%)",
          width: "0vw",
          opacity: "0.5",
        }}
      ></span>

      <span
        id="bot"
        className="absolute bot-0 left-0  w-full h-full "
        style={{ borderBottom: "10px solid red", width: "0vw", opacity: "0.5" }}
      ></span>

      <span
        id="left"
        className="absolute top-0 left-0 "
        style={{ borderLeft: "10px solid red", height: "0vh" }}
      ></span>

      <span
        id="right"
        className="absolute bottom-0 right-0  "
        style={{ borderRight: "10px solid red", height: "0vh" }}
      ></span>
    </div>
  );
};

export default Loader;
