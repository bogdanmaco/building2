import { Phone, MapPin, Clock, Facebook, Instagram, CheckCircle, Truck, Shield, HelpCircle, CreditCard, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <Building2 className="text-accent" size={24} />
              </div>
              <div>
                <span className="text-xl font-extrabold">
                  BUILDINGS<span className="text-accent">.MD</span>
                </span>
                <p className="text-xs text-primary-foreground/70 uppercase tracking-widest">
                  Materiale de construcții
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Compania BUILDINGS.MD, unul dintre cei mai mari importatori de materiale de construcții precum plăci ceramice, laminat, linoleum, mixere, accesorii pentru baie, și multe altele.
            </p>

            <div className="mt-6">
              <h4 className="font-bold text-sm uppercase mb-3 flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                CALL CENTER
              </h4>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80 mb-2">
                <MapPin size={14} />
                <span>mun.Bălți, Ștefan cel Mare 1/8</span>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <a href="tel:+37368455555" className="text-lg font-bold hover:text-accent transition-colors">
                  +(373) 68 455 555
                </a>
                <a href="tel:+37362044474" className="text-lg font-bold hover:text-accent transition-colors">
                  +(373) 62 044 474
                </a>
              </div>
            </div>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-bold text-sm uppercase mb-4">Ajutor</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-sm hover:text-accent transition-colors text-primary-foreground/90">
                <HelpCircle size={18} />
                CUM SĂ FACI COMANDĂ?
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-accent transition-colors text-primary-foreground/90">
                <CreditCard size={18} />
                CUM SĂ ACHIȚI?
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-accent transition-colors text-primary-foreground/90">
                <Shield size={18} />
                PROTECȚIA CONSUMATORILOR
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-accent transition-colors text-primary-foreground/90">
                <CheckCircle size={18} />
                GARANȚIE
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-accent transition-colors text-primary-foreground/90">
                <Truck size={18} />
                LIVRARE
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-accent" />
              <h4 className="font-bold text-sm uppercase">Program de lucru</h4>
            </div>
            <div className="space-y-3 text-sm bg-primary-foreground/10 p-4 rounded-xl">
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Luni - Vineri</span>
                <span className="font-bold">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Sâmbătă</span>
                <span className="font-bold">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Duminică</span>
                <span className="font-bold">08:00 - 16:00</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-sm uppercase mb-4">Rețele sociale</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-sm hover:text-accent transition-colors bg-primary-foreground/10 px-4 py-3 rounded-xl">
                <Facebook size={20} />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-accent transition-colors bg-primary-foreground/10 px-4 py-3 rounded-xl">
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2012-2025 SRL «BUILDINGS.MD»
          </p>
          <div className="flex items-center gap-3">
            <div className="bg-primary-foreground px-3 py-1.5 text-primary font-bold text-sm rounded-lg">
              VISA
            </div>
            <div className="bg-primary-foreground px-3 py-1.5 font-bold text-sm rounded-lg flex items-center gap-0.5">
              <span className="text-red-600 text-lg">●</span>
              <span className="text-amber-500 text-lg">●</span>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Elaborat de: buildings.md team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;