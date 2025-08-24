import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Details | Shero",
  description:
    "Dive into the details of Shero Media Studio’s projects, led by Shero, a passionate Motion Graphic Designer and Visual Effects Specialist. Explore our visually stunning, technically precise motion graphics and VFX, showcasing multi-style videos that captivate audiences and elevate brands.",
};

const DetailsPage = () => {
  return (
    <div className="relative h-full text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/workId.webp"
          alt="Work Background"
          fill
          priority
          className="object-cover md:object-[center_20%] object-[50%_center] -z-10"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto pt-50 px-6 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-5 mb-40">
          <h1 className="text-2xl font-bold mb-6">Project Name</h1>

          <p className="text-sm leading-6 mb-8">
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text
          </p>
        </div>

        <div className="md:w-[800px] md:h-[500px] w-[300px] h-[300px] border border-white mb-12 rounded-tl-[100px] rounded-br-[100px]"></div>

        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-2xl font-bold mb-6 self-start">Details</h1>

          <p className="text-sm leading-6 mb-8 self-start">
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text
          </p>

          <div className="text-sm self-start space-y-1">
            <p>
              <span className="font-bold">VFX, photoshop, after effect</span>
            </p>
            <p>
              <span className="font-bold">Date</span> : 15 June 2025
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col text-lg my-20 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="space-y-2">
                <div className="border h-50 w-50 rounded-tl-[60px] rounded-br-[60px]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center flex-col text-lg mb-20 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[1, 2].map((i) => (
              <div key={i} className="flex justify-between space-y-2">
                <div className="border h-100 w-100 rounded-tl-[100px] rounded-br-[100px]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center flex-col text-lg mb-20 w-full">
          <div className="grid grid-cols-1">
            {[1].map((i) => (
              <div key={i} className="flex justify-between space-y-2">
                <div className="border h-100 w-200 rounded-tl-[100px] rounded-br-[100px]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center flex-col text-lg mb-20 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between space-y-2">
                <div className="border h-50 w-80 rounded-tl-[100px] rounded-br-[100px]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
