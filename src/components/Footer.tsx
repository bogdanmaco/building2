import { Phone, MapPin, Clock, Facebook, Instagram, CheckCircle, Truck, Shield, HelpCircle, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-verix-blue text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black">
                VERIX<span className="text-verix-yellow">GRUP</span>
              </span>
              <p className="text-xs text-white/70 uppercase tracking-widest">
                Materiale de construcții
              </p>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Compania „VERIX-GRUP", unul dintre cei mai mari importatori de materiale de construcții precum plăci ceramice, laminat, linoleum, mixere, accesorii pentru baie, siding, plinte, etc.
            </p>

            <div className="mt-6">
              <h4 className="font-bold text-sm uppercase mb-3">
                CALL CENTER «VERIX-GRUP»
              </h4>
              <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                <MapPin size={14} />
                <span>mun.Bălți, Ștefan cel Mare 1/8, Stroymarket Verix-center</span>
              </div>
              <div className="flex gap-6 mt-3">
                <a href="tel:+37368455555" className="text-lg font-bold hover:text-verix-yellow transition-colors">
                  +(373)68455555
                </a>
                <a href="tel:+37362044474" className="text-lg font-bold hover:text-verix-yellow transition-colors">
                  + (373) 62044474
                </a>
              </div>
            </div>
          </div>

          {/* Help Links */}
          <div>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-sm hover:text-verix-yellow transition-colors">
                <HelpCircle size={18} />
                CUM SA FACI COMANDA?
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-verix-yellow transition-colors">
                <CreditCard size={18} />
                CUM SA ACHITI?
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-verix-yellow transition-colors">
                <Shield size={18} />
                PROTECȚIA CONSUMATORILOR
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-verix-yellow transition-colors">
                <CheckCircle size={18} />
                GARANȚIE
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-verix-yellow transition-colors">
                <Truck size={18} />
                LIVRARE
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} />
              <h4 className="font-bold text-sm uppercase">Program de lucru</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Luni - Vineri</span>
                <span className="font-bold">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sîmbăta</span>
                <span className="font-bold">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Duminica</span>
                <span className="font-bold">08:00 - 16:00</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-sm uppercase mb-4">Rețele sociale</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-sm hover:text-verix-yellow transition-colors">
                <Facebook size={18} />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-3 text-sm hover:text-verix-yellow transition-colors">
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            © 2012-2025 SRL «VERIX-GRUP»
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-white px-3 py-1 text-verix-blue font-bold text-sm">
                VISA
              </div>
              <div className="bg-orange-500 px-3 py-1 text-white font-bold text-sm flex items-center">
                <span className="text-red-600">●</span>
                <span className="text-orange-400">●</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Elaborat de: ilab.md
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
