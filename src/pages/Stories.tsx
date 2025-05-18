
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Stories = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const stories = [
    {
      title: "From Beans to Cup: The Journey of Our Coffee",
      date: "May 15, 2023",
      category: "Coffee Culture",
      excerpt: "Follow the remarkable journey of our signature beans from sustainable farms to your morning cup.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=640&auto=format&fit=crop",
      slug: "from-beans-to-cup"
    },
    {
      title: "Meet Maria: The Master Roaster Behind Our Signature Blend",
      date: "April 23, 2023",
      category: "People",
      excerpt: "With 15 years of experience, Maria has perfected the art of roasting to bring out unique flavor profiles.",
      image: "https://images.unsplash.com/photo-1559305616-3f9f5a13f211?q=80&w=640&auto=format&fit=crop",
      slug: "meet-maria-master-roaster"
    },
    {
      title: "How We're Reducing Our Environmental Footprint",
      date: "March 10, 2023",
      category: "Sustainability",
      excerpt: "From compostable cups to energy-efficient stores, discover our ongoing sustainability initiatives.",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=640&auto=format&fit=crop",
      slug: "reducing-environmental-footprint"
    },
    {
      title: "Introducing Our New Summer Menu",
      date: "June 1, 2023",
      category: "Product News",
      excerpt: "Refreshing drinks and delightful treats perfect for the summer season are now available at all locations.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=640&auto=format&fit=crop",
      slug: "new-summer-menu"
    },
    {
      title: "Community Spotlight: Local Artists Exhibition",
      date: "May 5, 2023",
      category: "Community",
      excerpt: "StarBrew partners with local artists to showcase their work in our downtown locations.",
      image: "https://images.unsplash.com/photo-1607410072158-da6e4f9ef548?q=80&w=640&auto=format&fit=crop",
      slug: "community-spotlight-artists"
    },
    {
      title: "The Science of the Perfect Espresso",
      date: "April 12, 2023",
      category: "Coffee Education",
      excerpt: "Our coffee experts break down the precise techniques behind pulling the perfect shot of espresso.",
      image: "https://images.unsplash.com/photo-1572286258217-215b98b0d184?q=80&w=640&auto=format&fit=crop",
      slug: "science-of-perfect-espresso"
    }
  ];

  const categories = ["All", "Coffee Culture", "People", "Sustainability", "Product News", "Community", "Coffee Education"];
  
  // Filter stories based on active category
  const filteredStories = activeCategory === "All" 
    ? stories 
    : stories.filter(story => story.category === activeCategory);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-4">Stories & News</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest stories, news, and updates from StarBrew Coffee.
        </p>
        
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={category === activeCategory ? "default" : "outline"}
              className="whitespace-nowrap"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <Link to={`/article/${story.slug}`} className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-starbucks-green font-medium">{story.category}</span>
                  <span className="text-xs text-gray-500">{story.date}</span>
                </div>
                <CardTitle>
                  <Link to={`/article/${story.slug}`} className="hover:text-starbucks-green transition-colors">
                    {story.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{story.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/article/${story.slug}`}>
                  <Button variant="ghost" className="hover:text-starbucks-green">
                    Read More →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button onClick={() => toast({ title: "Coming soon", description: "More stories will be added soon!" })}>
            Load More Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
