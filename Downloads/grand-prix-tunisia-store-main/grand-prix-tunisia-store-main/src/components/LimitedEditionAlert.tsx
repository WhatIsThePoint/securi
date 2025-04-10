
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/contexts/CartContext';
import { useState, useEffect } from 'react';
import { productData } from '@/data/products';

const LimitedEditionAlert = () => {
  const [limitedProducts, setLimitedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const limited = productData.filter(product => product.limitedStock).slice(0, 1);
    setLimitedProducts(limited);
  }, []);
  
  if (limitedProducts.length === 0) {
    return null;
  }
  
  const product = limitedProducts[0];
  
  return (
    <div className="bg-f1-carbon border-t border-b border-f1-red/20 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3">
          <div className="flex items-center text-f1-red">
            <AlertCircle className="h-5 w-5 mr-2 animate-pulse" />
            <span className="font-orbitron text-sm font-bold">LIMITED STOCK</span>
          </div>
          <p className="text-white">
            <span className="text-f1-red font-bold">{product.name}</span> is almost sold out!
          </p>
          <Link 
            to={`/product/${product.id}`}
            className="text-f1-yellow hover:text-white transition-colors text-sm font-bold"
          >
            🔥 Get Yours Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LimitedEditionAlert;
