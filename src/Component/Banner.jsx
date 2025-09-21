import { Users, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ProductProofBanner = () => {
  const [reviewCount, setReviewCount] = useState(150);
  const [soldCount, setSoldCount] = useState(250);

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

  return (
    <div
      className="relative flex items-center justify-center mb-8 py-4 border-t border-b bg-gradient-to-r from-transparent via-amber-50/20 to-transparent"
      style={{ borderColor: 'rgba(212, 165, 116, 0.15)' }}
    >
      <div className="flex items-center gap-8">
        {/* Star rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className="text-base text-[#c7aa62] drop-shadow-sm animate-pulse transition-all duration-300 hover:scale-110 cursor-default"
                style={{
                  textShadow: '0 1px 2px rgba(199, 170, 98, 0.3)',
                  animationDelay: `${star * 0.2}s`,
                  animationDuration: '2s',
                }}
              >
                ★
              </span>
            ))}
          </div>
          <span className="ml-2 text-lg font-medium text-[#2c2c2c]">4.8</span>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center">
          <div className="w-px h-3 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
          <div className="my-0.5 h-1.5 w-1.5 rounded-full bg-amber-400/70" />
          <div className="w-px h-3 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
        </div>

        {/* Review count */}
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#d4a574]" />
          <span className="text-sm font-medium text-[#666666]">
            <span className="text-base font-bold text-[#c7aa62] transition-all duration-300 tabular-nums">
              {reviewCount}
            </span>{' '}
            reviews
          </span>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center">
          <div className="w-px h-3 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
          <div className="my-0.5 h-1.5 w-1.5 rounded-full bg-amber-400/70" />
          <div className="w-px h-3 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
        </div>

        {/* Sold count */}
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-[#666666]">
            <span className="text-base font-bold text-[#c7aa62] transition-all duration-300 tabular-nums">
              {soldCount}
            </span>{' '}
            sold this month
          </span>
        </div>
      </div>

    </div>
  );
};

export default ProductProofBanner;