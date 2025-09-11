import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">SHOPBLEND</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Premium footwear designed for performance, style, and comfort. Elevate your movement with ShopBlend.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-all">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-all">Men's Collection</a></li>
              <li><a href="#" className="hover:text-white transition-all">Women's Collection</a></li>
              <li><a href="#" className="hover:text-white transition-all">Special Editions</a></li>
              <li><a href="#" className="hover:text-white transition-all">Sale</a></li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-all">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-all">Order Status</a></li>
              <li><a href="#" className="hover:text-white transition-all">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-all">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-all">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-blue-400">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400 w-full"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                Subscribe
              </button>
            </div>

            <div className="space-y-2 pt-2 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-pink-400" />
                <span>Hrishob@shop.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span>8978442820</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span>ShopBlend, Visakhapatnam,  Andhra Pradesh,</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} SHOPBLEND. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
