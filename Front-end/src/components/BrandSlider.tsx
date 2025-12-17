import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "KAINDL", logo: "KAINDL" },
  { name: "CERRAD", logo: "CERRAD" },
  { name: "IBERO", logo: "IBERO" },
  { name: "MAINZU", logo: "MAINZU" },
  { name: "AZULEJOS", logo: "AZULEJOS" },
  { name: "HALCON", logo: "HALCON" },
  { name: "CIFRE", logo: "CIFRE" },
  { name: "BALDOCER", logo: "BALDOCER" },
];

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 6;
  const maxIndex = Math.max(0, brands.length - itemsPerView);

  const prev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-8 md:py-12 border-t border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-6 font-medium">
          Branduri de încredere
        </h3>
        <div className="relative flex items-center">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 rounded-full shadow-md"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex-1 overflow-hidden mx-4">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4 flex items-center justify-center"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="text-primary font-bold text-lg tracking-wide hover:text-accent transition-colors cursor-pointer px-4 py-3 rounded-xl hover:bg-muted">
                    {brand.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 rounded-full shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;