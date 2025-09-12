import { useState } from "react";
import { ShoppingBag, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product || !product.images) return null;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl border border-gray-200 dark:border-neutral-800 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/5] w-full overflow-hidden relative bg-gray-100 dark:bg-neutral-800">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-neutral-700 rounded-md" />
        )}

        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
            New
          </div>
        )}

        {/* Overlay Buttons */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex gap-3 transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-white text-gray-800 font-medium px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1 hover:bg-gray-100 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <Eye size={16} /> View
          </button>

          <button
            onClick={() =>
              addToCart(
                product.id,
                product.name,
                product.price,
                product.colors[0] || "default",
                product.sizes[0]?.toString() || "M",
                1,
                product.images[0]
              )
            }
            className="flex-1 bg-indigo-600 text-white font-medium px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1 hover:bg-indigo-700 transition-colors shadow-md"
          >
            <ShoppingBag size={16} /> Add
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
          </div>
          <span className="font-bold text-gray-900 dark:text-gray-100">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Colors */}
        <div className="flex gap-2 pt-2">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full border border-gray-300 dark:border-neutral-700 cursor-pointer shadow-sm hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              title={`Color ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
