import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Shero",
  description: "Discover Shero Media Studio, led by Shero, a dedicated Motion Graphic Designer and Visual Effects Specialist. Our creative journey is fueled by passion for crafting visually stunning, technically precise motion graphics and VFX, delivering multi-style videos that captivate audiences and elevate brands."
};

const AboutPage = () => {
  return (
    <div className="relative mx-auto flex flex-col justify-start text-white font-[GIL] h-[200vh] py-12 pt-30">
      <Image
        src="/about.webp"
        alt="About Background"
        fill
        priority
        className="object-cover md:object-[center_40%] -z-10"
      />

      <div className="relative flex items-center justify-evenly md:flex-row flex-col px-6">
        <h1 className="font-bold flex flex-col md:mb-0 mb-10">
          <span className="md:text-5xl text-4xl font-[Lelevien] tracking-[7px]">
            PROXY
          </span>
          <span className="md:text-2xl text-xl tracking-[10px]">
            Media Studio
          </span>
        </h1>
        <div className="flex flex-col items-start md:border-l-2 md:pl-10 lg:pl-10 pt-10 border-l-0">
          <p className="text-lg mb-6">Hello There</p>
          <p className="text-md max-w-2xl md:w-[400px] text-wrap">
            At ProxyMedia Studio, we're not just a creative agency — we're a
            team of passionate artists, developers, and storytellers driven by a
            shared vision to craft powerful visual experiences that leave a
            lasting impact. Specializing in motion graphics, VFX, cutting-edge
            digital development, and motion graphics, we transform ideas into
            captivating content. Whether you're launching a new brand, producing
            an ad, or building a custom website or app, we work closely with you
            from concept to final delivery, infusing originality, precision, and
            bold storytelling — because in today's fast-paced world, standing
            out means everything.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
