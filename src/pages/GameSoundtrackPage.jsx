import { useParams } from "react-router-dom";
import { gamesData } from "../data/MostViewedSoundtrackData";
import { useState, useEffect } from "react";
import { usePlayer } from "../context/PlayerContext";

import GameHeader from "../components/soundtrack/GameHeader";
import TrackList from "../components/soundtrack/TrackList";
import { getDominantColor } from "../utils/getDominantColors";

export default function GameSoundtrackPage() {
  const { gameId } = useParams();
  const game = gamesData.find((g) => g.slug === gameId);

  const { currentTrack, isPlaying, playTrack } = usePlayer();

  const [dominantColor, setDominantColor] = useState("rgb(0,0,0)");
  const [likedTracks, setLikedTracks] = useState(new Set());
  
  useEffect(() => {
    if (!game) return;
    // Garante que a cor dominante seja redefinida ao navegar
    setDominantColor("rgb(0,0,0)"); 
    getDominantColor(game.image).then(setDominantColor);
  }, [game]);

  if (!game) {
    // Adicionado padding responsivo
    return <h1 className="text-white p-4 md:p-6">Jogo não encontrado.</h1>;
  }

  // Lógica para encontrar o índice da track atual (mantida)
  const enrichedTracks = game.tracks.map(track => ({
    ...track,
    image: game.image,
    gameTitle: game.title,
    gameSlug: game.slug
  }));

  const currentEnrichedTrackIndex = currentTrack 
      ? enrichedTracks.findIndex(track => 
          track.title === currentTrack.title && 
          track.artist === currentTrack.artist
        )
      : -1;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Adicionado padding na base para o player fixo */}
      <div className="flex-1 overflow-y-auto pb-24 md:pb-32">
        <GameHeader 
          game={game}
          dominantColor={dominantColor}
        />
        
        <TrackList
          tracks={enrichedTracks}
          currentTrackIndex={currentEnrichedTrackIndex} // Renomeado para clareza
          playTrack={(index) =>
            playTrack(
              {
                ...enrichedTracks[index],
                type: 'game'
              },
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