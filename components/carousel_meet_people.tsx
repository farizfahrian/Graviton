"use client";
// CarouselMeetPeopleComponent.js
import dynamic from 'next/dynamic';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const CarouselMeetPeopleComponent = () => {
  const [options, setOptions] = React.useState({
    loop: true,
    margin: 10,
    responsiveClass: true,
    center: true,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  return (
    <OwlCarousel className="owl-carousel" {...options}>
      <div className="slider-card">
        <div className="row justify-content-center mb-3">
          <div className="col-12">
            <i className="fa-solid fa-quote-left"></i>
          </div>
        </div>
        <p className="p-md-2 p-sm-1">
          Tanpa ragu kami merekomendasikan Graviton sebagai salah satu agensi
          yang menyediakan jasa pengembangan website. Sangat direkomendasikan
          bagi kalian yang sedang mencari{" "}
          <span className="italic"> Software Agency </span>
          untuk kebutuhan bisnis secara digital.
        </p>
        <div className="row justify-content-center">
          <div className="col-12 text-end">
            <i className="fa-solid fa-quote-right "></i>
          </div>
        </div>
        <h5 className="mt-3">- Previn M. Alexander (Wicaksana)</h5>
      </div>
    </OwlCarousel>
  );
};

export default CarouselMeetPeopleComponent;