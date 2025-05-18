
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Orders from "@/pages/Orders";
import Profile from "@/pages/Profile";
import Rewards from "@/pages/Rewards";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

// Footer-related pages
import AboutCompany from "@/pages/AboutCompany";
import Careers from "@/pages/Careers";
import SocialImpact from "@/pages/SocialImpact";
import Stories from "@/pages/Stories";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import StoreLocator from "@/pages/StoreLocator";
import GiftCards from "@/pages/GiftCards";
import OrderApp from "@/pages/OrderApp";
import Delivery from "@/pages/Delivery";
import OrderHistory from "@/pages/OrderHistory";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Accessibility from "@/pages/Accessibility";
import CookiePreferences from "@/pages/CookiePreferences";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/about" element={<About />} />
                  
                  {/* About Us Section */}
                  <Route path="/about" element={<AboutCompany />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/social-impact" element={<SocialImpact />} />
                  <Route path="/stories" element={<Stories />} />
                  
                  {/* Customer Service Section */}
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/store-locator" element={<StoreLocator />} />
                  <Route path="/gift-cards" element={<GiftCards />} />
                  
                  {/* Orders & Rewards Section */}
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/order" element={<OrderApp />} />
                  <Route path="/delivery" element={<Delivery />} />
                  <Route path="/order-history" element={<OrderHistory />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/accessibility" element={<Accessibility />} />
                  <Route path="/cookie-preferences" element={<CookiePreferences />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
