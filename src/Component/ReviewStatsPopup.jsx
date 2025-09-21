import React, { useState, useEffect } from "react";

const ReviewStatsPopup = ({ isOpen, onClose, stats, recentCount, ratingBreakdown }) => {
  const [animatedStats, setAnimatedStats] = useState({
    average: 0,
    total: 0,
    verified: 0
  });
  const [chartVisible, setChartVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Animate numbers when popup opens
      const interval = setInterval(() => {
        setAnimatedStats(prev => ({
          average: prev.average < stats.average ? +(prev.average + 0.1).toFixed(1) : stats.average,
          total: prev.total < stats.total ? prev.total + 5 : stats.total,
          verified: prev.verified < stats.verified ? prev.verified + 4 : stats.verified
        }));
      }, 50);

      // Show chart after delay
      setTimeout(() => setChartVisible(true), 500);

      return () => clearInterval(interval);
    }
  }, [isOpen, stats]);

  // Reset animations when popup closes
  useEffect(() => {
    if (!isOpen) {
      setAnimatedStats({ average: 0, total: 0, verified: 0 });
      setChartVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;


  const satisfactionRate = (((ratingBreakdown[4] + ratingBreakdown[5]) / stats.total) * 100).toFixed(0);
  const neutralRate = ((ratingBreakdown[3] / stats.total) * 100).toFixed(0);
  const criticalRate = (((ratingBreakdown[1] + ratingBreakdown[2]) / stats.total) * 100).toFixed(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-4 max-w-lg w-full mx-4 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Review Insights</h3>
            <p className="text-gray-500 text-xs">Detailed analytics for SCENTVERSE reviews</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
            <div className="text-xl font-semibold mb-1 transition-all duration-500" style={{ color: "#c7aa62" }}>
              {animatedStats.average}
            </div>
            <div className="text-xs text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-sm transition-all duration-300 ${index < Math.round(animatedStats.average) ? "text-yellow-400" : "text-gray-300"
                    }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
            <div className="text-xl font-semibold mb-1 transition-all duration-500" style={{ color: "#c7aa62" }}>
              {animatedStats.total}
            </div>
            <div className="text-xs text-gray-600">Total Reviews</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-[#c7aa62] to-amber-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(animatedStats.total / stats.total) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="rounded-lg p-3 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: "#f9f5ec" }}>
            <div className="text-xl font-semibold mb-1 text-green-600 transition-all duration-500">
              {animatedStats.verified}
            </div>
            <div className="text-xs text-gray-600 mb-1">Verified Reviews</div>
            <div className="text-xs text-gray-500 font-medium">
              {stats.verifiedPercentage}%
            </div>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${stats.verifiedPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
            <div className="text-xl font-semibold mb-1 text-blue-600">
              13
            </div>
            <div className="text-xs text-gray-600 mb-1">Recent Reviews</div>
            <div className="text-xs text-gray-500 font-medium">Last 30 days</div>
            <div className="flex justify-center mt-2 space-x-1">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-6 rounded-full transition-all duration-500 ${index < 4 ? 'bg-blue-500' : 'bg-blue-200'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>


        {/* Detailed Star Rating Breakdown */}
        <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-100">
          <h4 className="text-base font-semibold text-gray-800 mb-3 text-center">Detailed Rating Breakdown</h4>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = ratingBreakdown[rating];
              const percentage = ((count / stats.total) * 100).toFixed(1);
              return (
                <div key={rating} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-20">
                    <span className="text-sm font-medium text-gray-700">{rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-xs ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                    <div
                      className={`h-4 rounded-full transition-all duration-1000 ${chartVisible ? 'w-full' : 'w-0'
                        }`}
                      style={{
                        background: rating >= 4 ? 'linear-gradient(90deg, #10b981, #059669)' :
                          rating === 3 ? 'linear-gradient(90deg, #f59e0b, #d97706)' :
                            'linear-gradient(90deg, #ef4444, #dc2626)',
                        width: chartVisible ? `${(count / stats.total) * 100}%` : '0%',
                        transitionDelay: `${(5 - rating) * 0.2}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white">
                      {percentage}%
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 w-12 text-right font-medium">
                    {count}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-100">
          <h4 className="text-base font-semibold text-gray-800 mb-3 text-center">Review Analysis</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-lg font-semibold text-green-600 mb-1">
                {satisfactionRate}%
              </div>
              <div className="text-xs text-gray-600 mb-1 font-medium">Satisfaction Rate</div>
              <div className="text-xs text-gray-500">4-5 star reviews</div>
              <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: chartVisible ? `${satisfactionRate}%` : '0%' }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-lg font-semibold text-yellow-600 mb-1">
                {neutralRate}%
              </div>
              <div className="text-xs text-gray-600 mb-1 font-medium">Neutral Reviews</div>
              <div className="text-xs text-gray-500">3 star reviews</div>
              <div className="w-full bg-yellow-200 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: chartVisible ? `${neutralRate}%` : '0%' }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-lg font-semibold text-orange-600 mb-1">
                {criticalRate}%
              </div>
              <div className="text-xs text-gray-600 mb-1 font-medium">Critical Reviews</div>
              <div className="text-xs text-gray-500">1-2 star reviews</div>
              <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: chartVisible ? `${criticalRate}%` : '0%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewStatsPopup;