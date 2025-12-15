import { Heart, ShoppingCart, ChevronUp } from "lucide-react";

interface SaleProduct {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  image: string;
}

const salesProducts: SaleProduct[] = [
  {
    id: 1,
    name: "DESCIORCHINĂTOR DE STRUGURI EL...",
    price: 5950,
    oldPrice: 6800,
    discount: 13,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "TEASC PRESĂ P/U STRUGURI 50L C...",
    price: 6099,
    oldPrice: 6960,
    discount: 12,
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "DISPOZITIV P/U ZDROBIT STRUGURI",
    price: 3050,
    oldPrice: 3500,
    discount: 13,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "TEASC PRESĂ MANUALĂ 25L",
    price: 4200,
    oldPrice: 4800,
    discount: 12,
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=300&h=300&fit=crop",
  },
];

const SalesSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="buildings-section-title">
            <span className="text-primary italic">REDUCERI</span>
          </h2>
          <div className="hidden md:block">
            <button className="buildings-btn-outline">
              VEZI MAI MULTE
            </button>
          </div>
        </div>

        {/* Mobile: Vertical Stack Layout */}
        <div className="md:hidden space-y-4">
          {salesProducts.slice(0, 4).map((product) => (
            <div 
              key={product.id} 
              className="bg-card rounded-2xl p-4 flex gap-4 shadow-soft border border-border"
            >
              {/* Left: Text Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-foreground text-base font-bold mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="text-destructive text-2xl font-bold">
                    {product.price.toLocaleString("ro-MD")} <span className="text-sm">MDL</span>
                    <span className="text-muted-foreground text-sm font-normal block">/ buc</span>
                  </div>
                  <div className="text-muted-foreground text-sm line-through mt-1">
                    {product.oldPrice.toLocaleString("ro-MD")} MDL / buc
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2 mt-4">
                  <button className="flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 px-5 text-sm font-semibold rounded-xl hover:bg-yellow-400 transition-all">
                    <ShoppingCart size={16} />
                    ÎN COȘ
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors rounded-xl">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
              
              {/* Right: Image with Badge */}
              <div className="w-32 h-32 relative flex-shrink-0">
                <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-3 py-1.5 text-sm font-bold z-10 rounded-lg shadow-md">
                  -{product.discount}%
                </div>
                <div className="w-full h-full bg-muted rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
          
          {/* Mobile View More Button */}
          <div className="flex items-center justify-end gap-4 pt-2">
            <button className="buildings-btn-outline flex-1">
              VEZI MAI MULTE
            </button>
            <button className="w-14 h-14 rounded-full bg-card border-2 border-primary text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all">
              <ChevronUp size={24} />
            </button>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {salesProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-card rounded-2xl p-4 relative hover:shadow-card transition-all duration-300 border border-border group"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1.5 text-xs font-bold z-10 rounded-lg shadow-md">
                -{product.discount}%
              </div>

              {/* Image */}
              <div className="aspect-square mb-4 flex items-center justify-center overflow-hidden bg-muted rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-foreground text-sm font-semibold mb-3 line-clamp-2 min-h-[44px]">
                {product.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <div className="text-muted-foreground text-sm line-through">
                  {product.oldPrice.toLocaleString("ro-MD")} MDL
                </div>
                <div className="text-xl font-bold text-destructive">
                  {product.price.toLocaleString("ro-MD")}{" "}
                  <span className="text-xs font-normal text-muted-foreground">MDL / buc</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesSection;