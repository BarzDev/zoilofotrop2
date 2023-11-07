"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Detail1 from "./acordion1";

function Galery1(props) {
  const { galery } = props;

  return (
    <div
      className="flex flex-col sm:w-1/2 w-full p-5  z-50"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className=" w-full">
        <Detail1 />
      </div>
      <div className="h-40 sm:h-96 xl:h-80 2xl:h-96 w-full">
        <Carousel
          className="sm:h-full h-40 rounded-lg bg-slate-500"
          slide={false}
          style={{
            position: "relative",
            top: "0",
            left: "0",
          }}
        >
          {galery.map((image, index) => {
            return (
              <Image
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

export default Galery1;
