
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-starbucks-green p-2 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-full h-full text-white">
              <path
                fill="currentColor"
                d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M14.71,18.937
                c-1.487,0.498-4.023,0.93-6.422-0.299c-1.836-0.944-2.542-2.713-2.542-2.713s1.364,1.487,4.768,2.074
                c3.404,0.586,6.235-0.677,6.235-0.677S16.197,18.439,14.71,18.937z M13.077,16.285c-1.115,0-2.021-0.905-2.021-2.021
                c0-1.115,0.905-2.021,2.021-2.021c1.116,0,2.021,0.905,2.021,2.021C15.098,15.379,14.193,16.285,13.077,16.285z
                M15.186,9.412c0.778-1.27,0.753-2.708,0.753-2.708s-1.477,0.548-2.398,1.942c-0.922,1.394-0.778,3.044-0.778,3.044
                S14.408,10.683,15.186,9.412z M12.458,14.744c0,0-0.958-0.125-0.958-0.906c0-0.78,0.879-1.058,1.344-1.058
                c0.465,0,1.234,0.308,1.234,0.906C14.078,14.286,13.263,14.744,12.458,14.744z"
              />
            </svg>
          </div>
          <span className="ml-2 text-xl font-bold text-starbucks-green">StarBrew</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/rewards">Rewards</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <User size={18} />
              <span>Sign in</span>
            </Button>
          </Link>
          <Link to="/cart">
            <Button className="bg-starbucks-green hover:bg-starbucks-darkGreen flex items-center gap-2">
              <ShoppingBag size={18} />
              <span>Cart</span>
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-starbucks-green"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</MobileNavLink>
            <MobileNavLink to="/rewards" onClick={() => setIsMenuOpen(false)}>Rewards</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
          </nav>
          <div className="mt-4 flex flex-col space-y-3">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center">Sign in</Button>
            </Link>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full justify-center bg-starbucks-green hover:bg-starbucks-darkGreen">
                Cart
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

// Navigation link components
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-starbucks-brown hover:text-starbucks-green transition-colors font-medium">
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link 
    to={to}
    className="text-starbucks-brown hover:text-starbucks-green transition-colors py-2 font-medium text-lg"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
