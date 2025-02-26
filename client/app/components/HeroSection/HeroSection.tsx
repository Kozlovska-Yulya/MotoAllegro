import React from 'react';
import Image from 'next/image';
import CarFilter from '../CarFilter/CarFilter';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-banner">
        <Image
          src="/images/car-banner.jpg"
          alt="Автомобіль"
          width={1440}
          height={400}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h2>Підбір автозапчастин</h2>
          <CarFilter />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
