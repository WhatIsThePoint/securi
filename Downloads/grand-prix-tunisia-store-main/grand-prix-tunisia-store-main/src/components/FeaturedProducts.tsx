
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';
import { productData } from '@/data/products';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Filter featured products from our data
    const featured = productData.filter(product => product.featured);
    setProducts(featured);
  }, []);
  
  return (
    <section className="py-16 bg-f1-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <p className="text-f1-gray mt-2">
              Top picks from our latest F1 collection
            </p>
          </div>
          <Link to="/products" className="text-f1-red hover:text-white flex items-center transition-colors">
            <span className="font-orbitron">View All</span>
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
