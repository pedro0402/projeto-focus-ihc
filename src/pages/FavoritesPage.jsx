// src/pages/FavoritesPage.jsx
import { useState, useEffect } from "react";
import { usePlayer } from "../context/PlayerContext";
import TrackList from "../components/soundtrack/TrackList";
import { getDominantColor } from "../utils/getDominantColors";

// Dados mockados para os favoritos
const favoriteTracks = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    artist: "Marcin Przybyłowicz",
    duration: "3:45",
    image: "/witcher.jpg",
    album: "The Witcher 3: Wild Hunt OST",
  },
  {
    id: 2,
    title: "Geralt of Rivia",
    artist: "Marcin Przybyłowicz", 
    duration: "4:20",
    image: "/witcher.jpg",
    album: "The Witcher 3: Wild Hunt OST",
  },
  {
    id: 3,
    title: "Silver for Monsters",
    artist: "Marcin Przybyłowicz",
    duration: "3:15",
    image: "/witcher.jpg",
    album: "The Witcher 3: Wild Hunt OST",
  },
  {
    id: 4,
    title: "Cyberpunk 2077 Theme",
    artist: "P.T. Adamczyk",
    duration: "4:32",
    image: "/cyber.jpg",
    album: "Cyberpunk 2077 OST",
  },
  {
    id: 5,
    title: "The Rebel Path",
    artist: "P.T. Adamczyk",
    duration: "3:55",
    image: "/cyber.jpg",
    album: "Cyberpunk 2077 OST",
  },
  {
    id: 6,
    title: "RDR2 Main Theme",
    artist: "Woody Jackson",
    duration: "5:12",
    image: "/reddead.jpg",
    album: "Red Dead Redemption 2 OST",
  }
];

export default function FavoritesPage() {
  const { currentTrack, isPlaying, playTrack } = usePlayer();

  const [dominantColor, setDominantColor] = useState("rgb(30, 58, 138)");
  const [likedTracks, setLikedTracks] = useState(new Set([1, 2, 3, 4, 5, 6]));
  
  useEffect(() => {
    // Usa uma cor fixa para os favoritos (azul do Spotify)
    setDominantColor("rgb(30, 58, 138)");
  }, []);

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
        {/* Header customizado e limpo */}
        <div
          className="relative h-60 overflow-hidden"
          style={{ background: `linear-gradient(to bottom, ${dominantColor}, black)` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative h-full flex items-end px-12 pb-8">
            <div className="flex items-end gap-10">
              
              {/* Apenas o título */}
              <div>
                <h1 className="text-5xl font-black mb-2">
                  Meus Favoritos
                </h1>

                <div className="text-gray-400 text-sm flex items-center gap-3">
                  <span>{favoriteTracks.length} músicas</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
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
          likedTracks={likedTracks}
          setLikedTracks={setLikedTracks}
        />
      </div>
    </div>
  );
}