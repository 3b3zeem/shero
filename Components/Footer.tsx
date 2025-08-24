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
                <Linkedin size={24} color="white" aria-hidden="true" />
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
