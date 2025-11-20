import { Heart } from "lucide-react";

export default function TrackItem({
  track,
  index,
  isCurrent,
  isPlaying,
  liked,
  onClick,
  toggleLike
}) {
  return (
    <div
      onClick={onClick}
      className={`
        group relative cursor-pointer p-5 rounded-xl border
        transition-all bg-gradient-to-r hover:scale-[1.02]
        ${isCurrent 
          ? "border-blue-500 from-green-900/40 to-blue-900/20"
          : "border-white/10 from-white/5 to-transparent hover:from-white/10 hover:to-white/5"}
      `}
    >
      <div className="flex items-center gap-6">

        {/* Número ou animação */}
        <div className="w-12 h-12 flex items-center justify-center">
          {isCurrent && isPlaying ? (
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
                <div className="w-1 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.15s" }}></div>
                <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              </div>
            </div>
          ) : (
            <span className="text-2xl text-gray-500 group-hover:text-green-400">
              {index + 1}
            </span>
          )}
        </div>

        {/* Título */}
        <div className="flex-1 min-w-0">
          <p className="text-lg font-bold truncate">{track.title}</p>
        </div>

        {/* Like */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(index);
          }}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart
            className={`w-5 h-5 ${
              liked ? "fill-green-500 text-green-500" : "text-gray-400 hover:text-white"
            }`}
          />
        </button>

      </div>

      {isCurrent && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500 rounded-l-xl"></div>
      )}
    </div>
  );
}
