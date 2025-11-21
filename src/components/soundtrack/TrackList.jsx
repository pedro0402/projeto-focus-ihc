import { List } from "lucide-react";
import TrackItem from "./TrackItem";

export default function TrackList({ 
  tracks, 
  currentTrack, 
  playTrack,
  isPlaying
}) {

  return (
    <div className="px-12 py-8">
      <div className="flex items-center gap-3 mb-6">
        <List className="w-5 h-5 text-blue-400" />
        <h2 className="text-2xl font-bold">Tracks</h2>
      </div>

      <div className="space-y-3">
        {tracks.map((track, index) => (
          <TrackItem
            key={track.title + index}
            track={track}
            index={index}
            isCurrent={currentTrack === index}
            isPlaying={isPlaying}
            onClick={() => playTrack(index)}
          />
        ))}
      </div>
    </div>
  );
}