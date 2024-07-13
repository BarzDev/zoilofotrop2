"use client";
import React from "react";
import { Button, Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { DetailAccordion } from "./accordion";

export function Galery(props) {
  const { porto, key } = props;
  const images = porto.img;

  return (
    <div
      key={key}
      className="flex md:flex-row-reverse flex-col items-center justify-between gap-2  w-full p-5  z-50 h-full"
    >
      <div className=" md:w-1/2 w-full md:block hidden">
        <Details porto={porto} />
      </div>
      <div className="md:h-80 h-auto 2xl:h-96 md:w-1/2 w-full">
        <div className="md:hidden block">
          <DetailAccordion porto={porto} />
        </div>
        <Carousel
          className="md:h-full h-40 rounded-lg bg-slate-500"
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

const Details = ({ porto }) => {
  return (
    <div className="md:px-24 p-5  h-80  border-2 border-cyan-500 rounded-lg">
      <h1 className="text-center font-bold text-2xl md:pb-10 pb-5">
        {porto.title}
      </h1>
      <p className="md:text-justify text-left text-sm md:text-base">
        {porto.description}
      </p>
      <div>
        <Button
          as={Link}
          href={porto.link}
          target="blank"
          color="dark"
          className="mt-2 sm:w-40 w-auto"
        >
          Launch Demo
          <svg
            class="w-6 h-6 text-white ps-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h18M1 5v14h18V5M1 5V1h18v4M5 5l3-4m1.215 4 3-4m1.215 4 3-4M8.007 8v8l5.416-4-5.416-4Z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
