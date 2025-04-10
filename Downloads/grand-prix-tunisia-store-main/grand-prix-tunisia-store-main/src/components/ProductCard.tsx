
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const { id, name, price, image, limitedStock, bestSeller } = product;
  
  return (
    <div className="card-product group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-square object-cover object-center transition-transform duration-500"
        />
        
        {/* Quick Action Buttons - Visible on Hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-3 px-4 flex items-center justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            onClick={() => addToCart(product)}
            className="text-xs bg-f1-red hover:bg-white hover:text-f1-red rounded-sm"
          >
            <ShoppingCart className="mr-1 h-4 w-4" />
            {isInCart(id) ? 'Add More' : 'Add to Cart'}
          </Button>
          
          <Link to={`/product/${id}`}>
            <Button variant="outline" className="text-xs border-white text-white hover:bg-white hover:text-f1-black rounded-sm">
              <Eye className="mr-1 h-4 w-4" />
              View
            </Button>
          </Link>
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {limitedStock && (
            <span className="bg-f1-red text-white px-2 py-1 text-xs font-bold rounded-sm">
              Limited Stock
            </span>
          )}
          {bestSeller && (
            <span className="bg-f1-yellow text-f1-black px-2 py-1 text-xs font-bold rounded-sm">
              Best Seller
            </span>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold line-clamp-1">
          <Link to={`/product/${id}`} className="hover:text-f1-red transition-colors">
            {name}
          </Link>
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-f1-red">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="p-2 bg-f1-carbon rounded-full hover:bg-f1-red transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
