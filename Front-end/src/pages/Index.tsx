import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProductCarousel from "@/components/ProductCarousel";
import SalesSection from "@/components/SalesSection";
import PopularCategories from "@/components/PopularCategories";
import BrandSlider from "@/components/BrandSlider";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import MobileBottomDock from "@/components/MobileBottomDock";

const newProducts = [
  { id: 1, name: "BOILER HYUNDAI 80L 2000W HYW...", price: 4899, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 2, name: "BOILER HYUNDAI VERTICAL 80L15...", price: 3299, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 3, name: "BOILER HYUNDAI VERTICAL 50L15...", price: 2499, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 4, name: "BOILER HYUNDAI 50L VERTICAL 20...", price: 3999, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 5, name: "BOILER ATLANTIC 100L VERTICAL...", price: 5499, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
  { id: 6, name: "BOILER ATLANTIC 80L VERTICAL...", price: 4799, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop" },
];

const topProducts = [
  { id: 1, name: "VOPSEA DIN CAUCIUC FARBEX ORAN...", price: 130, image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=300&fit=crop", isTop: true },
  { id: 2, name: "GRESIE MERBAU SZARA GRES SZKL...", price: 197, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop", isTop: true },
  { id: 3, name: "GRESIE MERBAU BRAZ GRES SZKL...", price: 197, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop", isTop: true },
  { id: 4, name: "PIATRA FLEXIBILA KLINKER", price: 520, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", isTop: true },
  { id: 5, name: "REZERVOR ASCUNS DE PERETE CU S...", price: 1750, image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop", isTop: true },
  { id: 6, name: "PELETE BIO IN SACI 15KG", price: 82.5, image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=300&h=300&fit=crop", isTop: true },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />
      <main>
        <HeroSlider />
        <ProductCarousel
          title="PRODUSE"
          titleAccent="NOI"
          products={newProducts}
          showViewMore
        />
        <SalesSection />
        <ProductCarousel
          title="CELE MAI"
          titleAccent="CĂUTATE"
          products={topProducts}
          showViewMore
        />
        <PopularCategories />
        <BrandSlider />
        <MapSection />
      </main>
      <Footer />
      <MobileBottomDock />
    </div>
  );
};

export default Index;
