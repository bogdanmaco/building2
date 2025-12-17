import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomDock from "@/components/MobileBottomDock";

const Cart = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Acasă</Link>
          <span>/</span>
          <span className="text-foreground">Coș</span>
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
          Coșul meu de cumpărături
        </h1>

        {/* Empty state */}
        <div className="bg-card border border-border p-12 text-center">
          <ShoppingCart size={64} className="mx-auto text-muted-foreground/30 mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Coșul este gol
          </h2>
          <p className="text-muted-foreground mb-6">
            Nu aveți încă produse în coș. Explorați catalogul pentru a găsi produsele dorite.
          </p>
          <Link to="/catalog" className="buildings-btn inline-block">
            Explorează Catalogul
          </Link>
        </div>
      </main>
      <Footer />
      <MobileBottomDock />
    </div>
  );
};

export default Cart;
