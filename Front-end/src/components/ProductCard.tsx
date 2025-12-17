import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  isTop?: boolean;
  unit?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  discount,
  image,
  isTop,
  unit = "MDL / buc",
}: ProductCardProps) => {
  return (
    <div className="bg-card p-3 md:p-4 relative group hover:shadow-card transition-all duration-300 border border-border">
      {/* Discount Badge - Only rounded for sale items */}
      {discount && (
        <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold z-10 rounded-lg shadow-md">
          -{discount}%
        </div>
      )}

      {/* Top Badge */}
      {isTop && (
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-bold z-10">
          TOP
        </div>
      )}

      {/* Image */}
      <Link to={`/produs/${id}`}>
        <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Title */}
      <Link to={`/produs/${id}`}>
        <h3 className="text-foreground text-xs md:text-sm font-medium mb-2 line-clamp-2 min-h-[32px] md:min-h-[40px] hover:text-primary transition-colors">
          {name}
        </h3>
      </Link>

      {/* Price */}
      <div className="mb-3">
        {oldPrice && (
          <div className="text-muted-foreground text-xs line-through">
            {oldPrice.toLocaleString("ro-MD")} MDL
          </div>
        )}
        <div className={`text-base md:text-lg font-bold ${discount ? "text-destructive" : "text-foreground"}`}>
          {price.toLocaleString("ro-MD")}{" "}
          <span className="text-[10px] md:text-xs font-normal text-muted-foreground">{unit}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-accent text-accent-foreground py-2 md:py-2.5 px-2 md:px-4 text-xs md:text-sm font-semibold hover:bg-yellow-400 transition-all duration-200">
          <ShoppingCart size={14} className="md:w-4 md:h-4" />
          <span className="hidden sm:inline">ÎN COȘ</span>
          <span className="sm:hidden">COȘ</span>
        </button>
        <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
          <Heart size={16} className="md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;