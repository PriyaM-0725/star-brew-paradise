
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");
  
  useEffect(() => {
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [categoryParam]);

  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory);
    if (newCategory === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", newCategory);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-starbucks-green text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Menu</h1>
          <p className="text-center text-lg max-w-2xl mx-auto">
            From our signature coffee drinks to delicious bakery items, there's something for everyone.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={activeCategory} onValueChange={handleCategoryChange} value={activeCategory}>
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="all" className="px-4 py-2">
                  All Items
                </TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">Try selecting a different category.</p>
                  <Button 
                    onClick={() => handleCategoryChange("all")} 
                    className="bg-starbucks-green hover:bg-starbucks-darkGreen"
                  >
                    View All Products
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">The StarBrew Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Ethically Sourced"
              description="All of our coffee beans come from ethical and sustainable sources."
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-starbucks-green">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" />
                </svg>
              }
            />
            <FeatureCard 
              title="Handcrafted Drinks"
              description="Each drink is carefully prepared by our skilled baristas."
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-starbucks-green">
                  <path d="M21 7H3" stroke="currentColor" strokeWidth="2" />
                  <path d="M18 2H6V7H18V2Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 7V14C6 16.7614 8.23858 19 11 19H13C15.7614 19 18 16.7614 18 14V7" stroke="currentColor" strokeWidth="2" />
                  <path d="M11 19V22" stroke="currentColor" strokeWidth="2" />
                  <path d="M13 19V22" stroke="currentColor" strokeWidth="2" />
                </svg>
              }
            />
            <FeatureCard 
              title="Fresh Daily"
              description="Our pastries and food items are fresh and delivered daily."
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-starbucks-green">
                  <path d="M12 2V4" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 20V22" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 12H2" stroke="currentColor" strokeWidth="2" />
                  <path d="M22 12H20" stroke="currentColor" strokeWidth="2" />
                  <path d="M19.0784 4.92163L17.6642 6.33584" stroke="currentColor" strokeWidth="2" />
                  <path d="M6.34 17.6569L4.92579 19.0711" stroke="currentColor" strokeWidth="2" />
                  <path d="M19.0784 19.0784L17.6642 17.6642" stroke="currentColor" strokeWidth="2" />
                  <path d="M6.34 6.34318L4.92579 4.92897" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for feature cards
const FeatureCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode 
}) => (
  <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Menu;
