
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Store, Package, CheckCircle, Clock, Loader2, Star } from "lucide-react";
import { formatCurrency } from "@/utils/format";
import { useToast } from "@/components/ui/use-toast";

// Mock order data - in a real app, this would come from an API
const mockOrders = {
  "ORD-12345": {
    id: "ORD-12345",
    date: "May 17, 2023",
    time: "10:23 AM",
    store: "Downtown Cafe",
    storeAddress: "123 Main St, Downtown, CA 94105",
    items: [
      { name: "Grande Caramel Macchiato", price: 5.75, quantity: 1 },
      { name: "Blueberry Muffin", price: 3.25, quantity: 1 }
    ],
    total: 9.00,
    status: "Completed",
    orderType: "Mobile Order",
    reviewed: false,
    timeline: [
      { status: "Order Placed", time: "10:20 AM", completed: true },
      { status: "Order Received", time: "10:21 AM", completed: true },
      { status: "Preparation Started", time: "10:22 AM", completed: true },
      { status: "Ready for Pickup", time: "10:25 AM", completed: true },
      { status: "Order Completed", time: "10:30 AM", completed: true }
    ]
  },
  "ORD-12344": {
    id: "ORD-12344",
    date: "May 15, 2023",
    time: "8:14 AM",
    store: "Union Square",
    storeAddress: "456 Market St, Downtown, CA 94103",
    items: [
      { name: "Venti Cold Brew", price: 4.95, quantity: 1 },
      { name: "Bacon & Gouda Breakfast Sandwich", price: 4.75, quantity: 1 }
    ],
    total: 9.70,
    status: "Completed",
    orderType: "In-Store",
    reviewed: true,
    timeline: [
      { status: "Order Placed", time: "8:10 AM", completed: true },
      { status: "Order Received", time: "8:11 AM", completed: true },
      { status: "Preparation Started", time: "8:12 AM", completed: true },
      { status: "Ready for Pickup", time: "8:18 AM", completed: true },
      { status: "Order Completed", time: "8:22 AM", completed: true }
    ]
  },
  "ORD-12342": {
    id: "ORD-12342",
    date: "May 12, 2023",
    time: "2:30 PM",
    store: "Financial District",
    storeAddress: "789 Montgomery St, Financial District, CA 94111",
    items: [
      { name: "Tall Chai Tea Latte", price: 4.25, quantity: 2 },
      { name: "Chocolate Croissant", price: 3.50, quantity: 1 }
    ],
    total: 12.00,
    status: "Completed",
    orderType: "Delivery",
    reviewed: false,
    timeline: [
      { status: "Order Placed", time: "2:25 PM", completed: true },
      { status: "Order Received", time: "2:26 PM", completed: true },
      { status: "Preparation Started", time: "2:28 PM", completed: true },
      { status: "Out for Delivery", time: "2:40 PM", completed: true },
      { status: "Order Delivered", time: "3:05 PM", completed: true }
    ]
  }
};

const OrderDetail = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");

  // In a real app, we would fetch the order details from an API
  const order = mockOrders[orderId as keyof typeof mockOrders];

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <p className="mb-6">We couldn't find the order you're looking for.</p>
          <Button onClick={() => navigate('/order-history')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Order History
          </Button>
        </div>
      </div>
    );
  }

  const handleReorder = () => {
    toast({
      title: "Items Added to Cart",
      description: "All items from this order have been added to your cart."
    });
    // In a real app, we would add these items to the cart
  };

  const handleSubmitReview = () => {
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmittingReview(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Review Submitted",
        description: "Thank you for your feedback!"
      });
      setIsSubmittingReview(false);
      // In a real app, we would update the order status
      navigate('/order-history');
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Order Placed":
        return <Store className="h-5 w-5" />;
      case "Order Received":
      case "Preparation Started":
        return <Loader2 className="h-5 w-5" />;
      case "Ready for Pickup":
      case "Out for Delivery":
        return <Package className="h-5 w-5" />;
      case "Order Completed":
      case "Order Delivered":
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate('/order-history')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Order History
        </Button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Order #{order.id}</h1>
            <p className="text-gray-500">{order.date} at {order.time}</p>
          </div>
          <Badge className={
            order.status === "Completed" 
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
          }>
            {order.status}
          </Badge>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Store className="h-5 w-5 mr-3 text-starbucks-green mt-0.5" />
                <div>
                  <h3 className="font-medium">{order.store}</h3>
                  <p className="text-sm text-gray-500">{order.storeAddress}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Badge variant="outline" className="mr-3 capitalize">
                  {order.orderType}
                </Badge>
                <span className="text-sm text-gray-500">{order.status} on {order.date}</span>
              </div>
            </div>
            
            <div className="mt-6 border-t pt-4">
              <h3 className="font-medium mb-3">Items</h3>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <span className="font-medium">{item.quantity}x</span> {item.name}
                    </div>
                    <span>{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-dashed mt-4 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(order.total)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Order Timeline</h2>
            
            <div className="relative">
              <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="space-y-6">
                {order.timeline.map((event, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className={`absolute left-0 w-5 h-5 rounded-full ${
                      event.completed ? 'bg-starbucks-green text-white' : 'bg-gray-200'
                    } flex items-center justify-center z-10`}>
                      {getStatusIcon(event.status)}
                    </div>
                    
                    <div className="ml-9">
                      <h3 className="font-medium">{event.status}</h3>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {!order.reviewed ? (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Rate Your Experience</h2>
              
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      <Star className="h-8 w-8 fill-current" />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {rating === 0 ? "Tap to rate" : `You rated this order ${rating} stars`}
                </p>
              </div>
              
              <textarea
                placeholder="Share your thoughts about this order (optional)"
                className="w-full border rounded-md p-2 mb-4"
                rows={3}
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
              />
              
              <Button 
                onClick={handleSubmitReview} 
                disabled={isSubmittingReview}
              >
                {isSubmittingReview && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Review
              </Button>
            </CardContent>
          </Card>
        ) : null}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => navigate(`/store-locator?store=${encodeURIComponent(order.store)}`)}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Find This Store
          </Button>
          <Button 
            className="flex-1"
            onClick={handleReorder}
          >
            Reorder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
