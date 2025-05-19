import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Store, getStoreById, addFavoriteStore, removeFavoriteStore, getFavoriteStores } from "@/services/stores";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Phone, 
  Coffee, 
  Wifi, 
  SquareParking, 
  Star, 
  ChevronRight, 
  Heart 
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

const StoreDetail = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const [store, setStore] = useState<Store | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("info");
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();
  
  useEffect(() => {
    const fetchStoreDetails = async () => {
      setIsLoading(true);
      try {
        if (storeId) {
          const data = await getStoreById(storeId);
          setStore(data);
          setError(null);
          
          // Check if this store is in favorites
          if (user) {
            const favorites = await getFavoriteStores();
            setIsFavorite(favorites.includes(storeId));
          }
        }
      } catch (err: any) {
        setError(err.message || "Failed to load store details");
        console.error("Error fetching store:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStoreDetails();
  }, [storeId, user]);
  
  const toggleFavorite = async () => {
    if (!user) {
      toast("Please sign in to save favorites");
      return;
    }
    
    try {
      if (isFavorite) {
        await removeFavoriteStore(storeId!);
        setIsFavorite(false);
        toast("Store removed from favorites");
      } else {
        await addFavoriteStore(storeId!);
        setIsFavorite(true);
        toast("Store added to favorites");
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
      toast.error("Failed to update favorites");
    }
  };
  
  const getDirections = () => {
    if (store) {
      const address = `${store.address}, ${store.city}, ${store.state} ${store.zipCode}`;
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        address
      )}`;
      window.open(mapsUrl, "_blank");
    }
  };
  
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-starbucks-green border-solid"></div>
        </div>
      </div>
    );
  }
  
  if (error || !store) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Store Not Found</h2>
          <p className="text-gray-600 mb-8">{error || "The store you're looking for doesn't exist or has been removed."}</p>
          <Link to="/store-locator">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Store Locator
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const getTodayHours = () => {
    const todayHours = store?.hours.find(h => h.day === today);
    if (todayHours) {
      return `${todayHours.open} - ${todayHours.close}`;
    }
    return "Closed";
  };
  
  const isCurrentlyOpen = () => {
    const todayHours = store?.hours.find(h => h.day === today);
    if (!todayHours) return false;
    
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const [openHour, openMinute] = todayHours.open.split(':').map(Number);
    const [closeHour, closeMinute] = todayHours.close.split(':').map(Number);
    
    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;
    
    return currentTime >= openTime && currentTime < closeTime;
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Store Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link to="/store-locator" className="inline-flex items-center text-gray-600 hover:text-starbucks-green mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store Locator
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">{store.name}</h1>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <p>{store.address}, {store.city}, {store.state} {store.zipCode}</p>
              </div>
              <div className="flex items-center gap-3">
                {isCurrentlyOpen() ? (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Open Now</Badge>
                ) : (
                  <Badge variant="outline">Closed</Badge>
                )}
                <span className="text-sm text-gray-600">{getTodayHours()}</span>
              </div>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                className={`${
                  isFavorite 
                    ? "bg-red-50 text-red-600 border-red-300 hover:bg-red-100" 
                    : "border-gray-300"
                }`}
                onClick={toggleFavorite}
              >
                <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-red-600" : ""}`} />
                {isFavorite ? "Favorited" : "Favorite"}
              </Button>
              <Button onClick={getDirections}>
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Store Image */}
      <div className="w-full h-[30vh] bg-gray-200">
        {store.image && (
          <img 
            src={store.image} 
            alt={store.name} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      {/* Store Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs 
          defaultValue="info" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="info">Information</TabsTrigger>
            <TabsTrigger value="hours">Hours</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info" className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-bold text-lg mb-3">Contact</h2>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-starbucks-green mr-3" />
                  <p>{store.phone}</p>
                </div>
              </div>
              
              <div>
                <h2 className="font-bold text-lg mb-3">Address</h2>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-starbucks-green mr-3 mt-1" />
                  <div>
                    <p>{store.address}</p>
                    <p>{store.city}, {store.state} {store.zipCode}</p>
                    <p>{store.country}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="font-bold text-lg mb-3">Store Details</h2>
                <p className="text-gray-600">
                  This store offers a warm, welcoming environment with comfortable seating, free Wi-Fi, 
                  and a full menu of handcrafted beverages, breakfast items, and more.
                </p>
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" className="flex-1 mr-2" onClick={() => window.location.href = "/order"}>
                  <Coffee className="mr-2 h-4 w-4" />
                  Order Ahead
                </Button>
                <Button className="flex-1" onClick={() => window.location.href = "/menu"}>
                  View Menu
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="hours" className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Store Hours</h2>
            <div className="divide-y">
              {store.hours.map((hour, index) => (
                <div 
                  key={index} 
                  className={`py-3 flex justify-between ${hour.day === today ? "font-medium" : ""}`}
                >
                  <span>{hour.day}</span>
                  <span>{hour.open} - {hour.close}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Store Features</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {store.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.toLowerCase().includes("wifi") && <Wifi className="h-5 w-5 text-starbucks-green mr-2" />}
                  {feature.toLowerCase().includes("parking") && <SquareParking className="h-5 w-5 text-starbucks-green mr-2" />}
                  {feature.toLowerCase().includes("rewards") && <Star className="h-5 w-5 text-starbucks-green mr-2" />}
                  {!feature.toLowerCase().includes("wifi") && 
                   !feature.toLowerCase().includes("parking") && 
                   !feature.toLowerCase().includes("rewards") && 
                   <Coffee className="h-5 w-5 text-starbucks-green mr-2" />}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Nearby stores */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Nearby Stores</h2>
            <Link to="/store-locator" className="text-starbucks-green font-medium hover:underline inline-flex items-center">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="p-4 hover:bg-gray-50">
                <Link to={`/store/${index + 1}`} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">StarBrew - {["Downtown", "University", "West Side"][index]}</h3>
                    <p className="text-sm text-gray-600">
                      {0.2 * (index + 1)} miles away • {index % 2 === 0 ? "Open" : "Closes at 9 PM"}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
