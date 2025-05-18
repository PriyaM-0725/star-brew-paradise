
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    { id: "account", label: "Account & App" },
    { id: "rewards", label: "Rewards" },
    { id: "ordering", label: "Ordering" },
    { id: "products", label: "Products" },
    { id: "stores", label: "Stores & Facilities" },
    { id: "other", label: "Other" }
  ];
  
  // Sample FAQ items
  const faqItems = {
    account: [
      { 
        question: "How do I create an account?", 
        answer: "You can create an account on our website or mobile app by clicking on the 'Sign Up' button and following the prompts to enter your information." 
      },
      { 
        question: "How do I reset my password?", 
        answer: "To reset your password, click on the 'Forgot Password' link on the login page, enter your email address, and follow the instructions sent to your email." 
      },
      { 
        question: "How do I update my personal information?", 
        answer: "Log into your account, navigate to 'Account Settings' or 'Profile', and update your information there." 
      },
      { 
        question: "Can I have multiple accounts?", 
        answer: "We recommend having only one account per person to ensure all your rewards and purchase history are in one place." 
      }
    ],
    rewards: [
      { 
        question: "How do I earn Stars?", 
        answer: "You earn Stars by making purchases with your registered StarBrew Card or through the mobile app. You'll earn 2 Stars for every $1 spent." 
      },
      { 
        question: "What can I redeem with my Stars?", 
        answer: "You can redeem Stars for free drinks, food items, and merchandise. Different items require different amounts of Stars." 
      },
      { 
        question: "Do Stars expire?", 
        answer: "Yes, Stars expire 6 months after the month they are earned if you're a Green level member, and 12 months after for Gold level members." 
      },
      { 
        question: "How do I check my Star balance?", 
        answer: "You can check your Star balance on the mobile app or by logging into your account on our website." 
      }
    ],
    ordering: [
      { 
        question: "How do I place a mobile order?", 
        answer: "Open the StarBrew app, tap 'Order', select your preferred store, choose your items, and complete your purchase. You'll receive a notification when your order is ready." 
      },
      { 
        question: "Can I customize my drinks?", 
        answer: "Yes! When ordering through the app or in-store, you can customize your drink by selecting different milk options, syrups, toppings, and more." 
      },
      { 
        question: "How do I redeem a reward when ordering?", 
        answer: "When placing an order through the app, select the 'Redeem Reward' option at checkout. In-store, let your barista know before paying." 
      },
      { 
        question: "Can I order ahead for later pickup?", 
        answer: "Yes, you can schedule orders for later pickup through our mobile app. Select your items, then choose your pickup time at checkout." 
      }
    ],
    products: [
      { 
        question: "Are your products gluten-free/vegan/dairy-free?", 
        answer: "We offer various products that meet different dietary needs. Specific information about allergens and ingredients can be found on our menu boards, website, or mobile app." 
      },
      { 
        question: "Where do you source your coffee beans?", 
        answer: "We source our coffee beans from various coffee-growing regions worldwide, including Latin America, Africa, and Asia Pacific. We're committed to ethical sourcing practices." 
      },
      { 
        question: "Do you offer seasonal items?", 
        answer: "Yes, we offer seasonal beverages and food items throughout the year. These items are available for a limited time only." 
      },
      { 
        question: "How do I brew StarBrew coffee at home?", 
        answer: "We recommend using 2 tablespoons of ground coffee for every 6 ounces of water. Visit our brewing guides online for more detailed instructions based on your brewing method." 
      }
    ],
    stores: [
      { 
        question: "How do I find the nearest store?", 
        answer: "Use our Store Locator on our website or mobile app to find the nearest StarBrew location. You can filter by amenities like drive-thru, mobile order, etc." 
      },
      { 
        question: "What are your store hours?", 
        answer: "Store hours vary by location. Check our Store Locator or mobile app for specific store hours." 
      },
      { 
        question: "Do you offer free Wi-Fi?", 
        answer: "Yes, most of our stores offer complimentary Wi-Fi for our customers." 
      },
      { 
        question: "Can I host a meeting at your store?", 
        answer: "Our stores are open to everyone, but large groups may want to call ahead to ensure space availability. Some locations offer meeting room rentals." 
      }
    ],
    other: [
      { 
        question: "How do I apply for a job?", 
        answer: "Visit our Careers page to view and apply for available positions." 
      },
      { 
        question: "Do you offer catering services?", 
        answer: "Yes, we offer catering services for meetings and events. Contact your local store or visit our website for more information." 
      },
      { 
        question: "What is your sustainability policy?", 
        answer: "We're committed to reducing our environmental impact through various sustainability initiatives. Learn more on our Social Impact page." 
      },
      { 
        question: "How can I provide feedback?", 
        answer: "We value your feedback! You can share your experience through our mobile app, website, or by contacting our Customer Service team." 
      }
    ]
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find answers to our most commonly asked questions. Can't find what you're looking for?
          <Link to="/contact" className="text-starbucks-green hover:underline ml-1">Contact us</Link>.
        </p>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="search" 
            placeholder="Search frequently asked questions..." 
            className="pl-10"
          />
        </div>
        
        <Tabs defaultValue="account">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {faqCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>{category.label}</TabsTrigger>
            ))}
          </TabsList>
          
          {Object.keys(faqItems).map(categoryId => (
            <TabsContent key={categoryId} value={categoryId} className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems[categoryId as keyof typeof faqItems].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
          <p className="mb-6">Our customer service team is ready to help with any questions you may have.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/store-locator">Find a Store</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
