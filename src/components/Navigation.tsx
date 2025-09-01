import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart, Minus, Plus, Trash2 } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();
  const { favoriteCount } = useFavorites();
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
            <Button variant="ghost" size="sm" className="relative hidden sm:flex md:flex lg:flex">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {favoriteCount}
              </span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  {state.totalItems > 0 && (
                    <Badge 
                      variant="default" 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs min-w-[20px]"
                    >
                      {state.totalItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Shopping Cart ({state.totalItems} items)</SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col h-full">
                  {state.items.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Your cart is empty</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1 overflow-y-auto space-y-4 py-4">
                        {state.items.map((item) => (
                          <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm truncate">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">{item.price}</p>
                              <div className="flex items-center space-x-2 mt-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 text-destructive hover:text-destructive ml-2"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <SheetFooter className="flex-col space-y-4">
                        <div className="flex justify-between items-center text-lg font-semibold">
                          <span>Total: ${state.totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                          <Button className="w-full flex-1 h-11" size="lg" asChild>
                            <a href="/checkout">
                              Checkout
                            </a>
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full sm:w-auto sm:min-w-[120px] h-11" 
                            onClick={clearCart}
                          >
                            Clear Cart
                          </Button>
                        </div>
                      </SheetFooter>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
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