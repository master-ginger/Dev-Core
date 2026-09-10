import Hero from "@/components/hero";
import About from "@/components/about";
import Image from "next/image";
import ExperiencePage from "@/components/experience";
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div>
      <Hero />
      <About></About>
      <ExperiencePage/>
      <Projects/>
    </div>
  );
}
