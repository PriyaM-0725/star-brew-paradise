
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon, MapPin, Phone, Clock, Coffee, Search, Wifi, Car } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    wifi: false,
    mobileOrder: false,
    driveThru: false,
    outdoorSeating: false
  });
  
  // Sample store data
  const stores = [
    {
      id: 1,
      name: "Downtown Cafe",
      address: "123 Main Street, Downtown",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      phone: "(415) 555-1234",
      hours: "5:00 AM - 9:00 PM",
      distance: "0.3 miles",
      features: ["Mobile Order", "Drive-Thru", "Wifi"]
    },
    {
      id: 2,
      name: "Union Square",
      address: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103",
      phone: "(415) 555-5678",
      hours: "6:00 AM - 8:00 PM",
      distance: "1.2 miles",
      features: ["Mobile Order", "Wifi", "Outdoor Seating"]
    },
    {
      id: 3,
      name: "Financial District",
      address: "789 Montgomery Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94111",
      phone: "(415) 555-9012",
      hours: "5:30 AM - 7:00 PM",
      distance: "1.8 miles",
      features: ["Mobile Order", "Wifi"]
    },
    {
      id: 4,
      name: "Marina Location",
      address: "1234 Chestnut Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94123",
      phone: "(415) 555-3456",
      hours: "6:00 AM - 8:30 PM",
      distance: "2.5 miles",
      features: ["Drive-Thru", "Mobile Order", "Wifi", "Outdoor Seating"]
    }
  ];
  
  const featureOptions = [
    {
      id: "wifi",
      label: "Wi-Fi",
      icon: <Wifi className="h-4 w-4" />
    },
    {
      id: "mobile-order",
      label: "Mobile Order",
      icon: <Phone className="h-4 w-4" />
    },
    {
      id: "drive-thru",
      label: "Drive-Thru",
      icon: <Car className="h-4 w-4" />
    },
    {
      id: "outdoor-seating",
      label: "Outdoor Seating",
      icon: <Coffee className="h-4 w-4" />
    }
  ];
  
  const handleFilterChange = (id: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [id]: checked
    }));
  };
  
  // Filter stores based on search query and filters
  const filteredStores = stores.filter(store => {
    // Search filter
    const matchesSearch = searchQuery 
      ? store.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.zipCode.includes(searchQuery)
      : true;
    
    // Feature filters
    const matchesWifi = filters.wifi ? store.features.includes("Wifi") : true;
    const matchesMobileOrder = filters.mobileOrder ? store.features.includes("Mobile Order") : true;
    const matchesDriveThru = filters.driveThru ? store.features.includes("Drive-Thru") : true;
    const matchesOutdoorSeating = filters.outdoorSeating ? store.features.includes("Outdoor Seating") : true;
    
    return matchesSearch && matchesWifi && matchesMobileOrder && matchesDriveThru && matchesOutdoorSeating;
  });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic is already handled by the filteredStores variable
    console.log("Searching for:", searchQuery);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-4">Find a Store</h1>
        <p className="text-lg text-gray-600 mb-8">
          Locate your nearest StarBrew coffee shop and discover our amenities.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Search Stores</h2>
                <div className="space-y-4">
                  <form onSubmit={handleSearch}>
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input 
                        type="text" 
                        placeholder="City, state, or zip code" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full">Search</Button>
                    </div>
                  </form>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">Filter by Features</h3>
                    <div className="space-y-3">
                      {featureOptions.map(option => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={option.id} 
                            checked={filters[option.id as keyof typeof filters]}
                            onCheckedChange={(checked) => handleFilterChange(option.id, checked as boolean)}
                          />
                          <label
                            htmlFor={option.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                          >
                            {option.icon}
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 bg-starbucks-cream p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <CheckIcon className="h-4 w-4 mr-2 text-starbucks-green" />
                Pro Tip
              </h3>
              <p className="text-sm">
                Use the StarBrew app to find stores along your route or instantly order ahead at your favorite location.
              </p>
              <div className="mt-4">
                <Link to="/order">
                  <Button variant="outline" size="sm" className="w-full">
                    Get the App
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-lg h-[400px] mb-6 flex items-center justify-center">
              <div className="text-center">
                <img src="https://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/google-maps-street-view-california-la-los-angeles-spelling-embarrassing-1820896.jpg?r=1554891355302" 
                alt="Sample map preview" 
                className="h-full object-cover rounded-lg" 
                />
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">
              {filteredStores.length > 0 
                ? `${filteredStores.length} Store${filteredStores.length !== 1 ? 's' : ''} Found`
                : "No Stores Found"
              }
            </h2>
            
            <div className="space-y-4">
              {filteredStores.length > 0 ? (
                filteredStores.map(store => (
                  <Card key={store.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-3 p-6">
                          <Link to={`/store/${store.id}`} className="hover:text-starbucks-green">
                            <h3 className="text-lg font-semibold">{store.name}</h3>
                          </Link>
                          <p className="text-sm text-gray-500">{store.distance} away</p>
                          
                          <div className="mt-4 space-y-2">
                            <div className="flex items-start">
                              <MapPin className="h-4 w-4 mr-2 mt-1 text-starbucks-green shrink-0" />
                              <span className="text-sm">
                                {store.address}, {store.city}, {store.state} {store.zipCode}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-starbucks-green shrink-0" />
                              <span className="text-sm">{store.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-starbucks-green shrink-0" />
                              <span className="text-sm">{store.hours}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {store.features.map((feature, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-gray-100 text-gray-800"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-1 flex flex-col justify-between border-t md:border-t-0 md:border-l p-4">
                          <a 
                            href={`https://maps.google.com/?q=${store.address},${store.city},${store.state}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="w-full mb-2">Directions</Button>
                          </a>
                          <Link to={`/store/${store.id}`}>
                            <Button variant="outline" className="w-full">View Details</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <MapPin className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                  <h3 className="text-lg font-medium mb-2">No Stores Found</h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your search criteria or filters.
                  </p>
                </div>
              )}
            </div>
            
            {filteredStores.length > 0 && (
              <div className="mt-6 text-center">
                <Button variant="outline">Load More Stores</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
