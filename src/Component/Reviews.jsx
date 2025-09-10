import { useState } from "react";
import iconImage from "../assets/icon.png";

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  // Function to generate avatar URLs
  const getAvatarUrl = (name, id) => {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}${id}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
  };

  const toggleReadMore = (reviewId) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  const mockReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      title: "Game-changer for dry skin!",
      comment:
        "Amazing product! My skin feels so hydrated and the lip balm is perfect for daily use. I've been using this combo for 3 months now and the results are incredible. The moisturizer absorbs quickly without leaving any greasy residue, and the lip balm keeps my lips soft all day long. Highly recommend for anyone with dry skin!",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "Arjun Patel",
      rating: 4,
      title: "Perfect for busy professionals",
      comment:
        "Great value for money. The moisturizer is non-greasy and absorbs quickly. I was skeptical at first, but after using it for a few weeks, I noticed a significant improvement in my skin texture. The lip balm has a pleasant smell and doesn't feel sticky. Perfect for my busy lifestyle!",
      date: "2024-01-12",
      verified: true,
    },
    {
      id: 3,
      name: "Sneha Gupta",
      rating: 5,
      title: "Sensitive skin approved!",
      comment:
        "Love this combo! Perfect for my sensitive skin. Highly recommended! As someone with very sensitive skin, I'm always cautious about trying new products. But this moisturizer and lip balm duo has been a game-changer. No irritation, no breakouts, just smooth, healthy-looking skin.",
      date: "2024-01-10",
      verified: false,
    },
    {
      id: 4,
      name: "Rahul Kumar",
      rating: 4,
      title: "Office worker's savior",
      comment:
        "Good quality products. The lip balm keeps my lips soft throughout the day. I work in an air-conditioned office which usually makes my skin very dry, but since using this moisturizer, my skin stays hydrated for hours. The packaging is also very convenient for travel.",
      date: "2024-01-08",
      verified: true,
    },
    {
      id: 5,
      name: "Ananya Singh",
      rating: 5,
      title: "Friends keep asking my secret!",
      comment:
        "Excellent moisturizer! My skin looks glowing and feels smooth. I've tried many skincare products over the years, but this one stands out. The natural ingredients really make a difference, and I love that it's suitable for daily use. My friends have been asking about my skincare routine!",
      date: "2024-01-05",
      verified: true,
    },
    {
      id: 6,
      name: "Vikram Reddy",
      rating: 3,
      title: "Patience pays off",
      comment:
        "Decent products but took some time to see results. Worth the price though. It took about 4-5 weeks to notice significant changes, which is normal for skincare products. The moisturizer has a nice texture and the lip balm doesn't wear off easily. Good investment for long-term skin health.",
      date: "2024-01-03",
      verified: false,
    },
    {
      id: 7,
      name: "Kavya Nair",
      rating: 5,
      title: "Transformed my dull complexion",
      comment:
        "Best skincare combo I've tried! Natural ingredients work wonders. I've been struggling with dull skin for months, and this product duo has completely transformed my complexion. The moisturizer feels luxurious and the lip balm has become my daily essential. Amazing quality at this price point!",
      date: "2023-12-30",
      verified: true,
    },
    {
      id: 8,
      name: "Rohan Joshi",
      rating: 4,
      title: "Perfect for oily skin control",
      comment:
        "Quick absorption as promised. Great for oily skin types like mine. I was worried it might make my skin more oily, but it actually helps control the oil production. The lightweight formula is perfect for my morning routine, and it works great under makeup too.",
      date: "2023-12-28",
      verified: true,
    },
    {
      id: 9,
      name: "Meera Agarwal",
      rating: 5,
      title: "Winter skincare lifesaver",
      comment:
        "Perfect for winter skincare routine. Keeps skin moisturized all day. Winter usually makes my skin extremely dry and flaky, but this moisturizer has been a lifesaver. Even in harsh weather conditions, my skin stays soft and supple. The lip balm prevents chapping too!",
      date: "2023-12-25",
      verified: true,
    },
    {
      id: 10,
      name: "Karan Mehta",
      rating: 4,
      title: "Love the thoughtful packaging",
      comment:
        "Good packaging and quality. The lip balm has a nice texture. I appreciate the thoughtful packaging design - it's both functional and aesthetically pleasing. The moisturizer pump dispenser is very hygienic, and the lip balm tube is the perfect size for carrying in my purse.",
      date: "2023-12-22",
      verified: false,
    },
    {
      id: 11,
      name: "Divya Iyer",
      rating: 5,
      title: "6 weeks to younger-looking skin",
      comment:
        "Amazing results! My friends keep asking about my skincare secret. After just 6 weeks of consistent use, my skin looks brighter and more youthful. The natural glow is noticeable, and I've received so many compliments. This combo has definitely become a staple in my beauty routine!",
      date: "2023-12-20",
      verified: true,
    },
    {
      id: 12,
      name: "Siddharth Bose",
      rating: 4,
      title: "Great value for daily routine",
      comment:
        "Value for money product. Works well for daily skincare needs. I've been using this for my morning and evening routine for the past 2 months. The consistency is perfect, and it doesn't clash with other products in my skincare regimen. Great for sensitive skin types too!",
      date: "2023-12-18",
      verified: true,
    },
    {
      id: 13,
      name: "Riya Kapoor",
      rating: 5,
      title: "Natural formula wins!",
      comment:
        "Love the natural formula! No irritation and keeps skin healthy. As someone who prefers organic and natural skincare products, this combo ticks all the boxes. The ingredients list is impressive, and I love that it's free from harsh chemicals. My skin has never felt better!",
      date: "2023-12-15",
      verified: true,
    },
    {
      id: 14,
      name: "Amit Saxena",
      rating: 3,
      title: "Learned to be patient with results",
      comment:
        "Okay product. Takes time to show effects but eventually works. I'm someone who expects quick results, but I learned that good skincare takes patience. After using this consistently for 8 weeks, I can see the improvement in my skin texture and overall health. Worth the wait!",
      date: "2023-12-12",
      verified: false,
    },
    {
      id: 15,
      name: "Pooja Desai",
      rating: 5,
      title: "Best combo pack ever!",
      comment:
        "Fantastic combo pack! Both products complement each other perfectly. The synergy between the moisturizer and lip balm is amazing. Using them together has given me the best results I've ever had with skincare products. The value proposition is unmatched in this price range!",
      date: "2023-12-10",
      verified: true,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const truncateText = (text, limit = 120) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  const averageRating = (
    mockReviews.reduce((sum, review) => sum + review.rating, 0) /
    mockReviews.length
  ).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3  rounded-2xl mb-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Recent Reviews
            </h2>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="flex items-center space-x-2">
              <div className="flex p-2 rounded-lg">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-3xl font-bold text-gray-800">
                {averageRating}
              </span>
            </div>
          </div>
          <p className="text-gray-600 bg-gray-50 inline-block px-4 py-2 rounded-full">
            Based on {mockReviews.length} verified reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {mockReviews.slice(0, 9).map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 relative"
            >
              {/* Product image positioned absolutely at top right */}
              <img
                src={iconImage}
                alt="Product"
                className="absolute top-4 right-4 w-16 h-16 object-cover"
              />

              {/* Top row with stars and date */}
              <div className="flex items-start justify-between mb-4 pr-20">
                <div className="flex items-center space-x-3">
                  <div className="flex bg-gradient-to-r from-yellow-50 to-orange-100 px-1 py-0 rounded-lg">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 rounded-full">
                  {new Date(review.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              {/* Review Content */}
              <div className="bg-white/70 rounded-xl  mb-6 border border-gray-100 p-3">
                <h5 className="font-semibold text-gray-800 text-md italic">
                  {review.title}
                </h5>
                <p className="text-gray-700 leading-relaxed text-sm p-2">
                  "
                  {expandedReviews[review.id]
                    ? review.comment
                    : truncateText(review.comment)}
                  "
                </p>
                {review.comment.length > 120 && (
                  <button
                    onClick={() => toggleReadMore(review.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm  transition-colors"
                  >
                    {expandedReviews[review.id] ? "Read less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Name and Avatar positioned at absolute bottom right */}
              <div className="absolute bottom-3 right-4 flex flex-col items-center space-y-1">
                <div className="relative">
                  <img
                    src={getAvatarUrl(review.name, review.id)}
                    alt={`${review.name}'s avatar`}
                    className="w-8 h-8 rounded-full shadow-lg ring-2 ring-blue-100"
                  />
                  {review.verified && (
                    <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                      <svg
                        className="w-2 h-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-gray-700 italic text-xs text-center">
                  {review.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Reviews - Compact List */}
        <div className="space-y-6 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-sky-500 inline-block px-6 py-3 rounded-2xl">
              More Reviews
            </h3>
          </div>
          {mockReviews.slice(9).map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-r from-white to-blue-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={getAvatarUrl(review.name, review.id)}
                      alt={`${review.name}'s avatar`}
                      className="w-10 h-10 rounded-full shadow-md ring-2 ring-blue-100"
                    />
                    {review.verified && (
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                        <svg
                          className="w-2 h-2 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-md">
                      {review.name}
                    </h4>
                    <div className="flex items-center space-x-3 mt-1">
                      <div className="flex bg-gradient-to-r from-yellow-100 to-orange-100 px-2 py-1 rounded-lg">
                        {renderStars(review.rating)}
                      </div>
                      {review.verified && (
                        <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full font-medium">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {new Date(review.date).toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="bg-white/80 rounded-lg p-4 ml-16">
                <h5 className="font-semibold text-gray-800 text-sm mb-2">
                  {review.title}
                </h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "
                  {expandedReviews[review.id]
                    ? review.comment
                    : truncateText(review.comment)}
                  "
                </p>
                {review.comment.length > 120 && (
                  <button
                    onClick={() => toggleReadMore(review.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-2 transition-colors"
                  >
                    {expandedReviews[review.id] ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            ✍️ Write Your Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
