import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Work | Shero",
  description:
    "Explore the portfolio of Shero Media Studio, showcasing the work of Shero, a skilled Motion Graphic Designer and Visual Effects Specialist. Dive into our collection of visually stunning, technically precise motion graphics and VFX, featuring multi-style videos that captivate audiences and elevate brands.",
};

const WorkPage = () => {
  return (
    <div className="relative h-[300vh]">
      <Image
        src="/work.webp"
        alt="Work Background"
        fill
        priority
        className="object-cover md:object-[center_20%] object-[80%_center] -z-10"
      />

      <div className="relative z-10 flex flex-col justify-between h-full pt-20">
        <div className="flex items-center justify-center flex-col md:text-4xl text-3xl"></div>

        <div className="mt-16 px-6">
          <div className="flex flex-col items-center mb-8 gap-5">
            <h1 className="text-3xl md:text-[40px] font-bold">WORKS</h1>
            <div className="flex items-start justify-center flex-wrap mb-8 gap-3 text-sm">
              <span className="border p-1.5 rounded-tr-xl rounded-bl-xl bg-white/20 text-lg">
                All Works
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  2D Motion Graphics
                </span>
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  3D Animations
                </span>
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  3D Motion Graphics
                </span>
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  Commercials
                </span>
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  Infographics
                </span>
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  Intro
                </span>
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  Showreels
                </span>
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  TV Ident
                </span>
                <span className="border p-1.5 rounded-tr-xl rounded-bl-xl text-lg">
                  Visual Effects
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col text-lg font-[GIL]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="border h-40 w-60 rounded-tl-[60px] rounded-br-[60px]"></div>
                    <p>Lorem</p>
                    <span>dolor sit amet</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
