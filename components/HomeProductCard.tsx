
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { products , productCategories } from '@/lib/productData';

interface Product {
  name: string;
  capacity?: string;
  description: string;
  features: string[];
  applications?: string[];
  types?: string[];
  image: string;
}

interface ProductCategory {
  category: string;
  products: Product[];
}

interface ProductCardProps {
  product: Product;
  category?: string;
}

// const products = [

//       {
//         name: "Air Cooled Chiller",
//         capacity: "0.5 TR - 100 TR",
//         category: "chillers",
//         description: "Energy-efficient chillers for industrial and commercial applications with air-cooled condensers",
//         features: [
//           "Compact design for space-saving installation",
//           "Low noise operation",
//           "Environmentally friendly refrigerants",
//           "Advanced control systems"
//         ],
//         applications: ["HVAC systems", "Process cooling", "Plastic industry", "Food processing"],
//         image: "https://www.alfalaval.com/globalassets/images/products/heat-transfer/chillers/air-cooled-chiller.jpg"
//       },
//       {
//         name: "Water Cooled Chiller",
//         capacity: "2 TR - 100 TR",
//         category: "chillers",
//         description: "High-efficiency chillers with water-cooled condensers for demanding applications",
//         features: [
//           "Higher efficiency than air-cooled models",
//           "Suitable for large cooling capacities",
//           "Stable performance in high ambient temperatures",
//           "Modular design options"
//         ],
//         applications: ["Data centers", "Pharmaceutical", "Breweries", "Chemical processing"],
//         image: "https://www.kelvion.com/fileadmin/_processed_/5/7/csm_Water-cooled_chiller_01_9c6b3a2a8e.jpg"
//       },
//       {
//         name: "Hydraulic Oil Chiller",
//         capacity: "0.5 TR - 100 TR",
//         category: "chillers",
//         description: "Specialized chillers for hydraulic system cooling and temperature control",
//         features: [
//           "Precise temperature control",
//           "Corrosion-resistant materials",
//           "High-pressure operation",
//           "Oil-to-water or oil-to-air cooling"
//         ],
//         applications: ["Machine tools", "Plastic injection molding", "Hydraulic presses", "Power units"],
//         image: "https://www.alfalaval.com/globalassets/images/products/heat-transfer/chillers/oil-chiller.jpg"
//       },
//       {
//         name: "Instant Milk/Beer Glycol Chiller",
//         capacity: "2 TR - 500 TR",
//         category: "chillers",
//         description: "Rapid cooling systems for beverage industry applications",
//         features: [
//           "Glycol-based cooling systems",
//           "Sanitary design for food safety",
//           "Rapid cooling from 32°C to 2°C",
//           "Hygienic stainless steel construction"
//         ],
//         applications: ["Dairy processing", "Breweries", "Beverage production", "Food processing"],
//         image: "https://www.kelvion.com/fileadmin/_processed_/8/0/csm_Glycol_chiller_01_5e1e1c3a4d.jpg"
//       }
    
//   ,
  
    
//       {
//         name: "Panel AC",
//         capacity: "500 W - 10000 W",
//     category: "havc-solutions",

//         description: "Compact air conditioning units for electrical panel cooling",
//         features: [
//           "Thermostatic control",
//           "Filtered air supply",
//           "NEMA-rated enclosures",
//           "Energy efficient operation"
//         ],
//         applications: ["Control panels", "Electrical cabinets", "Server rooms", "Telecom shelters"],
//         image: "https://www.alfalaval.com/globalassets/images/products/hvac/panel-cooling-unit.jpg"
//       },
//       {
//         name: "Cold Storage Units",
//         description: "Complete cooling solutions for cold storage applications",
//     category: "havc-solutions",

//         features: [
//           "Indoor and outdoor models",
//           "Blast freezer options",
//           "Temperature range from +15°C to -40°C",
//           "Energy efficient compressors"
//         ],
//         applications: ["Food storage", "Pharmaceutical storage", "Logistics", "Retail"],
//         image: "https://www.kelvion.com/fileadmin/_processed_/9/7/csm_Cold_storage_units_01_8a8a8a8a8a.jpg"
//       }
    
// ,
//       {
//         name: "Plate Heat Exchangers",
//     category: "heat-exchangers",

//         description: "Efficient thermal transfer solutions for various applications",
//         features: [
//           "High heat transfer efficiency",
//           "Compact footprint",
//           "Easy maintenance",
//           "Multiple material options"
//         ],
//         types: [
//           "Gasketed Plate Heat Exchangers",
//           "Brazed Plate Heat Exchangers",
//           "Welded Plate Heat Exchangers",
//           "Semi-Welded Plate Heat Exchangers"
//         ],
//         image: "https://www.alfalaval.com/globalassets/images/products/heat-transfer/plate-heat-exchanger.jpg"
//       },
//       {
//         name: "Shell & Tube Heat Exchanger",
//     category: "heat-exchangers",

//         description: "Robust heat exchangers for high-pressure and high-temperature applications",
//         features: [
//           "Heavy-duty construction",
//           "Wide temperature and pressure range",
//           "Customizable configurations",
//           "Long service life"
//         ],
//         applications: [
//           "Power plants",
//           "Oil and gas",
//           "Chemical processing",
//           "Refineries"
//         ],
//         image: "https://www.kelvion.com/fileadmin/_processed_/4/0/csm_Shell_tube_heat_exchanger_01_9c6b3a2a8e.jpg"
//       }
//   ,
//       {
//         name: "Oil Filtration Equipment",
//     category: "filtration-systems",

//         description: "Advanced filtration solutions for various industrial oils",
//         features: [
//           "High filtration efficiency",
//           "Continuous operation capability",
//           "Moisture removal",
//           "Particle filtration down to 1 micron"
//         ],
//         types: [
//           "Portable filtration units",
//           "Stationary filtration systems",
//           "Offline filtration",
//           "Online filtration"
//         ],
//         image: "https://www.alfalaval.com/globalassets/images/products/separation/oil-filtration-system.jpg"
//       }

//  ]

// const productCategories = [
//   { id: 'all', name: 'All Products' },
//   { id: 'heat-exchangers', name: 'Heat Exchangers' },
//   { id: 'chillers', name: 'Cooling Systems' },
//   { id: 'havc-solutions', name: 'HVAC Solutions' },
//   { id: 'filtration-systems', name: 'Filtration Systems' },
// ];




const ProductsCard = () => {

   const [activeCategory, setActiveCategory] = useState('all');
  
    const filteredProducts = activeCategory === 'all' 
      ? products 
      : products.filter(product => product.category === activeCategory);

  return (
    <div>
      
      
      <section className="my-8 text-primary  border-b">
  <div className="container-wide">

    <h1></h1>
    <div className="flex flex-wrap gap-4 justify-center">
      {productCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeCategory === category.id
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>

    <SectionTitle
            title={
              activeCategory === 'all'
                ? 'Our Complete Product Range'
                : `Our ${
                    productCategories.find(c => c.id === activeCategory)?.name
                  }`
            }
            subtitle="Innovative solutions designed for optimal performance and reliability."
          />

  </div>
</section>

      
      <div className="flex flex-wrap gap-4   m-5"> 

{filteredProducts.map((product) => (
          


              <HomeProductCard     key={product.name} 
    product={product} 
      />
            ))}
      
      </div>
    </div>
  )
}

export default ProductsCard




















const HomeProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-sm  relative p-2 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-gray-100/50 transition-all duration-300 hover:shadow-xl">
      {/* Product Image */}
      <div>
      <div className="h-58  bg-gray-100/50 flex items-center justify-center p-4">
        
        <img
          src={product.image} 
          // alt={product.name}
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Product+Image';
          }}
        />
      </div>

    

        {/* Product Name and Capacity */}
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="font-bold text-xl text-gray-800">{product.name}</h2>
          {product.capacity && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {product.capacity}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Features */}
        <div className="mb-4">
          <h6 className="font-semibold text-gray-700 mb-1">Key Features:</h6>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Applications or Types */}
        {product.applications && (
          <div className="mb-4">
            <h6 className="font-semibold text-gray-700 mb-1">Applications:</h6>
            <div className="flex flex-wrap gap-1">
              {product.applications.map((app, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        {product.types && (
          <div className="mb-4">
            <h6 className="font-semibold text-gray-700 mb-1">Types:</h6>
            <div className="flex flex-wrap gap-1">
              {product.types.map((type, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {type}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex  gap-2 mt-4">
          <button className="absolute  bottom-2  flex-1  bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-sm transition-colors">
            Request Quote
          </button>
          {/* <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded text-sm transition-colors">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};
