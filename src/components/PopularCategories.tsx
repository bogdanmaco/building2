const categories = [
  { name: "PIATRĂ FLEXIBILĂ", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=100&fit=crop" },
  { name: "VOPSELE PE BAZĂ DE CAUCIUC", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=150&h=100&fit=crop" },
  { name: "VOPSELE SPRAY", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=150&h=100&fit=crop" },
  { name: "VOPSELE EMULSIE", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=100&fit=crop" },
  { name: "MATERIALE DE CONSTRUCȚIE", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&h=100&fit=crop" },
  { name: "GRESIE ȘI FAIANȚĂ", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=150&h=100&fit=crop" },
  { name: "MATERIALE DE FINISARE", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=150&h=100&fit=crop" },
  { name: "ACOPERIRI PENTRU PODEA ȘI PEREȚI", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=150&h=100&fit=crop" },
  { name: "UȘI", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=150&h=100&fit=crop" },
  { name: "TEHNICĂ SANITARĂ", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=150&h=100&fit=crop" },
  { name: "ECHIPAMENTE ELECTRICE ȘI ACCESORII", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=150&h=100&fit=crop" },
  { name: "CORPURI ȘI SURSE DE ILUMINAT", image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=150&h=100&fit=crop" },
];

const PopularCategories = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="verix-section-title text-verix-blue">
            CATEGORII<span className="text-verix-yellow"> POPULARE</span>
          </h2>
          <button className="border border-verix-gray-dark px-4 py-2 text-sm font-medium text-verix-text hover:bg-verix-gray transition-colors uppercase">
            Vezi mai multe
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 border border-verix-blue p-3 hover:bg-verix-gray transition-colors group"
            >
              <span className="text-verix-blue text-xs font-bold uppercase flex-1 group-hover:text-verix-blue-dark">
                {category.name}
              </span>
              <div className="w-20 h-14 flex-shrink-0 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
