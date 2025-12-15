import { useParams, Link } from "react-router-dom";
import { ChevronDown, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomDock from "@/components/MobileBottomDock";
import ProductCard from "@/components/ProductCard";

const allProducts = [
  { id: 1, name: "BOILER HYUNDAI 80L 2000W", price: 4899, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 2, name: "BOILER HYUNDAI VERTICAL 80L", price: 3299, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 3, name: "BOILER HYUNDAI VERTICAL 50L", price: 2499, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 4, name: "BOILER HYUNDAI 50L VERTICAL", price: 3999, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 5, name: "VOPSEA DIN CAUCIUC FARBEX", price: 130, image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=300&fit=crop", isTop: true },
  { id: 6, name: "GRESIE MERBAU SZARA", price: 197, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop", isTop: true },
  { id: 7, name: "PIATRA FLEXIBILA KLINKER", price: 520, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" },
  { id: 8, name: "REZERVOR ASCUNS DE PERETE", price: 1750, image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop" },
  { id: 9, name: "DESCIORCHINĂTOR DE STRUGURI", price: 5950, oldPrice: 6800, discount: 13, image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=300&fit=crop" },
  { id: 10, name: "TEASC PRESĂ P/U STRUGURI 50L", price: 6099, oldPrice: 6960, discount: 12, image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=300&h=300&fit=crop" },
  { id: 11, name: "DISPOZITIV P/U ZDROBIT STRUGURI", price: 3050, oldPrice: 3500, discount: 13, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" },
  { id: 12, name: "PELETE BIO IN SACI 15KG", price: 82.5, image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=300&h=300&fit=crop" },
];

const categories = [
  "Toate categoriile",
  "Materiale de construcții",
  "Materiale de finisare",
  "Uși",
  "Tehnică sanitară",
  "Încălzitoare",
  "Echipamente electrice",
  "Instrumente",
];

const Catalog = () => {
  const { slug } = useParams<{ slug: string }>();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const categoryName = slug 
    ? slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
    : "Toate Produsele";

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Acasă</Link>
          <span>/</span>
          <span className="text-foreground">{categoryName}</span>
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">{categoryName}</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-card border border-border p-4">
              <h3 className="font-bold text-foreground mb-4">Categorii</h3>
              <ul className="space-y-2">
                {categories.map((cat, index) => (
                  <li key={index}>
                    <Link 
                      to={index === 0 ? "/catalog" : `/catalog/${cat.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border p-4 mt-4">
              <h3 className="font-bold text-foreground mb-4">Preț</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  placeholder="De la" 
                  className="w-full px-3 py-2 border border-border text-sm bg-background"
                />
                <span>-</span>
                <input 
                  type="number" 
                  placeholder="Până la" 
                  className="w-full px-3 py-2 border border-border text-sm bg-background"
                />
              </div>
              <button className="w-full mt-3 bg-primary text-primary-foreground py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                Aplică
              </button>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
              {/* Mobile Filter Button */}
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-sm font-medium text-primary"
              >
                <SlidersHorizontal size={18} />
                Filtre
              </button>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Sortează:</span>
                  <button className="flex items-center gap-1 font-medium text-foreground">
                    După popularitate <ChevronDown size={16} />
                  </button>
                </div>

                <div className="flex items-center border border-border">
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden bg-card border border-border p-4 mb-4">
                <h3 className="font-bold text-foreground mb-3">Categorii</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((cat, index) => (
                    <Link 
                      key={index}
                      to={index === 0 ? "/catalog" : `/catalog/${cat.toLowerCase().replace(/ /g, "-")}`}
                      className="px-3 py-1.5 bg-muted text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {allProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground font-medium">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                3
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomDock />
    </div>
  );
};

export default Catalog;
