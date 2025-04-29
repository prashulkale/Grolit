import React from 'react';

interface ProductCardProps {
  product: {
    ProductName: string;
    ProductImage: string[];
    DesignPressure: number;
    ProductDescription: string;
    FactsheetURL: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Split the description into bullet points
  const descriptionPoints = product.ProductDescription.split('\n');

  // Extract the PDF size from the URL (mock implementation)
  // In a real app, you might want to fetch this from the PDF metadata
  const getPdfSize = (url: string) => {
    // This is a placeholder - you'd need actual logic to get PDF size
    return "2 MB"; // Default value
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Product Image */}
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {product.ProductImage && product.ProductImage.length > 0 && (
          <img 
            src={product.ProductImage[0]} 
            alt={product.ProductName}
            className="max-h-full max-w-full object-contain"
          />
        )}
      </div>

      {/* Product Content */}
      <div className="px-6 py-4">
        {/* Product Name */}
        <h2 className="font-bold text-xl mb-2 text-gray-800">{product.ProductName}</h2>

      

        {/* Description Bullet Points */}
        <ul className="list-disc pl-5 mb-4 space-y-1">
          {descriptionPoints.map((point, index) => (
            <li key={index} className="text-gray-700">{point}</li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex  gap-3 mt-6">
        
     
          <button className="flex-1  bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors">
            Contact ES
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;











