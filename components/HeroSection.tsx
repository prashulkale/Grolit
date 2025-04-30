
import Link from 'next/link';
import React from 'react';
// import { Link } from 'react-router-dom';

interface HeroSectionProps {
  customStyle?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  customStyle,
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = 'brazedPlateHeatExchangers.jpg',
}) => {
  return (
    <div 
      className={`relative bg-corporate-900 text-white py-24 ${customStyle}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl capitalize  py-5 gradient-heading md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-black">{subtitle}</p>
          
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap gap-4">
              {ctaText && ctaLink && (
                <Link href ={ctaLink} className="btn-primary text-base md:text-lg px-6 py-3">
                  {ctaText}
                </Link>
              )}
              
              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink} className="btn-outline text-base md:text-lg px-6 py-3">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
