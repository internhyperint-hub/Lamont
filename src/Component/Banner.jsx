import React from "react";

const ProductProofBanner = () => {
  return (
    <div className="rounded-md p-3 text-black shadow-lg w-[100%] h-[70px] flex items-center justify-between bg-gray-50 border-1 border-gray-300">
      {/* Left side - Star Icon and Rating Info */}
      <div className="flex items-center gap-4">
        {/* Star Icon Circle */}
        <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md flex-shrink-0">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-bold">4.8</span>
          </div>
        </div>
      </div>

      {/* Middle - Sales Info */}
      <div className="flex items-center gap-1">
        <div className="bg-orange-500 rounded-full w-2 h-2"></div>
        <span className="text-sm">
          <span className="font-bold text-orange-200">240 sold </span>
          <span className="ml-2">last 30 days</span>
        </span>
      </div>

      {/* Right side - Progress Bar and Green Indicator */}
      <div className="flex items-center gap-3">
        {/* Progress Bar */}
        <div className="w-24 bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-3/4"></div>
        </div>

        {/* Green dot indicator */}
        <div className="bg-green-400 rounded-full w-3 h-3 flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default ProductProofBanner;
