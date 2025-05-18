
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const GiftCards = () => {
  const digitalCardDesigns = [
    {
      id: "thank-you",
      name: "Thank You",
      image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=300&auto=format&fit=crop",
      description: "Express your gratitude with this colorful design."
    },
    {
      id: "birthday",
      name: "Birthday",
      image: "https://images.unsplash.com/photo-1584712704566-03e71a9263bf?q=80&w=300&auto=format&fit=crop",
      description: "Celebrate someone's special day."
    },
    {
      id: "congratulations",
      name: "Congratulations",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=300&auto=format&fit=crop",
      description: "Celebrate an achievement or milestone."
    },
    {
      id: "holiday",
      name: "Holiday",
      image: "https://images.unsplash.com/photo-1606830733708-4313ffb842ad?q=80&w=300&auto=format&fit=crop",
      description: "Perfect for seasonal celebrations."
    },
    {
      id: "classic",
      name: "Classic",
      image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=300&auto=format&fit=crop",
      description: "Our timeless StarBrew design."
    },
    {
      id: "friendship",
      name: "Friendship",
      image: "https://images.unsplash.com/photo-1520013573795-38516d2661e4?q=80&w=300&auto=format&fit=crop",
      description: "Show appreciation for a friend."
    }
  ];
  
  const amountOptions = ["$10", "$25", "$50", "$75", "$100", "Custom"];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-4">Gift Cards</h1>
        <p className="text-lg text-gray-600 mb-8">
          Share the gift of StarBrew. Our gift cards make perfect presents for coffee lovers.
        </p>
        
        <Tabs defaultValue="egift" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="egift">Digital eGift</TabsTrigger>
            <TabsTrigger value="physical">Physical Gift Card</TabsTrigger>
          </TabsList>
          
          <TabsContent value="egift" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Select a Design</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {digitalCardDesigns.map(design => (
                      <div 
                        key={design.id} 
                        className="border rounded-lg p-2 cursor-pointer hover:border-starbucks-green transition-colors"
                      >
                        <div className="aspect-w-16 aspect-h-9 mb-2">
                          <img 
                            src={design.image} 
                            alt={design.name}
                            className="rounded w-full h-32 object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-center">{design.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Choose an Amount</h2>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {amountOptions.map(amount => (
                      <Button 
                        key={amount} 
                        variant={amount === "$25" ? "default" : "outline"}
                        className="w-full"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                  
                  {/* Custom amount input - displayed conditionally in a real app */}
                  <div className="mt-4">
                    <Label htmlFor="custom-amount">Custom Amount ($10-$100)</Label>
                    <Input 
                      id="custom-amount"
                      type="number" 
                      min="10"
                      max="100"
                      placeholder="Enter amount"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Recipient Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="recipient-name">To</Label>
                        <Input 
                          id="recipient-name"
                          placeholder="Recipient's Name" 
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="recipient-email">Email</Label>
                        <Input 
                          id="recipient-email"
                          type="email" 
                          placeholder="Recipient's Email" 
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="sender-name">From</Label>
                      <Input 
                        id="sender-name"
                        placeholder="Your Name" 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <textarea 
                        id="message"
                        placeholder="Add a personal message..." 
                        className="w-full border rounded-md p-2 mt-1 h-24"
                      ></textarea>
                    </div>
                    <div>
                      <Label htmlFor="delivery-date">Delivery Date</Label>
                      <Input 
                        id="delivery-date"
                        type="date" 
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
                
                <Button size="lg">Continue to Payment</Button>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-20">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Design</span>
                          <span>Birthday</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Amount</span>
                          <span>$25.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Recipient</span>
                          <span>John Doe</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Date</span>
                          <span>Today</span>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4 mb-6">
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>$25.00</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <p className="mb-2">StarBrew Gift Cards:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Never expire</li>
                          <li>Can be registered for protection</li>
                          <li>Can be used for purchases in-store or online</li>
                          <li>Are reloadable in-store or via the StarBrew app</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="physical" className="mt-6">
            <div className="text-center py-12 px-4 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Physical Gift Cards</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Purchase physical gift cards in any StarBrew store location or from select retailers.
                Cards are available in amounts from $10 to $500.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">In Store</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Visit any StarBrew location to purchase a physical gift card.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="/store-locator">Find a Store</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Corporate Orders</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Bulk gift card orders for your team or clients.
                    </p>
                    <Button variant="outline">Contact Sales</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Retailers</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Available at select grocery and retail stores.
                    </p>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select retailer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="target">Target</SelectItem>
                        <SelectItem value="walmart">Walmart</SelectItem>
                        <SelectItem value="kroger">Kroger</SelectItem>
                        <SelectItem value="cvs">CVS</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Check Balance</h3>
              <p className="text-gray-600 mb-4">
                Check the remaining balance on your StarBrew Gift Card.
              </p>
              <div className="space-y-3">
                <Input placeholder="Card Number" />
                <Input placeholder="Security Code" />
                <Button className="w-full">Check Balance</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Register a Card</h3>
              <p className="text-gray-600 mb-4">
                Protect your balance and earn rewards by registering your card.
              </p>
              <Button className="w-full">Register Card</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Reload a Card</h3>
              <p className="text-gray-600 mb-4">
                Add value to your existing StarBrew Card.
              </p>
              <Button className="w-full">Reload Card</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-starbucks-cream p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Gift Card Terms & Conditions</h3>
          <p className="text-sm text-gray-600 mb-4">
            StarBrew Cards are subject to terms and conditions. Cards do not expire and have no
            dormancy fees. Card balance may be protected if registered. Lost or stolen cards cannot
            be replaced without registration. For full terms and conditions, please visit our website
            or ask a barista.
          </p>
          <Button variant="outline" size="sm">View Full Terms</Button>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
