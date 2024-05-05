"use client";
import Img from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor, client} from '../../lib/client/client';
import './casestudies.modules.css';
import { createClient } from '@sanity/client';
import { useNextSanityImage } from 'next-sanity-image';
import { FaBold } from 'react-icons/fa';

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
    <>
      <section className='container flex flex-col items-center'>
        <div className="deco-line mt-5"></div>
        <h2 className="head-text mb-lg-5 mb-3">
          Proyek dan <span className="font-semibold ml-2">Studi Kasus</span> Kami
        </h2>
      </section>
      <div className="app__casestudies-filter">
        {['UI/UX', 'Website', 'Mobile App', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleCaseStudyFilter(item)}
            className={`app__casestudies-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__casestudies-portfolio"
      >
        {filterCaseStudies.map((caseStudy, index) => (
          <div className="app__casestudies-item app__flex" key={index}>
            <div
              className="app__casestudies-img app__flex"
            >
              {caseStudy.imgUrl && (
                <Image
                  src={urlFor(caseStudy.imgUrl.asset._ref).url()} // Assuming 'asset' contains the 'url' property
                  alt={caseStudy.title}
                  width={300}
                  height={200}
                  unoptimized={true}
                />
              )}
              
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__casestudies-hover app__flex"
              >
                <a href={caseStudy.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={caseStudy.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__casestudies-content app__flex">
              <h4 className="bold-text">{caseStudy.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{caseStudy.description}</p>

              <div className="app__casestudies-tag app__flex">
                {caseStudy.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="category-text">{tag}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default CaseStudies;
