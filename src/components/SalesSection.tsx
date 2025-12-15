import ProductCard from "./ProductCard";

const salesProducts = [
  {
    id: 1,
    name: "Desciorchinător de struguri el...",
    price: 5950,
    oldPrice: 6890,
    discount: 13,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Dispozitiv p/u zdrob.struguri...",
    price: 3050,
    oldPrice: 3500,
    discount: 13,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Teasc presă p/u struguri 50L C...",
    price: 6099,
    oldPrice: 6950,
    discount: 12,
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=300&h=300&fit=crop",
  },
];

const SalesSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="verix-section-title text-verix-blue mb-6">
          REDUCERI
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Banner */}
          <div className="relative bg-verix-gray overflow-hidden">
            <div className="absolute top-4 right-4 bg-verix-red text-white px-3 py-2 text-xl font-bold z-10">
              -13%
            </div>
            <div className="aspect-[4/3] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=400&fit=crop"
                alt="Reducere specială"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4">
            {salesProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
            <div className="flex items-end justify-end">
              <button className="border border-verix-gray-dark px-4 py-2 text-sm font-medium text-verix-text hover:bg-verix-gray transition-colors uppercase">
                Vezi mai multe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
