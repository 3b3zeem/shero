import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Shero",
  description:
    "Connect with Shero Media Studio for inquiries, collaborations, or to bring your vision to life with stunning motion graphics and visual effects. Let’s create captivating, multi-style videos that elevate your brand.",
};

const ContactPage = () => {
  return (
    <div className="relative h-[300vh] flex flex-col justify-end text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact.webp"
          alt="Contact Background"
          fill
          priority
          className="object-cover md:object-[center_45%] scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative px-4 py-12 flex flex-col items-center gap-20">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-wider">
            Let's Talk
          </h2>
          <div className="flex flex-col items-center my-5">
            <span className="text-sm text-sky-400">
              phone number & Whatsapp
            </span>
            <span className="text-3xl font-bold">+965 6671 6881</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm text-sky-400">Email Address</span>
            <span className="text-3xl font-bold">me@sheromoneer.com</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <h3 className="flex flex-col font-bold items-start">
            <span className="text-2xl tracking-wider">I LOOK FORWARD</span>
            <span className="text-2xl">
              TO <span className="text-sky-400 text-4xl">WORK</span>
            </span>
            <span className="text-sky-400 text-4xl">WITH YOU</span>
          </h3>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 bg-white text-black rounded-full"
          >
            <Facebook className="w-6 h-6 " />
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
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 bg-white text-black rounded-full"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          {/* <a
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 bg-white text-black rounded-full"
          >
            <Vimeo className="w-6 h-6" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
