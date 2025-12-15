import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  brand: string;
  bgColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Dă liniștea",
    subtitle: "mai tare!",
    description: "ALEGE Rigips® Fonic, PLACA CU MIEZ DENS, CARE BLOCEAZĂ ZGOMOTUL!",
    brand: "SAINT-GOBAIN",
    bgColor: "bg-gradient-to-r from-cyan-100 via-cyan-50 to-white",
  },
  {
    id: 2,
    title: "Materiale",
    subtitle: "de calitate!",
    description: "Cele mai bune materiale de construcție pentru proiectele tale",
    brand: "VERIX-GRUP",
    bgColor: "bg-gradient-to-r from-blue-100 via-blue-50 to-white",
  },
  {
    id: 3,
    title: "Reduceri",
    subtitle: "speciale!",
    description: "Profită de ofertele noastre exclusive pentru materiale de construcție",
    brand: "VERIX-GRUP",
    bgColor: "bg-gradient-to-r from-yellow-100 via-yellow-50 to-white",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } ${slide.bgColor}`}
        >
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="flex-1">
              {/* Decorative wave */}
              <div className="absolute left-0 bottom-0 w-1/3 h-full opacity-50">
                <svg viewBox="0 0 200 400" className="h-full text-cyan-300">
                  <path
                    d="M0,400 Q50,300 0,200 T0,0 L0,400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20,400 Q70,300 20,200 T20,0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M40,400 Q90,300 40,200 T40,0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="bg-verix-yellow p-8 max-w-md">
                <h2 className="text-4xl md:text-5xl font-black text-verix-blue italic leading-tight">
                  {slide.title}
                </h2>
                <h2 className="text-4xl md:text-5xl font-black text-verix-red italic leading-tight">
                  {slide.subtitle}
                </h2>
                <p className="text-verix-blue text-sm mt-4 font-medium">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 text-verix-text font-bold text-xl">
            {slide.brand}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-verix-blue text-white flex items-center justify-center hover:bg-verix-blue-dark transition-colors z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-verix-blue text-white flex items-center justify-center hover:bg-verix-blue-dark transition-colors z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 ${
              index === currentSlide ? "bg-verix-blue" : "bg-verix-gray-dark"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
