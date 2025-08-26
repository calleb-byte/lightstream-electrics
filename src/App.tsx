import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Chandeliers from "./pages/Chandeliers";
import LEDLights from "./pages/LEDLights";
import Switches from "./pages/Switches";
import CircuitBreakers from "./pages/CircuitBreakers";
import ShowersHeaters from "./pages/ShowersHeaters";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chandeliers" element={<Chandeliers />} />
          <Route path="/led-lights" element={<LEDLights />} />
          <Route path="/switches" element={<Switches />} />
          <Route path="/circuit-breakers" element={<CircuitBreakers />} />
          <Route path="/showers-heaters" element={<ShowersHeaters />} />
          <Route path="/categories" element={<Categories />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
