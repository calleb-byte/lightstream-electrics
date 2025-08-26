import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ledBulbs from "@/assets/led-bulbs.jpg";
import wallSwitches from "@/assets/wall-switches.jpg";
import circuitBreakers from "@/assets/circuit-breakers.jpg";
import ledStrips from "@/assets/led-strips.jpg";
import showerHeater from "@/assets/shower-heater.jpg";
import heroChandelier from "@/assets/hero-chandelier.jpg";

const CategorySection = () => {
  const categories = [
    {
      name: "Chandeliers",
      description: "Elegant lighting solutions for luxury spaces",
      image: heroChandelier,
      productCount: "200+ Products",
      href: "/chandeliers"
    },
    {
      name: "LED Lights",
      description: "Energy-efficient modern lighting",
      image: ledBulbs,
      productCount: "500+ Products",
      href: "/led-lights"
    },
    {
      name: "Wall Switches",
      description: "Professional switches and outlets",
      image: wallSwitches,
      productCount: "150+ Products",
      href: "/switches"
    },
    {
      name: "Circuit Breakers",
      description: "Safety and protection equipment",
      image: circuitBreakers,
      productCount: "100+ Products",
      href: "/circuit-breakers"
    },
    {
      name: "LED Strips",
      description: "Flexible lighting solutions",
      image: ledStrips,
      productCount: "80+ Products",
      href: "/led-strips"
    },
    {
      name: "Showers & Heaters",
      description: "Electric bathroom solutions",
      image: showerHeater,
      productCount: "60+ Products",
      href: "/showers-heaters"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect electrical products for your needs from our comprehensive collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`category-card p-6 animate-fade-in group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">{category.productCount}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              
              <Button 
                variant="ghost" 
                className="group/btn hover:text-primary p-0 h-auto font-semibold"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;