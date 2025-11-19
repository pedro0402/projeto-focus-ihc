import { useParams } from "react-router-dom";
import { gamesData } from "../data/gamesData";
import { useState, useEffect } from "react";

import GameHeader from "../components/soundtrack/GameHeader";
import TrackList from "../components/soundtrack/TrackList";

import { getDominantColor } from "../utils/getDominantColors";
import BottomBar from "../components/bottombar/BottomBar";

export default function GameSoundtrackPage() {
  const { gameId } = useParams();
  const game = gamesData.find((g) => g.slug === gameId);

  const [dominantColor, setDominantColor] = useState("rgb(0,0,0)");
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState(new Set());

  const [audio] = useState(new Audio());
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  useEffect(() => {
    if (!game) return;
    getDominantColor(game.image).then(setDominantColor);
  }, [game]);

  function playTrack(index) {
      const track = game.tracks[index];

      // envia informações completas da música para o player
      setCurrentTrack({
        ...track,
        image: game.image,   // imagem do jogo
        gameTitle: game.title
      });

      setIsPlaying(true);
      setIsPlayerVisible(true); // mostra o player lá embaixo
  }

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
        
        <TrackList
          tracks={game.tracks}
          currentTrack={currentTrack}
          playTrack={playTrack}
          setCurrentTrack={setCurrentTrack}
          isPlaying={isPlaying}
          likedTracks={likedTracks}
          setLikedTracks={setLikedTracks}
        />

      </div>

      {currentTrack && (
      <BottomBar
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    )}

    </div>
  );
}
