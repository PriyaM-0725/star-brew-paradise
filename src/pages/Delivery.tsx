
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon, MapPin, Search, Truck } from "lucide-react";

const Delivery = () => {
  const deliveryPartners = [
    {
      name: "QuickEats",
      logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=100&auto=format&fit=crop",
      description: "Fast delivery, wide coverage area",
      deliveryTime: "20-35 min",
      fee: "$1.99 - $3.99"
    },
    {
      name: "FoodRush",
      logo: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=100&auto=format&fit=crop",
      description: "Premium service, exclusive offers",
      deliveryTime: "25-40 min",
      fee: "$2.99 - $4.99"
    },
    {
      name: "MealDash",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=100&auto=format&fit=crop",
      description: "Reliable delivery, real-time tracking",
      deliveryTime: "15-30 min",
      fee: "$1.49 - $3.49"
    }
  ];
  
  const faqs = [
    {
      question: "How does StarBrew delivery work?",
      answer: "We partner with several delivery services to bring StarBrew directly to you. Simply place your order through our app or website, or use one of our delivery partners' platforms."
    },
    {
      question: "What items are available for delivery?",
      answer: "Most of our menu items are available for delivery, including hot and cold beverages, food items, and bottled drinks. Some items may not be available for delivery to ensure quality."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times typically range from 15-45 minutes depending on your distance from the store, time of day, and order volume. You'll see an estimated delivery time before completing your order."
    },
    {
      question: "Can I earn Stars (rewards) on delivery orders?",
      answer: "Yes! When ordering through the StarBrew app or website, you'll earn Stars just like you would on in-store purchases. Orders through third-party delivery apps follow their respective rewards programs."
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-starbucks-green mb-4">StarBrew Delivery</h1>
            <p className="text-lg text-gray-600 mb-6">
              Enjoy your favorite StarBrew coffee and treats delivered right to your door.
              We've partnered with leading delivery services to make it easy to get your coffee fix.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-4">Find Delivery Near You</h2>
              <div className="relative mb-4">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Enter your address" 
                  className="pl-10"
                />
              </div>
              <Button className="w-full">Check Availability</Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck className="h-5 w-5 text-starbucks-green" />
              <span>Delivery available in select markets</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-starbucks-green/20 rounded-full" />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-starbucks-green/10 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop" 
              alt="StarBrew Coffee Delivery" 
              className="rounded-xl shadow-xl z-10 relative"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How Delivery Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-starbucks-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8h1a4 4 0 110 8h-1"></path>
                    <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Order</h3>
                <p className="text-gray-600">
                  Browse our menu and place your order through the StarBrew app, website, or one of our delivery partners.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-starbucks-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Prepare</h3>
                <p className="text-gray-600">
                  Your local StarBrew baristas will carefully prepare your order just like in-store.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-starbucks-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-starbucks-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deliver</h3>
                <p className="text-gray-600">
                  A delivery partner will transport your order directly to your specified location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Delivery Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryPartners.map((partner, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Delivery Time:</span>
                      <span className="font-medium">{partner.deliveryTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Delivery Fee:</span>
                      <span className="font-medium">{partner.fee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              *Delivery times and fees may vary based on location, order size, and time of day.
            </p>
          </div>
        </div>
        
        <div className="bg-starbucks-cream rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Delivery Benefits</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckIcon className="h-6 w-6 text-starbucks-green mr-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Convenience</h3>
                    <p className="text-gray-600 text-sm">Enjoy your favorite StarBrew items without leaving home or office</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckIcon className="h-6 w-6 text-starbucks-green mr-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Same Great Quality</h3>
                    <p className="text-gray-600 text-sm">Our delivery partners use specialized equipment to maintain temperature and quality</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckIcon className="h-6 w-6 text-starbucks-green mr-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Earn Rewards</h3>
                    <p className="text-gray-600 text-sm">Continue earning Stars on eligible delivery orders placed through our app or website</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckIcon className="h-6 w-6 text-starbucks-green mr-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Group Orders</h3>
                    <p className="text-gray-600 text-sm">Perfect for office meetings or gatherings with family and friends</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500&auto=format&fit=crop" 
                alt="StarBrew Coffee Delivery Benefits" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="personal" className="mb-16">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal Delivery</TabsTrigger>
            <TabsTrigger value="catering">Group & Catering</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=400&auto=format&fit=crop" 
                  alt="Personal Delivery" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Personal Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Get your favorite StarBrew beverages and food delivered right to your door.
                  Perfect for when you need your coffee fix but can't make it to the store.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">How to Order</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Open the StarBrew app or visit our website</li>
                    <li>Select the "Delivery" option</li>
                    <li>Enter your delivery address</li>
                    <li>Browse the menu and customize your order</li>
                    <li>Check out and track your delivery</li>
                  </ol>
                </div>
                <Button>Place a Delivery Order</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="catering" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Group Orders & Catering</h3>
                <p className="text-gray-600 mb-4">
                  Planning a meeting or event? Our catering service brings the StarBrew experience to your 
                  office or event space with bulk orders of coffee, pastries, and more.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Catering Options</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Coffee Traveler (96 fl oz, serves 12)</li>
                    <li>• Pastry Platters (assortments of 10, 20, or 30)</li>
                    <li>• Sandwich Platters</li>
                    <li>• Boxed Lunches</li>
                    <li>• Custom Orders Available</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  *Please place catering orders at least 24 hours in advance. Minimums may apply.
                </p>
                <Button>Contact for Catering</Button>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=400&auto=format&fit=crop" 
                  alt="StarBrew Catering" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a href="/faq">View More FAQs</a>
            </Button>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Get your StarBrew favorites delivered straight to your door.
            Check if delivery is available in your area.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Enter your delivery address" 
              className="pl-10 pr-32"
            />
            <Button className="absolute right-0 top-0 rounded-l-none">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
