import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Truck, RotateCcw, ChevronDown, Search, User } from 'lucide-react';
import Banner from "./Banner"

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const productImages = [
     'https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg',
    'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg', // Main product image
    'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg', // Alternative view
    // Detail shot
  ];


  const StarRating = ({ rating, size = "w-4 h-4" }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-sm">
        <div className="w-full mx-auto px-4 py-2 flex justify-between items-center">
          <span>100% AUTHENTIC PERFUMES ONLY</span>
          <span>FREE SHIPPING ON EVERY ORDER</span>
          <span>Join Our Whatsapp Community for exclusive deals..</span>
        </div>
      </div>

      {/* Header */}
      <div className="border-b">
        <div className="w-full mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#D3853A]">SCENTVERSE</div>
            <div className="text-xs text-orange-500 ml-1">INDIA</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Catalog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            <div className="relative">
              <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
                Men <ChevronDown className="w-4 h-4 ml-1" />
              </a>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Search</span>
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Cart</span>
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Acqua Di Parma Blu Mediterraneo Ginepro Di Sardegna Eau De Toilette
          </h1>
        
        </div>

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <span>All</span> <span className="mx-2">›</span> <span>Acqua Di Parma Blu Mediterraneo Ginepro Di Sardegna Eau De Toilette</span>
        </div>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="flex gap-4">
            {/* Thumbnail Images */}
            <div className="flex flex-col space-y-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 border-2 rounded-lg overflow-hidden ${
                    selectedImageIndex === index ? 'border-orange-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 border rounded-lg overflow-hidden">
              <img
                src={productImages[selectedImageIndex]}
                alt="Acqua Di Parma Blu Mediterraneo Ginepro Di Sardegna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold italic text-gray-700 mb-3">
                Acqua Di Parma Blu Mediterraneo Ginepro Di Sardegna Eau De Toilette
              </h2>
              <div className="mb-4">
                <Banner />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">Rs. 1,499.00</span>
                <span className="text-xl text-gray-500 line-through">Rs. 3,444.00</span>
              </div>
            </div>

            {/* Product Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Type:</label>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-50"
                >
                  −
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              
              <button className="flex-1 border-2 border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
                Add To Cart
              </button>
            </div>

            {/* Buy It Now */}
            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900">
              Buy It Now
            </button>

            {/* Wishlist and Share */}
            <div className="flex items-center justify-between pt-4 border-t">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Heart className="w-5 h-5" />
                Add to wishlist
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Delivery Info */}
            <div className="space-y-3 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">
                  <strong>Estimated delivery:</strong> 5-7 Days from order date.
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">
                  <strong>Free Shipping & Returns:</strong> On orders above  $79
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Active Users Indicator */}
      <div className="fixed top-20 left-0 bg-gradient-to-r from-green-50/95 to-blue-50/95 backdrop-blur-md text-gray-700 px-3 py-2 rounded-br-lg shadow-lg border-r border-b border-green-200/40 hover:shadow-xl hover:scale-105 transition-all duration-300 z-50">
        <div className="flex items-center gap-2">
          <div className="relative">
            {/* Multiple pulse rings */}
            <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
          </div>
          <span className="text-sm font-medium">
            <span className="font-bold text-green-700">17</span>
            <span className="text-gray-600"> live</span>
          </span>
        </div>
        {/* Subtle moving background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-br-lg opacity-50"></div>
      </div>
    </div>
  );
};

export default ProductPage;