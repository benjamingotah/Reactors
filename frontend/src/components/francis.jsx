import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

// Sample product list
const products = [
  {
    id: "p1",
    name: "Wireless Bluetooth Earbuds",
    price: 79.99,
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
  },
  {
    id: "p2",
    name: "Stainless Steel Water Bottle",
    price: 24.95,
    category: "Home",
    inStock: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
  },
  {
    id: "p3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    inStock: false,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: "p4",
    name: "Smart LED TV 55-inch",
    price: 599.99,
    category: "Electronics",
    inStock: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6"
  },
  {
    id: "p5",
    name: "Yoga Mat",
    price: 34.50,
    category: "Fitness",
    inStock: true,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e"
  },
  {
    id: "p6",
    name: "Electric Toothbrush",
    price: 49.99,
    category: "Health",
    inStock: false,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137"
  },
  {
    id: "p7",
    name: "Hardcover Notebook",
    price: 12.99,
    category: "Office",
    inStock: true,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
  },
  {
    id: "p8",
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    category: "Electronics",
    inStock: true,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb"
  },
  {
    id: "p9",
    name: "Non-Stick Cooking Pan Set",
    price: 129.99,
    category: "Kitchen",
    inStock: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1583778176476-4a8b02b64b1b"
  },
  {
    id: "p10",
    name: "Fitness Tracker Watch",
    price: 59.95,
    category: "Fitness",
    inStock: false,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  }
];

// Card component for displaying product info
const Card = ({ name, img, rate, price, inStock, category }) => {
  // Function to render star ratings based on value
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    }

    // Remaining empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* In-stock or out-of-stock badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
          inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </div>

        {/* Product Category */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs">
          {category}
        </div>

        {/* Wishlist icon */}
        <button className="absolute bottom-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Product Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2 h-14 flex items-start">
          {name}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex gap-0.5">
            {renderStars(rate)}
          </div>
          <span className="text-sm text-gray-600 ml-1">({rate})</span>
        </div>

        {/* Product Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">
            ${price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-auto">
          <button
            disabled={!inStock}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              inStock
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main product component
const Productfrancis = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
          <p className="text-gray-600">Discover amazing products at great prices</p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              img={product.image}
              rate={product.rating}
              price={product.price}
              inStock={product.inStock}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productfrancis;
