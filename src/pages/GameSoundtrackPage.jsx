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
    getDominantColor(game.image).then(setDominantColor);
  }, [game]);

  if (!game) {
    return <h1 className="text-white p-6">Jogo não encontrado.</h1>;
  }

  // Encontra o índice da track atual
  const currentTrackIndex = currentTrack 
    ? game.tracks.findIndex(track => 
        track.title === currentTrack.title && 
        track.artist === currentTrack.artist
      )
    : -1;

    const enrichedTracks = game.tracks.map(track => ({
      ...track,
      image: game.image,          // Imagem do jogo
      gameTitle: game.title,      // Título do jogo
      gameSlug: game.slug         // Slug do jogo (opcional)
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
        <GameHeader 
          game={game}
          dominantColor={dominantColor}
        />
        
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