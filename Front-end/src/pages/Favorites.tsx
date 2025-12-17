import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomDock from "@/components/MobileBottomDock";

const Favorites = () => {
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
          <span className="text-foreground">Favorite</span>
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
          Produsele mele favorite
        </h1>

        {/* Empty state */}
        <div className="bg-card border border-border p-12 text-center">
          <Heart size={64} className="mx-auto text-muted-foreground/30 mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Nu aveți produse favorite
          </h2>
          <p className="text-muted-foreground mb-6">
            Adăugați produse la favorite pentru a le găsi mai ușor mai târziu.
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

export default Favorites;
