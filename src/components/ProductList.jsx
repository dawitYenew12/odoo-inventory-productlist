import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { getProducts } from '../services/api';
import { setProducts, setLoading, setError } from '../store/productsSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    onSuccess: (data) => {
      console.log('Products data received:', data);
      dispatch(setProducts(data.data || []));
    },
    onError: (error) => {
      console.error('Error in React Query:', error);
      dispatch(setError(error.message));
    }
  });

  React.useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error.message}</span>
      </div>
    );
  }

  // Add a check if data exists and has the expected structure
  const products = data?.data || [];
  console.log('Rendering products:', products);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Product List</h2>
      {products.length === 0 ? (
        <div className="text-center text-gray-500">No products found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList; 