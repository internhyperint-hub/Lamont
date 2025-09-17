import React from "react";

const ReviewStatsPopup = ({ isOpen, onClose, stats, recentCount, ratingBreakdown }) => {
  if (!isOpen) return null;


  const satisfactionRate = (((ratingBreakdown[4] + ratingBreakdown[5]) / stats.total) * 100).toFixed(0);
  const neutralRate = ((ratingBreakdown[3] / stats.total) * 100).toFixed(0);
  const criticalRate = (((ratingBreakdown[1] + ratingBreakdown[2]) / stats.total) * 100).toFixed(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4 border border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">Review Insights</h3>
            <p className="text-gray-500 text-sm">Detailed analytics for SCENTVERSE reviews</p>
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

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
            <div className="text-2xl font-semibold mb-2" style={{ color: "#c7aa62" }}>
              {stats.average}
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
            <div className="text-2xl font-semibold mb-2" style={{ color: "#c7aa62" }}>
              {stats.total}
            </div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>

          <div className="rounded-xl p-4 text-center border border-gray-100 shadow-sm" style={{ backgroundColor: "#f9f5ec" }}>
            <div className="text-2xl font-semibold mb-2 text-green-600">
              {stats.verified}
            </div>
            <div className="text-sm text-gray-600 mb-1">Verified Reviews</div>
            <div className="text-xs text-gray-500 font-medium">
              {stats.verifiedPercentage}%
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 text-center border border-gray-100 shadow-sm">
            <div className="text-2xl font-semibold mb-2 text-blue-600">
              {recentCount}
            </div>
            <div className="text-sm text-gray-600 mb-1">Recent Reviews</div>
            <div className="text-xs text-gray-500 font-medium">Last 30 days</div>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Review Analysis</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-3 text-center border border-gray-100 shadow-sm">
              <div className="text-xl font-semibold text-green-600 mb-1">
                {satisfactionRate}%
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium">Satisfaction Rate</div>
              <div className="text-xs text-gray-500">4-5 star reviews</div>
            </div>

            <div className="bg-white rounded-lg p-3 text-center border border-gray-100 shadow-sm">
              <div className="text-xl font-semibold text-yellow-600 mb-1">
                {neutralRate}%
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium">Neutral Reviews</div>
              <div className="text-xs text-gray-500">3 star reviews</div>
            </div>

            <div className="bg-white rounded-lg p-3 text-center border border-gray-100 shadow-sm">
              <div className="text-xl font-semibold text-orange-600 mb-1">
                {criticalRate}%
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium">Critical Reviews</div>
              <div className="text-xs text-gray-500">1-2 star reviews</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewStatsPopup;