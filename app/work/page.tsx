import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Work | Shero",
  description: "Explore the portfolio of Shero Media Studio, showcasing the work of Shero, a skilled Motion Graphic Designer and Visual Effects Specialist. Dive into our collection of visually stunning, technically precise motion graphics and VFX, featuring multi-style videos that captivate audiences and elevate brands."
};

const WorkPage = () => {
  return (
    <div className="relative h-[300vh] font-[Lelevien]">
      {/* الخلفية تغطي الشاشة كلها */}
      <Image
        src="/work.webp"
        alt="Work Background"
        fill
        priority
        className="object-cover md:object-[center_70%] object-[18%_center] -z-10"
      />

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col justify-between h-full pt-20">
        <div className="flex items-center justify-center flex-col md:text-4xl text-3xl">
          <span>Our</span> Projects
        </div>

        <div className="mt-16 px-6">
          <div className="flex flex-col text-lg mb-8">
            <div className="flex items-start justify-center flex-wrap mb-8 gap-3 text-sm">
              <i className="border border-amber-300 p-2 rounded-tr-2xl rounded-bl-2xl">
                All Works
              </i>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <span>2D Motion Graphics</span>
                <span>3D Animations</span>
                <span>3D Motion Graphics</span>
                <span>Commercials</span>
                <span>Infographics</span>
                <span>Intro</span>
                <span>Showreels</span>
                <span>TV Ident</span>
                <span>Visual Effects</span>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col text-lg font-[GIL]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="border h-40 w-60"></div>
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
