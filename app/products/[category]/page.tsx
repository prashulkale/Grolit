import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import { gasketedPlateHeatExchangers } from '@/lib/productData';
import Image from 'next/image';
import React from 'react';

export async function generateStaticParams() {
    return [
      { category: 'gasketedPlateHeatExchangers' },
     
    ];
  }
const ProductsPage = ({ params }: { params: { category: string } }) => {


  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Gasketed Plate Heat Exchangers</h1> */}
   



    <section className="relative py-20 lg:py-32 overflow-hidden hero-pattern">
            <div className="container-fluid">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in">
                  <h1 className="gradient-heading mb-6 py-3">
                  Gasketed Plate Heat Exchangerṣ
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
                    Thermal management for a sustainable future.
                  </p>
            
                   
                </div>
                <div className="relative flex justify-center">
                  <Image 
                    src="/GPHE.png" 
                    alt="Industrial heat exchanger" 
                    width={600} 
                    height={600} 
                    className="rounded-lg shadow-xl object-cover animate-fade-in"
                    priority
                  />
                </div>
              </div>    
            </div>
          </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {      gasketedPlateHeatExchangers.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;