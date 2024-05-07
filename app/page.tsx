"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar/navbar";

import { Spotlight } from "@/components/ui/spotlight";
import Testimonial from "@/components/pageComponents/testimonial";
import Problems from "@/components/pageComponents/problems";
import Services from "@/components/pageComponents/services";
import Portfolio from "@/components/pageComponents/portfolio";
import Pricing from "@/components/pageComponents/pricing";
import Workflow from "@/components/pageComponents/workflow";
import FAQS from "@/components/pageComponents/faq";
import Contact from "@/components/pageComponents/contact";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const casestudRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCaseStudies = () => {
    casestudRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full md:items-center md:justify-center antialiased bg-slate-100 bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToHero={scrollToHero}
        scrollToPricing={scrollToPricing}
        scrollToServices={scrollToServices}
        scrollToCaseStudies={scrollToCaseStudies}
        scrollToContact={scrollToContact}
      />
      <Spotlight className="hidden md:flex md:-top-80 left-80 " fill="white" />
      <div className="relative z-10 w-full px-2 mx-auto">
        <div ref={heroRef} className="pt-64 pb-24 md:pt-30">
          <h1 className="mx-auto max-w-[842px] px-6 pb-4 text-4xl font-bold text-center bg-opacity-50 text-gray-950 md:text-5xl bg-clip-text to bg-neutral-400">
            Your{" "}
            <span className="text-gravitonblue">passionate digital agency</span>{" "}
            is here to <span className="text-gravitonblue">guide you</span>
          </h1>
          <p className="max-w-lg px-4 mx-auto mb-8 text-base font-normal text-center text-gray-700 md:mt-3 md:text-lg">
            Let us handle the technical aspects while you focus on what you do
            best – running your business.
          </p>
          <div
            onClick={scrollToContact}
            className="
            transition ease-in-out delay-150
            hover:translate-y-1
            hover:shadow-[0_0_0_0_rgba(42,78,159,0.80)]
            duration-300
            flex w-fit items-center text-lg justify-center py-3 px-7 mx-auto my-6 font-bold bg-white rounded-md cursor-pointer shadow-[0_3px_0_0_rgba(42,78,159,0.80)] border-[#2C348C] border-1 text-gravitonblue
            "
          >
            Start to discuss your needs
          </div>
        </div>

        <Problems />

        <div ref={servicesRef} id="Services">
          <Services />
        </div>

        <Workflow />

        <div ref={casestudRef} id="CaseStudies">
          <Portfolio />
        </div>

        <Testimonial />

        <div ref={pricingRef} id="Pricing">
          <Pricing />
        </div>

        <FAQS />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </section>
  );
}
