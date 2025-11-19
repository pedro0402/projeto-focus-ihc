import { createContext, useContext, useState, useRef } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const audioRef = useRef(new Audio());
  
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playTrack(track) {
    audioRef.current.src = track.url;
    audioRef.current.play();
    setCurrentTrack(track);
    setIsPlaying(true);
  }

  function pauseTrack() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <PlayerContext.Provider value={{
      currentTrack,
      isPlaying,
      playTrack,
      pauseTrack
    }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
