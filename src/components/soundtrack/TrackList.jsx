import { List } from "lucide-react";
import TrackItem from "./TrackItem";

export default function TrackList({ 
  tracks, 
  currentTrackIndex, // Renomeado de currentTrack para maior clareza
  playTrack,
  isPlaying
}) {
  return (
    // Padding responsivo: menor em telas pequenas, maior em telas grandes
    <div className="px-4 py-6 md:px-12 md:py-8">
      <div className="flex items-center gap-3 mb-6">
        <List className="w-5 h-5 text-blue-400" />
        {/* Tamanho da fonte do título responsivo */}
        <h2 className="text-xl md:text-2xl font-bold">Tracks</h2>
      </div>

      <div className="space-y-3">
        {tracks.map((track, index) => (
          <TrackItem
            key={track.title + index}
            track={track}
            index={index}
            isCurrent={currentTrackIndex === index}
            isPlaying={isPlaying}
            onClick={() => playTrack(index)}
          />
        ))}
      </div>
    </div>
  );
}