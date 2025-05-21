
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white p-4 rounded shadow-sm border border-gray-100 flex flex-col">
      <div 
        className="cursor-pointer mb-3" 
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain"
        />
      </div>
      
      <h3 
        className="font-medium text-lg cursor-pointer" 
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {product.title}
      </h3>
      
      <div className="text-xl font-bold my-2">
        ${product.price}
      </div>
      
      <Button 
        className="mt-auto bg-blue-600 hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
