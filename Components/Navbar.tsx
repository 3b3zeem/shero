"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NAV_LINKS = [
    { href: "/", key: "home", labelKey: "home" },
    { href: "/work", key: "work", labelKey: "work" },
    { href: "/about", key: "who I'm", labelKey: "who I'm" },
    { href: "/contact", key: "contact_me", labelKey: "contact Me" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-20 3xl:px-0 italic ${
          isScrolled
            ? "bg-black/40 backdrop-blur-lg shadow-md py-5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0">
          <Link href={`/}`}>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={74}
              height={29}
              className="w-22 h-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex h-full gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={`capitalize relative text-[16px] font-normal text-[#eaeaea] flex items-center justify-center cursor-pointer pb-1.5 transition-all duration-150 hover:font-bold before:content-[''] before:absolute before:bottom-0 before:h-[2px] before:bg-[#eaeaea] before:transition-all before:duration-300 before:ease-out ${
                  isActive(link.href)
                    ? "before:w-full before:left-0 font-bold"
                    : "before:w-0 before:left-1/2 hover:before:w-full hover:before:left-0"
                }
                `}
              >
                {link.labelKey}
              </Link>
            ))}
          </div>

          <svg
            onClick={() => setIsOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer inline-block md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-400 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-500 lg:hidden ${
          isOpen ? "-translate-x-0 sm:w-[500px] w-[300px]" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image
            src="/dinamo-transparent.webp"
            alt="logo"
            width={74}
            height={29}
            className="w-20 h-auto"
            priority
          />
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/close.svg"
              alt="close"
              width={24}
              height={24}
              className="cursor-pointer rounded-full"
              priority
            />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`capitalize relative text-[16px] font-[400] text-[#585858] cursor-pointer pb-1.5 transition-all duration-150 hover:font-bold before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 before:ease-out hover:before:w-full hover:before:left-0 ${
                isActive(link.href) ? "before:w-full font-bold" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {link.labelKey}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
