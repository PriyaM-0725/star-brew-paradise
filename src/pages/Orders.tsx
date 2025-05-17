
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import { Clock, ShoppingBag, Package, CheckCircle, ArrowRight } from "lucide-react";
import { formatPrice } from "@/utils/format";

// Mock order data - in a real app, this would come from an API
const mockOrders = [
  {
    id: "ord-001",
    date: new Date(2023, 4, 15, 14, 30),
    status: "delivered",
    total: 18.95,
    items: [
      { name: "Caffe Latte", quantity: 2, price: 3.95 },
      { name: "Blueberry Muffin", quantity: 1, price: 3.45 },
      { name: "Cold Brew", quantity: 1, price: 3.95 },
    ],
    store: "Downtown Main St."
  },
  {
    id: "ord-002",
    date: new Date(2023, 4, 12, 9, 15),
    status: "delivered",
    total: 11.85,
    items: [
      { name: "Caffe Americano", quantity: 1, price: 3.25 },
      { name: "Chocolate Croissant", quantity: 2, price: 3.75 },
    ],
    store: "Westside Plaza"
  },
  {
    id: "ord-003",
    date: new Date(),
    status: "in-progress",
    total: 21.35,
    items: [
      { name: "Nitro Cold Brew", quantity: 2, price: 4.45 },
      { name: "Classic Coffee Cake", quantity: 1, price: 3.95 },
      { name: "Pike Place® Roast", quantity: 1, price: 2.95 },
      { name: "Banana Nut Bread", quantity: 1, price: 3.65 },
    ],
    store: "Downtown Main St."
  }
];

const Orders = () => {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("all");
  const [orders, setOrders] = useState(mockOrders);
  
  // Filter orders based on active tab
  const filteredOrders = activeTab === "all" 
    ? orders 
    : orders.filter(order => order.status === activeTab);
  
  // If not signed in and done loading, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" state={{ from: "/orders" }} />;
  }
  
  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-6">
            {filteredOrders.length > 0 ? (
              <div className="space-y-6">
                {filteredOrders.map(order => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            ) : (
              <EmptyState status={activeTab} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Order status badge component
const StatusBadge = ({ status }: { status: string }) => {
  if (status === "delivered") {
    return (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
        <CheckCircle className="w-3 h-3 mr-1" /> Delivered
      </Badge>
    );
  }
  
  if (status === "in-progress") {
    return (
      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200">
        <Clock className="w-3 h-3 mr-1" /> In Progress
      </Badge>
    );
  }
  
  return (
    <Badge variant="outline">{status}</Badge>
  );
};

// Order card component
const OrderCard = ({ order }: { order: any }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gray-50 px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="mb-2 sm:mb-0">
            <CardTitle className="text-base font-semibold">Order #{order.id}</CardTitle>
            <p className="text-gray-500 text-sm mt-1">
              {order.date.toLocaleDateString()} at {order.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <StatusBadge status={order.status} />
            <span className="font-medium">{formatPrice(order.total)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <h4 className="font-medium mb-2">Items</h4>
          <ul className="space-y-2">
            {order.items.map((item: any, index: number) => (
              <li key={index} className="flex justify-between text-sm">
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span className="text-gray-600">{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-sm text-gray-600">
          <div className="flex items-start">
            <Package className="w-4 h-4 mr-2 mt-0.5" />
            <span>Picked up from {order.store}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" className="text-starbucks-green border-starbucks-green hover:bg-starbucks-green/10">
            <span className="mr-1">Order Details</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Loading state component
const LoadingState = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-starbucks-green/20 border-t-starbucks-green rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600">Loading your orders...</p>
    </div>
  </div>
);

// Empty state component
const EmptyState = ({ status }: { status: string }) => {
  let message = "You don't have any orders yet";
  
  if (status === "in-progress") {
    message = "You don't have any orders in progress";
  } else if (status === "delivered") {
    message = "You don't have any delivered orders";
  }
  
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center bg-white rounded-lg shadow p-8">
      <div className="bg-gray-100 p-6 rounded-full mb-4">
        <ShoppingBag size={48} className="text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{message}</h3>
      <p className="text-gray-600 mb-6 text-center">
        {status === "all" 
          ? "Visit our menu to place your first order!"
          : "Check the 'All Orders' tab to see your complete order history."
        }
      </p>
      {status === "all" && (
        <Link to="/menu">
          <Button className="bg-starbucks-green hover:bg-starbucks-darkGreen">
            Browse Menu
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Orders;
