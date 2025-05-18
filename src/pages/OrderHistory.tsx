
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight, Star } from "lucide-react";
import { formatCurrency } from "@/utils/format";

const OrderHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample order history data
  const orders = [
    {
      id: "ORD-12345",
      date: "May 17, 2023",
      time: "10:23 AM",
      store: "Downtown Cafe",
      items: [
        { name: "Grande Caramel Macchiato", price: 5.75, quantity: 1 },
        { name: "Blueberry Muffin", price: 3.25, quantity: 1 }
      ],
      total: 9.00,
      status: "Completed",
      orderType: "Mobile Order",
      reviewed: true
    },
    {
      id: "ORD-12344",
      date: "May 15, 2023",
      time: "8:14 AM",
      store: "Union Square",
      items: [
        { name: "Venti Cold Brew", price: 4.95, quantity: 1 },
        { name: "Bacon & Gouda Breakfast Sandwich", price: 4.75, quantity: 1 }
      ],
      total: 9.70,
      status: "Completed",
      orderType: "In-Store",
      reviewed: false
    },
    {
      id: "ORD-12342",
      date: "May 12, 2023",
      time: "2:30 PM",
      store: "Financial District",
      items: [
        { name: "Tall Chai Tea Latte", price: 4.25, quantity: 2 },
        { name: "Chocolate Croissant", price: 3.50, quantity: 1 }
      ],
      total: 12.00,
      status: "Completed",
      orderType: "Delivery",
      reviewed: false
    },
    {
      id: "ORD-12338",
      date: "May 8, 2023",
      time: "7:45 AM",
      store: "Downtown Cafe",
      items: [
        { name: "Grande Americano", price: 3.25, quantity: 1 },
        { name: "Egg White & Roasted Red Pepper Egg Bites", price: 4.75, quantity: 1 }
      ],
      total: 8.00,
      status: "Completed",
      orderType: "Mobile Order",
      reviewed: true
    }
  ];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  const getOrderTypeIcon = (type: string) => {
    switch (type) {
      case "Mobile Order":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18"></line>
          </svg>
        );
      case "In-Store":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        );
      case "Delivery":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 8c0-1-1-2-2-2H5c-1 0-2 1-2 2"></path>
            <rect x="1" y="10" width="22" height="10" rx="1"></rect>
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        );
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-4">Order History</h1>
        <p className="text-lg text-gray-600 mb-8">
          View and manage your past StarBrew orders.
        </p>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="search" 
            placeholder="Search orders by product or order number..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Orders</TabsTrigger>
            <TabsTrigger value="in-store">In-Store</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-4 border-b flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{order.date} at {order.time}</h3>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{order.store} • {order.id}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getOrderTypeIcon(order.orderType)}
                          {order.orderType}
                        </Badge>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <div className="flex">
                              <span className="font-medium mr-2">{item.quantity}x</span>
                              <span>{item.name}</span>
                            </div>
                            <span>{formatCurrency(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-3 border-t">
                        <div className="font-medium">Total: {formatCurrency(order.total)}</div>
                        <div className="flex gap-2">
                          {!order.reviewed && (
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              Review
                            </Button>
                          )}
                          <Button size="sm">Reorder</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="mt-6">
            <div className="space-y-6">
              {orders.filter(order => order.orderType === "Mobile Order").map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  {/* Same card content as "all" tab */}
                  <CardContent className="p-0">
                    <div className="p-4 border-b flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{order.date} at {order.time}</h3>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{order.store} • {order.id}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getOrderTypeIcon(order.orderType)}
                          {order.orderType}
                        </Badge>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <div className="flex">
                              <span className="font-medium mr-2">{item.quantity}x</span>
                              <span>{item.name}</span>
                            </div>
                            <span>{formatCurrency(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-3 border-t">
                        <div className="font-medium">Total: {formatCurrency(order.total)}</div>
                        <div className="flex gap-2">
                          {!order.reviewed && (
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              Review
                            </Button>
                          )}
                          <Button size="sm">Reorder</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="in-store" className="mt-6">
            <div className="space-y-6">
              {orders.filter(order => order.orderType === "In-Store").map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  {/* Same card content as "all" tab */}
                  <CardContent className="p-0">
                    <div className="p-4 border-b flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{order.date} at {order.time}</h3>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{order.store} • {order.id}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getOrderTypeIcon(order.orderType)}
                          {order.orderType}
                        </Badge>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <div className="flex">
                              <span className="font-medium mr-2">{item.quantity}x</span>
                              <span>{item.name}</span>
                            </div>
                            <span>{formatCurrency(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-3 border-t">
                        <div className="font-medium">Total: {formatCurrency(order.total)}</div>
                        <div className="flex gap-2">
                          {!order.reviewed && (
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              Review
                            </Button>
                          )}
                          <Button size="sm">Reorder</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="delivery" className="mt-6">
            <div className="space-y-6">
              {orders.filter(order => order.orderType === "Delivery").map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  {/* Same card content as "all" tab */}
                  <CardContent className="p-0">
                    <div className="p-4 border-b flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{order.date} at {order.time}</h3>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{order.store} • {order.id}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getOrderTypeIcon(order.orderType)}
                          {order.orderType}
                        </Badge>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <div className="flex">
                              <span className="font-medium mr-2">{item.quantity}x</span>
                              <span>{item.name}</span>
                            </div>
                            <span>{formatCurrency(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-3 border-t">
                        <div className="font-medium">Total: {formatCurrency(order.total)}</div>
                        <div className="flex gap-2">
                          {!order.reviewed && (
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              Review
                            </Button>
                          )}
                          <Button size="sm">Reorder</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 text-center">
          <Button variant="outline">Load More Orders</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
