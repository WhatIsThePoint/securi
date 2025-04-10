
import React from 'react';
import { Trophy, Car, Printer, ShoppingBag, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-f1-black">
      <Header />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px] overflow-hidden mb-12">
          <div className="absolute inset-0 bg-f1-carbon z-0 opacity-70"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-[-1]"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80)' }}
          ></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl text-f1-gray max-w-3xl">
              The premier destination for Formula One merchandise and custom 3D prints in Tunisia.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 inline-block relative">
              Our Mission
              <span className="absolute bottom-0 left-0 w-full h-1 bg-f1-red"></span>
            </h2>
            <p className="text-f1-gray text-lg max-w-3xl mx-auto">
              At Grand Prix Tunisia, we're passionate about bringing the thrill of Formula One 
              to fans across Tunisia. Our mission is to provide high-quality F1 merchandise and 
              custom 3D-printed collectibles that celebrate the sport we love, while making these 
              products accessible to the Tunisian market.
            </p>
          </div>
          
          {/* Our Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-f1-carbon p-6 rounded-md text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-f1-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-f1-gray">We offer only the finest products that meet our strict standards for craftsmanship and durability.</p>
            </div>
            
            <div className="bg-f1-carbon p-6 rounded-md text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-f1-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Passion</h3>
              <p className="text-f1-gray">Our team consists of dedicated F1 enthusiasts who share the same excitement for racing as our customers.</p>
            </div>
            
            <div className="bg-f1-carbon p-6 rounded-md text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-f1-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-f1-gray">We leverage cutting-edge 3D printing technology to create unique pieces that can't be found elsewhere.</p>
            </div>
            
            <div className="bg-f1-carbon p-6 rounded-md text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-f1-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-f1-gray">We're committed to making F1 collectibles accessible to all Tunisian fans through local production and delivery.</p>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                Our Story
                <span className="absolute bottom-0 left-0 w-full h-1 bg-f1-red"></span>
              </h2>
              <div className="space-y-4 text-f1-gray">
                <p>
                  Grand Prix Tunisia was founded in 2022 by a group of passionate F1 fans who 
                  realized there was a lack of authentic merchandise available in Tunisia. 
                  What started as a small operation has grown into the country's premier 
                  destination for Formula One collectibles.
                </p>
                <p>
                  Our journey began when we started 3D printing small F1 car models for our 
                  friends and family. The overwhelming positive response encouraged us to 
                  expand our offerings and make them available to all Tunisian F1 enthusiasts.
                </p>
                <p>
                  Today, we offer a wide range of products, from official team merchandise to 
                  custom-designed 3D prints that capture iconic moments in F1 history. We're 
                  proud to serve the growing community of racing fans across Tunisia.
                </p>
              </div>
              
              <div className="mt-8">
                <a href="/products" className="btn-f1 flex items-center w-fit">
                  Shop Our Collection <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="relative h-[400px] overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1586165877141-3dbcf231b21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="F1 Team Workshop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-f1-black to-transparent p-4">
                <p className="text-f1-gray text-sm">Our workshop where custom F1 3D models come to life</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-f1-carbon p-8 rounded-md text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Feel the Speed?</h2>
            <p className="text-f1-gray mb-6 max-w-2xl mx-auto">
              Explore our collection of Formula One merchandise and custom 3D prints, 
              designed specifically for Tunisian F1 enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/products" className="btn-f1">
                Shop Now
              </a>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
