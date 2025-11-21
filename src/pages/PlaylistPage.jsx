import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";
import TrackList from "../components/soundtrack/TrackList";
import { getDominantColor } from "../utils/getDominantColors";
import { playlistsData } from "../data/PlaylistData";

export default function PlaylistPage() {
  const { playlistId } = useParams();
  const { currentTrack, isPlaying, playTrack } = usePlayer();
  
  const [dominantColor, setDominantColor] = useState("rgb(30, 58, 138)");
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const foundPlaylist = playlistsData[playlistId];
    setPlaylist(foundPlaylist);
    
    if (foundPlaylist?.image) {
      getDominantColor(foundPlaylist.image).then(setDominantColor);
    }
  }, [playlistId]);

  if (!playlist) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <h1 className="text-xl md:text-2xl">Playlist não encontrada</h1>
      </div>
    );
  }

  const enrichedTracks = playlist.tracks.map(track => ({
    ...track,
    image: playlist.image,
    gameTitle: playlist.title
  }));

  const currentTrackIndex = currentTrack 
    ? enrichedTracks.findIndex(t => t.title === currentTrack.title && t.artist === currentTrack.artist)
    : -1;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 overflow-y-auto pb-24 md:pb-32">
        
        <div
          className="relative h-auto md:h-96"
          style={{ background: `linear-gradient(to bottom, ${dominantColor}, black)` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative flex h-full items-center justify-center p-6 pt-10 md:items-end md:justify-start md:p-12 md:pb-10">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:gap-10">
              
              <div className="relative group flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-700 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-40 h-64 md:w-48 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-400/20">
                  <img 
                    src={playlist.image}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* --- CORREÇÃO APLICADA AQUI --- */}
              {/* Adicionado 'w-full' para ocupar a largura disponível em telas pequenas */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
                <p className="text-xs font-bold tracking-wider mb-2">
                  {playlist.type?.toUpperCase() || "PLAYLIST"}
                </p>
                <h1 className="text-4xl md:text-5xl font-black mb-2">
                  {playlist.title}
                </h1>
                <p className="text-gray-300 max-w-xl mb-3 text-sm md:text-base">
                  {playlist.description}
                </p>
                <div className="text-gray-400 text-sm flex items-center gap-3">
                  <span>{playlist.tracks.length} músicas</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <TrackList
          tracks={enrichedTracks}
          currentTrackIndex={currentTrackIndex}
          playTrack={(index) =>
            playTrack(
                {
                  ...enrichedTracks[index],
                  type: 'playlist',
                  playlistSlug: playlist.id
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