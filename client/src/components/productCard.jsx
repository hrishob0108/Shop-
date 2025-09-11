import { useState } from "react";
import { ShoppingBag, Eye } from "lucide-react";
import { useCart } from "../context/CartContext"; 

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart(); 
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product || !product.images) {
    return null;
  }

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-background shadow-sm border border-border/40 hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/5] w-full overflow-hidden relative bg-muted">
        {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-muted"></div>}

        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover object-center transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {product.isNew && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
            New
          </div>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex gap-2">
            <button
              className="flex-1 bg-gray-200 px-3 py-2 rounded-md text-sm flex items-center justify-center gap-1 hover:bg-gray-300"
              onClick={() => onViewDetails(product)}
              tabIndex={0}
            >
              <Eye size={16} /> View
            </button>

            <button
              className="flex-1 bg-primary text-white px-3 py-2 rounded-md text-sm flex items-center justify-center gap-1 hover:bg-primary/90"
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
              tabIndex={0}
            >
              <ShoppingBag size={16} /> Add
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-base line-clamp-1">{product.name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-1">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
          </div>
          <span className="font-semibold">${product.price.toFixed(2)}</span>
        </div>

        {/* Available Colors */}
        <div className="flex gap-1 pt-1">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-border cursor-pointer"
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
