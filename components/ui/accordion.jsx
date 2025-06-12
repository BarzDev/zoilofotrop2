"use client";

import { Accordion, Button } from "flowbite-react";
import Link from "next/link";

export const DetailAccordion = (props) => {
  const { porto } = props;
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className=" text-black bg-gray-100">
          {porto.title}
        </Accordion.Title>
        <Accordion.Content className="bg-slate-300">
          <p className=" sm:text-justify text-left sm:text-base text-xs text-slate-950">
            {porto.description}
          </p>
          <Button
            as={Link}
            href={porto.link}
            target={porto.category === "web" ? "_blank" : undefined}
            color="dark"
            className="mt-2 sm:w-40 w-auto"
          >
            {porto.category === "web" ? " Launch Demo" : "Preview App"}
            <svg
              className="w-6 h-6 text-white ps-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h18M1 5v14h18V5M1 5V1h18v4M5 5l3-4m1.215 4 3-4m1.215 4 3-4M8.007 8v8l5.416-4-5.416-4Z"
              />
            </svg>
          </Button>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
