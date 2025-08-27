import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "Chandeliers",
    href: "/chandeliers"
  }, {
    name: "LED Lights",
    href: "/led-lights"
  }, {
    name: "Switches",
    href: "/switches"
  }, {
    name: "Circuit Breakers",
    href: "/circuit-breakers"
  }, {
    name: "Showers & Heaters",
    href: "/showers-heaters"
  }, {
    name: "More",
    href: "/categories"
  }];
  return <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/30">
          <div className="hidden md:flex items-center space-x-6">
            <span>📞 +1 (555) 123-4567</span>
            <span>📧 info@electricpro.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>delivery services offered!</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4 mx-0">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-gradient">Electric</span>
              <span className="text-accent-gradient">Pro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200 font-medium mx-px">
                {item.name}
              </a>)}
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="text" placeholder="Search electrical products..." className="pl-10 pr-4 py-2 w-full" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 w-full" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="lg:hidden border-t border-border/50 bg-background">
          <div className="px-4 py-6 space-y-4">
            {navItems.map(item => <a key={item.name} href={item.href} className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>)}
          </div>
        </div>}
    </nav>;
};
export default Navigation;