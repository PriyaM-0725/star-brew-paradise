import { Product } from "@/context/CartContext";

export const products: Product[] = [
  // Hot Coffees
  {
    id: "coffee-1",
    name: "Caffe Americano",
    description: "Espresso shots topped with hot water create a light layer of crema.",
    price: 3.25,
    image: "https://images.unsplash.com/photo-1587985782608-20062892559d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "hot-coffees"
  },
  {
    id: "coffee-2",
    name: "Blonde Roast",
    description: "Lightly roasted coffee that's soft, mellow and flavorful.",
    price: 2.95,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500&auto=format&fit=crop",
    category: "hot-coffees"
  },
  {
    id: "coffee-3",
    name: "Pike Place® Roast",
    description: "Our signature medium-roasted coffee with notes of cocoa and toasted nuts.",
    price: 2.95,
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=500&auto=format&fit=crop",
    category: "hot-coffees"
  },
  {
    id: "coffee-4",
    name: "Dark Roast Coffee",
    description: "Full-bodied dark roast coffee with bold, robust flavors.",
    price: 2.95,
    image: "https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=500&auto=format&fit=crop",
    category: "hot-coffees"
  },
  {
    id: "coffee-5",
    name: "Caffe Latte",
    description: "Rich, full-bodied espresso with bittersweet milk and steamed milk.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=500&auto=format&fit=crop",
    category: "hot-coffees"
  },

  // Cold Coffees
  {
    id: "cold-1",
    name: "Iced Coffee",
    description: "Freshly brewed and served chilled over ice.",
    price: 3.45,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=500&auto=format&fit=crop",
    category: "cold-coffees"
  },
  {
    id: "cold-2",
    name: "Cold Brew",
    description: "Slow-steeped, small-batch and super smooth.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=500&auto=format&fit=crop",
    category: "cold-coffees"
  },
  {
    id: "cold-3",
    name: "Nitro Cold Brew",
    description: "Cold brew coffee infused with nitrogen for a naturally sweet flavor and velvety smooth texture.",
    price: 4.45,
    image: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?q=80&w=500&auto=format&fit=crop",
    category: "cold-coffees"
  },
  {
    id: "cold-4",
    name: "Vanilla Sweet Cream Cold Brew",
    description: "Cold brew topped with vanilla-flavored sweet cream.",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1570470752323-008a24a061b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cold-coffees"
  },
  {
    id: "cold-5",
    name: "Iced Caramel Macchiato",
    description: "Espresso combined with vanilla-flavored syrup, milk and caramel sauce over ice.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1662047102608-a6f2e492411f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYW1lbCUyMG1hY2NoaWF0b3xlbnwwfHwwfHx8MA%3D%3D",
    category: "cold-coffees"
  },

  // Bakery Items
  {
    id: "bakery-1",
    name: "Butter Croissant",
    description: "Classic butter croissant with a soft, flaky texture.",
    price: 3.25,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500&auto=format&fit=crop",
    category: "bakery"
  },
  {
    id: "bakery-2",
    name: "Chocolate Croissant",
    description: "Butter croissant filled with chocolate-hazelnut paste.",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=500&auto=format&fit=crop",
    category: "bakery"
  },
  {
    id: "bakery-3",
    name: "Blueberry Muffin",
    description: "Buttery muffin with blueberries, topped with granulated sugar.",
    price: 3.45,
    image: "https://images.unsplash.com/photo-1637087788517-c63086ec5b7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "bakery"
  },
  {
    id: "bakery-4",
    name: "Classic Coffee Cake",
    description: "Buttery, moist coffee cake topped with cinnamon-sugar streusel.",
    price: 3.95,
    image: "https://images.unsplash.com/photo-1534432182912-63863115e106?q=80&w=500&auto=format&fit=crop",
    category: "bakery"
  },
  {
    id: "bakery-5",
    name: "Banana Nut Bread",
    description: "Banana bread topped with walnuts.",
    price: 3.65,
    image: "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?q=80&w=500&auto=format&fit=crop",
    category: "bakery"
  }
];

export const categories = [
  {
    id: "hot-coffees",
    name: "Hot Coffees",
    description: "Smooth, bold coffee classics."
  },
  {
    id: "cold-coffees",
    name: "Cold Coffees",
    description: "Refreshing cold coffees for any time of day."
  },
  {
    id: "bakery",
    name: "Bakery",
    description: "Delightful pastries to pair with your coffee."
  }
];
