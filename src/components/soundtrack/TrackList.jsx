import List from "lucide-react/dist/esm/icons/list";
import TrackItem from "./TrackItem";

export default function TrackList({ 
  tracks, 
  currentTrack, 
  setCurrentTrack, 
  isPlaying,
  likedTracks,
  setLikedTracks
}) {

  const toggleLike = (id) => {
    const updated = new Set(likedTracks);
    updated.has(id) ? updated.delete(id) : updated.add(id);
    setLikedTracks(updated);
  };

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
            liked={likedTracks.has(index)}
            onClick={() => setCurrentTrack(index)}
            toggleLike={toggleLike}
          />
        ))}
      </div>

    </div>
  );
}
