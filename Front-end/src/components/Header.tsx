import { Phone, User, Heart, ShoppingCart, ChevronDown, Menu, Search, X, Building2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const topNavLinks = [
    { label: "Despre noi", href: "#" },
    { label: "Noutăți", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Adrese", href: "#" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar - Desktop */}
      <div className="bg-card border-b border-border hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Building2 className="text-primary-foreground" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-extrabold text-xl tracking-tight leading-none">
                  BUILDINGS<span className="text-accent">.MD</span>
                </span>
                <span className="text-muted-foreground text-[10px] tracking-widest uppercase">
                  Materiale de construcții
                </span>
              </div>
            </Link>

            {/* Nav Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {topNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground text-sm hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="text-buildings-orange text-sm font-semibold flex items-center gap-1"
              >
                <span>%</span> Promoții
              </a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Phone */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <Phone size={16} className="text-primary" />
              <a href="tel:+37368455555" className="text-primary font-bold">
                +373 68 455 555
              </a>
            </div>

            {/* Language */}
            <button className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold hover:bg-primary/90 transition-colors">
              RO <ChevronDown size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-primary shadow-soft">
        {/* Top Row */}
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary-foreground flex items-center justify-center">
              <Building2 className="text-primary" size={20} />
            </div>
            <span className="text-primary-foreground font-extrabold text-lg">
              BUILDINGS<span className="text-accent">.MD</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 bg-primary-foreground text-primary px-2.5 py-1.5 text-xs font-semibold">
              RO <ChevronDown size={12} />
            </button>
            <a href="tel:+37368455555" className="w-10 h-10 bg-primary-foreground/20 flex items-center justify-center text-primary-foreground">
              <Phone size={20} />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 bg-primary-foreground flex items-center justify-center text-primary"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Catalog & Search Row */}
        <div className="px-4 pb-3 flex items-center gap-3">
          <button
            className="flex items-center gap-2 bg-primary-foreground text-primary px-4 py-3 font-semibold text-sm shrink-0"
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          >
            <Menu size={18} />
            <span>CATALOG</span>
          </button>

          {/* Search Input */}
          <div className="flex-1 flex bg-primary-foreground overflow-hidden">
            <input
              type="text"
              placeholder="Caută produse"
              className="flex-1 px-4 py-3 text-sm bg-transparent border-0 focus:outline-none text-foreground"
            />
            <button className="px-4 text-primary">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Search Bar */}
      <div className="bg-primary hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          {/* Catalog Button */}
          <button
            className="flex items-center gap-2 bg-primary-foreground text-primary px-5 py-3 hover:bg-accent hover:text-accent-foreground transition-colors font-semibold text-sm shadow-md"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          >
            <Menu size={18} />
            <span>CATALOG PRODUSE</span>
          </button>

          {/* Search Input */}
          <div className="flex-1 flex bg-card overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Caută produse..."
              className="flex-1 px-5 py-3 text-sm bg-transparent text-foreground focus:outline-none"
            />
            <select className="px-4 py-3 text-sm bg-transparent text-muted-foreground border-l border-border focus:outline-none cursor-pointer">
              <option>Toate categoriile</option>
            </select>
            <button className="bg-accent px-5 py-3 text-accent-foreground hover:bg-yellow-400 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Right Icons (Desktop) */}
          <div className="flex items-center gap-4 text-primary-foreground">
            <Link to="/cont" className="flex items-center gap-2 hover:text-accent transition-colors">
              <User size={20} />
              <span className="text-sm font-medium">Intră în cont</span>
            </Link>
            <Link to="/favorite" className="relative hover:text-accent transition-colors">
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            <Link to="/cos" className="relative hover:text-accent transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div
          className="absolute left-0 right-0 z-50"
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <MegaMenu onClose={() => setIsMegaMenuOpen(false)} />
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[140px] bg-background z-40 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {topNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-foreground text-base font-medium hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="block px-4 py-3 text-buildings-orange text-base font-semibold"
            >
              % Promoții
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;