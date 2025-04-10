
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { productData } from '@/data/products';

const BestSellerSection = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Find best seller product from our data
    const bestSeller = productData.find(product => product.bestSeller);
    if (bestSeller) {
      setProduct(bestSeller);
    }
  }, []);
  
  if (!product) {
    return null;
  }
  
  return (
    <section className="py-16 relative overflow-hidden carbon-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Best Seller Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-f1-yellow text-f1-black px-4 py-2 rounded-sm flex items-center">
              <Star className="h-5 w-5 mr-1 fill-f1-black" />
              <span className="font-orbitron text-sm font-bold">FAN FAVORITE</span>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-b from-f1-red/20 to-transparent p-8 rounded-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-contain max-h-96"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
            <p className="text-f1-gray mb-6">{product.description}</p>
            
            {/* Price */}
            <div className="flex items-center mb-8">
              <span className="text-3xl font-bold text-f1-red">${product.price.toFixed(2)}</span>
              {product.limitedStock && (
                <span className="ml-4 bg-f1-red text-white px-3 py-1 text-sm font-bold rounded-sm animate-pulse">
                  🔥 Limited Stock!
                </span>
              )}
            </div>
            
            {/* Add to Cart Button */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => addToCart(product)}
                className="bg-f1-red hover:bg-white hover:text-f1-red text-white font-orbitron py-6 px-8 text-lg uppercase tracking-wider rounded-sm"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-f1-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-f1-red/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default BestSellerSection;
