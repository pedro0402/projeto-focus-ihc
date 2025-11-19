import { useParams } from "react-router-dom";
import { gamesData } from "../data/gamesData";
import { useState, useEffect } from "react";

import GameHeader from "../components/soundtrack/GameHeader";
import PlayerControls from "../components/soundtrack/PlayerControls";
import TrackList from "../components/soundtrack/TrackList";

import { getDominantColor } from "../utils/getDominantColors";

export default function GameSoundtrackPage() {
  const { gameId } = useParams();
  const game = gamesData.find((g) => g.slug === gameId);

  const [dominantColor, setDominantColor] = useState("rgb(0,0,0)");
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState(new Set());

  useEffect(() => {
    if (!game) return;
    getDominantColor(game.image).then(setDominantColor);
  }, [game]);

  if (!game) {
    return <h1 className="text-white p-6">Jogo não encontrado.</h1>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <div className="flex-1 overflow-y-auto pb-32">
        
        <GameHeader 
          game={game}
          dominantColor={dominantColor}
        />

        <PlayerControls 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />

        <TrackList
          tracks={game.tracks}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          isPlaying={isPlaying}
          likedTracks={likedTracks}
          setLikedTracks={setLikedTracks}
        />

      </div>

    </div>
  );
}
