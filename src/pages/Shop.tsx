import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import chandeliersImg from "@/assets/hero-chandelier.jpg";
import ledBulbsImg from "@/assets/led-bulbs.jpg";
import ledStripsImg from "@/assets/led-strips.jpg";
import wallSwitchesImg from "@/assets/wall-switches.jpg";
import circuitBreakersImg from "@/assets/circuit-breakers.jpg";
import showerHeaterImg from "@/assets/shower-heater.jpg";

const products = [
  {
    id: 1,
    name: "Crystal Chandelier Deluxe",
    price: "KSh 45,000",
    originalPrice: "KSh 52,000",
    image: chandeliersImg,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    category: "Chandeliers"
  },
  {
    id: 2,
    name: "LED Smart Bulb Set",
    price: "KSh 3,500",
    image: ledBulbsImg,
    rating: 4.6,
    reviews: 89,
    badge: "New",
    category: "LED Lights"
  },
  {
    id: 3,
    name: "RGB LED Strip Lights",
    price: "KSh 2,800",
    image: ledStripsImg,
    rating: 4.7,
    reviews: 156,
    category: "LED Lights"
  },
  {
    id: 4,
    name: "Premium Wall Switch",
    price: "KSh 1,200",
    image: wallSwitchesImg,
    rating: 4.5,
    reviews: 78,
    category: "Switches"
  },
  {
    id: 5,
    name: "Circuit Breaker 20A",
    price: "KSh 850",
    image: circuitBreakersImg,
    rating: 4.9,
    reviews: 203,
    badge: "Top Rated",
    category: "Circuit Breakers"
  },
  {
    id: 6,
    name: "Instant Shower Heater",
    price: "KSh 8,500",
    image: showerHeaterImg,
    rating: 4.4,
    reviews: 67,
    category: "Heaters"
  }
];

const Shop = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shop All Products</h1>
            <p className="text-xl text-muted-foreground">
              Browse our complete collection of electrical products
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Select>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="chandeliers">Chandeliers</SelectItem>
                <SelectItem value="led">LED Lights</SelectItem>
                <SelectItem value="switches">Switches</SelectItem>
                <SelectItem value="breakers">Circuit Breakers</SelectItem>
                <SelectItem value="heaters">Heaters</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 z-10 bg-accent text-white">
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      <div className="flex space-x-1">{renderStars(product.rating)}</div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-accent">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;