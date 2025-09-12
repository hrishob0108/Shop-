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
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[600px] bg-neutral-900 text-gray-100 shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-neutral-800/80 backdrop-blur-md p-4 border-b border-neutral-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Product Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-neutral-700 rounded-full transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`border-2 rounded-lg overflow-hidden transition ${
                      activeImage === image
                        ? "border-emerald-500"
                        : "border-transparent hover:border-emerald-400"
                    }`}
                    onClick={() => setActiveImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Name + Price */}
              <div>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-xl font-semibold mt-2 text-emerald-400">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-400 mt-4">{product.description}</p>
              </div>

              {/* Color Selector */}
              <div>
                <h3 className="text-sm font-medium">Color: {selectedColor}</h3>
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded-full border-2 transition ${
                        selectedColor === color
                          ? "border-emerald-500 ring-2 ring-emerald-300"
                          : "border-gray-600 hover:border-emerald-400"
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
                      className={`p-2 text-center border rounded-md transition ${
                        selectedSize === size.toString()
                          ? "border-emerald-500 bg-emerald-600 text-white"
                          : "border-gray-600 hover:border-emerald-500"
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
                <div className="flex items-center border border-gray-600 rounded-md w-fit mt-2">
                  <button
                    className="px-4 py-2 border-r border-gray-600 hover:bg-neutral-700 transition"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    className="px-4 py-2 border-l border-gray-600 hover:bg-neutral-700 transition"
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition"
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
                  className={`p-3 rounded-md transition flex items-center justify-center ${
                    isLiked ? "bg-red-500 text-white" : "bg-neutral-700 text-gray-200 hover:bg-neutral-600"
                  }`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className="h-5 w-5" />
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
