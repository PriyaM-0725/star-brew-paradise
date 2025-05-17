
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { User, Settings, CreditCard, Star, LogOut } from "lucide-react";

const Profile = () => {
  const { user, logout, isLoading } = useAuth();
  
  // If not signed in and done loading, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" state={{ from: "/profile" }} />;
  }
  
  if (isLoading) {
    return <LoadingState />;
  }

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Profile header */}
          <div className="md:w-1/3">
            <Card className="overflow-hidden">
              <div className="bg-starbucks-green h-32 relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-full">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-4xl">
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </div>
                </div>
              </div>
              <CardContent className="pt-16 pb-6 text-center">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
                
                <div className="mt-6 py-4 px-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center">
                    <Star className="h-5 w-5 text-starbucks-gold mr-2" />
                    <span className="text-lg font-semibold">{user.rewardPoints || 0} Stars</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Gold Member</p>
                </div>
                
                <Button 
                  variant="outline"
                  className="mt-6 border-red-500 text-red-500 hover:bg-red-50 w-full"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Profile tabs */}
          <div className="md:w-2/3">
            <Tabs defaultValue="account">
              <TabsList className="w-full">
                <TabsTrigger value="account" className="flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </TabsTrigger>
                <TabsTrigger value="payment" className="flex-1">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payment
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex-1">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="account" className="mt-6">
                <AccountTab user={user} />
              </TabsContent>
              
              <TabsContent value="payment" className="mt-6">
                <PaymentTab />
              </TabsContent>
              
              <TabsContent value="settings" className="mt-6">
                <SettingsTab />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

// Account tab component
const AccountTab = ({ user }: { user: any }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Profile updated successfully!");
      setIsUpdating(false);
    }, 1000);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Update your account details and contact information
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="bg-starbucks-green hover:bg-starbucks-darkGreen"
            disabled={isUpdating}
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

// Payment tab component
const PaymentTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>
          Manage your saved payment methods
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md border flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center text-white font-bold text-xs">
                VISA
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 1234</p>
                <p className="text-sm text-gray-500">Expires 12/25</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Remove
            </Button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md border flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-8 bg-red-500 rounded mr-3 flex items-center justify-center text-white font-bold text-xs">
                MC
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 5678</p>
                <p className="text-sm text-gray-500">Expires 08/24</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Remove
            </Button>
          </div>
          
          <Button variant="outline" className="w-full mt-4">
            Add Payment Method
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Settings tab component
const SettingsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Manage how we contact you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive order updates and promotions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-starbucks-green"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">SMS Notifications</p>
              <p className="text-sm text-gray-500">Receive text messages about your orders</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-starbucks-green"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-gray-500">Receive app notifications on your device</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-starbucks-green"></div>
            </label>
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
      <p className="text-gray-600">Loading your profile...</p>
    </div>
  </div>
);

export default Profile;
