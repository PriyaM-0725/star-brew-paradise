
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer main sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <FooterSection title="About Us">
            <FooterLink to="/about">Our Company</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/social-impact">Social Impact</FooterLink>
            <FooterLink to="/stories">Stories and News</FooterLink>
          </FooterSection>
          
          <FooterSection title="Customer Service">
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/store-locator">Find a Store</FooterLink>
            <FooterLink to="/gift-cards">Gift Cards</FooterLink>
          </FooterSection>
          
          <FooterSection title="Orders & Rewards">
            <FooterLink to="/rewards">Rewards</FooterLink>
            <FooterLink to="/order">Order on the App</FooterLink>
            <FooterLink to="/delivery">Delivery</FooterLink>
            <FooterLink to="/order-history">Order History</FooterLink>
          </FooterSection>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <SocialIcon Icon={Facebook} label="Facebook" />
              <SocialIcon Icon={Twitter} label="Twitter" />
              <SocialIcon Icon={Instagram} label="Instagram" />
              <SocialIcon Icon={Linkedin} label="LinkedIn" />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Sign up for our newsletter to get updates on new products and special offers.
            </p>
          </div>
        </div>
        
        {/* Terms and copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <FooterSmallLink to="/privacy">Privacy Policy</FooterSmallLink>
              <FooterSmallLink to="/terms">Terms of Use</FooterSmallLink>
              <FooterSmallLink to="/accessibility">Accessibility</FooterSmallLink>
              <FooterSmallLink to="/cookie-preferences">Cookie Preferences</FooterSmallLink>
            </div>
            <div className="text-sm text-gray-500">
              © 2023 StarBrew Coffee Company. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components for the footer
const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">{children}</ul>
  </div>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-gray-600 hover:text-starbucks-green transition-colors">
      {children}
    </Link>
  </li>
);

const FooterSmallLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-sm text-gray-600 hover:text-starbucks-green transition-colors">
    {children}
  </Link>
);

const SocialIcon = ({ Icon, label }: { Icon: any; label: string }) => (
  <a
    href="#"
    aria-label={label}
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-starbucks-green hover:text-white transition-colors"
  >
    <Icon size={20} />
  </a>
);

export default Footer;
