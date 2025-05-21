
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, Trash } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center text-white mr-4"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-xl font-bold">Shopping Cart</h1>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button 
              onClick={() => navigate("/")}
              variant="outline"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="py-3 px-4 text-left">Product</th>
                      <th className="py-3 px-4 text-center">Quantity</th>
                      <th className="py-3 px-4 text-right">Price</th>
                      <th className="py-3 px-4 text-right">Total</th>
                      <th className="py-3 px-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <tr key={item.product.id}>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <img 
                              src={item.product.image} 
                              alt={item.product.title} 
                              className="w-16 h-16 object-contain mr-4"
                            />
                            <div>
                              <h3 className="font-medium">{item.product.title}</h3>
                              <p className="text-sm text-gray-500">{item.product.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-center">
                            <button 
                              className="w-8 h-8 border border-gray-300 rounded-l flex items-center justify-center"
                              onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            >
                              -
                            </button>
                            <div className="w-10 h-8 border-t border-b border-gray-300 flex items-center justify-center">
                              {item.quantity}
                            </div>
                            <button 
                              className="w-8 h-8 border border-gray-300 rounded-r flex items-center justify-center"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          ${item.product.price}
                        </td>
                        <td className="py-4 px-4 text-right font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-blue-900 text-white p-6 mt-8">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>© 2024 American</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
