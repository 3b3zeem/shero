import React from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-start justify-start flex-col md:flex-row p-8 bg-cover bg-center md:h-[100vh] mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0 py-30">
      <div className="">
        <Image
          src="/shero.svg"
          alt="Profile"
          width={32}
          height={32}
          priority
          className="w-60 h-60 object-cover"
        />
      </div>
      <div className="md:w-[50%] text-white">
        <h1 className="text-4xl font-bold">SHERO MONEER</h1>
        <h2 className="text-2xl mt-2">
          Motion Graphic Designer | Visual Effects Specialist
        </h2>
        <p className="text-lg mt-4">
          I create professional, visually sophisticated, and technologically
          proficient motion graphics and visual effects. My work combines
          clarity, simplicity, and sensitivity, delivering multi-style videos
          that engage audiences and elevate brands.
        </p>
        <div className="flex justify-start mt-4 space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
          >
            <Facebook size={24} color="white" aria-hidden="true" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
          >
            <Instagram size={24} color="white" aria-hidden="true" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
          >
            <Youtube size={24} color="white" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn profile"
            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
          >
            <Linkedin size={24} color="white" aria-hidden="true"  />
          </a>
          {/* <a 
            href="https://vimeo.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Vimeo page"
            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
          >
            <Vimeo size={24} color="white" aria-hidden="true" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
