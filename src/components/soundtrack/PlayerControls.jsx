import { Play, Pause } from "lucide-react";

export default function PlayerControls({ isPlaying, setIsPlaying }) {
  return (
    <div className="px-12 py-6 bg-gradient-to-b from-black/80 to-transparent sticky top-0 z-10 backdrop-blur-md">

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-16 h-16 rounded-full flex items-center justify-center 
        bg-gradient-to-r from-blue-500 to-green-500 hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <Pause className="w-7 h-7" />
        ) : (
          <Play className="w-7 h-7 ml-1" />
        )}
      </button>

    </div>
  );
}
