import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  brand: string;
  bgGradient: string;
  accentColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Descoperă vata",
    subtitle: "minerală de sticlă Isover",
    description: "Alege Isover Super Profi pentru case eficiente energetic.",
    brand: "SAINT-GOBAIN",
    bgGradient: "from-emerald-100 via-emerald-50 to-white",
    accentColor: "bg-emerald-500",
  },
  {
    id: 2,
    title: "Materiale",
    subtitle: "de top calitate!",
    description: "Cele mai bune materiale de construcție pentru proiectele tale ambițioase.",
    brand: "BUILDINGS.MD",
    bgGradient: "from-blue-100 via-blue-50 to-white",
    accentColor: "bg-primary",
  },
  {
    id: 3,
    title: "Super",
    subtitle: "Reduceri!",
    description: "Profită de ofertele noastre exclusive pentru materiale de construcție.",
    brand: "BUILDINGS.MD",
    bgGradient: "from-amber-100 via-amber-50 to-white",
    accentColor: "bg-accent",
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
    <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden rounded-none md:rounded-3xl md:mx-4 md:mt-4 md:max-w-7xl md:mx-auto">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          } bg-gradient-to-r ${slide.bgGradient}`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
            {/* Left Content */}
            <div className="flex-1 z-10">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
                  {slide.title}
                </h2>
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                  {slide.subtitle}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base mt-4 max-w-md">
                  {slide.description}
                </p>
                <button className="mt-6 buildings-btn-yellow text-sm">
                  Vezi produsul
                </button>
              </div>
            </div>

            {/* Right - Brand Badge */}
            <div className="hidden md:flex flex-col items-end justify-center">
              <div className="text-right">
                <div className={`w-16 h-16 ${slide.accentColor} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Building2 className="text-white" size={32} />
                </div>
                <span className="text-foreground font-bold text-lg">{slide.brand}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-card/90 backdrop-blur text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all z-10 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-card/90 backdrop-blur text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all z-10 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-6 md:w-8" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;