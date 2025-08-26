import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        "Chandeliers",
        "LED Lights",
        "Wall Switches",
        "Circuit Breakers",
        "Showers & Heaters",
        "Light Control Sensors",
        "Electrical Tapes"
      ]
    },
    {
      title: "Customer Service",
      links: [
        "Contact Us",
        "FAQ",
        "Shipping Policy",
        "Return Policy",
        "Order Tracking",
        "Size Guide",
        "Installation Guide"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Blog",
        "Careers",
        "Press",
        "Wholesale",
        "Affiliate Program",
        "Safety Tips"
      ]
    }
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with <span className="text-accent">ElectricPro</span>
            </h3>
            <p className="text-gray-300 mb-8">
              Get the latest deals, safety tips, and electrical product updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="btn-hero whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Electric</span>
                <span className="text-accent">Pro</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for premium electrical products. From elegant chandeliers to industrial circuit breakers, we provide quality solutions for all your electrical needs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@electricpro.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span>1234 Electric Avenue<br />New York, NY 10001</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="hover:text-accent">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-accent">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-accent">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-accent">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 ElectricPro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;