import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "KAINDL", logo: "KAINDL" },
  { name: "CERRAD", logo: "CERRAD" },
  { name: "IBERO", logo: "IBERO" },
  { name: "MAINZU", logo: "MAINZU" },
  { name: "AZULEJOS MIJARES", logo: "AZULEJOS" },
  { name: "HALCON", logo: "HALCON" },
  { name: "CIFRE", logo: "CIFRE" },
  { name: "BALDOCER", logo: "BALDOCER" },
];

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 7;
  const maxIndex = Math.max(0, brands.length - itemsPerView);

  const prev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-8 bg-white border-t border-b border-verix-gray-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="w-10 h-10 bg-verix-blue text-white flex items-center justify-center hover:bg-verix-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <ChevronLeft size={24} />
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
                  <div className="text-verix-blue font-bold text-lg tracking-wide">
                    {brand.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 bg-verix-blue text-white flex items-center justify-center hover:bg-verix-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
