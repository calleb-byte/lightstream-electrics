import { useState } from "react";
import { Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import wallSwitches from "@/assets/wall-switches.jpg";

const Switches = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: `KSh ${product.price.toLocaleString()}`,
      image: product.image,
      category: "Switches"
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const switches = [
    {
      id: 1,
      name: "Premium Wall Switch Collection",
      description: "Modern design switches with LED indicators",
      price: 2499,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: wallSwitches,
      badge: "New",
      inStock: true,
      amperage: "20A",
      voltage: "240V",
      type: "Toggle Switch"
    },
    {
      id: 2,
      name: "Smart WiFi Switch",
      description: "Voice control and app-enabled smart switch",
      price: 4500,
      originalPrice: 5200,
      rating: 4.7,
      reviews: 67,
      image: wallSwitches,
      badge: "Smart",
      inStock: true,
      amperage: "15A",
      voltage: "240V",
      type: "Smart Switch"
    },
    {
      id: 3,
      name: "Dimmer Switch Set",
      description: "Adjustable brightness control for LED lights",
      price: 3200,
      originalPrice: null,
      rating: 4.6,
      reviews: 124,
      image: wallSwitches,
      badge: "Featured",
      inStock: true,
      amperage: "16A",
      voltage: "240V",
      type: "Dimmer Switch"
    },
    {
      id: 4,
      name: "Industrial Heavy Duty Switch",
      description: "Robust switch for industrial applications",
      price: 1800,
      originalPrice: 2100,
      rating: 4.8,
      reviews: 45,
      image: wallSwitches,
      badge: "Sale",
      inStock: true,
      amperage: "25A",
      voltage: "240V",
      type: "Industrial Switch"
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
              Premium <span className="text-gradient">Wall Switches</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Control your lighting with style. From smart switches to traditional toggles, find the perfect switch for every room.
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
                  <SelectValue placeholder="Switch Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toggle">Toggle Switch</SelectItem>
                  <SelectItem value="smart">Smart Switch</SelectItem>
                  <SelectItem value="dimmer">Dimmer Switch</SelectItem>
                  <SelectItem value="industrial">Industrial Switch</SelectItem>
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
                  max={15000}
                  step={250}
                  className="w-full"
                />
              </div>
              <span className="text-sm text-muted-foreground">
                KSh {priceRange[0].toLocaleString()} - KSh {priceRange[1].toLocaleString()}
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid ${viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-8`}>
            {switches.map((product, index) => (
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
                        : product.badge === "Smart"
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

export default Switches;