
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Make elements visible after a small delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.codepen.io/1134440/F1-video-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20 px-4">
        <div className="max-w-3xl">
          {/* Animated F1 Logo */}
          <div 
            className={`mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
            }`}
          >
            <span className="inline-block text-f1-red bg-white/10 backdrop-blur-sm px-3 py-1 font-orbitron rounded">
              TUNISIAN OFFICIAL F1 MERCHANDISE
            </span>
          </div>
          
          {/* Main Title */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
            }`}
          >
            GRAND<span className="text-f1-red">PRIX</span> TUNISIA
          </h1>
          
          {/* Tagline */}
          <p 
            className={`text-xl md:text-2xl font-rajdhani mb-8 text-f1-gray transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
            }`}
          >
            Feel the Speed. Own the Race.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
            }`}
          >
            <Link to="/products" className="btn-f1">
              <span className="flex items-center">
                SHOP NOW
                <ChevronRight className="ml-1 h-5 w-5" />
              </span>
            </Link>
            <Link to="/about" className="btn-outline">
              <span className="flex items-center">
                EXPLORE
                <ChevronRight className="ml-1 h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Car Silhouette */}
      <div 
        className={`absolute bottom-0 right-0 w-full md:w-2/3 lg:w-1/2 transition-all duration-1500 delay-800 ${
          isVisible ? 'opacity-60 translate-x-0' : 'opacity-0 translate-x-96'
        }`}
      >
        <img 
          src="https://www.pngall.com/wp-content/uploads/12/F1-Car-PNG-Image-File.png" 
          alt="F1 Car Silhouette" 
          className="w-full h-auto"
        />
      </div>
      
      {/* Speed Lines - Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-1/3 w-96 h-1 bg-f1-red transform -rotate-12 opacity-30"></div>
        <div className="absolute -left-10 top-1/3 mt-4 w-64 h-1 bg-f1-red transform -rotate-12 opacity-20"></div>
        <div className="absolute -left-10 top-1/3 mt-8 w-32 h-1 bg-f1-red transform -rotate-12 opacity-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
