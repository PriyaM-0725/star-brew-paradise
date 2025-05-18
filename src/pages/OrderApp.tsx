
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, QrCode, Download, Coffee, Gift, Clock, Bell, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const OrderApp = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email && !phoneNumber) {
      toast({
        title: "Error",
        description: "Please enter your email or phone number.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Download link sent!",
      description: email 
        ? `We've sent a download link to ${email}` 
        : `We've sent a text message to ${phoneNumber}`,
    });
    
    setEmail("");
    setPhoneNumber("");
  };
  
  const appFeatures = [
    {
      icon: <Coffee className="h-8 w-8 text-starbucks-green" />,
      title: "Mobile Ordering",
      description: "Skip the line by ordering ahead from your favorite store."
    },
    {
      icon: <Gift className="h-8 w-8 text-starbucks-green" />,
      title: "Rewards Program",
      description: "Earn stars with every purchase and redeem for free drinks and food."
    },
    {
      icon: <Clock className="h-8 w-8 text-starbucks-green" />,
      title: "Order History",
      description: "Easily reorder your favorite items with just a few taps."
    },
    {
      icon: <Bell className="h-8 w-8 text-starbucks-green" />,
      title: "Personalized Offers",
      description: "Get exclusive deals and recommendations based on your preferences."
    },
    {
      icon: <MapPin className="h-8 w-8 text-starbucks-green" />,
      title: "Store Locator",
      description: "Find stores near you, view hours and available amenities."
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-starbucks-green mb-4">Order On The App</h1>
            <p className="text-lg text-gray-600 mb-6">
              Download the StarBrew app to order ahead, earn rewards, and more.
            </p>
            
            <div className="bg-starbucks-cream p-6 rounded-lg mb-8">
              <h2 className="font-semibold text-lg mb-3">Download Now</h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  App Store
                </Button>
                <Button className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Google Play
                </Button>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">Get a download link</h3>
                <form onSubmit={handleSendLink}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                    <div className="sm:col-span-2">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-3 py-2 border rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <Button type="submit">Send Link</Button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500 my-2">OR</div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-full px-3 py-2 border rounded-md"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <Button type="submit">Text Me</Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <QrCode className="h-12 w-12 text-starbucks-green" />
              <div>
                <p className="font-medium">Scan to download</p>
                <p className="text-sm text-gray-500">Use your phone camera to scan the QR code</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-starbucks-cream -z-10"></div>
            <div className="absolute -bottom-8 -right-3 w-36 h-36 rounded-full bg-starbucks-cream/50 -z-10"></div>
            
            <div className="relative border-8 border-gray-800 rounded-[3rem] p-2 bg-gray-800 shadow-xl max-w-[300px] mx-auto">
              <div className="rounded-[2.5rem] overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/499776696/photo/mobile-internet.jpg?s=612x612&w=0&k=20&c=AcKW0R9-s7m9bfoDFakejzbRLWHtyPZ_X0pj-Dynxw4="
                  alt="StarBrew mobile app"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-800 rounded-b-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">App Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {appFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 bg-starbucks-green/10 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-starbucks-cream rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Rewards You'll Love</h2>
              <p className="mb-6">
                Join StarBrew Rewards on the app to start earning Stars with every purchase. 
                Redeem your Stars for free drinks, food, and more!
              </p>
              <Button className="mb-4">Learn More About Rewards</Button>
              <p className="text-sm text-gray-600">
                Already a member? Sign in on the app to see your Stars and Rewards.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[25, 50, 150].map((stars, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center">
                  <div className="text-xl font-bold text-starbucks-green mb-2">{stars}★</div>
                  <p className="text-sm">
                    {stars === 25 ? "Customize your drink" : stars === 50 ? "Handcrafted drink" : "Lunch sandwich"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Is the app free to download?</h3>
                <p className="text-gray-600">
                  Yes! The StarBrew app is completely free to download and use on both iOS and Android devices.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How do I earn rewards through the app?</h3>
                <p className="text-gray-600">
                  Simply sign up for a StarBrew Rewards account and scan the app or pay with your registered card when making a purchase to earn Stars.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I pay through the app?</h3>
                <p className="text-gray-600">
                  Yes! You can load money onto your digital StarBrew Card in the app or connect a credit/debit card for convenient payment.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How does mobile ordering work?</h3>
                <p className="text-gray-600">
                  Browse the menu, customize your order, pay in the app, and choose your pickup location. Your order will be ready when you arrive!
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Need Help?</h3>
            <p className="mb-4">
              Having trouble with the app or have more questions? Our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1">
                <Phone className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button variant="outline" className="flex-1">
                View App Tutorials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderApp;
