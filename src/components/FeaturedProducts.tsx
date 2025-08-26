import { Star, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ledBulbs from "@/assets/led-bulbs.jpg";
import wallSwitches from "@/assets/wall-switches.jpg";
import circuitBreakers from "@/assets/circuit-breakers.jpg";
import ledStrips from "@/assets/led-strips.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smart LED Bulb Set",
      description: "Energy-efficient smart bulbs with app control",
      price: 8999,
      originalPrice: 11999,
      rating: 4.8,
      reviews: 124,
      image: ledBulbs,
      badge: "Best Seller",
      inStock: true
    },
    {
      id: 2,
      name: "Premium Wall Switch Collection",
      description: "Modern design switches with LED indicators",
      price: 2499,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: wallSwitches,
      badge: "New",
      inStock: true
    },
    {
      id: 3,
      name: "Professional Circuit Breaker",
      description: "Industrial grade safety protection",
      price: 14999,
      originalPrice: 17999,
      rating: 4.7,
      reviews: 67,
      image: circuitBreakers,
      badge: "Sale",
      inStock: true
    },
    {
      id: 4,
      name: "RGB LED Strip Kit",
      description: "Flexible lighting with color changing",
      price: 6999,
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      image: ledStrips,
      badge: "Featured",
      inStock: false
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked electrical products that combine quality, innovation, and value
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`card-product group p-6 relative animate-fade-in`}
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
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>

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
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover/cart:scale-110 transition-transform" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;