import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, Trash } from "lucide-react";
import { useCart } from "../context/CartContext"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); 
  const { cart, totalItems, removeFromCart, totalPrice } = useCart(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold tracking-tight">SHOPBLEND</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#featured" className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
                Featured
              </a>
              <a href="#new" className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
                New Arrivals
              </a>
              <a href="#collection" className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
                Collection
              </a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-foreground/80 hover:text-foreground transition-colors p-1">
                <Search size={20} />
              </button>

              {/* Shopping Cart Icon */}
              <button className="text-foreground/80 hover:text-foreground transition-colors p-1 relative" onClick={() => setCartOpen(true)}>
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-foreground/80 hover:text-foreground transition-colors p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#featured" className="block py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
                Featured
              </a>
              <a href="#new" className="block py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
                New Arrivals
              </a>
              <a href="#collection" className="block py-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
                Collection
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer with Fixed Z-Index */}
      {cartOpen && (
        <div className="fixed inset-0 z-[100]  bg-opacity-50 backdrop-blur-md flex justify-end">
          <div className="w-80 h-full bg-white shadow-lg transform transition-transform duration-300 translate-x-0">
            {/* Cart Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-4 overflow-y-auto h-[70vh]">
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li key={item.id} className="flex items-center justify-between border-b pb-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-600">Color: {item.color} | Size: {item.size}</p>
                        <p className="text-sm font-semibold">x{item.quantity}</p>
                        <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeFromCart(item._id)} className="p-2 hover:bg-gray-100 rounded-md">
                        <Trash size={18} />
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
