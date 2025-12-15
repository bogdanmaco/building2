import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  isTop?: boolean;
}

interface ProductCarouselProps {
  title: string;
  titleAccent?: string;
  products: Product[];
  showViewMore?: boolean;
}

const ProductCarousel = ({
  title,
  titleAccent,
  products,
  showViewMore = false,
}: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const next = () => {
    const itemsPerView = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2;
    const maxIndex = Math.max(0, products.length - itemsPerView);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="buildings-section-title">
            <span className="text-primary italic">{title}</span>
            {titleAccent && <span className="text-accent italic"> {titleAccent}</span>}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav Buttons - Desktop */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-primary-foreground items-center justify-center hover:bg-primary/90 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-primary-foreground items-center justify-center hover:bg-primary/90 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile: Horizontal Scroll with visible nav */}
          <div className="md:hidden relative">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center z-20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center z-20 rounded-full shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="overflow-hidden px-6">
              <div
                className="flex gap-4 transition-transform duration-300"
                style={{
                  transform: `translateX(-${currentIndex * 52}%)`,
                }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="w-[48%] flex-shrink-0"
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-1/4 flex-shrink-0 px-2"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More */}
        {showViewMore && (
          <div className="flex items-center justify-end gap-4 mt-6">
            <button className="buildings-btn-outline flex-1 md:flex-none">
              VEZI MAI MULTE
            </button>
            <button className="md:hidden w-14 h-14 rounded-full bg-card border-2 border-primary text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all">
              <ChevronUp size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCarousel;