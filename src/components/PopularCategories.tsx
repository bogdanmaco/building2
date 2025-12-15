import { ChevronUp } from "lucide-react";

const categories = [
  { name: "PIATRĂ FLEXIBILĂ", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=100&fit=crop" },
  { name: "VOPSELE PE BAZĂ DE CAUCIUC", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=150&h=100&fit=crop" },
  { name: "VOPSELE SPRAY", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=150&h=100&fit=crop" },
  { name: "VOPSELE EMULSIE", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=100&fit=crop" },
  { name: "MATERIALE DE CONSTRUCȚIE", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&h=100&fit=crop" },
  { name: "GRESIE ȘI FAIANȚĂ", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=150&h=100&fit=crop" },
  { name: "MATERIALE DE FINISARE", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=150&h=100&fit=crop" },
  { name: "ACOPERIRI PENTRU PODEA ȘI PEREȚI", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=150&h=100&fit=crop" },
];

const PopularCategories = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="buildings-section-title">
            <span className="text-primary italic">CATEGORII</span>
            <span className="text-accent italic"> POPULARE</span>
          </h2>
          <button className="hidden md:block buildings-btn-outline">
            Vezi mai multe
          </button>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-3">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-4 bg-card border border-border p-4 rounded-2xl hover:shadow-soft transition-all group"
            >
              <span className="text-primary text-sm font-bold uppercase flex-1 group-hover:text-primary/80 transition-colors">
                {category.name}
              </span>
              <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
          ))}
          
          {/* Mobile View More */}
          <div className="flex items-center justify-end gap-4 pt-2">
            <button className="buildings-btn-outline flex-1">
              VEZI MAI MULTE
            </button>
            <button className="w-14 h-14 rounded-full bg-card border-2 border-primary text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all">
              <ChevronUp size={24} />
            </button>
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 bg-card border border-border p-4 rounded-2xl hover:shadow-card hover:-translate-y-1 transition-all group"
            >
              <span className="text-primary text-xs font-bold uppercase flex-1 group-hover:text-primary/80 transition-colors">
                {category.name}
              </span>
              <div className="w-20 h-14 flex-shrink-0 overflow-hidden rounded-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;