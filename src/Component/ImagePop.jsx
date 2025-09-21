import React, { useState } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const PerfumeReviewPopup = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    {
      id: 1,
      name: "Arjun Sharma",
      rating: 5,
      date: "Nov 15, 2024",
      location: "Mumbai, India",
      title: "Captivating Fragrance Experience",
      content: "LaMont Dijon perfume is absolutely mesmerizing! The blend of bergamot and sandalwood creates an enchanting aura that lasts throughout the day. I wore it to a wedding reception and received countless compliments. The projection is perfect - not too overwhelming but definitely noticeable. This has become my signature scent for special occasions.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
      size: "50ml",
      customerType: "Verified Purchase"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 5,
      date: "Oct 28, 2024",
      location: "Delhi, India",
      title: "Elegance in a Bottle",
      content: "From the moment I sprayed LaMont Dijon, I knew it was something special. The top notes of citrus give way to a beautiful heart of jasmine and rose. What impressed me most is the longevity - it stayed fresh on my skin for over 8 hours! The packaging is luxurious and the bottle design is stunning. Worth every penny for this premium experience.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=500&fit=crop",
      size: "100ml",
      customerType: "First Purchase"
    },
    {
      id: 3,
      name: "Rohit Gupta",
      rating: 4,
      date: "Dec 02, 2024",
      location: "Bangalore, India",
      title: "Sophisticated and Refined",
      content: "LaMont Dijon strikes the perfect balance between sophistication and approachability. The woody undertones mixed with fresh florals make it versatile for both day and evening wear. I've been using it for office meetings and dinner dates alike. The sillage is impressive without being overpowering. My only wish is that it came in a larger size option!",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
      size: "75ml",
      customerType: "Repeat Customer"
    },
    {
      id: 4,
      name: "Kavya Reddy",
      rating: 5,
      date: "Jan 18, 2025",
      location: "Hyderabad, India",
      title: "Pure Luxury and Romance",
      content: "This perfume is pure poetry in a bottle! LaMont Dijon has this incredible ability to evolve throughout the day. It starts fresh and vibrant, then settles into this warm, sensual base that's absolutely divine. My husband can't stop complimenting me when I wear it. The atomizer gives a perfect mist and the bottle looks gorgeous on my vanity. Highly recommend for romantic evenings!",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop",
      size: "50ml",
      customerType: "Premium Member"
    },
    {
      id: 5,
      name: "Vikram Singh",
      rating: 5,
      date: "Feb 05, 2025",
      location: "Chennai, India",
      title: "Exceptional Quality and Performance",
      content: "As someone who collects premium fragrances, LaMont Dijon has earned a permanent spot in my collection. The composition is masterful - each note is perfectly balanced and transitions smoothly. What sets it apart is the unique dry-down that reveals hints of amber and musk. The performance is outstanding with excellent projection and longevity. This is artisanal perfumery at its finest!",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop",
      size: "100ml",
      customerType: "Fragrance Collector"
    }
  ];

  const openModal = (review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  const renderStars = (rating, isDark = false) => {
    return [...Array(5)].map((_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`text-sm ${i < rating ? 'text-white' : isDark ? 'text-gray-600' : 'text-whi-300'}`}
      />
    ));
  };

  return (
    <div className=" bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">LaMont Dijon Premium Collection</h1>
        <p className="text-center text-gray-600 mb-8">Discover the essence of luxury through our customer experiences</p>
        
        <div className="flex justify-center gap-2">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-[150px] relative rounded-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 group"
              onClick={() => openModal(review)}
            >
              <img
                src={review.image}
                alt={`${review.name}'s review`}
                className="w-full h-32 object-cover"
              />

              {/* Hover overlay with content */}
              <div className="absolute inset-0 bg-gray-700 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-3">
                <div className="flex justify-center mb-2">
                  {renderStars(review.rating, true)}
                </div>
                <h3 className="text-sm font-semibold text-center mb-1">{review.name}</h3>
                <p className="text-xs text-center mb-1">{review.location}</p>
                
              </div>
            </div>
          ))}
        </div>

        {selectedReview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-gray-900 text-white p-3 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Customer Review</h2>
                <button
                  onClick={closeModal}
                  className="hover:bg-gray-700 p-1 rounded"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <img
                      src={selectedReview.image}
                      alt={`${selectedReview.name}'s perfume`}
                      className="w-full h-32 object-cover rounded-lg shadow-md"
                    />
                    <div className="text-center mt-2 text-xs text-gray-600">
                      <p>Size: {selectedReview.size}</p>
                      <p>Customer: {selectedReview.customerType}</p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{selectedReview.name}</h3>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex">
                        {renderStars(selectedReview.rating)}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-red-500" />
                        <span>{selectedReview.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-red-500" />
                        <span>{selectedReview.location}</span>
                      </div>
                    </div>

                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      "{selectedReview.title}"
                    </h4>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {selectedReview.content}
                      </p>
                    </div>

                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <h5 className="text-sm font-semibold text-gray-800 mb-1">About LaMont Dijon</h5>
                      <p className="text-xs text-gray-600">
                        Crafted with premium ingredients sourced from around the world, LaMont Dijon represents
                        the pinnacle of French perfumery excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t p-3 bg-gray-50 text-center">
                <p className="text-xs text-gray-600">
                  Thank you for choosing LaMont Dijon - Where luxury meets passion
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfumeReviewPopup;