import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Shero",
  description:
    "Discover Shero Media Studio, led by Shero, a dedicated Motion Graphic Designer and Visual Effects Specialist. Our creative journey is fueled by passion for crafting visually stunning, technically precise motion graphics and VFX, delivering multi-style videos that captivate audiences and elevate brands.",
};

const AboutPage = () => {
  return (
    <div className="relative mx-auto flex flex-col text-white pt-30">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about.webp"
          alt="About Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-10 px-8 md:px-20">
        {/* Left side (profile image) */}
        <div className="md:w-1/2 flex justify-start md:justify-center">
          <Image
            src="/shero.svg"
            alt="user profile"
            width={450}
            height={350}
            priority
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right side (text) */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <p className="text-xl font-bold mb-4">Hello There,</p>
          <p className="text-lg leading-relaxed max-w-xl">
            I&apos;m <span className="font-bold">Shero Moneer</span> — a passionate and creative visual artist 
            with over <span className="font-bold">12 years of professional experience</span> in the post-production industry. 
            Throughout my career, I&apos;ve collaborated with top-tier <span className="font-bold">advertising agencies</span>, 
            <span className="font-bold"> television productions</span>, and 
            <span className="font-bold"> cinematic film projects</span>, delivering compelling visual content 
            that resonates with audiences and achieves business goals.
          </p>

          <p className="text-lg leading-relaxed max-w-xl mt-6">
            My core strength lies in <span className="font-bold">transforming ideas into impactful videos</span> 
            through a blend of creative strategy, storytelling, and a structured design process. 
            Whether it&apos;s for commercial use, entertainment, or brand storytelling, 
            I bring visions to life with clarity and emotion.
          </p>

          <p className="text-lg leading-relaxed max-w-xl mt-6">
            I specialize in producing <span className="font-bold">high-end 2D and 3D motion graphics</span>, 
            leveraging industry-leading software to ensure each project meets the highest creative 
            and technical standards.
          </p>

          <p className="text-lg leading-relaxed max-w-xl mt-6">
            In addition, I&apos;m a seasoned expert in <span className="font-bold">visual effects (VFX)</span>, 
            having worked on complex, high-demand scenes in <span className="font-bold">films and television series</span>, 
            where precision, realism, and visual depth are key.
          </p>

          <p className="text-lg font-bold mt-8">
            Let’s create something powerful and unforgettable.
          </p>
        </div>
      </div>

      <div className="relative my-30 px-8 md:px-20 w-full flex justify-center">
        <div className="bg-white/10 p-8 max-w-5xl rounded-tr-4xl rounded-bl-4xl backdrop-blur">
          <ul className="space-y-6">
            <li>
              <span className="text-cyan-400 font-bold">● Start</span>
              <p className="text-md mt-2">
                I started as an Interior designer, 4 years of working on Autocad, 3Ds max, and Photoshop.
              </p>
            </li>

            <li>
              <span className="text-cyan-400 font-bold">● Career Shift</span>
              <p className="text-md mt-2">
                In 2014 I started to work at Artbeat Company as Video Editor. 
                In this company, I acquired a lot of skills in the field of video editing and advertising 
                until I became a professional at working on Adobe Premiere, After Effects, Photoshop, Illustrator, and Cinema 4D.
              </p>
            </li>

            <li>
              <span className="text-cyan-400 font-bold">● Moving to Kuwait</span>
              <p className="text-md mt-2">
                An invitation from one of the biggest advertising companies in Kuwait made me move from Egypt to work in Kuwait City.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
