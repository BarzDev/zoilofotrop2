"use client";

import { Accordion, Button } from "flowbite-react";
import Link from "next/link";

const Detail2 = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="playpen text-black bg-gray-100">
          Barz Wedding?
        </Accordion.Title>
        <Accordion.Content className="bg-slate-300">
          <p className="playpen sm:text-justify text-left sm:text-base text-xs">
            Barz Wedding is an invitation web which created use Next.Js,
            Tailwind, daisyUI, Flowbite, AOS. Which can use for wedding
            invitatin, birthday invitation, party invitation, etc
          </p>

          <Button
            as={Link}
            href={"https://barwedding.vercel.app/"}
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
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
export default Detail2;
