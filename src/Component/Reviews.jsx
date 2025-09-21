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

    // Smooth scroll to the review when expanding
    if (!expandedReviews[reviewId]) {
      setTimeout(() => {
        const reviewElement = document.getElementById(`review-${reviewId}`);
        if (reviewElement) {
          reviewElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }, 100);
    }
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
      productName: "Mediterranean Breeze",
      photos: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Top Reviewer", "Early Adopter"]
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
      productName: "Evening Elegance",
      photos: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Frequent Buyer"]
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
      productName: "Executive Collection",
      sentiment: "positive",
      photos: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=100&h=100&fit=crop"]
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
      productName: "Mediterranean Breeze",
      photos: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&h=100&fit=crop"],
      sentiment: "positive"
    },
    {
      id: 7,
      name: "Rahul K.",
      rating: 4,
      title: "Good fragrance with subtle projection",
      comment: "The fragrance has a pleasant and refined scent profile. It's quite subtle which works well for office environments or close interactions. The packaging is nicely done and feels premium. Perfect for those who prefer lighter, more intimate fragrances rather than bold projecting scents.",
      date: "2024-01-08",
      verified: true,
      helpful: 6,
      productName: "Executive Collection",
      sentiment: "positive"
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
      productName: "Mediterranean Breeze",
      photos: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Expert Reviewer"]
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
      productName: "Mediterranean Breeze",
      photos: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=100&h=100&fit=crop"],
      sentiment: "positive"
    },
    {
      id: 9,
      name: "Kavya N.",
      rating: 3,
      title: "Light and fresh for sensitive preferences",
      comment: "This fragrance has a very gentle and light character. It's quite subtle with about 2-3 hours of wear time, making it perfect for those who prefer delicate scents or have sensitive skin. The fragrance notes are pleasant and clean. Great option for people who want something understated and not overwhelming.",
      date: "2023-12-30",
      verified: true,
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
      rating: 3,
      title: "Different from expectations but decent",
      comment: "This fragrance has a unique scent profile that's different from what I usually prefer. It's quite light with about 1-2 hours of longevity, which works for quick outings. The bottle presentation is lovely. It might appeal to those who enjoy softer, more casual fragrances for everyday wear.",
      date: "2023-12-25",
      verified: true,
      helpful: 1,
      productName: "Executive Collection"
    },
    {
      id: 16,
      name: "Amit S.",
      rating: 3,
      title: "Decent everyday fragrance",
      comment: "This is a solid everyday fragrance with familiar, comforting notes. It has moderate longevity of about 3-4 hours, which is good for casual wear. The scent is approachable and versatile. Good value for regular use, and the customer service team was very helpful with my questions.",
      date: "2023-12-20",
      verified: true,
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
      productName: "Evening Elegance",
      photos: ["https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Style Influencer"]
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
      productName: "Mediterranean Breeze",
      photos: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Loyal Customer"]
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
        className={`text-base ${index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
      >
        ★
      </span>
    ));
  };

  const truncateText = (text, limit = 120) => {
    if (text.length <= limit) return text;
    // Find the last space before the limit to avoid cutting words
    const truncated = text.slice(0, limit);
    const lastSpace = truncated.lastIndexOf(' ');
    const cutPoint = lastSpace > limit * 0.8 ? lastSpace : limit;
    return text.slice(0, cutPoint) + "...";
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
    <div className="w-9/10 mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center flex-1">

            </div>

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
                { key: '5star', label: 'Excellent' },
                { key: '4star', label: 'Great' },
                { key: 'verified', label: 'Verified' }
              ].map(filter => (
                <button
                  key={filter.key}
                  onClick={() => setFilterBy(filter.key)}
                  className={`px-3 py-1.5 text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md ${filterBy === filter.key
                    ? 'bg-gradient-to-r from-[#c7aa62] to-amber-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 hover:from-[#c7aa62]/10 hover:to-amber-50 hover:text-[#c7aa62] border border-gray-200 hover:border-[#c7aa62]/30'
                    }`}
                  style={{ borderRadius: '5px' }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-md p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${viewMode === 'grid'
                ? 'bg-[#c7aa62] text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${viewMode === 'list'
                ? 'bg-[#c7aa62] text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              List
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
        <div className={`mb-8 ${viewMode === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'
          : 'space-y-4 max-w-4xl mx-auto'
          }`}>
          {currentReviews.map((review) => (
            <div
              key={review.id}
              id={`review-${review.id}`}
              className={`transition-all duration-300 border border-gray-100 hover:border-[#c7aa62]/30 relative ${viewMode === 'grid'
                ? 'bg-white rounded-lg p-5 shadow-sm hover:shadow-lg transform hover:-translate-y-1'
                : 'bg-white rounded-lg shadow-sm border-l-4 border-l-[#c7aa62]/20'
                }`}
            >
              {viewMode === 'list' ? (
                // Enhanced List View Layout
                <div className="flex gap-5 p-4">
                  {/* Left Section: User Avatar */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c7aa62]/15 to-amber-50 flex items-center justify-center border border-[#c7aa62]/10 shadow-sm">
                      <User className="w-5 h-5 text-[#c7aa62]/80" />
                    </div>
                  </div>

                  {/* Center Section: Review Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header with name and date */}
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-gray-800 text-base">{review.name}</span>
                          {/* Reviewer badges in list view */}
                          {review.badges && review.badges.length > 0 && (
                            <div className="flex gap-1">
                              {review.badges.map((badge, index) => (
                                <span
                                  key={index}
                                  className="bg-purple-50 text-purple-600 text-[10px] px-2 py-1 rounded-full font-medium"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          )}
                          <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
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
                          <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-1.5 border border-emerald-400/30">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[10px] font-bold tracking-wide">VERIFIED</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Review title and content */}
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-semibold text-gray-800 text-base leading-tight flex-1">
                        {review.title}
                      </h5>
                    </div>
                    <div className="relative mb-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className={`text-gray-600 leading-relaxed text-sm font-normal border-l-2 border-[#c7aa62]/20 pl-4 bg-gray-50/30 py-3 rounded-r-lg transition-all duration-300 overflow-hidden flex-1 ${expandedReviews[review.id] ? 'max-h-24' : 'max-h-20'}`}>
                          {expandedReviews[review.id]
                            ? review.comment
                            : truncateText(review.comment, 150)}
                        </div>
                        {review.comment.length > 150 && (
                          <button
                            onClick={() => toggleReadMore(review.id)}
                            className="text-[#c7aa62] hover:text-[#b8965a] font-medium text-xs px-2 py-1 bg-white/80 rounded-md border border-[#c7aa62]/20 hover:bg-[#c7aa62]/10 transition-all duration-200 shadow-sm flex-shrink-0"
                          >
                            {expandedReviews[review.id] ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Review Photos with inline perfume name and buttons */}
                    {review.photos && review.photos.length > 0 ? (
                      <div className="mb-3">
                        <div className="flex items-center justify-between mt-2">
                          {/* Photos section */}
                          <div className="flex gap-2">
                            {review.photos.map((photo, index) => (
                              <div key={index} className="relative group">
                                <img
                                  src={photo}
                                  alt={`Review photo ${index + 1}`}
                                  className="w-16 h-16 object-cover rounded-lg border border-gray-200 hover:border-[#c7aa62] transition-all duration-300 cursor-pointer transform group-hover:scale-105 shadow-sm"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-all duration-300"></div>
                              </div>
                            ))}
                          </div>

                          {/* Perfume name and buttons inline with photos */}
                          <div className="flex items-center space-x-3 ml-4">
                            <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-[#c7aa62] bg-[#c7aa62]/10 px-2 py-1 rounded-full">
                              <img src={perfume} alt="Perfume" className="w-3 h-3 object-contain" />
                              <span>{review.productName}</span>
                            </span>

                            <button
                              onClick={() => handleHelpfulClick(review.id)}
                              className={`inline-flex items-center space-x-1 transition-all text-xs group px-2 py-1 rounded-md ${helpfulClicks[review.id] > 0
                                ? 'bg-[#c7aa62] text-white shadow-sm hover:bg-[#b8965a]'
                                : 'bg-gray-100 text-gray-600 hover:text-[#c7aa62] hover:bg-[#c7aa62]/10'
                                }`}
                            >
                              <ThumbsUp className={`w-3 h-3 group-hover:scale-105 transition-transform ${helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                                }`} />
                              <span className="font-medium">
                                {(helpfulClicks[review.id] || 0) + review.helpful}
                              </span>
                            </button>

                            {/* Brand liked indicator */}
                            {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                              <span className="text-[9px] text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-medium">
                                Brand liked
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Perfume name and buttons when no photos */
                      <div className="mb-3">
                        <div className="flex items-center justify-end mt-2">
                          <div className="flex items-center space-x-3">
                            <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-[#c7aa62] bg-[#c7aa62]/10 px-2 py-1 rounded-full">
                              <img src={perfume} alt="Perfume" className="w-3 h-3 object-contain" />
                              <span>{review.productName}</span>
                            </span>

                            <button
                              onClick={() => handleHelpfulClick(review.id)}
                              className={`inline-flex items-center space-x-1 transition-all text-xs group px-2 py-1 rounded-md ${helpfulClicks[review.id] > 0
                                ? 'bg-[#c7aa62] text-white shadow-sm hover:bg-[#b8965a]'
                                : 'bg-gray-100 text-gray-600 hover:text-[#c7aa62] hover:bg-[#c7aa62]/10'
                                }`}
                            >
                              <ThumbsUp className={`w-3 h-3 group-hover:scale-105 transition-transform ${helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                                }`} />
                              <span className="font-medium">
                                {(helpfulClicks[review.id] || 0) + review.helpful}
                              </span>
                            </button>

                            {/* Brand liked indicator */}
                            {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                              <span className="text-[9px] text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-medium">
                                Brand liked
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              ) : (
                // Grid View Layout
                <>
                  {/* Header: User info and rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c7aa62]/15 to-amber-50 flex items-center justify-center border border-[#c7aa62]/10">
                          <User className="w-5 h-5 text-[#c7aa62]/80" />
                        </div>
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-800 text-base">{review.name}</span>
                          {/* Reviewer badges in grid view */}
                          {review.badges && review.badges.length > 0 && (
                            <div className="flex gap-1">
                              {review.badges.slice(0, 1).map((badge, index) => (
                                <span
                                  key={index}
                                  className="bg-purple-50 text-purple-600 text-[9px] px-2 py-0.5 rounded-full font-medium"
                                >
                                  {badge}
                                </span>
                              ))}
                              {review.badges.length > 1 && (
                                <span className="text-[9px] text-gray-400">+{review.badges.length - 1}</span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm font-bold text-gray-800">{review.rating}.0</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Days ago in top right */}
                    <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                      {getTimeAgo(review.date)}
                    </span>
                  </div>

                  {/* Review Content */}
                  <div className="mb-3">
                    <h5 className="font-semibold text-gray-800 text-base mb-2 leading-tight">
                      {review.title}
                    </h5>
                    <div className="relative">
                      <div className="flex items-start justify-between gap-2">
                        <div className={`text-gray-600 leading-relaxed text-xs font-normal bg-gray-50/30 py-3 px-3 rounded-md transition-all duration-300 overflow-hidden flex-1 ${expandedReviews[review.id] ? 'max-h-20' : 'max-h-16'}`}>
                          {expandedReviews[review.id]
                            ? review.comment
                            : truncateText(review.comment, 100)}
                        </div>
                        {review.comment.length > 100 && (
                          <button
                            onClick={() => toggleReadMore(review.id)}
                            className="text-[#c7aa62] hover:text-[#b8965a] font-medium text-xs px-2 py-1 bg-white/80 rounded-md border border-[#c7aa62]/20 hover:bg-[#c7aa62]/10 transition-all duration-200 shadow-sm flex-shrink-0"
                          >
                            {expandedReviews[review.id] ? "Less" : "More"}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Review Photos in Grid View with inline perfume name and buttons */}
                    {review.photos && review.photos.length > 0 ? (
                      <div className="mt-2">
                        <div className="flex items-center justify-between">
                          {/* Photos section */}
                          <div className="flex gap-1">
                            {review.photos.slice(0, 2).map((photo, index) => (
                              <div key={index} className="relative group">
                                <img
                                  src={photo}
                                  alt={`Review photo ${index + 1}`}
                                  className="w-12 h-12 object-cover rounded-md border border-gray-200 hover:border-[#c7aa62] transition-all duration-300 cursor-pointer transform group-hover:scale-105 shadow-sm"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-md transition-all duration-300"></div>
                              </div>
                            ))}
                          </div>

                          {/* Perfume name and buttons inline with photos */}
                          <div className="flex flex-col items-end space-y-1 ml-2">
                            <div className="flex items-center space-x-1.5">
                              <img src={perfume} alt="Perfume" className="w-3 h-3 object-contain" />
                              <span className="text-[9px] font-medium text-[#c7aa62]">
                                {review.productName}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => handleHelpfulClick(review.id)}
                                className={`flex items-center space-x-1 transition-all text-[10px] group px-1.5 py-0.5 rounded-md ${helpfulClicks[review.id] > 0
                                  ? 'bg-[#c7aa62] text-white shadow-sm hover:bg-[#b8965a]'
                                  : 'bg-gray-100 text-gray-600 hover:text-[#c7aa62] hover:bg-[#c7aa62]/10'
                                  }`}
                              >
                                <ThumbsUp className={`w-2.5 h-2.5 group-hover:scale-110 transition-transform ${helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                                  }`} />
                                <span className="font-medium">
                                  {(helpfulClicks[review.id] || 0) + review.helpful}
                                </span>
                              </button>
                              {/* Brand liked indicator */}
                              {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                                <span className="text-[7px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md font-medium">
                                  Brand liked
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Perfume name and buttons when no photos in grid view */
                      <div className="mt-2">
                        <div className="flex items-center justify-end">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1.5">
                              <img src={perfume} alt="Perfume" className="w-3 h-3 object-contain" />
                              <span className="text-[9px] font-medium text-[#c7aa62]">
                                {review.productName}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => handleHelpfulClick(review.id)}
                                className={`flex items-center space-x-1 transition-all text-[10px] group px-1.5 py-0.5 rounded-md ${helpfulClicks[review.id] > 0
                                  ? 'bg-[#c7aa62] text-white shadow-sm hover:bg-[#b8965a]'
                                  : 'bg-gray-100 text-gray-600 hover:text-[#c7aa62] hover:bg-[#c7aa62]/10'
                                  }`}
                              >
                                <ThumbsUp className={`w-2.5 h-2.5 group-hover:scale-110 transition-transform ${helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                                  }`} />
                                <span className="font-medium">
                                  {(helpfulClicks[review.id] || 0) + review.helpful}
                                </span>
                              </button>
                              {/* Brand liked indicator */}
                              {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                                <span className="text-[7px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md font-medium">
                                  Brand liked
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
                className={`px-4 py-2 rounded-lg font-medium ${currentPage === index + 1
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

      </div>
    </div>
  );
};

export default Reviews;