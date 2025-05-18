
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, ArrowLeft, Coffee, Wifi, Car, ExternalLink, Share2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StoreDetail = () => {
  const { storeId } = useParams();
  
  // Sample store data - in a real app, this would come from an API
  const storeData = {
    id: storeId || "1",
    name: "Downtown Cafe",
    address: "123 Main Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    phone: "(415) 555-1234",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    rating: 4.7,
    reviewCount: 128,
    hours: {
      monday: "5:00 AM - 9:00 PM",
      tuesday: "5:00 AM - 9:00 PM",
      wednesday: "5:00 AM - 9:00 PM",
      thursday: "5:00 AM - 9:00 PM",
      friday: "5:00 AM - 10:00 PM",
      saturday: "6:00 AM - 10:00 PM",
      sunday: "6:00 AM - 8:00 PM"
    },
    features: [
      { name: "Mobile Order", available: true },
      { name: "Drive-Thru", available: true },
      { name: "Wifi", available: true },
      { name: "Outdoor Seating", available: true },
      { name: "Power Outlets", available: true },
      { name: "Restrooms", available: true },
      { name: "Loyalty Card", available: true },
      { name: "Breakfast", available: true },
      { name: "Lunch", available: true }
    ],
    photos: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=800&auto=format&fit=crop&q=80"
    ],
    reviews: [
      {
        id: 1,
        author: "Jennifer L.",
        date: "May 10, 2023",
        rating: 5,
        text: "Love this location! The staff is always friendly and my mobile orders are ready on time. The outdoor seating area is perfect for sunny days."
      },
      {
        id: 2,
        author: "Michael R.",
        date: "April 28, 2023",
        rating: 4,
        text: "Great location with fast drive-thru service. The only reason for 4 stars is because it gets crowded in the mornings, but that's to be expected."
      },
      {
        id: 3,
        author: "Sarah T.",
        date: "April 15, 2023",
        rating: 5,
        text: "My favorite StarBrew location. The staff knows my order by heart, and the cafe is always clean and well-maintained."
      }
    ]
  };
  
  const getFeatureIcon = (featureName: string) => {
    switch (featureName) {
      case "Mobile Order":
        return <Phone className="h-4 w-4" />;
      case "Drive-Thru":
        return <Car className="h-4 w-4" />;
      case "Wifi":
        return <Wifi className="h-4 w-4" />;
      case "Outdoor Seating":
      case "Indoor Seating":
        return <Coffee className="h-4 w-4" />;
      default:
        return <Coffee className="h-4 w-4" />;
    }
  };
  
  const getRatingStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`h-5 w-5 ${star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} ${star === Math.ceil(rating) && !Number.isInteger(rating) ? 'text-yellow-400' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {star <= rating ? (
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            ) : (
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            )}
          </svg>
        ))}
      </div>
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/store-locator" className="text-gray-500 hover:text-gray-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store Locator
          </Link>
        </Button>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-starbucks-green mb-2">{storeData.name}</h1>
            <p className="text-gray-600 mb-2">
              {storeData.address}, {storeData.city}, {storeData.state} {storeData.zipCode}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {getRatingStars(storeData.rating)}
                <span className="ml-2 text-gray-700">{storeData.rating}</span>
              </div>
              <span className="text-gray-500">({storeData.reviewCount} reviews)</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button>
              Order Now
            </Button>
            <Button variant="outline">
              Directions
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-200 rounded-lg h-[400px] mb-6 relative overflow-hidden">
              <img 
                src={storeData.photos[0]} 
                alt={storeData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4">
                <Button size="sm" variant="outline" className="bg-white/90">
                  View Photos
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-8">
              {storeData.photos.slice(1, 4).map((photo, index) => (
                <div key={index} className="h-24 rounded-md overflow-hidden">
                  <img 
                    src={photo} 
                    alt={`${storeData.name} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <Tabs defaultValue="info">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="info">Information</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="menu">Menu</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-starbucks-green" />
                          Hours of Operation
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Monday</span>
                            <span className="font-medium">{storeData.hours.monday}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Tuesday</span>
                            <span className="font-medium">{storeData.hours.tuesday}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Wednesday</span>
                            <span className="font-medium">{storeData.hours.wednesday}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Thursday</span>
                            <span className="font-medium">{storeData.hours.thursday}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Friday</span>
                            <span className="font-medium">{storeData.hours.friday}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Saturday</span>
                            <span className="font-medium">{storeData.hours.saturday}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Sunday</span>
                            <span className="font-medium">{storeData.hours.sunday}</span>
                          </li>
                        </ul>
                        
                        <div className="mt-6">
                          <h3 className="font-semibold text-lg mb-4 flex items-center">
                            <Phone className="mr-2 h-5 w-5 text-starbucks-green" />
                            Contact Information
                          </h3>
                          <p className="mb-2">
                            <a href={`tel:${storeData.phone}`} className="hover:text-starbucks-green">
                              {storeData.phone}
                            </a>
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Store
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Store Amenities</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {storeData.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Badge 
                                variant={feature.available ? "default" : "outline"}
                                className={feature.available ? "bg-starbucks-green" : ""}
                              >
                                {getFeatureIcon(feature.name)}
                                <span className="ml-1">{feature.name}</span>
                              </Badge>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6">
                          <h3 className="font-semibold text-lg mb-4 flex items-center">
                            <MapPin className="mr-2 h-5 w-5 text-starbucks-green" />
                            Address
                          </h3>
                          <p className="mb-2">
                            {storeData.address}<br />
                            {storeData.city}, {storeData.state} {storeData.zipCode}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <Button size="sm" variant="outline">
                              <MapPin className="mr-2 h-4 w-4" />
                              Get Directions
                            </Button>
                            <Button size="sm" variant="outline">
                              <Share2 className="mr-2 h-4 w-4" />
                              Share Location
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold">Customer Reviews</h3>
                        <div className="flex items-center mt-1">
                          {getRatingStars(storeData.rating)}
                          <span className="ml-2">{storeData.rating} out of 5</span>
                        </div>
                      </div>
                      <Button>Write a Review</Button>
                    </div>
                    
                    <div className="space-y-6 divide-y">
                      {storeData.reviews.map((review) => (
                        <div key={review.id} className="pt-6 first:pt-0">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{review.author}</span>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                          <div className="mb-2">
                            {getRatingStars(review.rating)}
                          </div>
                          <p className="text-gray-700">{review.text}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="outline">Load More Reviews</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="menu" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold">Store Menu</h3>
                      <Button asChild>
                        <Link to="/menu">
                          View Full Menu <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <p className="text-gray-600">
                      Explore our full menu online or visit the store to see daily specials and seasonal offerings.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <Button variant="outline" className="h-auto py-6 flex flex-col">
                        <Coffee className="h-10 w-10 mb-2" />
                        <span>Hot Drinks</span>
                      </Button>
                      <Button variant="outline" className="h-auto py-6 flex flex-col">
                        <svg className="h-10 w-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 8h-12a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-10a2 2 0 00-2-2z" />
                          <path d="M14 2l-4 4-4-4" />
                        </svg>
                        <span>Cold Drinks</span>
                      </Button>
                      <Button variant="outline" className="h-auto py-6 flex flex-col">
                        <svg className="h-10 w-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                        </svg>
                        <span>Food</span>
                      </Button>
                      <Button variant="outline" className="h-auto py-6 flex flex-col">
                        <svg className="h-10 w-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" />
                        </svg>
                        <span>Seasonal</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Location</h3>
                <div className="bg-gray-200 h-[200px] rounded-md flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-gray-400" />
                </div>
                <Button className="w-full">Get Directions</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Store Contact</h3>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <Phone className="h-5 w-5 mr-2 mt-0.5 text-starbucks-green" />
                    <span>{storeData.phone}</span>
                  </p>
                  <p className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-starbucks-green" />
                    <span>
                      {storeData.address}, {storeData.city},<br />
                      {storeData.state} {storeData.zipCode}
                    </span>
                  </p>
                  <p className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-starbucks-green" />
                    <span>
                      <span className="font-medium">Today:</span> {storeData.hours.monday}
                    </span>
                  </p>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full mb-2">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Store
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Nearby StarBrew Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="font-medium">Union Square</h3>
                  <p className="text-sm text-gray-500 mb-2">1.2 miles away</p>
                  <p className="text-xs text-gray-600 mb-4">456 Market Street, San Francisco</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs px-2">Directions</Button>
                    <Button size="sm" className="text-xs px-2">Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
