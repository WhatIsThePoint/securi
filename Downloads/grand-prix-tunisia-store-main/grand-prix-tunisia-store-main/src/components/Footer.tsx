
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-f1-black border-t border-f1-gray/10">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-orbitron font-bold text-f1-red">
                GRAND<span className="text-white">PRIX</span>
              </span>
            </Link>
            <p className="text-f1-gray mb-6">
              The premier destination for Formula One merchandise and custom 3D prints in Tunisia. 
              Feel the speed. Own the race.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-f1-gray hover:text-f1-red transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-f1-gray hover:text-f1-red transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-f1-gray hover:text-f1-red transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:info@grandprixtunisia.com" className="text-f1-gray hover:text-f1-red transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-f1-gray hover:text-f1-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-f1-gray hover:text-f1-red transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-f1-gray hover:text-f1-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-f1-gray hover:text-f1-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-f1-gray hover:text-f1-red transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-f1-gray mb-2">123 Racing Avenue</p>
              <p className="text-f1-gray mb-2">Tunis, Tunisia</p>
              <p className="text-f1-gray mb-2">Phone: +216 71 123 456</p>
              <p className="text-f1-gray mb-2">
                Email: 
                <a href="mailto:info@grandprixtunisia.com" className="text-f1-red ml-1 hover:underline">
                  info@grandprixtunisia.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-f1-gray/10 mt-8 pt-6 text-center">
          <p className="text-f1-gray">
            &copy; {currentYear} Grand Prix Tunisia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
