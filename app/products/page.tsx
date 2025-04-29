"use client"
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { products , productCategories } from '@/lib/productData';

// const productCategories = [
//   { id: 'all', name: 'All Products' },
//   { id: 'heat-exchangers', name: 'Heat Exchangers' },
//   { id: 'cooling-systems', name: 'Cooling Systems' },
//   { id: 'process-equipment', name: 'Process Equipment' },
// ];


import ProductsCard from '@/components/HomeProductCard';


const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className=" px-5 min-h-screen">
      <HeroSection
        title="Products & Solutions"
        subtitle="Cutting-edge technologies designed to optimize industrial processes and enhance operational efficiency."
        backgroundImage="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

    {/* Products */}

    <ProductsCard/>

     

      {/* Solution Finder */}
      <section className="py-16 ">
        <div className="container-wide">
          <div className="bg-corporate-50 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Find Your Perfect Solution
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Not sure which product is right for your application? Our experts can help you identify the optimal solution based on your specific requirements.
                </p>
                <Button className=" bg-orange-500 btn-primary">
                  Talk to an Expert
                </Button>
              </div>
              <div className=" rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Solution Finder
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Industry</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Select your industry</option>
                      <option>Energy</option>
                      <option>Chemical</option>
                      <option>Food & Beverage</option>
                      <option>Marine</option>
                      <option>HVAC</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Application</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Select your application</option>
                      <option>Heating</option>
                      <option>Cooling</option>
                      <option>Heat Recovery</option>
                      <option>Process</option>
                    </select>
                  </div>
                  <div>
                    <button type="submit" className="w-full btn-primary">
                      Find Solutions
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 ">
        <div className="container-wide">
          <SectionTitle
            title="Custom Solutions"
            subtitle="Tailored to your unique requirements"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Dont see exactly what you need? Our engineering team specializes in developing custom solutions designed specifically for your unique applications and challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From modified standard equipment to completely custom-engineered systems, we work closely with you to understand your requirements and develop the perfect solution.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                <li>Custom heat exchangers for non-standard applications</li>
                <li>Specialized cooling systems for unique environments</li>
                <li>Integrated process solutions combining multiple technologies</li>
                <li>Retrofit solutions for existing equipment and systems</li>
              </ul>
              <Button className="  bg-orange-500 btn-primary">
                Discuss Your Custom Requirements
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9a6cd411c55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Custom engineering solutions" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
