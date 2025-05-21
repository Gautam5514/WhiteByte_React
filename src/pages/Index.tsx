
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const Index = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Apply filters when dependencies change
  useEffect(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter((product) => 
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price range
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(result);
  }, [searchQuery, selectedCategories, priceRange]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">Logo</div>
          
          <div className="relative flex-1 mx-4 md:mx-8 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 pr-10 rounded text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <div 
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar 
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Product Listing */}
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No products found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold mb-2">Filters</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="text-sm bg-blue-800 px-2 py-1 rounded">All</span>
                <span className="text-sm bg-blue-800 px-2 py-1 rounded">Electronics</span>
              </div>
            </div>
            
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold mb-2">About Us</h3>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="text-white hover:text-blue-300">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">f</div>
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">t</div>
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">i</div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-sm">
            © 2024 American
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
