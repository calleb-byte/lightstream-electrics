import { useState } from "react";
import { Star, ShoppingCart, Heart, Filter, Grid, List, Droplets, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import showerHeater from "@/assets/shower-heater.jpg";

const ShowersHeaters = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 30000]);

  const products = [
    {
      id: 1,
      name: "Instant Electric Shower Heater",
      description: "High-efficiency instant water heating system",
      price: 18500,
      originalPrice: 22000,
      rating: 4.6,
      reviews: 89,
      image: showerHeater,
      badge: "Energy Efficient",
      inStock: true,
      power: "8.5kW",
      voltage: "240V",
      type: "Instant Heater"
    },
    {
      id: 2,
      name: "Tankless Water Heater",
      description: "Space-saving tankless design with digital display",
      price: 25500,
      originalPrice: null,
      rating: 4.8,
      reviews: 127,
      image: showerHeater,
      badge: "Premium",
      inStock: true,
      power: "12kW",
      voltage: "240V",
      type: "Tankless"
    },
    {
      id: 3,
      name: "Electric Storage Water Heater",
      description: "50L capacity with temperature control",
      price: 15000,
      originalPrice: 17500,
      rating: 4.5,
      reviews: 156,
      image: showerHeater,
      badge: "Best Value",
      inStock: true,
      power: "3kW",
      voltage: "240V",
      type: "Storage Tank"
    },
    {
      id: 4,
      name: "Smart Shower System",
      description: "App-controlled temperature and flow rate",
      price: 32000,
      originalPrice: null,
      rating: 4.9,
      reviews: 67,
      image: showerHeater,
      badge: "Smart",
      inStock: true,
      power: "10kW",
      voltage: "240V",
      type: "Smart System"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? "text-accent fill-accent" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Droplets className="h-10 w-10 text-primary" />
              <Flame className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Showers & Heaters</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enjoy hot water on demand with our range of electric showers and water heaters. Efficient, reliable, and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="bg-card rounded-lg p-6 mb-8 border border-border/50">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Filters:</span>
              </div>
              
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="power">By Power Rating</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Heater Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instant">Instant Heater</SelectItem>
                  <SelectItem value="tankless">Tankless</SelectItem>
                  <SelectItem value="storage">Storage Tank</SelectItem>
                  <SelectItem value="smart">Smart System</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 ml-auto">
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

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Price Range:</span>
              <div className="flex-1 max-w-xs">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={40000}
                  step={1000}
                  className="w-full"
                />
              </div>
              <span className="text-sm text-muted-foreground">
                KSh {priceRange[0].toLocaleString()} - KSh {priceRange[1].toLocaleString()}
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid ${viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`card-product group p-6 relative animate-fade-in ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Badge */}
                {product.badge && (
                  <Badge 
                    className={`absolute top-4 left-4 z-10 ${
                      product.badge === "Smart" 
                        ? "bg-purple-500 text-white" 
                        : product.badge === "Energy Efficient"
                        ? "bg-green-500 text-white"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Wishlist button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-10 h-8 w-8 p-0 bg-white/80 hover:bg-white group"
                >
                  <Heart className="h-4 w-4 group-hover:text-destructive transition-colors" />
                </Button>

                {/* Product Image */}
                <div className={`relative overflow-hidden rounded-lg mb-4 ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {product.power}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.voltage}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.type}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">
                      KSh {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        KSh {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full group/cart">
                    <ShoppingCart className="mr-2 h-4 w-4 group-hover/cart:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShowersHeaters;