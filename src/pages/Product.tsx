import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingCart, ChevronLeft, Truck, Shield, RotateCcw, Minus, Plus } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomDock from "@/components/MobileBottomDock";

// Mock product data
const products: Record<string, {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  description: string;
  category: string;
  specs: { label: string; value: string }[];
}> = {
  "1": {
    id: 1,
    name: "BOILER HYUNDAI 80L 2000W VERTICAL",
    price: 4899,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    description: "Boiler electric vertical cu capacitate de 80 litri, putere 2000W. Ideal pentru familii de 3-4 persoane.",
    category: "Încălzitoare",
    specs: [
      { label: "Capacitate", value: "80 L" },
      { label: "Putere", value: "2000 W" },
      { label: "Tip", value: "Vertical" },
      { label: "Garanție", value: "24 luni" },
    ],
  },
  "2": {
    id: 2,
    name: "BOILER HYUNDAI VERTICAL 80L 1500W",
    price: 3299,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    description: "Boiler electric vertical economic cu capacitate de 80 litri și putere de 1500W.",
    category: "Încălzitoare",
    specs: [
      { label: "Capacitate", value: "80 L" },
      { label: "Putere", value: "1500 W" },
      { label: "Tip", value: "Vertical" },
      { label: "Garanție", value: "24 luni" },
    ],
  },
};

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  const product = products[id || "1"] || products["1"];

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Acasă</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-primary transition-colors">Catalog</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back button - Mobile */}
        <Link 
          to="/" 
          className="lg:hidden inline-flex items-center gap-2 text-primary font-medium mb-4"
        >
          <ChevronLeft size={20} />
          Înapoi
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="bg-card border border-border p-4 lg:p-8">
            {product.discount && (
              <span className="inline-block bg-destructive text-destructive-foreground px-3 py-1.5 text-sm font-bold mb-4 rounded-lg">
                -{product.discount}%
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-6">
              {product.oldPrice && (
                <div className="text-muted-foreground text-lg line-through">
                  {product.oldPrice.toLocaleString("ro-MD")} MDL
                </div>
              )}
              <div className={`text-3xl font-bold ${product.discount ? "text-destructive" : "text-foreground"}`}>
                {product.price.toLocaleString("ro-MD")} MDL
              </div>
              <span className="text-sm text-muted-foreground">/ buc</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium">Cantitate:</span>
              <div className="flex items-center border border-border">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 px-6 font-semibold hover:bg-yellow-400 transition-colors">
                <ShoppingCart size={20} />
                ADAUGĂ ÎN COȘ
              </button>
              <button className="w-14 h-14 flex items-center justify-center border-2 border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors">
                <Heart size={24} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-muted">
                <Truck size={24} className="text-primary mb-2" />
                <span className="text-xs text-muted-foreground">Livrare rapidă</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted">
                <Shield size={24} className="text-primary mb-2" />
                <span className="text-xs text-muted-foreground">Garanție</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted">
                <RotateCcw size={24} className="text-primary mb-2" />
                <span className="text-xs text-muted-foreground">Retur 14 zile</span>
              </div>
            </div>

            {/* Specs */}
            <div className="border-t border-border pt-6">
              <h3 className="font-bold text-foreground mb-4">Specificații</h3>
              <div className="space-y-2">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-sm">{spec.label}</span>
                    <span className="font-medium text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomDock />
    </div>
  );
};

export default Product;
