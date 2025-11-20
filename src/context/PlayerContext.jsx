import { createContext, useContext, useState, useRef, useEffect } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playTrack(track) {
    setCurrentTrack(track);
    setIsPlaying(true);
  }

  function pauseTrack() {
    setIsPlaying(false);
  }

  function togglePlay() {
    if (!currentTrack) return;
    setIsPlaying(!isPlaying);
  }

  return (
    <PlayerContext.Provider value={{
      currentTrack,
      isPlaying,
      playTrack,
      pauseTrack,
      togglePlay,
    }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}