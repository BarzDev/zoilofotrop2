"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Galery(props) {
  const { porto } = props;
  const images = porto.img;

  return (
    <div
      key={porto.id}
      className="flex md:flex-row-reverse flex-col items-center justify-between  w-full p-5  z-50 border border-red-500"
    >
      <div className="flex items-center justify-center border sm:w-1/2 w-full">
        Title Descriptrin
      </div>
      <div className="h-40 sm:h-96 xl:h-80 2xl:h-96 sm:w-1/2 w-full">
        <Carousel
          className="sm:h-full h-40 rounded-lg bg-slate-500"
          slide={false}
          style={{
            position: "relative",
            top: "0",
            left: "0",
          }}
        >
          {images.map((image, index) => {
            return (
              <Image
                className="z-20"
                key={index}
                src={image}
                fill
                style={{
                  objectFit: "contain",
                  transform: "none",
                }}
                alt={image}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
