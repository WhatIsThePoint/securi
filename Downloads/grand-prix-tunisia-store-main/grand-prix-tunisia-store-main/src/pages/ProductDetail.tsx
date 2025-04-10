
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Minus, Plus, ShoppingCart, Tag } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { productData } from '@/data/products';
import MapPin from '@/components/MapPin';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart, isInCart } = useCart();
  
  useEffect(() => {
    // Find product by id
    if (!id) return;
    
    const foundProduct = productData.find(item => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get related products (same category or location)
      const related = productData
        .filter(item => 
          (item.category === foundProduct.category || 
           item.location === foundProduct.location) && 
          item.id !== foundProduct.id
        )
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  
  // Handle Add to Cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen bg-f1-black">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product not found</h2>
            <Link to="/products" className="text-f1-red hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-f1-black">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back to products link */}
          <Link 
            to="/products" 
            className="inline-flex items-center text-f1-gray hover:text-f1-red mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
          
          {/* Product Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-f1-carbon p-6 rounded-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              {/* Price */}
              <div className="text-2xl font-bold text-f1-red mb-4">
                ${product.price.toFixed(2)}
              </div>
              
              {/* Product Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="bg-f1-carbon px-3 py-1 rounded-sm text-sm flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  {product.category}
                </div>
                <div className="bg-f1-carbon px-3 py-1 rounded-sm text-sm flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {product.location}
                </div>
                {product.limitedStock && (
                  <div className="bg-f1-red px-3 py-1 rounded-sm text-sm text-white flex items-center">
                    Limited Stock
                  </div>
                )}
                {product.bestSeller && (
                  <div className="bg-f1-yellow px-3 py-1 rounded-sm text-sm text-f1-black flex items-center">
                    Best Seller
                  </div>
                )}
              </div>
              
              {/* Description */}
              <p className="text-f1-gray mb-8">{product.description}</p>
              
              {/* Quantity Selector */}
              <div className="mb-8">
                <div className="text-f1-gray mb-2">Quantity:</div>
                <div className="flex items-center">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="bg-f1-carbon p-2 rounded-l-sm"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <div className="bg-f1-black px-6 py-2 border-t border-b border-f1-gray/20">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="bg-f1-carbon p-2 rounded-r-sm"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                onClick={handleAddToCart}
                className="w-full md:w-auto bg-f1-red hover:bg-white hover:text-f1-red text-white py-6 px-8 rounded-sm font-orbitron"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {isInCart(product.id) ? 'Add More to Cart' : 'Add to Cart'}
              </Button>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link 
                    to={`/product/${relatedProduct.id}`} 
                    key={relatedProduct.id} 
                    className="group"
                  >
                    <div className="bg-f1-carbon rounded-md overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-white line-clamp-1 group-hover:text-f1-red transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <div className="text-f1-red font-bold mt-2">
                          ${relatedProduct.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
