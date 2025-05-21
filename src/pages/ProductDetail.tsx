
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { ChevronLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button 
          onClick={() => navigate("/")}
          variant="outline"
        >
          Return to Home
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
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
          <h1 className="text-xl font-bold">Product Details</h1>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-md border border-gray-200">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto max-h-[400px] object-contain mx-auto"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <div className="text-3xl font-bold text-blue-600 mb-4">
              ${product.price}
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
                {product.category}
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Quantity</h2>
              <div className="flex items-center">
                <button 
                  className="w-10 h-10 border border-gray-300 rounded-l flex items-center justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button 
                  className="w-10 h-10 border border-gray-300 rounded-r flex items-center justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
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

export default ProductDetail;
