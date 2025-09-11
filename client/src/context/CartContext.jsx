import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://shopblend.onrender.com/cart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Cart items
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data from MongoDB when component mounts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setCart(data);
        updateCartTotals(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  // Update cart totals
  const updateCartTotals = (cartItems) => {
    setTotalItems(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    setTotalPrice(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  // 🚀 Add to Cart (POST request)
  const addToCart = async (productId, name, price, color, size, quantity, image) => {
    try {
      const { data } = await axios.post(API_URL, {
        productId,
        name,
        price,
        color,
        size,
        quantity,
        image
      });

      setCart((prevCart) => {
        const updatedCart = [...prevCart, data.cartItem];
        updateCartTotals(updatedCart);
        return updatedCart;
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // 🚀 Remove from Cart (DELETE request)
  const removeFromCart = async (id)=> {
    try {
      console.log("Deleting item with ID:", id); // ✅ Debugging log
      await axios.delete(`https://shopblend.onrender.com/cart/${id}`);
      
      // ✅ Ensure the cart updates properly
      setCart((prevCart) => {
        const updatedCart = prevCart.filter((item) => item._id !== id);
        updateCartTotals(updatedCart);
        return updatedCart;
      });
  
    } catch {
      console.error("Error removing from cart:",)
    }
  };
  

  return (
    <CartContext.Provider value={{ cart, totalItems, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
