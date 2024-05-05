"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenuGlobal from "./drop-down-menu-global";

interface NavbarProps {

}

const NavbarGlobal = ({
}: NavbarProps) => {

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-3 md:p-10 flex items-center justify-between bg-zinc-50 z-50 border-b-4">
        <div className="pl-5 md:pl-8">
          <Link href="/">
              <Image
                  priority
                  src="/img/graviton_logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="md:w-24 md:h-14"
              />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-20 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50">
            <Link href="/" className="font-bold text-xl text-gravitonblue no-underline">
              Home
            </Link>
            <Link href="/#Services" className="font-bold text-xl text-gravitonblue no-underline">
              Services
            </Link>
            <Link href="/#CaseStudies" className="font-bold text-xl text-gravitonblue no-underline">
              Case Studies
            </Link>
            <Link href="/#Pricing" className="font-bold text-xl text-gravitonblue no-underline">
              Pricing
            </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenuGlobal
                onClose={closeDropDown}
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex pr-8">
          <Link
            href="/contact"
            className="
            inline-flex h-12 items-center justify-center 
            rounded-md border-2 border-gravitonblue bg-transparent
            bg-[length:200%_100%] px-6 font-medium text-gravitonblue transition-colors
             focus:outline-none focus:ring-2 focus:ring-gravitonbluefocus:ring-offset-2
              focus:ring-offset-gravitonblue no-underline"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarGlobal;