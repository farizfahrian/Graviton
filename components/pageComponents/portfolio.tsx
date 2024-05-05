'use client'

import { motion } from "framer-motion";
import CaseStudies from "../snippets/3d-card-snippet";

const Portfolio = () => {
  return (
    <section className="relative w-full pt-10 overflow-hidden antialiased bg-white border-t-2 md:pt-20 md:items-center md:justify-center pb-17">
      <div className="relative z-10 w-full p-4 px-2 pt-10 mx-auto md:pt-20">
        <h2 className="px-6 text-2xl font-bold text-center bg-opacity-50 text-gray-950 md:text-4xl">
          Our Proven Work Speaks Volumes
        </h2>
        <p className="max-w-xl px-4 mx-auto text-base font-normal text-center mt-2 text-gray-700 md:mt-3 md:text-lg">
          Explore our portfolio of projects and see how we&apos;ve helped businesses like yours achieve their digital goals.
        </p>
        <div className="items-center mt-12 md:flex md:justify-center md:mx-auto md:space-x-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0">
            <CaseStudies />
          </motion.div>
        </div>
      </div>
    </section>);
}

export default Portfolio;