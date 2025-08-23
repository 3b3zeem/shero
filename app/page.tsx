import Clients from "@/Components/Clients";
import Experience from "@/Components/experience";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Reels from "@/Components/Reels";
import Services from "@/Components/Services";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | Shero",
  description: "Discover Shero, a Motion Graphic Designer and Visual Effects Specialist crafting professional, visually stunning, and technically precise motion graphics and VFX. My work blends clarity, simplicity, and creativity to deliver captivating multi-style videos that engage audiences and elevate brands."
};

export default function Home() {
  return (
    <div className="relative pt-15">
      <Image
        src="/home.jpg"
        alt="Work Background"
        fill
        priority
        className="object-cover md:object-[center_9%] object-[60%_center] -z-10"
      />

      <div className="relative font-[GIL]">
        <Hero />
        <Projects />
        <Experience />
        <Reels />
        <Clients />
        <Services />
      </div>
    </div>
  );
}
