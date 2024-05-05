// CarouselComponent.js
"use client"
import dynamic from 'next/dynamic';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const CarouselComponent = () => {
  const [options, setOptions] = React.useState({
    loop: true,
    dots: true,
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
    <OwlCarousel className="owl-carousel owl-theme" {...options}>
      <div className="slider-card">
        <div className="d-flex justify-content-start align-items-center mb-4">
          <Image src="/img/Code Icon.png"
                 width={50}
                 height={50}
                 alt="Code Icon"
          />
        </div>
        <h5 className="mb-4">Website Development</h5>
        <p>
        Ingin merancang dan mengembangkan 
        Website untuk bisnis Anda tetapi tidak tahu harus mulai dari mana? 
        Kami di sini untuk membantu Anda!
        </p>
      </div>
      <div className="slider-card">
        <div className="d-flex justify-content-start align-items-center mb-4">
          <Image src="/img/App Icon.png"
                 width={50}
                 height={50}
                 loading="lazy" 
                 alt="slider_icon" />
        </div>
        <h5 className="mb-4">Software Testing Service</h5>
        <p>
        Kamu punya <i>software</i> tapi selalu bermasalah dan menghadapi keluhan <i>user</i>? 
        Kamu capek dan mau tau beres aja? <i>Chill</i>, karena layanan pengujian perangkat lunak kami siap membantu!
        </p>
      </div>
      <div className="slider-card">
        <div className="d-flex justify-content-start align-items-center mb-4">
          <Image src="/img/Desktop App Icon.png"
                 width={50}
                 height={50}
                 alt="app_development_logo" />
        </div>
        <h5 className="mb-4">Search Engine Optimization</h5>
        <p>
        Kamu punya produk atau bisnis tapi kurang dikenal, sehingga penjualannya gak begitu memuaskan?
        Santai, kami menyediakan layanan <i>search engine optimization</i> untuk 
        memperkuat eksistensi bisnis kamu menjadi nomor satu di internet.
        </p>
      </div>
      <div className="slider-card">
        <div className="d-flex justify-content-start align-items-center mb-4">
          <Image src="/img/App Icon.png" 
                 width={50}
                 height={50}
                 alt="" />
        </div>
        <h5 className="mb-4">Mobile Apps Development</h5>
        <p>
        Punya ide <i>mobile app</i> untuk bisnis atau <i>startup</i> tapi gak ngerti 
        cara eksekusinya? Gak perlu <i>anxious</i>, karena tim kami menciptakan aplikasi seluler 
        inovatif dan ramah pengguna yang memenuhi kebutuhan unik kamu.
        </p>
      </div>
    </OwlCarousel>
  );
};

export default CarouselComponent;
