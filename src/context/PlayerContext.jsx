import { createContext, useContext, useState, useRef, useEffect } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  function playTrack(track, playlist, index) {
    setCurrentTrack(track);
    setCurrentPlaylist(playlist);
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  }

  function nextTrack() {
    if (currentPlaylist.length === 0) return;

    const nextIndex = currentTrackIndex + 1;

    if (nextIndex < currentPlaylist.length) {
      const nextTrack = currentPlaylist[nextIndex];
      setCurrentTrack(nextTrack);
      setCurrentTrackIndex(nextIndex);
      setIsPlaying(true);
    } else {
      const firstTrack = currentPlaylist[0]
      setCurrentTrack(firstTrack);
      setCurrentTrackIndex(0);
      setIsPlaying(true);
    }
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
      currentPlaylist,
      currentTrackIndex,
      playTrack,
      nextTrack,
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