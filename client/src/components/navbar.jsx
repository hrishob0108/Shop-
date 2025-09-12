import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, Trash } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, totalItems, removeFromCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-900/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
                SHOPWEAR
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Featured", "New Arrivals", "Collection"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative text-gray-300 hover:text-white transition-colors text-sm font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors p-1">
                <Search size={20} />
              </button>

              {/* Shopping Cart Icon */}
              <button
                className="text-gray-300 hover:text-white transition-colors p-1 relative"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-300 hover:text-white transition-colors p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {["Featured", "New Arrivals", "Collection"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-80 h-full bg-neutral-900 text-white shadow-xl transform transition-transform duration-300 translate-x-0">
            {/* Cart Header */}
            <div className="flex justify-between items-center p-4 border-b border-neutral-800">
              <h2 className="text-lg font-bold">Shopping Cart</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-neutral-800 rounded-full"
              >
                <X size={22} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-4 overflow-y-auto h-[70vh]">
              {cart.length === 0 ? (
                <p className="text-gray-400 text-sm">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between border-b border-neutral-800 pb-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-sm font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-400">
                          {item.color} | {item.size}
                        </p>
                        <p className="text-xs text-gray-400">x{item.quantity}</p>
                        <p className="text-sm font-bold text-blue-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="p-2 hover:bg-neutral-800 rounded-md"
                      >
                        <Trash size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
