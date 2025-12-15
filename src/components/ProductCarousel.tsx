import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const prev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="verix-section-title text-verix-blue">
            {title}
            {titleAccent && <span className="text-verix-yellow"> {titleAccent}</span>}
          </h2>
          {showViewMore && (
            <button className="border border-verix-gray-dark px-4 py-2 text-sm font-medium text-verix-text hover:bg-verix-gray transition-colors uppercase">
              Vezi mai multe
            </button>
          )}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav Buttons */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-verix-blue text-white flex items-center justify-center hover:bg-verix-blue-dark transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-verix-blue text-white flex items-center justify-center hover:bg-verix-blue-dark transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
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
      </div>
    </section>
  );
};

export default ProductCarousel;
