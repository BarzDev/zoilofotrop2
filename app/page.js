"use client";

import React from "react";
import { Intro } from "@/components/layouts/Intro";
import { AboutMe } from "@/components/layouts/aboutMe";
import { Project } from "@/components/layouts/project";
import { Skills } from "@/components/layouts/skill";
import Navbar from "@/components/ui/navbar";
import { useRef } from "react";

export default function Home() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  return (
    <main className="bg-slate-950 text-white ">
      <section ref={homeRef}>
        <Intro />
      </section>

      <Navbar
        aboutMeRef={aboutMeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        home={homeRef}
      />

      <section ref={aboutMeRef} className="pt-16">
        <AboutMe ref={aboutMeRef} />
      </section>

      <section ref={skillsRef} className="pt-16">
        <Skills />
      </section>

      <section ref={projectsRef} className="pt-16">
        <Project />
      </section>
    </main>
  );
}
