
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flag, MapPin } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { productData } from '@/data/products';

// Upcoming race data (in a real app, this would come from an API)
const upcomingRace = {
  name: "Monaco Grand Prix",
  date: "May 26, 2025",
  location: "Monaco",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Monacogprix.png",
};

const NextRaceFeature = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Filter products by the next race location
    const raceProducts = productData.filter(
      product => product.location.toLowerCase() === upcomingRace.location.toLowerCase()
    );
    setProducts(raceProducts.slice(0, 3));
  }, []);
  
  return (
    <section className="py-16 bg-gradient-to-br from-f1-black to-f1-carbon relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4 bg-f1-red/10 px-4 py-2 rounded-full">
            <Flag className="h-5 w-5 mr-2 text-f1-red" />
            <span className="text-f1-red font-orbitron">NEXT RACE MERCHANDISE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {upcomingRace.name}
          </h2>
          <div className="flex items-center justify-center text-f1-gray">
            <MapPin className="h-5 w-5 mr-1 text-f1-red" />
            <span>{upcomingRace.location}</span>
            <span className="mx-2">•</span>
            <span>{upcomingRace.date}</span>
          </div>
        </div>
        
        {/* Race Circuit Image */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img
              src={upcomingRace.image}
              alt={`${upcomingRace.name} Circuit`}
              className="max-h-32 filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-f1-red/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Race Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-md bg-f1-carbon border border-f1-gray/10 p-4">
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-f1-red font-bold">${product.price.toFixed(2)}</span>
                  <Link to={`/product/${product.id}`} className="text-f1-gray hover:text-f1-red text-sm">
                    View details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" className="border-f1-red text-f1-red hover:bg-f1-red hover:text-white font-orbitron px-8">
              EXPLORE {upcomingRace.location} COLLECTION
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-f1-red/20 to-transparent"></div>
    </section>
  );
};

export default NextRaceFeature;
