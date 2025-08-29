import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, User, Calendar } from 'lucide-react';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  deliveryType: 'delivery' | 'pickup';
  address: string;
  city: string;
  zipCode: string;
  preferredDate: string;
  notes: string;
}

interface CheckoutFormProps {
  onClose?: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onClose }) => {
  const { state, clearCart } = useCart();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    deliveryType: 'delivery',
    address: '',
    city: '',
    zipCode: '',
    preferredDate: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: 'delivery' | 'pickup') => {
    setFormData(prev => ({
      ...prev,
      deliveryType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.deliveryType === 'delivery' && (!formData.address || !formData.city)) {
      toast({
        title: "Missing Address",
        description: "Please provide delivery address details.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create order object (you can send this to your local database)
      const orderData = {
        customer: formData,
        items: state.items,
        total: state.totalPrice,
        orderDate: new Date().toISOString(),
        orderId: `ORD-${Date.now()}`
      };

      console.log('Order Data:', orderData); // You can capture this for your local database

      toast({
        title: "Order Placed Successfully!",
        description: `Order #${orderData.orderId} has been submitted. You will receive a confirmation email shortly.`
      });

      clearCart();
      onClose?.();
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>${state.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Information Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Customer Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Delivery Options */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Delivery Option
              </Label>
              <Select value={formData.deliveryType} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select delivery option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delivery">Home Delivery</SelectItem>
                  <SelectItem value="pickup">Store Pickup</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Address Fields (show only for delivery) */}
            {formData.deliveryType === 'delivery' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Street address, apartment, suite, etc."
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="New York"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      placeholder="10001"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Preferred Date */}
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Preferred {formData.deliveryType === 'delivery' ? 'Delivery' : 'Pickup'} Date
              </Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Special Instructions */}
            <div className="space-y-2">
              <Label htmlFor="notes">Special Instructions</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Any special delivery instructions or notes..."
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full h-12 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing Order...' : `Place Order - $${state.totalPrice.toFixed(2)}`}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutForm;