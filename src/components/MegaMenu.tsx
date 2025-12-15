import { useState } from "react";
import { Building2, Paintbrush, LayoutGrid, DoorOpen, Bath, Droplets, Flame, Zap, Lightbulb, Wrench, Hammer, Package, Shirt, CircleDot, Home, Heater, Blinds, Trees, Fuel, Gift } from "lucide-react";

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
      { name: "Fir pentru etanșare, bandă teflon, garnituri" },
      { name: "Ventilatoare" },
      { name: "Tuburi de izolare" },
      { name: "Radiatoare" },
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
    name: "ECHIPAMENTE ELECTRICE ȘI ACCESORII",
    icon: Zap,
    subcategories: [
      { name: "Prize și întrerupătoare" },
      { name: "Cabluri electrice" },
      { name: "Tablouri electrice" },
    ],
  },
  {
    id: "9",
    name: "CORPURI ȘI SURSE DE ILUMINAT",
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
    name: "INSTRUMENTE ELECTRICE ȘI PNEUMATICE",
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
    name: "MATERIALE CONSUMABILE ȘI ACCESORII",
    icon: Package,
    subcategories: [
      { name: "Șuruburi și cuie" },
      { name: "Dibluri" },
      { name: "Bandă adezivă" },
    ],
  },
  {
    id: "13",
    name: "ÎMBRĂCĂMINTE DE LUCRU",
    icon: Shirt,
    subcategories: [
      { name: "Salopete" },
      { name: "Mănuși" },
      { name: "Încălțăminte de protecție" },
    ],
  },
  {
    id: "14",
    name: "ELEMENTE DE FIXARE",
    icon: CircleDot,
    subcategories: [
      { name: "Ancore" },
      { name: "Bride" },
      { name: "Cleme" },
    ],
  },
  {
    id: "15",
    name: "MĂRFURI DE UZ CASNIC",
    icon: Home,
    subcategories: [
      { name: "Ustensile bucătărie" },
      { name: "Articole curățenie" },
    ],
  },
  {
    id: "16",
    name: "ȘEMINEE",
    icon: Heater,
    subcategories: [
      { name: "Șeminee electrice" },
      { name: "Șeminee pe lemne" },
    ],
  },
  {
    id: "17",
    name: "JALUZELE",
    icon: Blinds,
    subcategories: [
      { name: "Jaluzele verticale" },
      { name: "Jaluzele orizontale" },
      { name: "Rolete" },
    ],
  },
  {
    id: "18",
    name: "INVENTAR ȘI ELEMENTE DE GRĂDINĂ, ZDROBITOR",
    icon: Trees,
    subcategories: [
      { name: "Unelte grădină" },
      { name: "Zdrobitoare struguri" },
      { name: "Teascuri" },
    ],
  },
  {
    id: "19",
    name: "CĂRBUNE, LEMNE, BRICHETE, PELETE",
    icon: Fuel,
    subcategories: [
      { name: "Cărbune" },
      { name: "Lemne de foc" },
      { name: "Brichete" },
      { name: "Pelete" },
    ],
  },
  {
    id: "20",
    name: "CERTIFICAT CADOU",
    icon: Gift,
    subcategories: [],
  },
];

const MegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>("6");

  const activeCat = categories.find((c) => c.id === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex bg-white border border-verix-gray-dark shadow-lg">
        {/* Left Column - Categories */}
        <div className="w-72 bg-verix-blue">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer text-white text-xs uppercase font-medium border-b border-white/10 transition-colors ${
                  activeCategory === category.id
                    ? "bg-white text-verix-blue"
                    : "hover:bg-verix-blue-dark"
                }`}
                onMouseEnter={() => setActiveCategory(category.id)}
              >
                <Icon size={16} className={activeCategory === category.id ? "text-verix-blue" : "text-white"} />
                <span className={activeCategory === category.id ? "text-verix-blue" : "text-white"}>
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Column - Subcategories */}
        {activeCat && activeCat.subcategories.length > 0 && (
          <div className="flex-1 p-6 bg-white min-h-[400px]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeCat.subcategories.map((sub, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-3 p-3 hover:bg-verix-gray transition-colors border border-verix-gray"
                >
                  <div className="w-12 h-12 bg-verix-gray flex items-center justify-center">
                    <Package size={20} className="text-muted-foreground" />
                  </div>
                  <span className="text-verix-blue text-sm font-medium uppercase">
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
