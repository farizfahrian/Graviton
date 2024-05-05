"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToHero: () => void;
  scrollToPricing: () => void;
  scrollToServices: () => void;
  scrollToCaseStudies: () => void;
  scrollToContact: () => void;
}

const Navbar = ({
  scrollToHero,
  scrollToPricing,
  scrollToServices,
  scrollToCaseStudies, // Add scrollToServices to props
  scrollToContact, // Add scrollToServices to props
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <nav className="fixed z-50 w-full">
      <div className="z-50 flex items-center justify-between py-3 px-6 shadow-sm md:py-10 bg-zinc-50 md:px-8">
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="md:w-44 md:h-full"
          />
        </Link>
        <div
          className="items-center hidden space-x-20 text-center bg-opacity-50 cursor-pointer lg:flex text-slate-300 bg-clip-text bg-gradient-to-b from-neutral-50 to bg-neutral-400"
        >
          <div
            onClick={scrollToHero}
            className="text-base font-medium text-gray-700 transition duration-300 group hover:text-gravitonblue"
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gravitonblue"></span>
          </div>
          <div
            onClick={scrollToServices}
            className="text-base font-medium text-gray-700 transition duration-300 group hover:text-gravitonblue"
          >
            Services
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gravitonblue"></span>
          </div>
          <div
            onClick={scrollToCaseStudies}
            className="text-base font-medium text-gray-700 transition duration-300 group hover:text-gravitonblue"
          >
            Case Studies
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gravitonblue"></span>
          </div>
          <div
            onClick={scrollToPricing}
            className="text-base font-medium text-gray-700 transition duration-300 group hover:text-gravitonblue"
          >
            Pricing
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gravitonblue"></span>
          </div>
        </div>

        <div className="flex lg:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 cursor-pointer text-slate-300"
            >
              <X className="m-[4px]" />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToHero={scrollToHero} // Pass scrollToServices
                scrollToServices={scrollToServices} // Pass scrollToServices
                scrollToPricing={scrollToPricing}
                scrollToCaseStudies={scrollToCaseStudies}
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 cursor-pointer text-slate-300"
            />
          )}
        </div>

        <div className="hidden lg:flex">
          <div
            onClick={scrollToContact}
            className="
            text-base
            inline-flex h-12 items-center justify-center cursor-pointer rounded-[8px] border-2 border-gravitonblue bg-[length:200%_100%] px-6 font-medium text-gravitonblue focus:outline-none focus:ring-2 focus:ring-gravitonblue focus:ring-offset-2 focus:ring-offset-gravitonblue no-underline"
          >
            Free Consultation
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
