
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/contexts/CartContext';
import { productData } from '@/data/products';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique locations and categories for filters
  const locations = ['All', ...new Set(productData.map(item => item.location))];
  const categories = ['All', ...new Set(productData.map(item => item.category))];
  
  useEffect(() => {
    // Initialize products
    setProducts(productData);
    setFilteredProducts(productData);
  }, []);
  
  useEffect(() => {
    // Filter products based on search term and filters
    let result = products;
    
    // Apply location filter
    if (selectedLocation !== 'All') {
      result = result.filter(product => product.location === selectedLocation);
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedLocation, selectedCategory, products]);
  
  return (
    <div className="min-h-screen bg-f1-black">
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-8 carbon-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">F1 MERCHANDISE & 3D PRINTS</h1>
          <p className="text-f1-gray text-center mt-2 max-w-2xl mx-auto">
            Explore our collection of official Formula One merchandise and custom 3D prints
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-f1-carbon sticky top-16 z-20 py-4 border-t border-b border-f1-gray/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-f1-gray h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-f1-black border border-f1-gray/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-f1-red"
              />
            </div>
            
            {/* Location Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-f1-gray h-4 w-4" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-f1-black border border-f1-gray/20 py-2 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-f1-red"
              >
                <option value="All">All Locations</option>
                {locations
                  .filter(loc => loc !== 'All')
                  .map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
              </select>
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-f1-black border border-f1-gray/20 py-2 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-f1-red"
              >
                <option value="All">All Categories</option>
                {categories
                  .filter(cat => cat !== 'All')
                  .map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
              <p className="text-f1-gray">
                Try changing your search criteria or filters
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
