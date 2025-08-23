import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Shero",
  description: "Connect with Shero Media Studio for inquiries, collaborations, or to bring your vision to life with stunning motion graphics and visual effects. Let’s create captivating, multi-style videos that elevate your brand."
};

const ContactPage = () => {
  return (
    <div className="relative h-[200vh] flex flex-col justify-end text-white font-[Lelevien]">
      {/* Background */}
      <Image
        src="/contact.webp"
        alt="Contact Background"
        fill
        priority
        className="object-cover object-center scale-x-[-1] -z-10"
      />

      {/* Content */}
      <div className="relative px-4 py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">PROXY Media Studio</h1>
        <p className="text-xl mb-6">+965 5255 4215</p>
        <p className="text-lg mb-6">INFO@PROXYMEDIASTUDIO</p>
        <div className="flex justify-center gap-4 mb-6">
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
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
