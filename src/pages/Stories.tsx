
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { SearchIcon } from "lucide-react";

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const featuredStories = [
    {
      id: "story-001",
      slug: "coffee-origins-ethiopia",
      title: "The Origins of Coffee: Ethiopia's Ancient Gift",
      excerpt: "Discover the legendary beginnings of coffee in the ancient highlands of Ethiopia and how it changed the world forever.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1056&q=80",
      category: "Coffee History",
      date: "May 15, 2023",
      readTime: "5 min read"
    },
    {
      id: "story-002",
      slug: "sustainable-farming-practices",
      title: "Sustainable Farming Practices in Modern Coffee Production",
      excerpt: "How our partner farms are implementing innovative techniques to reduce environmental impact while improving coffee quality.",
      image: "https://images.unsplash.com/photo-1499744937866-d7e566a20a61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Sustainability",
      date: "June 3, 2023",
      readTime: "8 min read"
    },
    {
      id: "story-003",
      slug: "brewing-perfect-cup",
      title: "The Art of Brewing: Creating Your Perfect Cup at Home",
      excerpt: "Our master baristas share their secrets for brewing cafe-quality coffee in your own kitchen with simple techniques.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Brewing Tips",
      date: "June 21, 2023",
      readTime: "6 min read"
    }
  ];
  
  const recentStories = [
    {
      id: "story-004",
      slug: "new-summer-drinks",
      title: "Introducing Our New Summer Drink Collection",
      excerpt: "Beat the heat with our refreshing new lineup of cold beverages, from fruity iced teas to decadent frozen coffees.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      category: "Product News",
      date: "July 1, 2023",
      readTime: "4 min read"
    },
    {
      id: "story-005",
      slug: "interview-coffee-farmer",
      title: "Meet Maria: The Woman Revolutionizing Coffee Farming in Colombia",
      excerpt: "An exclusive interview with Maria Gonzalez, whose innovative approach to coffee farming is setting new standards in the industry.",
      image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "People",
      date: "July 12, 2023",
      readTime: "10 min read"
    },
    {
      id: "story-006",
      slug: "coffee-health-benefits",
      title: "The Science-Backed Health Benefits of Daily Coffee Consumption",
      excerpt: "Recent research reveals how moderate coffee drinking contributes to longevity, cognitive function, and overall well-being.",
      image: "https://images.unsplash.com/photo-1583036422024-f9402a6d2b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      category: "Wellness",
      date: "July 23, 2023",
      readTime: "7 min read"
    }
  ];
  
  const allCategories = [
    "Coffee History", "Sustainability", "Brewing Tips", "Product News", 
    "People", "Wellness", "Community", "Events", "Recipes"
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === "") {
      toast("Please enter a search term");
      return;
    }
    
    toast(`Searching for "${searchTerm}"...`);
    // In a real app, this would navigate to search results
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="bg-starbucks-green text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">StarBrew Stories</h1>
          <p className="text-lg max-w-2xl">
            Discover the stories behind our coffee, our people, and our commitment to creating a better future.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Button 
              type="submit" 
              variant="ghost" 
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <SearchIcon className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Link to={`/article/${story.slug}`}>
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-starbucks-green">{story.category}</span>
                    <span className="text-xs text-gray-500">{story.readTime}</span>
                  </div>
                  <Link to={`/article/${story.slug}`}>
                    <h3 className="text-xl font-bold mb-2 hover:text-starbucks-green transition-colors">{story.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{story.date}</span>
                    <Link to={`/article/${story.slug}`} className="text-starbucks-green font-medium hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentStories.map((story) => (
              <div key={story.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <Link to={`/article/${story.slug}`}>
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-starbucks-green">{story.category}</span>
                    <span className="text-xs text-gray-500">{story.readTime}</span>
                  </div>
                  <Link to={`/article/${story.slug}`}>
                    <h3 className="text-lg font-bold mb-2 hover:text-starbucks-green transition-colors">{story.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{story.date}</span>
                    <Link to={`/article/${story.slug}`} className="text-starbucks-green font-medium hover:underline text-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-starbucks-green text-starbucks-green hover:bg-starbucks-green hover:text-white">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          
          <div className="flex flex-wrap gap-3">
            {allCategories.map((category) => (
              <Link 
                key={category} 
                to={`/stories/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white rounded-full border hover:border-starbucks-green hover:text-starbucks-green transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-starbucks-cream">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Up to Date</h2>
          <p className="mb-6 text-gray-700">
            Subscribe to our newsletter to receive the latest stories and updates directly in your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => {
            e.preventDefault();
            toast("Newsletter subscription successful!");
          }}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow" 
              required
            />
            <Button type="submit" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Stories;
