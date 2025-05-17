
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-starbucks-cream py-12 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-starbucks-green">
              It's not just coffee,<br />it's <span className="italic">StarBrew</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Discover our handcrafted beverages, delicious food, and unique coffee experience made just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button size="lg" className="bg-starbucks-green hover:bg-starbucks-darkGreen">
                  Explore Our Menu
                </Button>
              </Link>
              <Link to="/rewards">
                <Button size="lg" variant="outline" className="border-starbucks-green text-starbucks-green hover:bg-starbucks-green/10">
                  Join Rewards
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="StarBrew Coffee Experience" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-starbucks-brown">Discover Our Menu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                to={`/menu?category=${category.id}`} 
                key={category.id}
                className="group"
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="h-48 bg-starbucks-green/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-starbucks-green flex items-center justify-center text-white">
                      <CategoryIcon categoryId={category.id} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-starbucks-green transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Banner */}
      <section className="py-16 bg-starbucks-green text-white banner-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">StarBrew Rewards</h2>
              <p className="text-lg mb-6 text-white/90">
                Join StarBrew Rewards to earn Stars for free food and drinks, get free refills, pay and order with your phone, and more.
              </p>
              <Link to="/rewards">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-starbucks-green">
                  Join Now
                </Button>
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-starbucks-green">
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Order Promo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h2 className="text-3xl font-bold mb-4 text-starbucks-brown">Order Ahead, Skip the Line</h2>
              <p className="text-lg mb-6 text-gray-700">
                Save time by ordering your favorites ahead on our mobile app. Pick up your order at the store without waiting in line.
              </p>
              <Button size="lg" className="bg-starbucks-green hover:bg-starbucks-darkGreen">
                Download App
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Mobile Ordering" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for category icons
const CategoryIcon = ({ categoryId }: { categoryId: string }) => {
  switch (categoryId) {
    case 'hot-coffees':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M2 8H18V16C18 19.3137 15.3137 22 12 22H8C4.68629 22 2 19.3137 2 16V8Z" stroke="currentColor" strokeWidth="2" />
          <path d="M18 8H22" stroke="currentColor" strokeWidth="2" />
          <path d="M6 2V5" stroke="currentColor" strokeWidth="2" />
          <path d="M10 2V5" stroke="currentColor" strokeWidth="2" />
          <path d="M14 2V5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'cold-coffees':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M6 2L6 11" stroke="currentColor" strokeWidth="2" />
          <path d="M18 6L18 16" stroke="currentColor" strokeWidth="2" />
          <path d="M5 22H15C16.1046 22 17 21.1046 17 20V14C17 12.8954 16.1046 12 15 12H5C3.89543 12 3 12.8954 3 14V20C3 21.1046 3.89543 22 5 22Z" stroke="currentColor" strokeWidth="2" />
          <path d="M17 16H21" stroke="currentColor" strokeWidth="2" />
          <path d="M14 8L2 8" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'bakery':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M8.5 14C11.5376 14 14 11.5376 14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14Z" stroke="currentColor" strokeWidth="2" />
          <path d="M7 8.5H10" stroke="currentColor" strokeWidth="2" />
          <path d="M8.5 7V10" stroke="currentColor" strokeWidth="2" />
          <path d="M4 18L6.5 15.5" stroke="currentColor" strokeWidth="2" />
          <path d="M14 18L11.5 15.5" stroke="currentColor" strokeWidth="2" />
          <path d="M4 18C4 19.1046 4.89543 20 6 20H12C13.1046 20 14 19.1046 14 18" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M12 6V19" stroke="currentColor" strokeWidth="2" />
          <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
};

export default Home;
