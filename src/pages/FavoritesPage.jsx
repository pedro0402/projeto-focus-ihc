// src/pages/FavoritesPage.jsx
import { useState, useEffect } from "react";
import { usePlayer } from "../context/PlayerContext";
import { useFavorites } from "../context/FavoritesCotext";
import TrackList from "../components/soundtrack/TrackList";

export default function FavoritesPage() {
  const { currentTrack, isPlaying, playTrack } = usePlayer();
  const { favoriteTracks } = useFavorites(); // ← NOVO: usa dados reais

  const [dominantColor, setDominantColor] = useState("rgb(30, 58, 138)");
  
  useEffect(() => {
    setDominantColor("rgb(30, 58, 138)");
  }, []);

  // AGORA USA OS FAVORITOS REAIS
  const enrichedTracks = favoriteTracks.map(track => ({
    ...track,
    image: track.image,
    gameTitle: "Meus Favoritos", 
    gameSlug: "favorites"
  }));

  const currentEnrichedTrackIndex = currentTrack 
    ? enrichedTracks.findIndex(track => 
        track.title === currentTrack.title && 
        track.artist === currentTrack.artist
      )
    : -1;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Header */}
        <div
          className="relative h-60 overflow-hidden"
          style={{ background: `linear-gradient(to bottom, ${dominantColor}, black)` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative h-full flex items-end px-12 pb-8">
            <div className="flex items-end gap-10">
              
              <div>
                <h1 className="text-5xl font-black mb-2">
                  Meus Favoritos
                </h1>

                <div className="text-gray-400 text-sm flex items-center gap-3">
                  <span>{favoriteTracks.length} músicas</span> {/* ← AGORA DINÂMICO */}
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* TrackList - REMOVE likedTracks pois agora usa o contexto */}
        <TrackList
          tracks={enrichedTracks}
          currentTrack={currentEnrichedTrackIndex}
          playTrack={(index) =>
            playTrack(
              enrichedTracks[index],
              enrichedTracks,
              index
            )
          }
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
}