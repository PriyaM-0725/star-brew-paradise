
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckIcon, DownloadIcon, ShieldCheckIcon, StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

const OrderApp = () => {
  const features = [
    {
      title: "Mobile Ordering",
      description: "Order ahead and skip the line",
      icon: (
        <svg className="w-8 h-8 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: "Customize Everything",
      description: "Make your drink exactly how you want it",
      icon: (
        <svg className="w-8 h-8 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      )
    },
    {
      title: "Pay & Earn Rewards",
      description: "Earn Stars with every purchase",
      icon: <StarIcon className="w-8 h-8 text-starbucks-green" />
    },
    {
      title: "Store Locator",
      description: "Find stores near you with amenities",
      icon: (
        <svg className="w-8 h-8 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    }
  ];
  
  const faqs = [
    {
      question: "How do I download the app?",
      answer: "The StarBrew app is available for free on both iOS and Android devices. Simply visit the App Store or Google Play Store, search for 'StarBrew', and download."
    },
    {
      question: "Is the mobile order feature available at all locations?",
      answer: "Mobile ordering is available at most StarBrew locations. Use the store locator feature in the app to find stores that offer mobile ordering."
    },
    {
      question: "How does mobile ordering work?",
      answer: "Browse the menu, customize your items, and place your order through the app. Choose your preferred pickup store, and the app will provide an estimated wait time. When your order is ready, you'll receive a notification."
    },
    {
      question: "Can I pay with the app in-store?",
      answer: "Yes! You can scan your app at the register to pay with a linked payment method or your preloaded StarBrew Card balance."
    },
    {
      question: "How do I earn rewards using the app?",
      answer: "Every purchase made through the app or by scanning your app at the register earns Stars. You can redeem these Stars for free drinks, food items, and more."
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-starbucks-green mb-4">Order on the StarBrew App</h1>
            <p className="text-lg text-gray-600 mb-6">
              Download the StarBrew app today and enjoy the convenience of ordering ahead, 
              customizing your favorites, and earning rewards with every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="flex items-center gap-2">
                <DownloadIcon className="h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <DownloadIcon className="h-5 w-5" />
                Download for Android
              </Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <ShieldCheckIcon className="h-5 w-5 text-starbucks-green" />
              <span>Secure, contactless ordering and payment</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-starbucks-green/20 rounded-full" />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-starbucks-green/10 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1598449356475-b9f71db7d847?q=80&w=600&auto=format&fit=crop" 
              alt="StarBrew Mobile App" 
              className="rounded-xl shadow-xl z-10 relative"
            />
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-10">Why Download Our App?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-starbucks-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-starbucks-cream rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-8 h-8 bg-starbucks-green rounded-full flex items-center justify-center text-white font-bold mr-3 shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Download & Register</h3>
                    <p className="text-gray-600 text-sm">Create an account and link your payment method</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 bg-starbucks-green rounded-full flex items-center justify-center text-white font-bold mr-3 shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Browse & Customize</h3>
                    <p className="text-gray-600 text-sm">Explore the menu and customize your order</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 bg-starbucks-green rounded-full flex items-center justify-center text-white font-bold mr-3 shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Place Your Order</h3>
                    <p className="text-gray-600 text-sm">Select pickup location and place your order</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 bg-starbucks-green rounded-full flex items-center justify-center text-white font-bold mr-3 shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Skip the Line</h3>
                    <p className="text-gray-600 text-sm">Receive notification when your order is ready</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=400&auto=format&fit=crop" 
                alt="Mobile Order Demo" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">App Overview</TabsTrigger>
            <TabsTrigger value="ordering">Mobile Ordering</TabsTrigger>
            <TabsTrigger value="payment">Payment Options</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Everything at Your Fingertips</h3>
                <p className="text-gray-600 mb-4">
                  The StarBrew app brings the full coffee shop experience right to your mobile device.
                  Manage your account, track rewards, and discover new seasonal offerings all in one place.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Easy navigation and intuitive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Save favorite orders for quick reordering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Explore the full menu with nutritional information</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=400&auto=format&fit=crop" 
                  alt="StarBrew App Interface" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ordering" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1593067215971-7f6aa8920598?q=80&w=400&auto=format&fit=crop" 
                  alt="Mobile Ordering" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Skip the Line with Mobile Ordering</h3>
                <p className="text-gray-600 mb-4">
                  Place your order ahead of time and pick it up without waiting in line.
                  Customize your drink just how you like it, down to the last detail.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Schedule orders for later pickup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Real-time order status updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Extensive customization options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Quick reorder your favorite items</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="payment" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Easy, Contactless Payment</h3>
                <p className="text-gray-600 mb-4">
                  Pay quickly and securely with the StarBrew app. Link your credit card,
                  debit card, or bank account for seamless payments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Multiple payment methods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Auto-reload your StarBrew Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Split payment between methods</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop" 
                  alt="Mobile Payment" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="rewards" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=400&auto=format&fit=crop" 
                  alt="Rewards Program" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Earn & Redeem Rewards</h3>
                <p className="text-gray-600 mb-4">
                  Earn Stars with every purchase and redeem them for free drinks, food items, and merchandise.
                  Track your rewards progress directly in the app.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>2 Stars for every $1 spent</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Birthday rewards and special offers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Free refills for Gold members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-starbucks-green" />
                    <span>Double Star Days and bonus promotions</span>
                  </li>
                </ul>
                <Button className="mt-4" asChild>
                  <Link to="/rewards">Learn About Rewards</Link>
                </Button>
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
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Download the StarBrew app today and enjoy a better coffee experience.
            Order ahead, earn rewards, and discover new favorites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <DownloadIcon className="h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <DownloadIcon className="h-5 w-5" />
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderApp;
