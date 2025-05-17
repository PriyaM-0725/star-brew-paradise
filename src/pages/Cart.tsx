
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/utils/format";
import { toast } from "sonner";
import { Trash2, MinusCircle, PlusCircle, ArrowLeft, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleCheckout = () => {
    if (!user) {
      toast("Please sign in to checkout");
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
    
    setIsProcessing(true);
    
    // In a real app, this would call an API to process the order
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      navigate("/orders");
      setIsProcessing(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Link to="/menu" className="flex items-center text-starbucks-green hover:text-starbucks-darkGreen mr-4">
            <ArrowLeft size={18} className="mr-1" />
            <span>Continue shopping</span>
          </Link>
          <h1 className="text-2xl font-bold">Your Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow sm:ml-4 mt-4 sm:mt-0 flex flex-col justify-between">
                        <div>
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{item.product.description}</p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="text-gray-500 hover:text-starbucks-green"
                              aria-label="Decrease quantity"
                            >
                              <MinusCircle size={20} />
                            </button>
                            <span className="mx-3 w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="text-gray-500 hover:text-starbucks-green"
                              aria-label="Increase quantity"
                            >
                              <PlusCircle size={20} />
                            </button>
                          </div>
                          
                          <div className="flex items-center">
                            <span className="mr-4 font-medium">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-red-500"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 border-t">
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-medium">{formatPrice(cartTotal * 0.08)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal * 1.08)}</span>
                </div>
                
                {/* Promo Code */}
                <div className="mt-6">
                  <label htmlFor="promo-code" className="text-sm font-medium text-gray-700">
                    Promo Code
                  </label>
                  <div className="mt-1 flex">
                    <Input
                      type="text"
                      id="promo-code"
                      name="promo-code"
                      placeholder="Enter promo code"
                      className="flex-grow"
                    />
                    <Button variant="outline" className="ml-2">
                      Apply
                    </Button>
                  </div>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="w-full bg-starbucks-green hover:bg-starbucks-darkGreen py-6"
                >
                  {isProcessing ? "Processing..." : `Checkout • ${formatPrice(cartTotal * 1.08)}`}
                </Button>
                
                {!user && (
                  <p className="text-sm text-gray-500 text-center mt-2">
                    <Link to="/login" className="text-starbucks-green hover:underline">
                      Sign in
                    </Link>{" "}
                    to earn rewards points with your purchase.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmptyCart = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center">
    <div className="bg-gray-100 p-6 rounded-full mb-6">
      <ShoppingBag size={64} className="text-starbucks-green" />
    </div>
    <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
    <p className="text-gray-600 mb-6 text-center">
      Add some delicious items from our menu to get started.
    </p>
    <Link to="/menu">
      <Button size="lg" className="bg-starbucks-green hover:bg-starbucks-darkGreen">
        Browse Menu
      </Button>
    </Link>
  </div>
);

export default Cart;
