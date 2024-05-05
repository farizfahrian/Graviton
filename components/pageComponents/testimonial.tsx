import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { urlFor, client } from '../../lib/client/client';

interface TestimonialData {
  _type: string;
  imgUrl: { asset: { _ref: string; url?: string | undefined } };
  name: string;
  feedback: string;
  company: string;
}

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // call handleResize initially to set the initial state
    window.addEventListener('resize', handleResize); // add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // remove event listener on component unmount
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testimonialsData: TestimonialData[] = await client.fetch('*[_type == "testimonials"]');
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <>
          <section className="w-full pb-24 overflow-hidden antialiased border-t-2 elative md:items-center md:justify-center pt-14">
            <div className="relative z-10 w-full p-4 px-2 pt-10 mx-auto md:pt-20">
              <h2 className="px-6 text-2xl font-bold text-center bg-opacity-50 text-gray-950 md:text-4xl">
                We have worked with these amazing people
              </h2>
              <p className="max-w-xl px-4 mx-auto text-base font-normal text-center mt-2 text-gray-700 md:mt-3 md:text-lg">
                In today&apos;s fast-paced world, a strong online presence is a necessity. Here what we do to help you.
              </p>
            </div>

            <div className="mt-2 md:flex md:flex-row md:justify-center">
              <Card className="flex flex-col p-6 md:p-12 gap-3 md:gap-6 bg-white shadow-sm">
                <CardDescription className='text-base md:text-xl text-gray-950'>
                  {testimonials[currentIndex].feedback}
                </CardDescription>
                <CardContent className="flex gap-3">
                  <Avatar className='w-[52px] h-[52px] shadow-sm'>
                    {testimonials[currentIndex].imgUrl && (
                      <AvatarImage src={urlFor(testimonials[currentIndex].imgUrl.asset._ref).url()} alt={testimonials[currentIndex].name} />
                    )}
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col gap-2 justify-center'>
                    <p className="font-bold text-base md:text-xl text-gravitonblue mb-0 tracking-normal leading-none">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-700 text-sm mb-0 tracking-normal leading-none">{testimonials[currentIndex].company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={isMobile ? "grid grid-cols-2 gap-3 md:gap-4 mt-4 mx-6 md:justify-center" : "grid grid-cols-2 gap-4 mt-4 ms-80 pl-40 md:flex md:flex-row md:justify-center"}>
              <div className="
              transition ease-in-out delay-50 duration-150
              col-start-4 px-6 py-2 md:px-8 md:py-[0.75rem] bg-gray-50 cursor-pointer rounded-[8px] shadow-sm hover:bg-gray-200" onClick={() => handleClick((currentIndex - 1 + testimonials.length) % testimonials.length)}>
                <Image src="/icon/arrow_left.svg" height={24} width={24} alt='arrow left' />
              </div>
              <div className="
              transition ease-in-out delay-50 duration-150
              col-start-5 px-6 py-2 md:px-8 md:py-[0.75rem] cursor-pointer bg-gray-50 rounded-[8px] shadow-sm hover:bg-gray-200" onClick={() => handleClick((currentIndex + 1) % testimonials.length)}>
                <Image src="/icon/arrow_right.svg" height={24} width={24} alt='arrow right' />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Testimonial;
