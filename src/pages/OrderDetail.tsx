
import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, CheckCircle, Clock, ShoppingBag, Calendar, CreditCard } from "lucide-react";
import { formatPrice } from "@/utils/format";
import { useAuth } from "@/context/AuthContext";
import { OrderDetail as OrderDetailType, getOrderById, cancelOrder } from "@/services/orders";
import { toast } from "sonner";

const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<OrderDetailType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isLoading: authLoading } = useAuth();
  const [isCancelling, setIsCancelling] = useState(false);
  
  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;
      
      setIsLoading(true);
      try {
        const data = await getOrderById(orderId);
        setOrder(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Failed to load order details");
        console.error("Error fetching order:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (!authLoading && user) {
      fetchOrder();
    }
  }, [orderId, user, authLoading]);
  
  const handleCancelOrder = async () => {
    if (!orderId || !order || order.status !== "pending") return;
    
    if (!window.confirm("Are you sure you want to cancel this order?")) {
      return;
    }
    
    setIsCancelling(true);
    try {
      await cancelOrder(orderId);
      setOrder({
        ...order,
        status: "cancelled"
      });
      toast.success("Order cancelled successfully");
    } catch (error) {
      console.error("Error cancelling order:", error);
      toast.error("Failed to cancel order");
    } finally {
      setIsCancelling(false);
    }
  };
  
  // If not signed in and done loading, redirect to login
  if (!authLoading && !user) {
    return <Navigate to="/login" state={{ from: `/order-detail/${orderId}` }} />;
  }
  
  if (isLoading || authLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-starbucks-green/20 border-t-starbucks-green rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }
  
  if (error || !order) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Order Not Found</h2>
          <p className="text-gray-600 mb-8">{error || "The order you're looking for doesn't exist or has been removed."}</p>
          <Link to="/orders">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Orders
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "preparing":
        return <Badge className="bg-blue-100 text-blue-800">Preparing</Badge>;
      case "ready":
        return <Badge className="bg-purple-100 text-purple-800">Ready for Pickup</Badge>;
      case "delivered":
        return <Badge className="bg-green-100 text-green-800">
          <CheckCircle className="w-3 h-3 mr-1" /> Completed
        </Badge>;
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const canBeCancelled = ["pending", "preparing"].includes(order.status);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/orders" className="inline-flex items-center text-gray-600 hover:text-starbucks-green mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Link>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
            <div className="p-6 border-b">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold">Order #{order.orderNumber || order.id}</h1>
                    {getStatusBadge(order.status)}
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {new Date(order.date).toLocaleDateString()} at{" "}
                      {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
                
                {canBeCancelled && (
                  <Button 
                    variant="outline" 
                    className="text-red-500 border-red-300 hover:bg-red-50"
                    onClick={handleCancelOrder}
                    disabled={isCancelling}
                  >
                    {isCancelling ? "Cancelling..." : "Cancel Order"}
                  </Button>
                )}
              </div>
              
              {order.status === "pending" && (
                <div className="bg-blue-50 text-blue-800 p-4 rounded-md flex items-start mb-6">
                  <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Order in Progress</p>
                    <p className="text-sm text-blue-600">
                      Your order is being processed. You'll receive a notification when it's ready.
                    </p>
                  </div>
                </div>
              )}
              
              {order.status === "ready" && (
                <div className="bg-purple-50 text-purple-800 p-4 rounded-md flex items-start mb-6">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ready for Pickup</p>
                    <p className="text-sm text-purple-600">
                      Your order is ready! Pick it up at the counter.
                    </p>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-starbucks-green" /> 
                    {order.deliveryAddress ? "Delivery Address" : "Pickup Location"}
                  </h3>
                  {order.deliveryAddress ? (
                    <div className="text-gray-700">
                      <p>{order.deliveryAddress.street}</p>
                      <p>
                        {order.deliveryAddress.city}, {order.deliveryAddress.state}{" "}
                        {order.deliveryAddress.zipCode}
                      </p>
                      {order.deliveryAddress.special && (
                        <p className="text-sm text-gray-500 mt-1">{order.deliveryAddress.special}</p>
                      )}
                    </div>
                  ) : (
                    <div className="text-gray-700">
                      <p>{order.storeName}</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-starbucks-green"
                        onClick={() => window.location.href = `/store/${order.storeId}`}
                      >
                        View Store Details
                      </Button>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-starbucks-green" /> 
                    {order.deliveryAddress ? "Estimated Delivery" : "Pickup Time"}
                  </h3>
                  <p className="text-gray-700">
                    {order.deliveryAddress 
                      ? order.estimatedDeliveryTime || "30-45 minutes"
                      : order.pickupTime || "ASAP"
                    }
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-medium text-lg mb-4">Order Details</h3>
              
              <div className="space-y-4 mb-6">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div className="flex">
                      <span className="font-medium mr-2">{item.quantity}×</span>
                      <div>
                        <p>{item.name}</p>
                        {item.options && item.options.length > 0 && (
                          <ul className="text-sm text-gray-500">
                            {item.options.map((option, idx) => (
                              <li key={idx}>
                                {option.name}: {option.value}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(order.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatPrice(order.tax)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-start">
                  <CreditCard className="h-4 w-4 mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Payment Method</p>
                    <p className="text-gray-600">{order.paymentMethod}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions or issues with your order, please contact our customer service team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1" onClick={() => window.location.href = '/contact'}>
                  Contact Support
                </Button>
                <Button 
                  className="flex-1" 
                  onClick={() => window.location.href = '/faq#orders'}
                >
                  Order FAQs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
