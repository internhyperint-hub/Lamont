import React from "react";
import ProductProof from "./Banner";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className=" border-b border-gray-200 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-black font-bold text-sm">
              FRESH FIERCE FLAWLESS
            </div>
            <div
              className="text-white
             font-bold text-xl"
            >
              MANTITTUDE
            </div>
            <div className="bg-black text-white w-8 h-8 rounded flex items-center justify-center font-bold">
              M
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm">
            <a href="#" className="text-white hover:text-black">
              Cleansers
            </a>
            <a href="#" className="text-white hover:text-black">
              UV Armor
            </a>
            <a href="#" className="text-white hover:text-black">
              Hydration Boost
            </a>
            <a href="#" className="text-white hover:text-black">
              Lip Repair
            </a>
            <a href="#" className="text-white hover:text-black">
              Pro Care
            </a>
            <a href="#" className="text-white hover:text-black">
              Shop All
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Product Image */}
          <div className="relative">
            <img
              src="http://mantittude.com/cdn/shop/files/best_lip_balm_and_moisturiser_combo.png?v=1753081021"
              alt="Hydration Hero - Lip Balm and Moisturizer Combo"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right side - Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                Lip Balm - 100% Natural + Oil Free Face Moisturiser
              </h1>
              <p className="text-gray-600 text-lg">
                Light Up - Non Greasy & Quick Absorption
              </p>
            </div>

            {/* Rating
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <span className="text-gray-500">(3)</span>
            </div> */}
            <ProductProof />

            {/* Offer Section */}
            <div className="border border-orange-500 rounded-lg p-4 bg-orange-50">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 border-2 border-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="text-black font-semibold">
                    Avail the offer ( Combo pack )
                  </div>
                  <div className="text-gray-600">28% Off</div>
                </div>
                <div className="text-right">
                  <div className="text-black font-bold text-xl">Rs. 699.00</div>
                  <div className="text-gray-500 line-through text-sm">
                    Rs. 970.00
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                ADD TO CART
              </button>
              <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                <span>BUY NOW</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <span className="text-xs opacity-75">
                  Powered by Shopeasier
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
