import { Heart, ShoppingCart } from "lucide-react";

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
  name,
  price,
  oldPrice,
  discount,
  image,
  isTop,
  unit = "MDL / buc",
}: ProductCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-4 relative group hover:shadow-card transition-all duration-300 border border-border">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1.5 text-xs font-bold z-10 rounded-lg shadow-md">
          -{discount}%
        </div>
      )}

      {/* Top Badge */}
      {isTop && (
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1.5 text-xs font-bold z-10 rounded-lg shadow-md">
          TOP
        </div>
      )}

      {/* Image */}
      <div className="aspect-square mb-4 flex items-center justify-center overflow-hidden bg-muted rounded-xl">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-foreground text-sm font-semibold mb-3 line-clamp-2 min-h-[44px]">
        {name}
      </h3>

      {/* Price */}
      <div className="mb-4">
        {oldPrice && (
          <div className="text-muted-foreground text-sm line-through">
            {oldPrice.toLocaleString("ro-MD")} MDL
          </div>
        )}
        <div className={`text-xl font-bold ${discount ? "text-destructive" : "text-foreground"}`}>
          {price.toLocaleString("ro-MD")}{" "}
          <span className="text-xs font-normal text-muted-foreground">{unit}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 px-4 text-sm font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-sm hover:shadow-md">
          <ShoppingCart size={16} />
          ÎN COȘ
        </button>
        <button className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors rounded-xl">
          <Heart size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;