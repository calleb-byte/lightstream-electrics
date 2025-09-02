import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ShoppingBag, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Checkout = () => {
  const { state } = useCart();
  const { items, totalPrice } = state;

  const handleCallSeller = () => {
    window.open('tel:+1234567890', '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <div className="text-2xl font-bold">
                <span className="text-gradient">Electric</span>
                <span className="text-accent-gradient">Pro</span>
              </div>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Contact for Delivery</h1>
          <p className="text-muted-foreground">Call us to arrange delivery for your selected items</p>
        </div>

        {items.length === 0 ? (
          <Card className="max-w-md mx-auto">
            <CardContent className="text-center py-8">
              <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground">Add some items to your cart before contacting us.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Your Selected Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground ml-2">x{item.quantity}</span>
                      </div>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Estimated Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Our Sales Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Ready to complete your order? Our sales team will help you with delivery arrangements, 
                    pricing details, and answer any questions about your selected items.
                  </p>
                  
                  <Button 
                    onClick={handleCallSeller}
                    size="lg"
                    className="w-full max-w-sm h-14 text-lg font-semibold"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: (123) 456-7890
                  </Button>
                </div>

                <Separator />

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">sales@electricpro.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-muted-foreground">Mon - Fri: 8AM - 6PM</p>
                        <p className="text-muted-foreground">Sat: 9AM - 4PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Service Area</p>
                        <p className="text-muted-foreground">Local delivery available</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">What to mention when you call:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• The items in your cart and quantities needed</li>
                    <li>• Your delivery address and preferred timing</li>
                    <li>• Any specific installation or setup requirements</li>
                    <li>• Questions about warranty or technical specifications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;