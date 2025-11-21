// src/context/FavoritesContext.js
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteTracks, setFavoriteTracks] = useState([]);

  // Carregar do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('favoriteTracks');
    if (saved) {
      setFavoriteTracks(JSON.parse(saved));
    }
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem('favoriteTracks', JSON.stringify(favoriteTracks));
  }, [favoriteTracks]);

  const addToFavorites = (track) => {
    setFavoriteTracks(prev => {
      // Evitar duplicatas
      const exists = prev.find(t => 
        t.title === track.title && 
        t.artist === track.artist
      );
      if (exists) return prev;
      
      return [...prev, { ...track, id: Date.now() }];
    });
  };

  const removeFromFavorites = (track) => {
    setFavoriteTracks(prev => 
      prev.filter(t => !(t.title === track.title && t.artist === track.artist))
    );
  };

  const isTrackFavorite = (track) => {
    return favoriteTracks.some(t => 
      t.title === track.title && 
      t.artist === track.artist
    );
  };

  const toggleFavorite = (track) => {
    if (isTrackFavorite(track)) {
      removeFromFavorites(track);
    } else {
      addToFavorites(track);
    }
  };

  return (
    <FavoritesContext.Provider value={{
      favoriteTracks,
      addToFavorites,
      removeFromFavorites,
      isTrackFavorite,
      toggleFavorite,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}