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
    <div className="bg-white border border-verix-gray-dark p-4 relative group">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 right-2 bg-verix-red text-white px-2 py-1 text-xs font-bold z-10">
          -{discount}%
        </div>
      )}

      {/* Top Badge */}
      {isTop && (
        <div className="absolute top-2 left-2 bg-verix-blue text-white px-2 py-1 text-xs font-bold z-10">
          TOP
        </div>
      )}

      {/* Image */}
      <div className="aspect-square mb-4 flex items-center justify-center overflow-hidden bg-white">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-verix-text text-sm font-medium mb-3 line-clamp-2 min-h-[40px] uppercase">
        {name}
      </h3>

      {/* Price */}
      <div className="mb-3">
        {oldPrice && (
          <div className="text-muted-foreground text-sm line-through">
            {oldPrice.toLocaleString("ro-MD")} MDL
          </div>
        )}
        <div className={`text-lg font-bold ${discount ? "text-verix-red" : "text-verix-text"}`}>
          {price.toLocaleString("ro-MD")}{" "}
          <span className="text-xs font-normal text-muted-foreground">{unit}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 bg-verix-blue text-white py-2 px-3 text-xs font-medium uppercase hover:bg-verix-blue-dark transition-colors">
          <ShoppingCart size={14} />
          ÎN COȘ
        </button>
        <button className="w-9 h-9 flex items-center justify-center border border-verix-gray-dark text-muted-foreground hover:text-verix-red hover:border-verix-red transition-colors">
          <Heart size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
