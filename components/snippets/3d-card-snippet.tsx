"use client";
import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor, client } from '../../lib/client/client';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface CaseStudy {
  _type: string;
  imgUrl: { asset: { _ref: string; url?: string | undefined } };
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  tags: string[];
}

const CaseStudies: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [filterCaseStudies, setFilterCaseStudies] = useState<CaseStudy[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [animateCard, setAnimateCard] = useState<{ y: number; opacity: number }>({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "casestudies"]';

    client.fetch(query).then((data: CaseStudy[]) => {
      console.log('Case Studies Data:', data); // Log case studies data
      setCaseStudies(data);
      setFilterCaseStudies(data);
    });
  }, []);

  const handleCaseStudyFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterCaseStudies(caseStudies);
      } else {
        setFilterCaseStudies(caseStudies.filter((caseStudy) => caseStudy.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <CardContainer className="grid md:grid-cols-3 gap-6">
      {filterCaseStudies.map((caseStudy, index) => (
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl pt-2 border" key={index}>
          <div className="px-3">
            <CardItem
              translateZ="20"
              className="text-xl text-wrap p-2 font-bold text-gray-950 dark:text-white justify-center">
              {caseStudy.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="20"
              className="text-gray-600 text-wrap px-2 text-sm max-w-sm dark:text-neutral-300"
            >
              {caseStudy.description}
            </CardItem>
          </div>
          <CardItem translateZ="30" className="w-full mt-4">
            {caseStudy.imgUrl && (
              <Image
                src={urlFor(caseStudy.imgUrl.asset._ref).url()} // Assuming 'asset' contains the 'url' property
                alt={caseStudy.title}
                width={1000}
                height={1000}
                className="h-60 w-full object-cover rounded-b-xl group-hover/card:shadow-xl"
                unoptimized={true}
              />
            )}
          </CardItem>
        </CardBody>
      ))}
    </CardContainer>
  );
};

export default CaseStudies;
