import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Lightbulb, ToggleLeft, Shield, Droplets, Home } from "lucide-react";
import { Link } from "react-router-dom";
import chandeliersImg from "@/assets/hero-chandelier.jpg";
import ledBulbsImg from "@/assets/led-bulbs.jpg";
import wallSwitchesImg from "@/assets/wall-switches.jpg";
import circuitBreakersImg from "@/assets/circuit-breakers.jpg";
import showerHeaterImg from "@/assets/shower-heater.jpg";

const categories = [
  {
    name: "Chandeliers",
    description: "Elegant lighting solutions for luxury spaces",
    image: chandeliersImg,
    icon: Lightbulb,
    productCount: 45,
    href: "/chandeliers",
    featured: true
  },
  {
    name: "LED Lights",
    description: "Energy-efficient lighting for modern homes",
    image: ledBulbsImg,
    icon: Zap,
    productCount: 120,
    href: "/led-lights",
    featured: true
  },
  {
    name: "Wall Switches",
    description: "Premium switches and controls",
    image: wallSwitchesImg,
    icon: ToggleLeft,
    productCount: 78,
    href: "/switches"
  },
  {
    name: "Circuit Breakers",
    description: "Safety and protection equipment",
    image: circuitBreakersImg,
    icon: Shield,
    productCount: 32,
    href: "/circuit-breakers"
  },
  {
    name: "Shower Heaters",
    description: "Instant water heating solutions",
    image: showerHeaterImg,
    icon: Droplets,
    productCount: 24,
    href: "/showers-heaters"
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wide text-sm">
                Complete Product Catalog
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Browse Our Complete
              <span className="block text-accent">Product Range</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive catalog of electrical products, from luxury chandeliers 
              to essential safety equipment. Quality guaranteed on every item.
            </p>
          </div>

          {/* Featured Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Categories</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {categories.filter(cat => cat.featured).map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.name} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <IconComponent className="h-6 w-6" />
                          <span className="font-semibold text-lg">{category.name}</span>
                        </div>
                        <p className="text-sm opacity-90">{category.productCount} Products Available</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <CardDescription className="mb-4 text-base">
                        {category.description}
                      </CardDescription>
                      <Link to={category.href}>
                        <Button className="w-full group/btn">
                          View Products
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* All Categories Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">All Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.name} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle className="group-hover:text-accent transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-accent">{category.productCount}</span>
                        <p className="text-sm text-muted-foreground">Products</p>
                      </div>
                      <Link to={category.href}>
                        <Button variant="outline" className="w-full group/btn">
                          Browse
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-accent/5 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need Help Finding the Right Product?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts are here to help you choose the perfect electrical solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Contact Our Experts
              </Button>
              <Button variant="outline" size="lg">
                Download Catalog PDF
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;