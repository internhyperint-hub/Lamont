import { Users, TrendingUp, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductProofBanner = () => {
  const [reviewCount, setReviewCount] = useState(150);
  const [soldCount, setSoldCount] = useState(250);
  const [isHovered, setIsHovered] = useState(false);

  // Keep refs to interval IDs so we can clear them reliably
  const reviewIntervalRef = useRef(null);
  const soldIntervalRef = useRef(null);

  useEffect(() => {
    // Clear any existing intervals first
    if (reviewIntervalRef.current) {
      clearInterval(reviewIntervalRef.current);
    }
    if (soldIntervalRef.current) {
      clearInterval(soldIntervalRef.current);
    }

    // Review count animation
    reviewIntervalRef.current = setInterval(() => {
      setReviewCount(prev => {
        if (prev >= 198) {
          clearInterval(reviewIntervalRef.current);
          reviewIntervalRef.current = null;
          return 198;
        }
        return prev + 2;
      });
    }, 50);

    // Sold count animation
    soldIntervalRef.current = setInterval(() => {
      setSoldCount(prev => {
        if (prev >= 280) {
          clearInterval(soldIntervalRef.current);
          soldIntervalRef.current = null;
          return 280;
        }
        return prev + 1;
      });
    }, 60);

    // Cleanup function
    return () => {
      if (reviewIntervalRef.current) {
        clearInterval(reviewIntervalRef.current);
        reviewIntervalRef.current = null;
      }
      if (soldIntervalRef.current) {
        clearInterval(soldIntervalRef.current);
        soldIntervalRef.current = null;
      }
    };
  }, []);

  // Add heart animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes heartFloat {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-3px) scale(1.05); }
      }

      @keyframes heartPulse {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.1); opacity: 1; }
      }

      .heart-float { animation: heartFloat 2s ease-in-out infinite; }
      .heart-pulse { animation: heartPulse 1.5s ease-in-out infinite; }
    `;
    if (!document.querySelector('style[data-banner-heart]')) {
      style.setAttribute('data-banner-heart', 'true');
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className="relative flex items-center justify-center mb-6 py-3 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Heart Pattern */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute w-4 h-4 text-gray-400 heart-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + (i % 2) * 30}%`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-6 relative z-10">
        {/* Star rating with heart theme */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0">
            {[1, 2, 3, 4, 5].map(star => (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                className={`text-sm text-gray-700 transition-all duration-300 hover:scale-110 cursor-default ${
                  isHovered ? 'animate-pulse' : ''
                }`}
                style={{
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                  animationDelay: `${star * 0.1}s`,
                }}
              />
            ))}
          </div>
          <span className="ml-1 text-lg font-bold text-gray-800">4.8</span>
        </div>

        {/* Heart Divider */}
        <div className="flex items-center">
          <Heart className="w-4 h-4 text-pink-400 heart-pulse" />
        </div>

        {/* Review count */}
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-600">
            <span className="text-lg font-bold text-gray-800 transition-all duration-300 tabular-nums">
              {reviewCount}
            </span>{' '}
            reviews
          </span>
        </div>

        {/* Heart Divider */}
        <div className="flex items-center">
          <Heart className="w-4 h-4 text-blue-400 heart-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Sold count */}
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-600">
            <span className="text-lg font-bold text-gray-800 transition-all duration-300 tabular-nums">
              {soldCount}
            </span>{' '}
            sold this month
          </span>
        </div>
      </div>

      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-50/20 via-pink-50/20 to-blue-50/20 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};

export default ProductProofBanner;