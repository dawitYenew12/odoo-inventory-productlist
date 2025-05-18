import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
      <div className="mt-2">
        <p className="text-gray-600">ID: {product.id}</p>
        <p className="text-green-600 font-medium mt-2">${product.list_price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard; 