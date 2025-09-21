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
        "Amazing fragrance from SCENTVERSE! This Mediterranean scent is perfect for daily wear.",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "Arjun Patel",
      rating: 5,
      comment:
        "Excellent value from SCENTVERSE. Authentic Acqua Di Parma at great prices!",
      date: "2024-01-12",
      verified: true,
    },
    {
      id: 3,
      name: "Sneha Gupta",
      rating: 5,
      comment:
        "Love this perfume! Perfect Mediterranean fragrance. SCENTVERSE is fantastic!",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 4,
      name: "Rahul Kumar",
      rating: 5,
      comment:
        "Quality fragrance from SCENTVERSE. This scent lasts all day and smells incredible!",
      date: "2024-01-08",
      verified: true,
    },
    {
      id: 5,
      name: "Ananya Singh",
      rating: 5,
      comment: "Excellent perfume! SCENTVERSE delivered authentic luxury fragrance.",
      date: "2024-01-05",
      verified: true,
    },
    {
      id: 6,
      name: "Vikram Reddy",
      rating: 2,
      comment:
        "Fragrance didn't last as long as expected. SCENTVERSE service was good though.",
      date: "2024-01-03",
      verified: true,
    },
    {
      id: 7,
      name: "Kavya Nair",
      rating: 5,
      comment:
        "Best perfume from SCENTVERSE! Authentic Mediterranean fragrance is amazing.",
      date: "2024-08-30",
      verified: true,
    },
    {
      id: 8,
      name: "Rohan Joshi",
      rating: 5,
      comment:
        "Quick delivery from SCENTVERSE. Perfect fresh scent for office wear.",
      date: "2024-08-28",
      verified: true,
    },
    {
      id: 9,
      name: "Meera Agarwal",
      rating: 5,
      comment:
        "Perfect fragrance from SCENTVERSE. This scent keeps me feeling fresh all day.",
      date: "2024-08-25",
      verified: true,
    },
    {
      id: 10,
      name: "Karan Mehta",
      rating: 1,
      comment: "Not what I expected. The scent was too strong for my preference.",
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
      comment: "Average fragrance. SCENTVERSE delivery was fine but scent is not my type.",
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
    // Fake numbers for better visualization
    const breakdown = { 5: 187, 4: 45, 3: 18, 2: 8, 1: 4 };
    return breakdown;
  };

  const calculateStats = () => {
    // Use fake numbers to match the breakdown
    const totalReviews = 262; // Sum of breakdown numbers
    const verifiedReviews = 218;
    const averageRating = 4.8;

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

  const _renderStars = (count) => {
    return "".repeat(count) + "".repeat(5 - count);
  };

  const getBarWidth = (count) => {
    return (count / stats.total) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100">
        <div className="mb-4">

          <div className="flex justify-center">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="text-[#c7aa62] border border-[#c7aa62]/30 hover:border-[#c7aa62] bg-white hover:bg-[#c7aa62]/5 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
            >
              More Info
            </button>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="mb-6">

          <div className="flex justify-center">
            <div className="space-y-1 w-full max-w-md">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-3 group hover:bg-gradient-to-r hover:from-[#c7aa62]/5 hover:to-amber-50/30 p-1.5 rounded-md transition-all duration-300 cursor-pointer transform hover:scale-[1.01] hover:shadow-sm">
                  <div className="flex items-center space-x-1 w-14">
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-xs transition-all duration-300 group-hover:scale-110 ${index < rating ? 'text-[#c7aa62] group-hover:text-amber-500' : 'text-gray-300'}`}
                          style={{
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden group-hover:bg-gray-250">
                    <div
                      className="h-3 rounded-full transition-all duration-700 ease-out group-hover:shadow-inner"
                      style={{
                        width: `${getBarWidth(ratingBreakdown[rating])}%`,
                        background: "linear-gradient(90deg, #c7aa62 0%, #d4a574 50%, #f4d03f 100%)"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                    </div>
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {((ratingBreakdown[rating] / stats.total) * 100).toFixed(0)}%
                    </div>
                  </div>

                  <div className="text-xs text-gray-600 w-8 text-right font-medium group-hover:text-gray-800 group-hover:font-bold transition-all duration-300">
                    {ratingBreakdown[rating]}
                  </div>

                  <div className="text-[10px] text-gray-500 w-8 text-right group-hover:text-[#c7aa62] group-hover:font-semibold transition-all duration-300">
                    {((ratingBreakdown[rating] / stats.total) * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
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
