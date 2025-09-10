import React from "react";

const ReviewStatsPopup = ({ isOpen, onClose, stats, recentCount, ratingBreakdown }) => {
  if (!isOpen) return null;

  const renderStars = (count) => {
    return "⭐".repeat(count) + "☆".repeat(5 - count);
  };

  const satisfactionRate = (((ratingBreakdown[4] + ratingBreakdown[5]) / stats.total) * 100).toFixed(0);
  const neutralRate = ((ratingBreakdown[3] / stats.total) * 100).toFixed(0);
  const criticalRate = (((ratingBreakdown[1] + ratingBreakdown[2]) / stats.total) * 100).toFixed(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Review Statistics</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {stats.average}
            </div>
            <div className="text-sm text-gray-600 mb-2">Average Rating</div>
            <div className="text-yellow-400 text-sm">
              {renderStars(Math.round(stats.average))}
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {stats.total}
            </div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {stats.verified}
            </div>
            <div className="text-sm text-gray-600 mb-1">Verified Reviews</div>
            <div className="text-xs text-gray-500">
              {stats.verifiedPercentage}%
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {recentCount}
            </div>
            <div className="text-sm text-gray-600 mb-1">Recent Reviews</div>
            <div className="text-xs text-gray-500">Last 30 days</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-xl font-bold text-blue-600">
              {satisfactionRate}%
            </div>
            <div className="text-sm text-gray-600 mb-1">Satisfaction Rate</div>
            <div className="text-xs text-gray-500">4-5 star reviews</div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <div className="text-xl font-bold text-yellow-600">
              {neutralRate}%
            </div>
            <div className="text-sm text-gray-600 mb-1">Neutral Reviews</div>
            <div className="text-xs text-gray-500">3 star reviews</div>
          </div>

          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-xl font-bold text-red-600">
              {criticalRate}%
            </div>
            <div className="text-sm text-gray-600 mb-1">Critical Reviews</div>
            <div className="text-xs text-gray-500">1-2 star reviews</div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewStatsPopup;