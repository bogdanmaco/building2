import { Phone, User, Heart, ShoppingCart, ChevronDown, Menu, Search } from "lucide-react";
import { useState } from "react";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const topNavLinks = [
    { label: "Despre noi", href: "#" },
    { label: "Noutăți", href: "#" },
    { label: "Informație de contact", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Adrese", href: "#" },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-verix-gray-dark">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="text-verix-blue font-black text-2xl tracking-tight leading-none">
                  VERIX<span className="text-verix-yellow">GRUP</span>
                </span>
                <span className="text-verix-blue text-[10px] tracking-widest uppercase">
                  Materiale de construcții
                </span>
              </div>
            </a>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {topNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-verix-text text-sm hover:text-verix-blue transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="text-verix-yellow text-sm font-medium flex items-center gap-1"
              >
                <span className="text-verix-yellow">%</span> Promoții
              </a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Phone */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Contact-centru:</span>
              <a href="tel:+37368455555" className="text-verix-blue font-bold">
                +37368455555
              </a>
            </div>

            {/* Language */}
            <button className="flex items-center gap-1 bg-verix-blue text-white px-2 py-1 text-xs font-medium">
              RO <ChevronDown size={12} />
            </button>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <button className="text-verix-blue hover:text-verix-blue-dark transition-colors">
                <User size={22} />
              </button>
              <button className="relative text-verix-blue hover:text-verix-blue-dark transition-colors">
                <Heart size={22} />
                <span className="absolute -top-1 -right-1 bg-verix-yellow text-verix-text text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button className="relative text-verix-blue hover:text-verix-blue-dark transition-colors">
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-verix-yellow text-verix-text text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-verix-blue">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Catalog Button */}
          <button
            className="flex items-center gap-2 bg-verix-blue border border-white/30 text-white px-4 py-2 hover:bg-verix-blue-dark transition-colors"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          >
            <Menu size={18} />
            <span className="font-medium text-sm uppercase">Catalog Produse</span>
          </button>

          {/* Search Input */}
          <div className="flex-1 flex">
            <input
              type="text"
              placeholder="Caută produse"
              className="flex-1 px-4 py-2 text-sm bg-white text-verix-text verix-input border-0"
            />
            <div className="flex">
              <select className="px-3 py-2 text-sm bg-white text-muted-foreground border-l border-verix-gray-dark verix-input">
                <option>Toate categoriile</option>
              </select>
              <button className="bg-white px-4 py-2 text-verix-blue hover:bg-verix-gray transition-colors border-l border-verix-gray-dark">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Right Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 text-white">
            <a href="#" className="flex items-center gap-2 hover:text-verix-yellow transition-colors">
              <User size={20} />
              <span className="text-sm uppercase">Intră în cont</span>
            </a>
            <button className="relative hover:text-verix-yellow transition-colors">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-verix-yellow text-verix-text text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <button className="relative hover:text-verix-yellow transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-verix-yellow text-verix-text text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div
          className="absolute left-0 right-0 z-50"
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <MegaMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
