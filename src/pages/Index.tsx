import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
