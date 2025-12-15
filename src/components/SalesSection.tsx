import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

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
    name: "DISPOZITIV P/U ZDROB.STRUGURI ...",
    price: 3050,
    oldPrice: 3500,
    discount: 13,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "DESCIORCHINĂTOR DE STRUGURI EL...",
    price: 5950,
    oldPrice: 6800,
    discount: 13,
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "TEASC PRESA P/U STRUGURI 50L C...",
    price: 6099,
    oldPrice: 6960,
    discount: 12,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
];

const SalesSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h2 className="buildings-section-title">
            <span className="text-primary italic">REDUCERI</span>
          </h2>
        </div>

        {/* Mobile: Vertical Stack Layout */}
        <div className="md:hidden space-y-4">
          {salesProducts.map((product) => (
            <Link 
              to={`/produs/${product.id}`}
              key={product.id} 
              className="bg-card p-4 flex gap-4 shadow-soft border border-border block"
            >
              {/* Left: Text Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-foreground text-sm font-bold mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="text-destructive text-xl font-bold">
                    {product.price.toLocaleString("ro-MD")} <span className="text-xs">MDL</span>
                    <span className="text-muted-foreground text-xs font-normal block">/ buc</span>
                  </div>
                  <div className="text-muted-foreground text-xs line-through mt-1">
                    {product.oldPrice.toLocaleString("ro-MD")} MDL / buc
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2 mt-4">
                  <button className="flex items-center justify-center gap-2 bg-accent text-accent-foreground py-2.5 px-4 text-sm font-semibold hover:bg-yellow-400 transition-all">
                    <ShoppingCart size={16} />
                    ÎN COȘ
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center border-2 border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
              
              {/* Right: Image with Badge */}
              <div className="w-28 h-28 relative flex-shrink-0">
                <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold z-10 rounded-lg shadow-md">
                  -{product.discount}%
                </div>
                <div className="w-full h-full bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: Grid Layout - 1 large + 2 small stacked */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {/* Large Product (Left) */}
          <Link 
            to={`/produs/${salesProducts[0].id}`}
            className="bg-card p-6 relative hover:shadow-card transition-all duration-300 border border-border group row-span-2 flex flex-col"
          >
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 text-sm font-bold z-10 rounded-full shadow-md">
              -{salesProducts[0].discount}%
            </div>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center overflow-hidden bg-muted mb-4">
              <img
                src={salesProducts[0].image}
                alt={salesProducts[0].name}
                className="max-w-full max-h-80 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-foreground text-lg font-bold mb-3">
              {salesProducts[0].name}
            </h3>

            {/* Price */}
            <div className="mb-4">
              <div className="text-2xl font-bold text-destructive">
                {salesProducts[0].price.toLocaleString("ro-MD")}{" "}
                <span className="text-sm font-normal text-muted-foreground">MDL / buc</span>
              </div>
              <div className="text-muted-foreground text-sm line-through">
                {salesProducts[0].oldPrice.toLocaleString("ro-MD")} MDL
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 px-6 text-sm font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-sm hover:shadow-md border border-accent-foreground/20">
                <ShoppingCart size={16} />
                ÎN COȘ
              </button>
              <button className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </Link>

          {/* Right Column - 2 stacked products */}
          <div className="flex flex-col gap-6">
            {salesProducts.slice(1, 3).map((product) => (
              <Link 
                to={`/produs/${product.id}`}
                key={product.id} 
                className="bg-card p-4 relative hover:shadow-card transition-all duration-300 border border-border group flex gap-4"
              >
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-foreground text-base font-bold mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="text-xl font-bold text-destructive">
                      {product.price.toLocaleString("ro-MD")}{" "}
                      <span className="text-xs font-normal text-muted-foreground">MDL / buc</span>
                    </div>
                    <div className="text-muted-foreground text-sm line-through">
                      {product.oldPrice.toLocaleString("ro-MD")} MDL / buc
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-4">
                    <button className="flex items-center justify-center gap-2 bg-accent text-accent-foreground py-2.5 px-4 text-sm font-semibold hover:bg-yellow-400 transition-all border border-accent-foreground/20">
                      <ShoppingCart size={16} />
                      ÎN COȘ
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border-2 border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>

                {/* Right: Image with Badge */}
                <div className="w-40 h-40 relative flex-shrink-0">
                  <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-3 py-1.5 text-xs font-bold z-10 rounded-full shadow-md">
                    -{product.discount}%
                  </div>
                  <div className="w-full h-full bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View More Button - Below products */}
        <div className="flex justify-end mt-8">
          <Link to="/catalog" className="buildings-btn-outline px-8 py-3">
            VEZI MAI MULTE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;