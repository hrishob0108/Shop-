import React, { useState, useEffect } from "react";
import { X, ShoppingBag, Heart } from "lucide-react";
import { useCart } from "../context/CartContext"; 


const ProductDetail = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart(); 
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || "");
      setSelectedSize(product.sizes[0]?.toString() || "");
      setActiveImage(product.images[0] || "");
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Product detail panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[600px] bg-white shadow-xl overflow-y-auto transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Product Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`border-2 ${
                      activeImage === image ? "border-blue-500" : "border-transparent"
                    } rounded-lg overflow-hidden`}
                    onClick={() => setActiveImage(image)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 mt-4">{product.description}</p>
              </div>

              {/* Color Selector */}
              <div>
                <h3 className="text-sm font-medium">Color: {selectedColor}</h3>
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="text-sm font-medium">Size</h3>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`p-2 text-center border rounded-md ${
                        selectedSize === size.toString()
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-gray-200 hover:border-blue-500"
                      }`}
                      onClick={() => setSelectedSize(size.toString())}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-sm font-medium">Quantity</h3>
                <div className="flex items-center border rounded-md w-fit mt-2">
                  <button className="px-4 py-2 border-r" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button className="px-4 py-2 border-l" onClick={() => setQuantity(Math.min(10, quantity + 1))}>
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
              <button
                  className="flex-1 bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700"
                  onClick={() =>
                    addToCart(
                      product.id,
                      product.name,
                      product.price, 
                      selectedColor || product.colors[0], 
                      selectedSize || product.sizes[0]?.toString(), 
                      quantity,
                      product.images[0] || "/fallback-shoe.jpg" 
                    )
                  }
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </button>

                <button
              className={`p-3 rounded-md transition ${
                isLiked ? "bg-red-500" : "bg-gray-100"
              }`}
              onClick={() => setIsLiked(!isLiked)} 
            >
              <Heart className={`h-5 w-5 text-black ${
                isLiked ? "bg-red-500" : "bg-gray-100"
              }` }/> 
            </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
