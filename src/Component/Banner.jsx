import { Users, TrendingUp } from 'lucide-react';

const ProductProofBanner = () => {
  return (
    <div
      className="flex items-center justify-center mb-8 py-4  border-t border-b bg-gradient-to-r from-transparent via-amber-50/20 to-transparent"
      style={{
        borderColor: "rgba(212, 165, 116, 0.15)",
      }}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="text-base drop-shadow-sm transition-transform hover:scale-110 text-[#c7aa62]"
                style={{
                  textShadow: "0 1px 2px rgba(199, 170, 98, 0.3)"
                }}
              >
                ★
              </span>
            ))}
          </div>
          <span
            className="font-medium text-lg ml-2"
            style={{ color: "#2c2c2c" }}
          >
            4.8
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-px h-3 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>
          <div className="w-1.5 h-1.5 bg-amber-400/70 rounded-full my-0.5"></div>
          <div className="w-px h-3 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>
        </div>

        <div className="flex items-center gap-2">
          <Users
            className="w-4 h-4"
            style={{ color: "#d4a574" }}
          />
          <span className="text-sm font-medium" style={{ color: "#666666" }}>
            <span className="font-bold text-base text-[#c7aa62]">198</span> reviews
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-px h-3 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>
          <div className="w-1.5 h-1.5 bg-amber-400/70 rounded-full my-0.5"></div>
          <div className="w-px h-3 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"></div>
        </div>

        <div className="flex items-center gap-2">
          <TrendingUp
            className="w-4 h-4"
            style={{ color: "#22c55e" }}
          />
          <span className="text-sm font-medium" style={{ color: "#666666" }}>
            <span className="font-bold text-base text-[#c7aa62]">280</span> sold this month
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductProofBanner;