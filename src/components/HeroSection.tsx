import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroChandelier from "@/assets/hero-chandelier.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-accent animate-float" />
              <span className="text-accent font-semibold uppercase tracking-wide text-sm">
                Professional Electrical Solutions
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Illuminate Your
              <span className="block text-accent">Space</span>
              <span className="block">Professionally</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover premium electrical products from chandeliers to circuit breakers. 
              Quality, safety, and style for your home and business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/shop">
                <Button className="btn-hero group w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/catalog">
                <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white w-full sm:w-auto">
                  View Catalog
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">5000+</div>
                <div className="text-sm text-gray-300">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-gray-300">Quality</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="animate-slide-up lg:animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-3"></div>
              <img
                src={heroChandelier}
                alt="Premium Chandelier Collection"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-charcoal">Premium Chandeliers</h3>
                    <p className="text-sm text-muted-foreground">Starting from $299</p>
                  </div>
                  <Link to="/chandeliers">
                    <Button size="sm" className="btn-primary text-xs sm:text-sm lg:text-base">
                      View Collection
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;