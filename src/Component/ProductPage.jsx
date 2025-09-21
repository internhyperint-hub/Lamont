import React, { useState } from 'react';
import Banner from "./Banner"
import { Search, User, ShoppingBag, ChevronDown, Minus, Plus, Star } from 'lucide-react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('50 ML');

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        {/* Top banner */}
        <div className="bg-orange-100 text-center py-2">
          <p className="text-sm text-orange-800">📦 Free Shipping on Order above ₹499.</p>
        </div>
        
        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left navigation */}
            <div className="flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-black font-medium">MEN</a>
                <a href="#" className="text-gray-700 hover:text-black font-medium">WOMEN</a>
                <a href="#" className="text-gray-700 hover:text-black font-medium">UNISEX</a>
                <div className="flex items-center space-x-1">
                  <a href="#" className="text-gray-700 hover:text-black font-medium">SHOP BY</a>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1">
                  <a href="#" className="text-gray-700 hover:text-black font-medium">VIBE</a>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1">
                  <a href="#" className="text-gray-700 hover:text-black font-medium">ELEMENTS</a>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </nav>
            </div>

            {/* Logo */}
            <div className="text-center">
              <div className="bg-black text-white px-3 py-2 text-sm font-bold">
                <div>LA</div>
                <div>MONT</div>
                <div className="text-xs">PERFUMES</div>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600" />
              <User className="w-5 h-5 text-gray-600" />
              <ShoppingBag className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="max-w-7xl mx-auto px-4 pb-4">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-1">
              <a href="#" className="text-gray-700 hover:text-black font-medium">FUNCTIONAL</a>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-gray-700 hover:text-black font-medium">ABOUT US</a>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Product section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://www.lamont.co.in/cdn/shop/files/dijon1.jpg?v=1731558888&width=1646"
                alt="DIJON Signature Collection Unisex Perfume - 50ml"
                className="w-full max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                DIJON Signature Collection Unisex Perfume - 50ml
              </h1>
            </div>
            <Banner />

            <div>
              <p className="text-3xl font-bold text-gray-900">Rs. 549.00</p>
              <p className="text-sm text-gray-600">Taxes included.</p>
            </div>

            {/* Size selection */}
            <div>
              <p className="text-sm font-medium text-gray-900 mb-3">Size</p>
              <div className="flex space-x-2">
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-medium ${selectedSize === '50 ML' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setSelectedSize('50 ML')}
                >
                  50 ML
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm font-medium text-gray-900 mb-3">Quantity</p>
              <div className="flex items-center border border-gray-300 rounded w-fit">
                <button 
                  onClick={decreaseQuantity}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <div className="relative">
                <button className="w-full bg-white border-2 border-gray-900 text-gray-900 py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors">
                  Add to cart
                </button>
                {/* Spin to Win overlay */}
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-tr rounded-bl text-xs font-bold">
                  Spin to Win 🎯
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors">
                Buy it now
              </button>
            </div>

            {/* Product description (you can add more details here) */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-3">Product Details</h3>
              <p className="text-gray-600 text-sm">
                Experience the bold and captivating scent of DIJON from LaMont Perfumes. 
                This unisex fragrance combines warm and spicy notes to create a signature 
                scent that's perfect for any occasion.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Long-lasting fragrance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Unisex appeal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Signature collection</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage; 