
import React from 'react';
import HeroSection from "./HeroSection";
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import Link from 'next/link';
// import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Maintenance & Repair',
    description: 'Preventive maintenance and repair services to ensure reliable operation of your equipment.',
    image: 'https://images.unsplash.com/photo-1581092921461-b504ef8ae5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/services/maintenance'
  },
  {
    title: 'Spare Parts',
    description: 'Genuine spare parts to maintain optimal performance and extend equipment life.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/services/spare-parts'
  },
  {
    title: 'Technical Support',
    description: 'Expert technical assistance for troubleshooting and operational guidance.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/services/technical-support'
  },
  {
    title: 'Installation & Commissioning',
    description: 'Professional installation and commissioning services for optimal system performance.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/services/installation'
  },
  {
    title: 'Training',
    description: 'Comprehensive training programs for operators and maintenance personnel.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/services/training'
  },
  {
    title: 'Performance Optimization',
    description: 'Expert analysis and recommendations to maximize system efficiency.',
    image: 'https://images.unsplash.com/photo-1581092921461-b504ef8ae5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: '/services/optimization'
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Service & Support"
        subtitle="Comprehensive service solutions to ensure optimal performance throughout the lifecycle of your equipment."
        backgroundImage="https://images.unsplash.com/photo-1581093566719-7e9ad4a0aaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Keeping Your Systems Running at Peak Performance</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Growlit Enterprises, we understand that reliable operation is critical to your business. Our comprehensive service portfolio is designed to maximize uptime, optimize performance, and extend the life of your equipment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a global network of service centers and factory-trained technicians, we deliver responsive support wherever and whenever you need it.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581093566719-7e9ad4a0aaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Service technician" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <SectionTitle
            title="Our Service Portfolio"
            subtitle="Comprehensive support throughout your equipment lifecycle"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Agreements */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <SectionTitle
            title="Service Agreements"
            subtitle="Tailored maintenance plans to ensure optimal performance and peace of mind"
            align="left"
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-gray-300 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Basic</h3>
              <p className="text-gray-600 mb-6">Essential support for standard operations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Annual preventive maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email and phone support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>48-hour response time</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10% discount on spare parts</span>
                </li>
              </ul>
              <a href="/services/agreements" className="btn-secondary w-full text-center block">
                Learn More
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-corporate-600 transform scale-105 hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 bg-corporate-600 text-white text-sm font-bold py-1 px-3 rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Advanced</h3>
              <p className="text-gray-600 mb-6">Enhanced support for critical equipment</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bi-annual preventive maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority technical support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24-hour response time</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>20% discount on spare parts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performance monitoring</span>
                </li>
              </ul>
              <a href="/services/agreements" className="btn-primary w-full text-center block">
                Learn More
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-gray-300 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium</h3>
              <p className="text-gray-600 mb-6">Comprehensive coverage for maximum reliability</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quarterly preventive maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 emergency support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>8-hour response time</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30% discount on spare parts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Remote monitoring & diagnostics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Annual operator training</span>
                </li>
              </ul>
              <a href="/services/agreements" className="btn-secondary w-full text-center block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <SectionTitle
            title="Our Support Process"
            subtitle="We've designed a streamlined process to ensure you receive fast, effective support"
          />
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h4 className="text-xl font-bold mb-2">Contact</h4>
              <p className="text-gray-600">
                Reach out through our support hotline, customer portal, or email
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h4 className="text-xl font-bold mb-2">Assessment</h4>
              <p className="text-gray-600">
                Our experts analyze your issue and determine the best approach
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h4 className="text-xl font-bold mb-2">Resolution</h4>
              <p className="text-gray-600">
                We implement the solution efficiently, minimizing downtime
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h4 className="text-xl font-bold mb-2">Follow-up</h4>
              <p className="text-gray-600">
                We ensure the solution is effective and your equipment is operating optimally
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Need Immediate Support?</h3>
                <p className="text-lg text-gray-700">
                  Our technical support team is ready to assist you
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Support
                </Link>
                <a href="tel:+15551234567" className="btn-secondary flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
