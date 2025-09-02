import React from 'react';
import { Link } from 'react-router-dom';
import OrderForm from '@/components/OrderForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Checkout = () => {
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order details below</p>
        </div>

        <OrderForm />
      </div>
    </div>
  );
};

export default Checkout;