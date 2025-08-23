import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t-2 border-cyan-400">
      <div className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0">
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-lg italic">
            <p>+965 6671 6881</p>
            <p className="text-xl">me@sheromoneer.com</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <p className="text-md italic">Follow me at:</p>
            <div className="flex gap-2 justify-end mt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-white text-black rounded-full"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-white text-black rounded-full"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-white text-black rounded-full"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 bg-white text-black rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-center text-sm mt-1">
              Created with passion by Mohammad Darweish - 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
