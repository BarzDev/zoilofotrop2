"use client";

import Intro from "@/components/intro";
import GaleryLayout from "@/components/layouts/GaleryLayouts";
import Loader from "@/components/loader";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Component from "@/components/footer";
import Section from "@/components/layouts/SectionLayouts";

export default function Home() {
  // const [isClient, setIsClient] = useState(false);

  const aboutRef = useRef(null);
  const portoRef = useRef(null);

  useEffect(() => {
    // setIsClient(true);
    Aos.init();
  }, []);
  return (
    <main className="overflow-hidden h-auto">
      <Loader />
      <Intro />
      <div ref={aboutRef} className="h-screen bg-sky-900 relative">
        <Section />
      </div>
      <div ref={portoRef} className="min-h-screen bg-blue-500 relative">
        <GaleryLayout />
      </div>
      <div className="playpen relative">
        <Component aboutRef={aboutRef} portoRef={portoRef} />
      </div>
    </main>
  );
}
