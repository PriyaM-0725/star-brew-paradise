
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, MapPin, Package, ShoppingBag, Clock, CheckCircle } from "lucide-react";
import { formatCurrency } from "@/utils/format";

const Delivery = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  // Sample delivery data
  const activeDeliveries = [
    {
      id: "DEL-4567",
      orderId: "ORD-12342",
      status: "out-for-delivery",
      estimatedDelivery: "Today, May 12, 2023 • 3:15 PM - 3:30 PM",
      address: "1234 Pine Street, Apt 5B, San Francisco, CA 94109",
      items: [
        { name: "Tall Chai Tea Latte", quantity: 2, price: 4.25 },
        { name: "Chocolate Croissant", quantity: 1, price: 3.50 }
      ],
      total: 12.00,
      progress: 75,
      carrier: "StarBrew Delivery",
      trackingNumber: "SBD-78901234",
      timeline: [
        { status: "Order Placed", time: "2:25 PM", completed: true },
        { status: "Order Confirmed", time: "2:26 PM", completed: true },
        { status: "Preparation Started", time: "2:28 PM", completed: true },
        { status: "Out for Delivery", time: "2:40 PM", completed: true, current: true },
        { status: "Delivered", time: "Estimated 3:15 PM", completed: false }
      ]
    }
  ];
  
  const pastDeliveries = [
    {
      id: "DEL-4566",
      orderId: "ORD-12338",
      status: "delivered",
      deliveredTime: "May 8, 2023 at 8:20 AM",
      address: "1234 Pine Street, Apt 5B, San Francisco, CA 94109",
      items: [
        { name: "Grande Americano", quantity: 1, price: 3.25 },
        { name: "Egg White & Roasted Red Pepper Egg Bites", quantity: 1, price: 4.75 }
      ],
      total: 8.00,
      carrier: "StarBrew Delivery",
      trackingNumber: "SBD-78901230"
    },
    {
      id: "DEL-4550",
      orderId: "ORD-12330",
      status: "delivered",
      deliveredTime: "May 1, 2023 at 12:45 PM",
      address: "1234 Pine Street, Apt 5B, San Francisco, CA 94109",
      items: [
        { name: "Iced Coffee", quantity: 2, price: 3.75 },
        { name: "Turkey & Pesto Panini", quantity: 1, price: 6.95 }
      ],
      total: 14.45,
      carrier: "StarBrew Delivery",
      trackingNumber: "SBD-78901220"
    }
  ];
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "out-for-delivery":
        return <Badge className="bg-blue-100 text-blue-800">Out for Delivery</Badge>;
      case "delivered":
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>;
    }
  };
  
  const getStatusIcon = (status: string, completed: boolean, current: boolean = false) => {
    const baseClasses = "h-8 w-8 p-1.5 rounded-full";
    let bgColorClass = "bg-gray-200 text-gray-500";
    
    if (completed) {
      bgColorClass = "bg-green-100 text-green-600";
    } else if (current) {
      bgColorClass = "bg-blue-100 text-blue-600";
    }
    
    const iconClasses = `${baseClasses} ${bgColorClass}`;
    
    switch (status) {
      case "Order Placed":
        return <ShoppingBag className={iconClasses} />;
      case "Order Confirmed":
        return <CheckCircle className={iconClasses} />;
      case "Preparation Started":
        return <Package className={iconClasses} />;
      case "Out for Delivery":
        return <Truck className={iconClasses} />;
      case "Delivered":
        return <MapPin className={iconClasses} />;
      default:
        return <Clock className={iconClasses} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-4">Delivery Tracking</h1>
        <p className="text-lg text-gray-600 mb-8">
          Track your StarBrew deliveries and view your delivery history.
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="active">Active Deliveries</TabsTrigger>
            <TabsTrigger value="past">Past Deliveries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            {activeDeliveries.length > 0 ? (
              <div className="space-y-8">
                {activeDeliveries.map((delivery) => (
                  <Card key={delivery.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 border-b">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h2 className="text-xl font-semibold">Delivery #{delivery.id}</h2>
                              {getStatusBadge(delivery.status)}
                            </div>
                            <p className="text-sm text-gray-500">Order #{delivery.orderId}</p>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            className="mt-2 sm:mt-0"
                            onClick={() => window.location.href = `/order-detail/${delivery.orderId}`}
                          >
                            View Order Details
                          </Button>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Truck className="text-starbucks-green" />
                            <h3 className="font-medium">Estimated Delivery</h3>
                          </div>
                          <p>{delivery.estimatedDelivery}</p>
                        </div>
                        
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="text-starbucks-green" />
                            <h3 className="font-medium">Delivery Address</h3>
                          </div>
                          <p>{delivery.address}</p>
                        </div>
                        
                        <div className="mb-6">
                          <div className="h-2 bg-gray-200 rounded-full mb-2">
                            <div 
                              className="h-2 bg-starbucks-green rounded-full" 
                              style={{ width: `${delivery.progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Order Placed</span>
                            <span>Out for Delivery</span>
                            <span>Delivered</span>
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <h3 className="font-medium mb-4">Delivery Timeline</h3>
                          <div className="relative">
                            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                            
                            <div className="space-y-8">
                              {delivery.timeline.map((event, index) => (
                                <div key={index} className="flex">
                                  <div className="mr-4">
                                    {getStatusIcon(event.status, event.completed, event.current)}
                                  </div>
                                  <div>
                                    <h4 className="font-medium">{event.status}</h4>
                                    <p className="text-sm text-gray-500">{event.time}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gray-50">
                        <h3 className="font-medium mb-3">Order Summary</h3>
                        <div className="space-y-2 mb-4">
                          {delivery.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between">
                              <div className="flex">
                                <span className="font-medium mr-2">{item.quantity}x</span>
                                <span>{item.name}</span>
                              </div>
                              <span>{formatCurrency(item.price * item.quantity)}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="border-t pt-3 flex justify-between font-bold">
                          <span>Total</span>
                          <span>{formatCurrency(delivery.total)}</span>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t text-sm text-gray-500">
                          <p>Carrier: {delivery.carrier}</p>
                          <p>Tracking #: {delivery.trackingNumber}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Truck className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Active Deliveries</h3>
                <p className="text-gray-500 mb-6">You don't have any orders out for delivery at the moment.</p>
                <Button onClick={() => window.location.href = '/menu'}>Order Now</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastDeliveries.length > 0 ? (
              <div className="space-y-6">
                {pastDeliveries.map((delivery) => (
                  <Card key={delivery.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 border-b flex flex-col sm:flex-row justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">Delivery #{delivery.id}</h3>
                            {getStatusBadge(delivery.status)}
                          </div>
                          <p className="text-sm text-gray-500 mb-2">Order #{delivery.orderId}</p>
                          <p className="text-sm">Delivered: {delivery.deliveredTime}</p>
                        </div>
                        
                        <div className="mt-4 sm:mt-0">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.location.href = `/order-detail/${delivery.orderId}`}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gray-50">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Delivered to:</p>
                            <p className="text-sm text-gray-500">{delivery.address}</p>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <p className="text-sm text-gray-500">
                            {delivery.items.length} items • Total: {formatCurrency(delivery.total)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Delivery History</h3>
                <p className="text-gray-500 mb-6">You haven't received any deliveries yet.</p>
                <Button onClick={() => window.location.href = '/menu'}>Order Now</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Delivery FAQ</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">How do I track my delivery?</h3>
              <p className="text-sm text-gray-600">
                You can track all your active deliveries on this page. We'll also send you email and app notifications with updates.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">What if I'm not home for my delivery?</h3>
              <p className="text-sm text-gray-600">
                Our delivery partners will attempt to contact you. If you're unavailable, they'll leave your order in a safe place if possible.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Can I change my delivery address?</h3>
              <p className="text-sm text-gray-600">
                Once an order is confirmed, the delivery address cannot be changed. Please cancel and place a new order if needed.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">How can I contact my delivery person?</h3>
              <p className="text-sm text-gray-600">
                Once your order is out for delivery, you'll receive contact information for your delivery person through the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
