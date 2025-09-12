import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        {/* Brand + Socials */}
        <div className="text-center space-y-4 mb-10">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SHOPWEAR
          </h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Premium footwear designed for performance, style, and comfort.
            Elevate your movement with ShopWear.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-cyan-400 transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left mb-10">
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cyan-400">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Men&apos;s Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Women&apos;s Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Special Editions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="font-semibold text-lg mb-4 text-teal-400">
              Stay Updated
            </h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400 w-full"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-sm text-gray-400 mb-8">
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-cyan-400" />
            <span>Hrishob@shop.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2 text-green-400" />
            <span>8978442820</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
            <span>Visakhapatnam, Andhra Pradesh</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} SHOPWEAR. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
