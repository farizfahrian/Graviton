"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/navbarGlobal/navbar-global";

const Book = () => {
  return (
    <>
      <div className="flex flex-col   w-full  h-screen bg-slate-100 bg-grid-white/[0.02]   ">
        <Navbar/>
        <div className="text-4xl pt-5 md:text-6xl text-center 
        bg-clip-text text-black">
          Book a meeting
        </div>
        <InlineWidget url="https://calendly.com/birdsoftware/15min" />
      </div>
    </>
  );
};

export default Book;
