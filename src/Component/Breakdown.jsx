import React, { useState } from "react";
import ReviewStatsPopup from "./ReviewStatsPopup";

const Breakdown = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const mockReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment:
        "Amazing product! My skin feels so hydrated and the lip balm is perfect for daily use.",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "Arjun Patel",
      rating: 4,
      comment:
        "Great value for money. The moisturizer is non-greasy and absorbs quickly.",
      date: "2024-01-12",
      verified: true,
    },
    {
      id: 3,
      name: "Sneha Gupta",
      rating: 5,
      comment:
        "Love this combo! Perfect for my sensitive skin. Highly recommended!",
      date: "2024-01-10",
      verified: false,
    },
    {
      id: 4,
      name: "Rahul Kumar",
      rating: 4,
      comment:
        "Good quality products. The lip balm keeps my lips soft throughout the day.",
      date: "2024-01-08",
      verified: true,
    },
    {
      id: 5,
      name: "Ananya Singh",
      rating: 5,
      comment: "Excellent moisturizer! My skin looks glowing and feels smooth.",
      date: "2024-01-05",
      verified: true,
    },
    {
      id: 6,
      name: "Vikram Reddy",
      rating: 3,
      comment:
        "Decent products but took some time to see results. Worth the price though.",
      date: "2024-01-03",
      verified: false,
    },
    {
      id: 7,
      name: "Kavya Nair",
      rating: 5,
      comment:
        "Best skincare combo I've tried! Natural ingredients work wonders.",
      date: "2024-08-30",
      verified: true,
    },
    {
      id: 8,
      name: "Rohan Joshi",
      rating: 4,
      comment:
        "Quick absorption as promised. Great for oily skin types like mine.",
      date: "2024-08-28",
      verified: true,
    },
    {
      id: 9,
      name: "Meera Agarwal",
      rating: 5,
      comment:
        "Perfect for winter skincare routine. Keeps skin moisturized all day.",
      date: "2024-08-25",
      verified: true,
    },
    {
      id: 10,
      name: "Karan Mehta",
      rating: 4,
      comment: "Good packaging and quality. The lip balm has a nice texture.",
      date: "2024-08-22",
      verified: false,
    },
    {
      id: 11,
      name: "Divya Iyer",
      rating: 5,
      comment:
        "Amazing results! My friends keep asking about my skincare secret.",
      date: "2024-08-20",
      verified: true,
    },
    {
      id: 12,
      name: "Siddharth Bose",
      rating: 4,
      comment: "Value for money product. Works well for daily skincare needs.",
      date: "2024-08-18",
      verified: true,
    },
    {
      id: 13,
      name: "Riya Kapoor",
      rating: 5,
      comment:
        "Love the natural formula! No irritation and keeps skin healthy.",
      date: "2024-08-15",
      verified: true,
    },
    {
      id: 14,
      name: "Amit Saxena",
      rating: 3,
      comment: "Okay product. Takes time to show effects but eventually works.",
      date: "2024-08-12",
      verified: false,
    },
    {
      id: 15,
      name: "Pooja Desai",
      rating: 5,
      comment:
        "Fantastic combo pack! Both products complement each other perfectly.",
      date: "2024-08-10",
      verified: true,
    },
  ];

  const calculateRatingBreakdown = () => {
    const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    mockReviews.forEach((review) => {
      breakdown[review.rating]++;
    });
    return breakdown;
  };

  const calculateStats = () => {
    const totalReviews = mockReviews.length;
    const verifiedReviews = mockReviews.filter(
      (review) => review.verified
    ).length;
    const averageRating = (
      mockReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
    ).toFixed(1);

    return {
      total: totalReviews,
      verified: verifiedReviews,
      unverified: totalReviews - verifiedReviews,
      average: averageRating,
      verifiedPercentage: ((verifiedReviews / totalReviews) * 100).toFixed(1),
    };
  };

  const getRecentReviews = () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return mockReviews.filter(
      (review) => new Date(review.date) >= thirtyDaysAgo
    ).length;
  };

  const ratingBreakdown = calculateRatingBreakdown();
  const stats = calculateStats();
  const recentCount = getRecentReviews();

  const renderStars = (count) => {
    return "".repeat(count) + "".repeat(5 - count);
  };

  const getBarWidth = (count) => {
    return (count / stats.total) * 100;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Reviews Breakdown
            </h2>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              More Info
            </button>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Rating Distribution
          </h3>
          <div className="flex gap-3 justify-between">
            <div className="space-y-3 w-[45%]">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm font-medium">{rating}</span>
                    <span className="text-[#00b3e1;]"></span>
                  </div>

                  <div className="flex-1 bg-gray-200 rounded-full h-5 relative">
                    <div
                      className={`h-5  rounded-lg ${
                        rating === 5
                          ? "bg-sky-500"
                          : rating === 4
                          ? "bg-sky-500"
                          : rating === 3
                          ? "bg-sky-500"
                          : rating === 2
                          ? "bg-sky-500"
                          : "bg-sky-500"
                      }`}
                      style={{
                        width: `${getBarWidth(ratingBreakdown[rating])}%`,
                      }}
                    ></div>
                  </div>

                  <div className="text-sm text-gray-600 w-12 text-right">
                    {ratingBreakdown[rating]}
                  </div>

                  <div className="text-xs text-gray-500 w-10 text-right">
                    {((ratingBreakdown[rating] / stats.total) * 100).toFixed(0)}
                    %
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Status */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Review Verification
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-green-700 mb-2">
                        Verified Reviews
                      </div>
                      <div className="text-sm text-gray-500 italic">
                        Confirmed purchases
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {stats.verified}
                      </div>
                      <div className="text-sm text-gray-500">
                        {stats.verifiedPercentage}%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-2">
                        Unverified Reviews
                      </div>
                      <div className="text-sm text-gray-500 italic">
                        General feedback
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-600">
                        {stats.unverified}
                      </div>
                      <div className="text-sm text-gray-500">
                        {(100 - parseFloat(stats.verifiedPercentage)).toFixed(
                          1
                        )}
                        %
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReviewStatsPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        stats={stats}
        recentCount={recentCount}
        ratingBreakdown={ratingBreakdown}
      />
    </div>
  );
};

export default Breakdown;
