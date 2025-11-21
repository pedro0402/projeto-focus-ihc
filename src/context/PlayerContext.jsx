import { createContext, useContext, useState, useRef, useEffect } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [recentlyPlayed, setRecentlyPlayed] = useState([0])

  function playTrack(track, playlist = [], index) {

    const trackWithType = {
      ...track,
      type: track.type || "game",
      playlistSlug: track.playlistSlug || null
    }

    setCurrentTrack(trackWithType);
    setCurrentPlaylist(playlist);
    setCurrentTrackIndex(index);
    setIsPlaying(true);

    addToRecentlyPlayed(track)
  }

  function addToRecentlyPlayed(track) {
    setRecentlyPlayed (prev => {
      const filtered = prev.filter(t => !(t.title === track.title && t.artist === track.artist));
      const updated = [track, ...filtered].slice(0, 20);
      return updated;
    })
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

  useEffect(() => {
    const saved = localStorage.getItem('recentlyPlayed');
    if (saved) {
      setRecentlyPlayed(JSON.parse(saved))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed))
  }, [recentlyPlayed])

  return (
    <PlayerContext.Provider value={{
      currentTrack,
      isPlaying,
      currentPlaylist,
      currentTrackIndex,
      recentlyPlayed,
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