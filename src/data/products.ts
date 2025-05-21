
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    description: "Comfortable running shoes for everyday use. Lightweight and durable with excellent cushioning.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 149,
    description: "Premium wireless headphones with noise-cancellation technology and long battery life.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: { rate: 4.3, count: 259 }
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    description: "Durable backpack with multiple compartments, suitable for travel, school, or everyday use.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: { rate: 4.8, count: 95 }
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    description: "Advanced smartwatch with health monitoring features, GPS, and water resistance.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80",
    rating: { rate: 4.6, count: 136 }
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    description: "Stylish sunglasses with UV protection, perfect for outdoor activities and everyday wear.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    rating: { rate: 4.4, count: 78 }
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    description: "High-quality digital camera with multiple shooting modes and 4K video recording capability.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
    rating: { rate: 4.7, count: 89 }
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    description: "Comfortable cotton t-shirt available in various colors and sizes.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    rating: { rate: 4.1, count: 207 }
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    description: "Latest model smartphone with advanced camera system, fast processor, and long battery life.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80",
    rating: { rate: 4.9, count: 341 }
  }
];
