import { useState } from "react";
import { Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroChandelier from "@/assets/hero-chandelier.jpg";

const Chandeliers = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: `KSh ${product.price.toLocaleString()}`,
      image: product.image,
      category: "Chandeliers"
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const chandeliers = [
    {
      id: 1,
      name: "Crystal Palace Chandelier",
      description: "Luxurious crystal chandelier with LED lighting",
      price: 45000,
      originalPrice: 55000,
      rating: 4.9,
      reviews: 87,
      image: heroChandelier,
      badge: "Premium",
      inStock: true,
      wattage: "120W",
      bulbs: "12 bulbs",
      material: "Crystal & Steel"
    },
    {
      id: 2,
      name: "Modern Brass Chandelier",
      description: "Contemporary brass finish with warm lighting",
      price: 28000,
      originalPrice: null,
      rating: 4.7,
      reviews: 64,
      image: heroChandelier,
      badge: "New",
      inStock: true,
      wattage: "90W",
      bulbs: "8 bulbs",
      material: "Brass & Glass"
    },
    {
      id: 3,
      name: "Vintage Edison Chandelier",
      description: "Industrial style with exposed Edison bulbs",
      price: 18500,
      originalPrice: 22000,
      rating: 4.6,
      reviews: 92,
      image: heroChandelier,
      badge: "Sale",
      inStock: true,
      wattage: "80W",
      bulbs: "6 bulbs",
      material: "Iron & Glass"
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Premium <span className="text-gradient">Chandeliers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your space with our exquisite collection of chandeliers. From crystal elegance to modern minimalism.
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
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crystal">Crystal</SelectItem>
                  <SelectItem value="brass">Brass</SelectItem>
                  <SelectItem value="iron">Iron</SelectItem>
                  <SelectItem value="glass">Glass</SelectItem>
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
                  max={100000}
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
            {chandeliers.map((product, index) => (
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
                      product.badge === "Sale" 
                        ? "bg-destructive text-destructive-foreground" 
                        : product.badge === "New"
                        ? "bg-accent text-accent-foreground"
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
                      {product.wattage}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.bulbs}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.material}
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
                  <Button 
                    className="w-full group/cart"
                    onClick={() => handleAddToCart(product)}
                  >
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

export default Chandeliers;