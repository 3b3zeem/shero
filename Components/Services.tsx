import React from "react";
import { Aperture, Box, Brush } from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] p-8 py-30">
      <h1 className="md:text-5xl text-4xl font-bold text-white mb-8">My Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div className="text-white flex flex-col items-center gap-5">
          <Aperture size={48} color="white" />
          <p className="md:text-2xl text-lg tracking-wider font-bold">Motion Graphic</p>
        </div>
        <div className="text-white flex flex-col items-center gap-5">
          <Box size={48} color="white" />
          <p className="md:text-2xl text-lg tracking-wider font-bold">3D Animations</p>
        </div>
        <div className="text-white flex flex-col items-center gap-5">
          <Brush size={48} color="white" />
          <p className="md:text-2xl text-lg tracking-wider font-bold">Visual Effects</p>
        </div>
      </div>
    </div>
  );
};

export default Services;