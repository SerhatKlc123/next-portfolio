"use client"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills";
import Projects from "@/components/Projects"
import FixedCircleButton from "@/components/FixedCircleButton";
import StarsCanvas from "@/components/Star";

export default function Home() {
  return (
    <div className="overflow-x-clip" >
      <StarsCanvas />
      <Hero />
      <Skills />
      <Projects />
      <FixedCircleButton />
    </div>
  );
}
