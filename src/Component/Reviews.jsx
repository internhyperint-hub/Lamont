import { useState } from "react";
import { User, ThumbsUp, Filter, ChevronDown } from "lucide-react";
import perfume from "../assets/perfume.png"

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterBy, setFilterBy] = useState('all');
  const [helpfulClicks, setHelpfulClicks] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  const toggleReadMore = (reviewId) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  const handleHelpfulClick = (reviewId) => {
    setHelpfulClicks((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 0) + 1,
    }));
  };

  const mockReviews = [
    {
      id: 1,
      name: "Ravi K.",
      rating: 5,
      title: "Absolutely perfect for special occasions!",
      comment: "Just received this yesterday and I'm blown away! The Mediterranean Breeze has this amazing fresh yet sophisticated scent. Perfect for my anniversary dinner tonight. The packaging was premium and delivery was super fast. Highly recommend!",
      date: "2025-09-16",
      verified: true,
      helpful: 2,
      productName: "Mediterranean Breeze"
    },
    {
      id: 2,
      name: "Meera L.",
      rating: 5,
      title: "Love at first spray ❤️",
      comment: "OMG! This perfume is everything I wanted. Got it 3 days back and have been wearing it daily. Gets so many compliments at work. The longevity is incredible - still smells amazing after 10 hours. Ordering the larger bottle next!",
      date: "2025-09-14",
      verified: true,
      helpful: 5,
      productName: "Evening Elegance"
    },
    {
      id: 3,
      name: "Aditi M.",
      rating: 4,
      title: "Great quality, fast shipping",
      comment: "Ordered this last week and received it in just 2 days! The Executive Collection has a very professional scent - perfect for office wear. Quality is excellent and the bottle feels premium. Only wish it projected a bit more.",
      date: "2025-09-10",
      verified: true,
      helpful: 3,
      productName: "Executive Collection"
    },
    {
      id: 4,
      name: "Priya S.",
      rating: 5,
      title: "Authentic luxury at its finest!",
      comment: "Amazing experience! This Mediterranean perfume has incredible notes of bergamot and cypress. Fast delivery to Delhi and perfect packaging. The longevity is outstanding - lasts 8+ hours. Already placed my second order!",
      date: "2024-01-15",
      verified: true,
      helpful: 12,
      productName: "Mediterranean Breeze"
    },
    {
      id: 5,
      name: "Arjun P.",
      rating: 5,
      title: "Good but could be stronger",
      comment: "Nice fragrance overall. The scent is pleasant and office-appropriate, but I wish it lasted longer. After 4-5 hours, I can barely smell it. The bottle design is beautiful though. Good for people who prefer subtle fragrances.",
      date: "2024-01-12",
      verified: true,
      helpful: 8,
      productName: "Executive Collection"
    },
    {
      id: 6,
      name: "Sneha G.",
      rating: 5,
      title: "Like a Mediterranean vacation!",
      comment: "This site has an amazing collection! This perfume transports me to a Mediterranean coast. The juniper and cypress notes are incredible. Very particular about fragrances and this delivers on authenticity. The bottle design is elegant too!",
      date: "2024-01-10",
      verified: true,
      helpful: 15,
      productName: "Mediterranean Breeze"
    },
    {
      id: 7,
      name: "Rahul K.",
      rating: 5,
      title: "Expected more for the price",
      comment: "The fragrance is okay but not exceptional. For this price point, I expected better longevity and projection. It's pleasant but fades quickly. The packaging is nice though. Might work for people who prefer light scents, but I need something stronger.",
      date: "2024-01-08",
      verified: false,
      helpful: 6,
      productName: "Executive Collection"
    },
    {
      id: 13,
      name: "Ananya S.",
      rating: 5,
      title: "Friends keep asking about my signature scent!",
      comment: "Excellent fragrance! This Mediterranean scent is absolutely divine. I've tried many perfumes over the years, but this stands out. The fresh juniper notes are perfect for daily wear and the elegant bottle looks premium on my dresser.",
      date: "2024-01-05",
      verified: true,
      helpful: 20,
      productName: "Mediterranean Breeze"
    },
    {
      id: 8,
      name: "Vikram R.",
      rating: 5,
      title: "Worth the money - develops beautifully",
      comment: "Good quality fragrance at decent value. Initially seemed light, but develops beautifully throughout the day. The Mediterranean notes become more prominent after a few hours. Overall satisfied with the purchase.",
      date: "2024-01-03",
      verified: true,
      helpful: 4,
      productName: "Mediterranean Breeze"
    },
    {
      id: 9,
      name: "Kavya N.",
      rating: 4,
      title: "Not what I expected - disappointing",
      comment: "Unfortunately, this didn't work for me. The scent is too light and doesn't last more than 2 hours. For the price, I expected much better performance. The fragrance itself is pleasant but very weak. Had to return it. Maybe good for people with sensitive noses.",
      date: "2023-12-30",
      verified: false,
      helpful: 3,
      productName: "Fresh Start"
    },
    {
      id: 14,
      name: "Rohan J.",
      rating: 4,
      title: "Decent for morning wear",
      comment: "Good for light, fresh scent lovers. The delivery was quick and packaging was secure. It's a pleasant fragrance but nothing extraordinary. Works well for morning routine but you might need to reapply for evening. Fair value for money.",
      date: "2023-12-28",
      verified: true,
      helpful: 7,
      productName: "Fresh Start"
    },
    {
      id: 15,
      name: "Deepika M.",
      rating: 1,
      title: "Poor quality - waste of money",
      comment: "Very disappointed with this purchase. The fragrance smells cheap and artificial. Doesn't smell anything like the description. Lasted only 1 hour on my skin. The bottle looks nice but that's about it. Would not recommend at all. Requesting refund.",
      date: "2023-12-25",
      verified: false,
      helpful: 1,
      productName: "Executive Collection"
    },
    {
      id: 16,
      name: "Amit S.",
      rating: 3,
      title: "Average fragrance, nothing special",
      comment: "It's an okay fragrance. Not bad but not great either. The scent is generic and reminds me of cheaper alternatives. Longevity is mediocre - about 3-4 hours. For this price, you can find better options. The customer service was helpful though.",
      date: "2023-12-20",
      verified: false,
      helpful: 2,
      productName: "Mediterranean Breeze"
    },
    {
      id: 11,
      name: "Nisha P.",
      rating: 5,
      title: "Perfect evening fragrance!",
      comment: "Absolutely love this! Perfect for evening events and date nights. The scent is sophisticated and gets compliments every time I wear it. Excellent longevity - lasts 6-7 hours easily. The bottle is gorgeous and looks expensive on my vanity.",
      date: "2023-12-18",
      verified: true,
      helpful: 14,
      productName: "Evening Elegance"
    },
    {
      id: 12,
      name: "Karan R.",
      rating: 4,
      title: "Good but packaging could be better",
      comment: "The fragrance itself is really nice - fresh and long-lasting. However, the outer packaging was a bit damaged during delivery. The bottle was fine though. The scent is perfect for daily wear and I've gotten several compliments. Will order again.",
      date: "2023-12-15",
      verified: true,
      helpful: 5,
      productName: "Mediterranean Breeze"
    }
  ];

  // Filter logic
  const filteredReviews = mockReviews.filter(review => {
    let matchesFilter = false;

    switch (filterBy) {
      case 'all':
        matchesFilter = true;
        break;
      case '5star':
        matchesFilter = Number(review.rating) === 5;
        break;
      case '4star':
        matchesFilter = Number(review.rating) >= 4 && Number(review.rating) < 5;
        break;
      case 'verified':
        matchesFilter = Boolean(review.verified);
        break;
      default:
        matchesFilter = true;
    }

    return matchesFilter;
  });

  // Sort logic
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date) - new Date(a.date);
      case 'helpful':
        return (helpfulClicks[b.id] || b.helpful) - (helpfulClicks[a.id] || a.helpful);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-base ${
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

  const getTimeAgo = (dateString) => {
    const reviewDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - reviewDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      return months === 1 ? "1 month ago" : `${months} months ago`;
    } else {
      const years = Math.floor(diffInDays / 365);
      return years === 1 ? "1 year ago" : `${years} years ago`;
    }
  };

  const averageRating = (
    mockReviews.reduce((sum, review) => sum + review.rating, 0) /
    mockReviews.length
  ).toFixed(1);

  return (
    <div className="w-9/10 mx-auto px-4 py-12 bg-gradient-to-br from-[#f9f5ec] to-amber-50">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-2xl mb-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#c7aa62] to-amber-600 bg-clip-text text-transparent">
              Customer Reviews
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

        {/* Filter Section */}
        <div className="mb-8">
          {/* Filters and Sort */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-[#c7aa62] focus:border-transparent outline-none"
              >
                <option value="recent">Most Recent</option>
                <option value="helpful">Most Helpful</option>
                <option value="rating">Highest Rating</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'Show All' },
                { key: '5star', label: 'Excellent (5★)' },
                { key: '4star', label: 'Great (4★)' },
                { key: 'verified', label: 'Verified Buyers' }
              ].map(filter => (
                <button
                  key={filter.key}
                  onClick={() => setFilterBy(filter.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterBy === filter.key
                      ? 'bg-[#c7aa62] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-md border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-[#c7aa62] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-[#c7aa62] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing {indexOfFirstReview + 1}-{Math.min(indexOfLastReview, sortedReviews.length)} of {sortedReviews.length} reviews
            {filterBy !== 'all' && (
              <span className="ml-2 text-[#c7aa62] font-medium">
                (filtered from {mockReviews.length} total)
              </span>
            )}
          </p>
        </div>

        {/* Reviews Display */}
        <div className={`mb-8 ${
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'
            : 'space-y-4 max-w-4xl mx-auto'
        }`}>
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className={`transition-all duration-300 border border-gray-200 hover:border-[#c7aa62]/40 relative ${
                viewMode === 'grid'
                  ? 'bg-white rounded-lg p-4 shadow-sm hover:shadow-md transform hover:-translate-y-0.5'
                  : 'bg-white rounded-lg shadow-sm border-l-4 border-l-[#c7aa62]/30'
              }`}
            >
              {viewMode === 'list' ? (
                // Enhanced List View Layout
                <div className="flex gap-4 p-3">
                  {/* Left Section: User Avatar */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c7aa62]/20 to-amber-100 flex items-center justify-center border border-[#c7aa62]/20 shadow-sm">
                      <User className="w-4 h-4 text-[#c7aa62]" />
                    </div>
                  </div>

                  {/* Center Section: Review Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header with name and date */}
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-800 text-sm">{review.name}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {getTimeAgo(review.date)}
                          </span>
                        </div>
                        {/* Stars below name */}
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm font-bold text-gray-800">{review.rating}.0</span>
                        </div>
                      </div>

                      {/* Verified badge and product name */}
                      <div className="flex flex-col items-end space-y-1">
                        {review.verified && (
                          <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 py-0.5 rounded-full shadow-sm flex items-center space-x-1 border border-white/20">
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[9px] font-semibold tracking-tight">VERIFIED</span>
                          </div>
                        )}
                        <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-[#c7aa62] bg-[#c7aa62]/10 px-2 py-1 rounded-full">
                          <img src={perfume} alt="Perfume" className="w-3 h-3 object-contain" />
                          <span>{review.productName}</span>
                        </span>
                      </div>
                    </div>

                    {/* Review title and content */}
                    <h5 className="font-semibold text-gray-800 text-base mb-2 leading-tight">
                      {review.title}
                    </h5>
                    <div className="relative mb-2">
                      <blockquote className="text-gray-700 leading-relaxed text-sm italic font-light border-l-3 border-[#c7aa62]/30 pl-4 bg-gray-50/50 py-2 rounded-r-lg">
                        "{expandedReviews[review.id]
                          ? review.comment
                          : truncateText(review.comment, 150)}"
                      </blockquote>
                      {review.comment.length > 150 && (
                        <button
                          onClick={() => toggleReadMore(review.id)}
                          className="text-[#c7aa62] hover:text-[#b8965a] font-medium text-xs mt-1 underline decoration-dotted underline-offset-2"
                        >
                          {expandedReviews[review.id] ? "Show less" : "Read more"}
                        </button>
                      )}
                    </div>

                    {/* Actions: Helpful button and Brand liked */}
                    <div className="flex justify-end items-center space-x-2">
                      <button
                        onClick={() => handleHelpfulClick(review.id)}
                        className={`inline-flex items-center space-x-1 transition-all text-xs group px-2 py-1 rounded-md ${
                          helpfulClicks[review.id] > 0
                            ? 'bg-[#c7aa62] text-white shadow-sm hover:bg-[#b8965a]'
                            : 'bg-gray-100 text-gray-600 hover:text-[#c7aa62] hover:bg-[#c7aa62]/10'
                        }`}
                      >
                        <ThumbsUp className={`w-3 h-3 group-hover:scale-105 transition-transform ${
                          helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                        }`} />
                        <span className="font-medium">
                          {(helpfulClicks[review.id] || 0) + review.helpful}
                        </span>
                      </button>

                      {/* Brand liked indicator inline */}
                      {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                        <span className="text-[9px] text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-medium">
                          Brand liked
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                // Grid View Layout
                <>
                  {/* Header: User info and rating */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c7aa62]/20 to-amber-100 flex items-center justify-center border border-[#c7aa62]/20">
                          <User className="w-4 h-4 text-[#c7aa62]" />
                        </div>
                        {review.verified && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 mb-0.5">
                          <span className="font-semibold text-gray-800 text-sm">{review.name}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <div className="flex items-center space-x-1">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm font-bold text-gray-800">{review.rating}.0</span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {getTimeAgo(review.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-3">
                    <h5 className="font-semibold text-gray-800 text-base mb-2 leading-tight">
                      {review.title}
                    </h5>
                    <div className="relative">
                      <blockquote className="text-gray-700 leading-relaxed text-xs italic font-light bg-gray-50/50 py-2 px-3 rounded-md">
                        "{expandedReviews[review.id]
                          ? review.comment
                          : truncateText(review.comment, 100)}"
                      </blockquote>
                      {review.comment.length > 100 && (
                        <button
                          onClick={() => toggleReadMore(review.id)}
                          className="text-[#c7aa62] hover:text-[#b8965a] font-medium text-xs mt-1 underline decoration-dotted underline-offset-2"
                        >
                          {expandedReviews[review.id] ? "Less" : "More"}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Footer: Perfume info and Actions */}
                  <div className="pt-3 border-t border-gray-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <img
                          src={perfume}
                          alt="Perfume"
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-xs font-medium text-[#c7aa62]">
                          {review.productName}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleHelpfulClick(review.id)}
                          className={`flex items-center space-x-1 transition-all text-xs group px-2 py-1 rounded-full ${
                            helpfulClicks[review.id] > 0
                              ? 'bg-[#c7aa62] text-white shadow-sm hover:bg-[#b8965a]'
                              : 'text-gray-500 hover:text-[#c7aa62] hover:bg-gray-100'
                          }`}
                        >
                          <ThumbsUp className={`w-3 h-3 group-hover:scale-110 transition-transform ${
                            helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                          }`} />
                          <span className="font-medium">
                            {(helpfulClicks[review.id] || 0) + review.helpful}
                          </span>
                        </button>
                        {/* Brand liked indicator inline */}
                        {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                          <span className="text-[8px] text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-medium">
                            Brand liked
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentPage === index + 1
                    ? 'bg-[#c7aa62] text-white'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {/* Write Review Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#c7aa62] to-amber-600 hover:from-[#b8965a] hover:to-amber-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            ✍️ Write Your Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;