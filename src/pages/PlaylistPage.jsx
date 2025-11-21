// src/pages/PlaylistPage.jsx - PÁGINA GENÉRICA
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";
import TrackList from "../components/soundtrack/TrackList";
import { getDominantColor } from "../utils/getDominantColors";
import { playlistsData } from "../data/PlaylistData";

export default function PlaylistPage() {
  const { playlistId } = useParams(); // ← Pega o ID da URL
  const { currentTrack, isPlaying, playTrack } = usePlayer();
  
  const [dominantColor, setDominantColor] = useState("rgb(30, 58, 138)");
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const foundPlaylist = playlistsData[playlistId];
    setPlaylist(foundPlaylist);
    
    if (foundPlaylist) {
      getDominantColor(foundPlaylist.image).then(setDominantColor);
    }
  }, [playlistId]);

  if (!playlist) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl">Playlist não encontrada</h1>
      </div>
    );
  }

  const enrichedTracks = playlist.tracks.map(track => ({
    ...track,
    image: playlist.image,
    gameTitle: playlist.title
  }));

  const currentTrackIndex = currentTrack 
    ? enrichedTracks.findIndex(track => 
        track.title === currentTrack.title && 
        track.artist === currentTrack.artist
      )
    : -1;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 overflow-y-auto pb-32">
        <div
          className="relative h-96 overflow-hidden"
          style={{ background: `linear-gradient(to bottom, ${dominantColor}, black)` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative h-full flex items-end px-12 pb-8">
            <div className="flex items-end gap-10">
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-700 blur-2xl opacity-40 group-hover:opacity-60"></div>
                <div className="relative w-48 h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-400/20">
                  <img 
                    src={playlist.image}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Informações da playlist */}
              <div>
                <p className="text-green-400 text-sm font-bold tracking-wider mb-1">
                  {playlist.type?.toUpperCase() || "PLAYLIST"}
                </p>
                <h1 className="text-5xl font-black mb-2">
                  {playlist.title}
                </h1>
                <p className="text-gray-300 max-w-xl mb-3">
                  {playlist.description}
                </p>
                <div className="text-gray-400 text-sm flex items-center gap-3">
                  <span>{playlist.tracks.length} músicas</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* TrackList reutilizável */}
        <TrackList
          tracks={enrichedTracks}
          currentTrack={currentTrackIndex}
          playTrack={(index) =>
            playTrack(
                {
                ...enrichedTracks[index],
                type: 'playlist', // ← ESPECIFICAR TIPO
                playlistSlug: playlist.id // ← ID da playlist
                },
                enrichedTracks,
                index
            )
          }
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
}