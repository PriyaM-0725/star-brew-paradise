
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Search, Clock, Coffee, Wifi, ChevronRight } from "lucide-react";
import { Store, searchStores, StoreSearchParams } from "@/services/stores";

const StoreLocator = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchRadius, setSearchRadius] = useState(10);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{latitude: number; longitude: number} | null>(null);
  const [activeTab, setActiveTab] = useState("list");
  
  const storeFeatures = [
    "WiFi",
    "Drive-Thru",
    "Mobile Order",
    "Outdoor Seating",
    "Restroom",
    "Parking",
    "24 Hours",
    "Rewards"
  ];
  
  useEffect(() => {
    // Try to get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          
          // Search for nearby stores when location is available
          searchNearbyStores(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
          // Load some default stores when location is not available
          searchWithParams({});
        }
      );
    } else {
      // Geolocation not supported, load default stores
      searchWithParams({});
    }
  }, []);
  
  const searchNearbyStores = async (latitude: number, longitude: number) => {
    setIsLoading(true);
    try {
      const searchParams: StoreSearchParams = {
        latitude,
        longitude,
        radius: searchRadius,
      };
      
      const { stores } = await searchStores(searchParams);
      setStores(stores);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Failed to load stores");
      console.error("Error searching stores:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const searchParams: StoreSearchParams = {
      query: searchTerm,
      features: selectedFeatures.length ? selectedFeatures : undefined
    };
    
    if (searchLocation) {
      // In a real app, you would geocode the location to get coordinates
      // For now, we'll just pass the query
      searchParams.query = searchLocation;
    } else if (userLocation) {
      searchParams.latitude = userLocation.latitude;
      searchParams.longitude = userLocation.longitude;
      searchParams.radius = searchRadius;
    }
    
    searchWithParams(searchParams);
  };
  
  const searchWithParams = async (params: StoreSearchParams) => {
    setIsLoading(true);
    try {
      const { stores: fetchedStores } = await searchStores(params);
      setStores(fetchedStores);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Failed to search stores");
      console.error("Error searching stores:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures(prev => {
      if (prev.includes(feature)) {
        return prev.filter(f => f !== feature);
      } else {
        return [...prev, feature];
      }
    });
  };
  
  const handleUseMyLocation = () => {
    if (userLocation) {
      setSearchLocation("");
      searchNearbyStores(userLocation.latitude, userLocation.longitude);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setSearchLocation("");
          searchNearbyStores(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
          alert("Unable to get your location. Please enter a location manually.");
        }
      );
    } else {
      alert("Location services are not supported in your browser.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-starbucks-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find a StarBrew Near You</h1>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Locate your nearest StarBrew cafe and discover what each location has to offer.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="Enter city, state or zip code"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="bg-white"
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                <Search className="mr-2 h-4 w-4" />
                Find Stores
              </Button>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              onClick={handleUseMyLocation}
              disabled={isLoading}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Use My Current Location
            </Button>
          </form>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {isLoading ? "Searching stores..." : `${stores.length} Stores Found`}
              </h2>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden md:block">
                <TabsList>
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="map">Map View</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters */}
              <div className="lg:w-1/4">
                <Card className="sticky top-4">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Filter Stores</h3>
                    
                    <div className="mb-6">
                      <Label htmlFor="search-term" className="mb-2 block">Search</Label>
                      <Input
                        id="search-term"
                        placeholder="Search by store name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-2"
                      />
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleSearch({ preventDefault: () => {} } as any)}
                        disabled={isLoading}
                      >
                        <Search className="mr-2 h-3 w-3" />
                        Search
                      </Button>
                    </div>
                    
                    <div className="mb-6">
                      <Label className="mb-2 block">Distance</Label>
                      <div className="grid grid-cols-4 gap-2">
                        {[5, 10, 15, 25].map((radius) => (
                          <Button
                            key={radius}
                            type="button"
                            variant={searchRadius === radius ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSearchRadius(radius)}
                            disabled={isLoading}
                          >
                            {radius} mi
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Store Features</Label>
                      <div className="space-y-2">
                        {storeFeatures.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`feature-${feature}`}
                              checked={selectedFeatures.includes(feature)}
                              onCheckedChange={() => handleFeatureChange(feature)}
                              disabled={isLoading}
                            />
                            <label 
                              htmlFor={`feature-${feature}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {feature}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Results */}
              <div className="lg:w-3/4">
                <TabsContent value="list" className="mt-0">
                  {error ? (
                    <div className="bg-red-50 text-red-800 p-4 rounded-md mb-4">
                      <p className="font-medium">Error loading stores</p>
                      <p className="text-sm">{error}</p>
                    </div>
                  ) : isLoading ? (
                    <div className="flex justify-center py-12">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-starbucks-green"></div>
                    </div>
                  ) : stores.length > 0 ? (
                    <div className="space-y-4">
                      {stores.map((store) => (
                        <Card 
                          key={store.id} 
                          className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => navigate(`/store/${store.id}`)}
                        >
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              {store.image && (
                                <div className="md:w-1/4 h-48 md:h-auto">
                                  <img 
                                    src={store.image} 
                                    alt={store.name} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              <div className={`${store.image ? 'md:w-3/4' : 'w-full'} p-6`}>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-bold text-lg mb-1">{store.name}</h3>
                                    <p className="text-gray-500">
                                      {store.address}, {store.city}, {store.state} {store.zipCode}
                                    </p>
                                    
                                    <div className="flex items-center mt-2">
                                      <Clock className="h-4 w-4 text-gray-500 mr-1" />
                                      <span className="text-sm text-gray-500">
                                        Opens {store.hours[0]?.open} • Closes {store.hours[0]?.close}
                                      </span>
                                    </div>
                                  </div>
                                  <ChevronRight className="h-5 w-5 text-gray-400" />
                                </div>
                                
                                <div className="mt-4">
                                  <div className="flex flex-wrap gap-2">
                                    {store.features.slice(0, 4).map((feature, idx) => (
                                      <Badge 
                                        key={idx} 
                                        variant="outline" 
                                        className="bg-gray-50"
                                      >
                                        {feature === "WiFi" && <Wifi className="h-3 w-3 mr-1" />}
                                        {feature === "Drive-Thru" && <Coffee className="h-3 w-3 mr-1" />}
                                        {feature}
                                      </Badge>
                                    ))}
                                    {store.features.length > 4 && (
                                      <Badge variant="outline" className="bg-gray-50">
                                        +{store.features.length - 4} more
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="mt-4 flex gap-3">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                                        `${store.address}, ${store.city}, ${store.state} ${store.zipCode}`
                                      )}`, '_blank');
                                    }}
                                  >
                                    <MapPin className="h-4 w-4 mr-1" />
                                    Directions
                                  </Button>
                                  <Button 
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      navigate('/order');
                                    }}
                                  >
                                    <Coffee className="h-4 w-4 mr-1" />
                                    Order
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg">
                      <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Stores Found</h3>
                      <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="map" className="mt-0">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-[600px] bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                          <p className="text-gray-500">
                            Map view will be available soon
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoreLocator;
