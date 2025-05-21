
import { Slider } from "@/components/ui/slider";

interface SidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const Sidebar = ({ 
  selectedCategories, 
  setSelectedCategories,
  priceRange,
  setPriceRange
}: SidebarProps) => {
  const categories = ["Electronics", "Clothing", "Home"];
  
  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      setSelectedCategories([]);
      return;
    }
    
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };
  
  return (
    <aside className="w-full md:w-60 bg-white p-4 border-r border-gray-200">
      <div className="bg-blue-600 text-white rounded p-4 mb-4">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        
        <div className="mb-6">
          <h3 className="mb-2 font-medium">Category</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                type="radio"
                id="all"
                name="category"
                className="h-4 w-4"
                checked={selectedCategories.length === 0}
                onChange={() => handleCategoryChange("All")}
              />
              <label htmlFor="all" className="ml-2">All</label>
            </div>
            
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <input 
                  type="radio"
                  id={category}
                  name="category"
                  className="h-4 w-4"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={category} className="ml-2">{category}</label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="mb-2 font-medium">Price</h3>
          <Slider
            defaultValue={[priceRange[0], priceRange[1]]}
            max={1000}
            step={10}
            onValueChange={handlePriceChange}
            className="my-4"
          />
          <div className="flex justify-between text-sm">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="font-bold mb-2">Cacyroy</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <input 
              type="radio"
              id="cacyroy-all"
              name="cacyroy"
              className="h-4 w-4"
              checked
              readOnly
            />
            <label htmlFor="cacyroy-all" className="ml-2">All</label>
          </div>
          
          {categories.map((category) => (
            <div key={`cacyroy-${category}`} className="flex items-center">
              <input 
                type="radio"
                id={`cacyroy-${category}`}
                name="cacyroy"
                className="h-4 w-4"
              />
              <label htmlFor={`cacyroy-${category}`} className="ml-2">{category}</label>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <h3 className="mb-2 font-medium">Price</h3>
          <div className="border border-gray-300 rounded py-1 px-2 flex justify-between items-center">
            <span>5000</span>
            <span>:</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
