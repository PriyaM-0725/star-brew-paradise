
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-8">Our Company</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            StarBrew Coffee is more than just a coffee shop—it's an experience crafted with passion
            and dedication. Founded in 2010, we've grown from a single location to dozens of stores
            across the nation, all while maintaining our commitment to quality and sustainability.
          </p>
          
          <h2 className="text-2xl font-semibold text-starbucks-brown mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            To inspire and nurture the human spirit – one person, one cup, and one neighborhood at a time.
            We are committed to ethically sourcing and roasting the highest-quality arabica coffee in the world.
          </p>
          
          <h2 className="text-2xl font-semibold text-starbucks-brown mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Creating a culture of warmth and belonging, where everyone is welcome.</li>
            <li>Acting with courage, challenging the status quo and finding new ways to grow our company.</li>
            <li>Being present, connecting with transparency, dignity and respect.</li>
            <li>Delivering our very best in all we do, holding ourselves accountable for results.</li>
          </ul>
          
          <div className="mt-12 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" 
              alt="StarBrew Coffee Team" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">Our dedicated team working together to bring you the perfect cup</p>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Explore More About Us</h3>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <Link to="/careers">Join Our Team</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/social-impact">Our Social Impact</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/stories">Stories & News</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
