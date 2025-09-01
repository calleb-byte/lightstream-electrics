import { useState } from "react";
import { Star, ShoppingCart, Heart, Filter, Grid, List, Shield } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import circuitBreakers from "@/assets/circuit-breakers.jpg";

const CircuitBreakers = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: `KSh ${product.price.toLocaleString()}`,
      image: product.image,
      category: "Circuit Breakers"
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const breakers = [
    {
      id: 1,
      name: "Professional Circuit Breaker",
      description: "Industrial grade safety protection",
      price: 14999,
      originalPrice: 17999,
      rating: 4.7,
      reviews: 67,
      image: circuitBreakers,
      badge: "Professional",
      inStock: true,
      amperage: "63A",
      poles: "Single Pole",
      breaking: "10kA"
    },
    {
      id: 2,
      name: "MCB 3-Phase Breaker",
      description: "Three-phase miniature circuit breaker",
      price: 8500,
      originalPrice: null,
      rating: 4.8,
      reviews: 92,
      image: circuitBreakers,
      badge: "Industrial",
      inStock: true,
      amperage: "32A",
      poles: "3-Pole",
      breaking: "6kA"
    },
    {
      id: 3,
      name: "RCD Circuit Breaker",
      description: "Residual current device with earth leakage protection",
      price: 12000,
      originalPrice: 14500,
      rating: 4.9,
      reviews: 58,
      image: circuitBreakers,
      badge: "Safety",
      inStock: true,
      amperage: "40A",
      poles: "2-Pole",
      breaking: "30mA"
    },
    {
      id: 4,
      name: "RCBO Combined Breaker",
      description: "Combined RCD and MCB protection",
      price: 18500,
      originalPrice: null,
      rating: 4.6,
      reviews: 34,
      image: circuitBreakers,
      badge: "Premium",
      inStock: true,
      amperage: "25A",
      poles: "Single Pole",
      breaking: "30mA"
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
              <Shield className="h-12 w-12 text-primary" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                <span className="text-gradient">Circuit Breakers</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your electrical systems with our range of professional circuit breakers. Safety and reliability guaranteed.
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
                  <SelectItem value="amperage">By Amperage</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Pole Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single Pole</SelectItem>
                  <SelectItem value="double">2-Pole</SelectItem>
                  <SelectItem value="triple">3-Pole</SelectItem>
                  <SelectItem value="quad">4-Pole</SelectItem>
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
                  max={30000}
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
            {breakers.map((product, index) => (
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
                      product.badge === "Safety" 
                        ? "bg-green-500 text-white" 
                        : product.badge === "Professional"
                        ? "bg-blue-500 text-white"
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
                  className={`absolute top-4 right-4 z-10 h-8 w-8 p-0 bg-white/80 hover:bg-white group ${
                    isFavorite(product.id.toString()) ? 'text-destructive' : ''
                  }`}
                  onClick={() => {
                    const productData = {
                      id: product.id.toString(),
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      rating: product.rating
                    };
                    
                    if (isFavorite(product.id.toString())) {
                      removeFromFavorites(product.id.toString());
                      toast({
                        title: "Removed from Favorites",
                        description: `${product.name} has been removed from your favorites.`,
                      });
                    } else {
                      addToFavorites(productData);
                      toast({
                        title: "Added to Favorites",
                        description: `${product.name} has been added to your favorites.`,
                      });
                    }
                  }}
                >
                  <Heart className={`h-4 w-4 group-hover:text-destructive transition-colors ${
                    isFavorite(product.id.toString()) ? 'fill-current' : ''
                  }`} />
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
                      {product.amperage}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.poles}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.breaking}
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

export default CircuitBreakers;