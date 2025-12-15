import { useState } from "react";
import { Building2, Paintbrush, LayoutGrid, DoorOpen, Bath, Droplets, Flame, Zap, Lightbulb, Wrench, Hammer, Package, Shirt, CircleDot, Home, Heater, Blinds, Trees, Fuel, Gift, X } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  subcategories: Subcategory[];
}

interface Subcategory {
  name: string;
  image?: string;
}

interface MegaMenuProps {
  onClose?: () => void;
}

const categories: Category[] = [
  {
    id: "1",
    name: "MATERIALE DE CONSTRUCȚIE",
    icon: Building2,
    subcategories: [
      { name: "Cărămizi și blocuri" },
      { name: "Ciment și mortar" },
      { name: "Beton și aditivi" },
      { name: "Izolații termice" },
    ],
  },
  {
    id: "2",
    name: "MATERIALE DE FINISARE",
    icon: Paintbrush,
    subcategories: [
      { name: "Vopsele și lacuri" },
      { name: "Tencuieli decorative" },
      { name: "Glet și șpaclu" },
      { name: "Adezivi pentru gresie" },
    ],
  },
  {
    id: "3",
    name: "ACOPERIRI PENTRU PODEA ȘI PEREȚI",
    icon: LayoutGrid,
    subcategories: [
      { name: "Gresie și faianță" },
      { name: "Laminat" },
      { name: "Parchet" },
      { name: "Linoleum" },
      { name: "Tapet" },
    ],
  },
  {
    id: "4",
    name: "UȘI",
    icon: DoorOpen,
    subcategories: [
      { name: "Uși de interior" },
      { name: "Uși de exterior" },
      { name: "Uși metalice" },
      { name: "Accesorii uși" },
    ],
  },
  {
    id: "5",
    name: "TEHNICĂ SANITARĂ",
    icon: Bath,
    subcategories: [
      { name: "Căzi de baie" },
      { name: "Cabine de duș" },
      { name: "Chiuvete" },
      { name: "WC și bideuri" },
    ],
  },
  {
    id: "6",
    name: "INSTALAȚII SANITARE",
    icon: Droplets,
    subcategories: [
      { name: "Pompe și stații de pompare" },
      { name: "Încălzitoare de apă" },
      { name: "Centrale termice" },
      { name: "Sisteme de canalizare" },
      { name: "Robinete" },
      { name: "Fitinguri pentru țevi" },
    ],
  },
  {
    id: "7",
    name: "ÎNCĂLZITOARE",
    icon: Flame,
    subcategories: [
      { name: "Calorifere" },
      { name: "Convectoare" },
      { name: "Încălzitoare electrice" },
    ],
  },
  {
    id: "8",
    name: "ECHIPAMENTE ELECTRICE",
    icon: Zap,
    subcategories: [
      { name: "Prize și întrerupătoare" },
      { name: "Cabluri electrice" },
      { name: "Tablouri electrice" },
    ],
  },
  {
    id: "9",
    name: "CORPURI DE ILUMINAT",
    icon: Lightbulb,
    subcategories: [
      { name: "Lustre" },
      { name: "Spoturi" },
      { name: "Becuri LED" },
      { name: "Aplice" },
    ],
  },
  {
    id: "10",
    name: "INSTRUMENTE ELECTRICE",
    icon: Wrench,
    subcategories: [
      { name: "Bormasini" },
      { name: "Flex-uri" },
      { name: "Compresoare" },
    ],
  },
  {
    id: "11",
    name: "SCULE MANUALE",
    icon: Hammer,
    subcategories: [
      { name: "Ciocane" },
      { name: "Șurubelnițe" },
      { name: "Clești" },
      { name: "Chei" },
    ],
  },
  {
    id: "12",
    name: "MATERIALE CONSUMABILE",
    icon: Package,
    subcategories: [
      { name: "Șuruburi și cuie" },
      { name: "Dibluri" },
      { name: "Bandă adezivă" },
    ],
  },
];

const MegaMenu = ({ onClose }: MegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>("6");

  const activeCat = categories.find((c) => c.id === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex bg-card rounded-2xl shadow-card overflow-hidden border border-border">
        {/* Left Column - Categories */}
        <div className="w-72 bg-primary rounded-l-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-primary-foreground/20">
            <span className="text-primary-foreground font-semibold text-sm">Categorii</span>
            {onClose && (
              <button 
                onClick={onClose}
                className="lg:hidden text-primary-foreground hover:text-accent transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
          <div className="max-h-[60vh] overflow-y-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer text-xs uppercase font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-card text-primary rounded-l-xl"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon size={16} />
                  <span className="line-clamp-1">{category.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Subcategories */}
        {activeCat && activeCat.subcategories.length > 0 && (
          <div className="flex-1 p-6 bg-card min-h-[400px]">
            <h3 className="text-primary font-bold text-lg mb-4">{activeCat.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeCat.subcategories.map((sub, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-3 p-4 hover:bg-muted transition-colors rounded-xl border border-border hover:border-primary/30 group"
                >
                  <div className="w-12 h-12 bg-buildings-blue-light rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Package size={20} className="text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
                    {sub.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;