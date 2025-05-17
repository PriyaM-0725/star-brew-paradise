
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Users, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-starbucks-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl mb-8">
              From a single store to a global brand, learn about our journey to provide the best coffee experience to customers around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/placeholder.svg" 
                alt="Coffee beans being roasted" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4 text-starbucks-brown">Our Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                To inspire and nurture the human spirit – one person, one cup, and one neighborhood at a time.
              </p>
              <p className="mb-6 text-gray-600">
                Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better. It was true when the first StarBrew opened in 1971, and it's just as true today.
              </p>
              <p className="text-gray-600">
                Back then, we were a roaster and retailer of whole bean and ground coffee, tea and spices. Today, we connect with millions of customers every day with exceptional products and more than 30,000 retail stores in 80 markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Coffee className="w-10 h-10 text-starbucks-green" />}
              title="Quality Coffee"
              description="We're passionate about ethically sourcing the finest coffee beans, roasting them with great care, and improving the lives of people who grow them."
            />
            <ValueCard 
              icon={<Users className="w-10 h-10 text-starbucks-green" />}
              title="Our Partners"
              description="We call our employees partners because we are all partners in shared success. We treat each other with respect and dignity."
            />
            <ValueCard 
              icon={<Globe className="w-10 h-10 text-starbucks-green" />}
              title="Environmental Stewardship"
              description="We are committed to a role of environmental leadership in all facets of our business, from coffee farming to store design."
            />
            <ValueCard 
              icon={<Heart className="w-10 h-10 text-starbucks-green" />}
              title="Community Involvement"
              description="Every store is part of a community, and we take our responsibility to be good neighbors seriously."
            />
          </div>
        </div>
      </section>

      {/* Coffee Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Coffee Story</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <StoryStep
                number={1}
                title="Sourcing"
                description="It starts with the beans. We travel the world in search of the finest coffee beans and spend countless hours roasting and blending to create the perfect cup."
                imgSrc="/placeholder.svg"
                alt="Coffee farm"
              />
              
              <StoryStep
                number={2}
                title="Roasting"
                description="Our coffee masters bring out the balance and rich flavor of our beans through the signature StarBrew Roast™ process."
                imgSrc="/placeholder.svg"
                alt="Coffee roasting process"
                reverse
              />
              
              <StoryStep
                number={3}
                title="Brewing"
                description="Our partners are trained in the art of brewing to ensure that every cup of coffee we serve is perfect, from the first sip to the last."
                imgSrc="/placeholder.svg"
                alt="Barista brewing coffee"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-starbucks-cream">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
            <p className="text-lg mb-8">
              We've always believed in serving the best coffee possible. It's our goal for all of our coffee to be grown under the highest standards of quality, using ethical sourcing practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Ethical Sourcing</h3>
                <p className="text-gray-600 text-sm">We work with farmers who grow our coffee to ensure quality, sustainability, and positive impact.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Environmental Impact</h3>
                <p className="text-gray-600 text-sm">We're committed to significantly reducing our environmental footprint through energy conservation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Community Service</h3>
                <p className="text-gray-600 text-sm">We believe in strengthening communities by bringing people together with community service.</p>
              </div>
            </div>
            <Button className="bg-starbucks-green hover:bg-starbucks-darkGreen">
              Learn More About Our Efforts
            </Button>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <img 
                src="/placeholder.svg" 
                alt="StarBrew team members" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="mb-6 text-gray-600">
                At StarBrew, we hire passionate people who love coffee and want to create meaningful connections with our customers and communities. We're looking for partners who are ready to make a positive impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/careers">
                  <Button className="bg-starbucks-green hover:bg-starbucks-darkGreen">
                    Explore Careers
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-starbucks-green text-starbucks-green hover:bg-starbucks-green hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper components
const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StoryStep = ({ 
  number, 
  title, 
  description, 
  imgSrc, 
  alt, 
  reverse = false 
}: { 
  number: number; 
  title: string; 
  description: string; 
  imgSrc: string; 
  alt: string; 
  reverse?: boolean 
}) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
    <div className="md:w-1/3">
      <div className="relative">
        <img src={imgSrc} alt={alt} className="rounded-lg shadow-md" />
        <div className="absolute -top-4 -left-4 w-10 h-10 bg-starbucks-green text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
    </div>
    <div className="md:w-2/3">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;
