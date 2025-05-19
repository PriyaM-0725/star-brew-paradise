
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Gift, Mail, CreditCard } from "lucide-react";
import { formatPrice } from "@/utils/format";
import { useToast } from "@/components/ui/use-toast";
import { 
  GiftCardDesign, 
  getGiftCardDesigns,
  purchaseGiftCard,
  checkGiftCardBalance
} from "@/services/gift-cards";

const GiftCards = () => {
  const { toast } = useToast();
  const [selectedCard, setSelectedCard] = useState("classic");
  const [amount, setAmount] = useState(25);
  const [deliveryMethod, setDeliveryMethod] = useState("email");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cardDesigns, setCardDesigns] = useState<GiftCardDesign[]>([
    { id: "classic", name: "Classic Green", image: "https://t4.ftcdn.net/jpg/14/30/14/67/360_F_1430146760_H8vb7nfrV62UZesTWUXxoBoVPt2dY2iu.jpg", previewImage: "" },
    { id: "birthday", name: "Birthday", image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/happy-birthday-design-with-balloon-template-41099c530dc9192cf72d3c30811aaa75_screen.jpg?ts=1634547574", previewImage: "" },
    { id: "thankyou", name: "Thank You", image: "https://ecardsystems.com/wp-content/uploads/2019/06/GCH756_Thank_You_Gift_Card_Holder.jpg", previewImage: "" },
    { id: "holiday", name: "Holiday", image: "https://m.media-amazon.com/images/I/81oChyQ4BgL._AC_UF894,1000_QL80_.jpg", previewImage: "" }
  ]);
  
  // For balance check form
  const [cardNumber, setCardNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [isCheckingBalance, setIsCheckingBalance] = useState(false);
  
  const predefinedAmounts = [15, 25, 50, 100];
  
  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const designs = await getGiftCardDesigns();
        if (designs.length > 0) {
          setCardDesigns(designs);
          setSelectedCard(designs[0].id);
        }
      } catch (error) {
        console.error("Error fetching gift card designs:", error);
      }
    };
    
    // Uncomment this when API is ready
    // fetchDesigns();
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recipientName || !recipientEmail || !senderName) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await purchaseGiftCard({
        design: selectedCard,
        amount,
        recipientName,
        recipientEmail,
        senderName,
        message
      });
      
      toast({
        title: "Gift card purchased!",
        description: `Your ${formatPrice(amount)} gift card will be sent to ${recipientName}.`,
      });
      
      // Reset form
      setRecipientName("");
      setRecipientEmail("");
      setSenderName("");
      setMessage("");
    } catch (error) {
      console.error("Error purchasing gift card:", error);
      toast({
        title: "Purchase failed",
        description: "There was a problem processing your gift card. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCheckBalance = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cardNumber || !securityCode) {
      toast({
        title: "Missing information",
        description: "Please enter both card number and security code.",
        variant: "destructive"
      });
      return;
    }
    
    setIsCheckingBalance(true);
    
    try {
      const result = await checkGiftCardBalance(cardNumber, securityCode);
      toast({
        title: "Card Balance",
        description: `Your card balance is ${formatPrice(result.balance)}`,
      });
    } catch (error) {
      console.error("Error checking gift card balance:", error);
      toast({
        title: "Balance check failed",
        description: "We couldn't find that gift card. Please check the number and security code.",
        variant: "destructive"
      });
    } finally {
      setIsCheckingBalance(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-4">StarBrew Gift Cards</h1>
        <p className="text-lg text-gray-600 mb-8">
          Send the gift of StarBrew to friends and family. Perfect for any occasion.
        </p>
        
        <Tabs defaultValue="buy" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy a Gift Card</TabsTrigger>
            <TabsTrigger value="check">Check Balance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">1. Choose a Design</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {cardDesigns.map((card) => (
                          <div 
                            key={card.id}
                            className={`border rounded-lg p-2 cursor-pointer transition-all ${selectedCard === card.id ? 'ring-2 ring-starbucks-green' : ''}`}
                            onClick={() => setSelectedCard(card.id)}
                          >
                            <img 
                              src={card.image} 
                              alt={card.name}
                              className="w-full h-32 object-cover rounded-md mb-2"
                            />
                            <p className="text-center font-medium">{card.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-4">2. Select Amount</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {predefinedAmounts.map((value) => (
                          <Button 
                            key={value}
                            type="button"
                            variant={amount === value ? "default" : "outline"} 
                            className={amount === value ? "bg-starbucks-green hover:bg-starbucks-green" : ""}
                            onClick={() => setAmount(value)}
                          >
                            {formatPrice(value)}
                          </Button>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Label htmlFor="custom-amount">Custom Amount:</Label>
                        <Input
                          id="custom-amount"
                          type="number"
                          min="5"
                          max="500"
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                          className="max-w-[150px]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-4">3. Delivery Method</h2>
                      <RadioGroup 
                        value={deliveryMethod} 
                        onValueChange={setDeliveryMethod}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <div className={`flex items-start space-x-3 border rounded-lg p-4 ${deliveryMethod === 'email' ? 'ring-2 ring-starbucks-green' : ''}`}>
                          <RadioGroupItem value="email" id="email" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="email" className="text-base font-medium flex items-center gap-2">
                              <Mail className="h-5 w-5" />
                              Email Delivery
                            </Label>
                            <p className="text-sm text-gray-500">
                              Send instantly to any email address. Includes a personalized message.
                            </p>
                          </div>
                        </div>
                        
                        <div className={`flex items-start space-x-3 border rounded-lg p-4 ${deliveryMethod === 'physical' ? 'ring-2 ring-starbucks-green' : ''}`}>
                          <RadioGroupItem value="physical" id="physical" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="physical" className="text-base font-medium flex items-center gap-2">
                              <Gift className="h-5 w-5" />
                              Physical Card
                            </Label>
                            <p className="text-sm text-gray-500">
                              Ship a physical gift card to any address. Additional shipping fees may apply.
                            </p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold mb-4">4. Recipient Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="recipient-name">Recipient Name*</Label>
                            <Input 
                              id="recipient-name" 
                              value={recipientName}
                              onChange={(e) => setRecipientName(e.target.value)}
                              required
                              disabled={isLoading}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="recipient-email">Recipient Email*</Label>
                            <Input 
                              id="recipient-email" 
                              type="email"
                              value={recipientEmail}
                              onChange={(e) => setRecipientEmail(e.target.value)}
                              required
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="sender-name">From*</Label>
                            <Input 
                              id="sender-name" 
                              value={senderName}
                              onChange={(e) => setSenderName(e.target.value)}
                              required
                              disabled={isLoading}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="message">Personal Message (Optional)</Label>
                            <Input 
                              id="message" 
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <p className="text-lg font-medium">Total:</p>
                          <p className="text-sm text-gray-500">
                            {deliveryMethod === "physical" ? "Plus shipping & handling" : ""}
                          </p>
                        </div>
                        <p className="text-2xl font-bold">{formatPrice(amount)}</p>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto" 
                        size="lg"
                        disabled={isLoading}
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        {isLoading ? "Processing..." : "Purchase Gift Card"}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="check">
            <Card>
              <CardContent className="p-6">
                <div className="max-w-md mx-auto">
                  <h2 className="text-xl font-semibold mb-4">Check Gift Card Balance</h2>
                  
                  <form onSubmit={handleCheckBalance}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="card-number">Gift Card Number</Label>
                        <Input 
                          id="card-number" 
                          placeholder="Enter 16-digit card number"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          disabled={isCheckingBalance}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="security-code">Security Code</Label>
                        <Input 
                          id="security-code" 
                          type="password" 
                          placeholder="Enter 8-digit security code"
                          value={securityCode}
                          onChange={(e) => setSecurityCode(e.target.value)}
                          disabled={isCheckingBalance}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isCheckingBalance}
                      >
                        {isCheckingBalance ? "Checking..." : "Check Balance"}
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Gift Card Help & Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h3 className="font-medium mb-2">Terms & Conditions</h3>
              <p className="text-sm text-gray-600">
                StarBrew gift cards are redeemable at participating stores. Cards cannot be redeemed for cash unless required by law.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Lost or Stolen Cards</h3>
              <p className="text-sm text-gray-600">
                Protect your StarBrew Card like cash. If lost or stolen, the remaining balance can only be replaced with proof of purchase.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Expiration</h3>
              <p className="text-sm text-gray-600">
                StarBrew Cards do not expire and have no dormancy fees.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">International Use</h3>
              <p className="text-sm text-gray-600">
                StarBrew Cards purchased in the U.S. can be used at most locations in the U.S. and Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
