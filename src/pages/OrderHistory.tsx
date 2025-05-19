
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, ShoppingBag, Package, CheckCircle, ArrowRight } from "lucide-react";
import { formatPrice } from "@/utils/format";
import { useAuth } from "@/context/AuthContext";
import { getOrders, Order } from "@/services/orders";

const OrderHistory = () => {
  const navigate = useNavigate();
  const { user, isLoading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("all");
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const status = activeTab !== "all" ? activeTab : undefined;
        const { orders: fetchedOrders } = await getOrders(status);
        setOrders(fetchedOrders);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Failed to load orders");
        console.error("Error fetching orders:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (!authLoading && user) {
      fetchOrders();
    } else if (!authLoading && !user) {
      setIsLoading(false);
    }
  }, [activeTab, user, authLoading]);
  
  // Filter orders based on active tab
  const filteredOrders = activeTab === "all" 
    ? orders 
    : orders.filter(order => order.status === activeTab);
  
  if (isLoading || authLoading) {
    return <LoadingState />;
  }
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
            <p className="text-gray-600 mb-6">
              Please sign in to view your order history.
            </p>
            <Button 
              onClick={() => navigate("/login", { state: { from: "/order-history" }})}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            className="mr-4 p-2" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Order History</h1>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
            <p className="font-medium">Error loading orders</p>
            <p className="text-sm">{error}</p>
          </div>
        )}
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="preparing">Active</TabsTrigger>
            <TabsTrigger value="delivered">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-6">
            {filteredOrders.length > 0 ? (
              <div className="space-y-6">
                {filteredOrders.map(order => (
                  <OrderCard 
                    key={order.id} 
                    order={order} 
                    onViewDetails={() => navigate(`/order-detail/${order.id}`)}
                  />
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
  
  if (status === "preparing" || status === "ready") {
    return (
      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200">
        <Clock className="w-3 h-3 mr-1" /> {status === "preparing" ? "Preparing" : "Ready"}
      </Badge>
    );
  }
  
  if (status === "cancelled") {
    return (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-red-200">
        Cancelled
      </Badge>
    );
  }
  
  return (
    <Badge variant="outline">{status}</Badge>
  );
};

// Order card component
const OrderCard = ({ order, onViewDetails }: { order: Order; onViewDetails: () => void }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gray-50 px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="mb-2 sm:mb-0">
              <div className="flex items-center mb-1">
                <h3 className="font-semibold text-base mr-2">
                  Order #{order.id.substring(0, 8)}
                </h3>
                <StatusBadge status={order.status} />
              </div>
              <p className="text-gray-500 text-sm">
                {new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            <div className="flex items-center">
              <span className="font-medium">{formatPrice(order.total)}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h4 className="font-medium mb-2">Items</h4>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
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
              <span>{order.status === "delivered" ? "Picked up from " : "Pick up at "}{order.storeName}</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-starbucks-green border-starbucks-green hover:bg-starbucks-green/10"
              onClick={onViewDetails}
            >
              <span className="mr-1">Order Details</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
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
  
  if (status === "preparing") {
    message = "You don't have any orders in progress";
  } else if (status === "delivered") {
    message = "You don't have any completed orders";
  }
  
  const navigate = useNavigate();
  
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
        <Button 
          className="bg-starbucks-green hover:bg-starbucks-darkGreen"
          onClick={() => navigate("/menu")}
        >
          Browse Menu
        </Button>
      )}
    </div>
  );
};

export default OrderHistory;
