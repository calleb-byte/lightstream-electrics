import { Grid, List, Search, Filter, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroChandelier from "@/assets/hero-chandelier.jpg";
import ledBulbs from "@/assets/led-bulbs.jpg";
import wallSwitches from "@/assets/wall-switches.jpg";
import circuitBreakers from "@/assets/circuit-breakers.jpg";
import ledStrips from "@/assets/led-strips.jpg";
import showerHeater from "@/assets/shower-heater.jpg";

const Categories = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const allCategories = [
    {
      name: "Chandeliers",
      description: "Elegant crystal and modern chandeliers for luxury lighting",
      image: heroChandelier,
      productCount: 45,
      href: "/chandeliers"
    },
    {
      name: "LED Lights",
      description: "Energy-efficient LED bulbs, strips, and panels",
      image: ledBulbs,
      productCount: 128,
      href: "/led-lights"
    },
    {
      name: "Wall Switches",
      description: "Modern switches with smart control options",
      image: wallSwitches,
      productCount: 67,
      href: "/switches"
    },
    {
      name: "Circuit Breakers",
      description: "Professional safety protection for electrical systems",
      image: circuitBreakers,
      productCount: 34,
      href: "/circuit-breakers"
    },
    {
      name: "LED Strips",
      description: "Flexible RGB and white LED strips for accent lighting",
      image: ledStrips,
      productCount: 89,
      href: "/led-lights"
    },
    {
      name: "Showers & Heaters",
      description: "Electric water heaters and instant shower systems",
      image: showerHeater,
      productCount: 52,
      href: "/showers-heaters"
    },
    {
      name: "Consumer Units",
      description: "Distribution boards and electrical panels",
      image: circuitBreakers,
      productCount: 28,
      href: "/circuit-breakers"
    },
    {
      name: "Electrical Tapes",
      description: "Insulation tapes and electrical accessories",
      image: wallSwitches,
      productCount: 76,
      href: "/categories"
    },
    {
      name: "Light Control Sensors",
      description: "Motion sensors and automated lighting controls",
      image: ledBulbs,
      productCount: 43,
      href: "/switches"
    },
    {
      name: "Wiring Accessories",
      description: "Cable management and wiring solutions",
      image: wallSwitches,
      productCount: 94,
      href: "/categories"
    },
    {
      name: "Power Outlets",
      description: "Wall sockets and power distribution outlets",
      image: wallSwitches,
      productCount: 61,
      href: "/switches"
    },
    {
      name: "Industrial Equipment",
      description: "Heavy-duty electrical components for industrial use",
      image: circuitBreakers,
      productCount: 37,
      href: "/circuit-breakers"
    }
  ];

  const filteredCategories = allCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              All <span className="text-gradient">Categories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our complete range of electrical products and components. Find exactly what you need for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg p-6 mb-8 border border-border/50">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Sort */}
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="products">Most Products</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Categories Grid/List */}
          <div className={`grid ${
            viewMode === 'grid' 
              ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          } gap-8`}>
            {filteredCategories.map((category, index) => (
              <div
                key={category.name}
                className={`card-product group p-6 relative animate-fade-in ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Image */}
                <div className={`relative overflow-hidden rounded-lg mb-4 ${
                  viewMode === 'list' ? 'w-48 flex-shrink-0' : ''
                }`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                </div>

                {/* Category Info */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {category.productCount} items
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>

                  {/* Explore Button */}
                  <a href={category.href}>
                    <Button variant="outline" className="w-full group/explore">
                      Explore Products
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/explore:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground text-lg mb-4">
                No categories found matching "{searchTerm}"
              </div>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </Button>
            </div>
          )}

          {/* Results Count */}
          {searchTerm && filteredCategories.length > 0 && (
            <div className="text-center mt-8 text-muted-foreground">
              Showing {filteredCategories.length} of {allCategories.length} categories
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;