import { useLocation } from "react-router-dom";
import { useState } from "react";

import { Search } from "lucide-react"

import { GiElfHelmet } from "react-icons/gi";

function Sidebar() {

    const location = useLocation();
    const [search, setSearch] = useState("");

    const playlists = [
        { name: "Minhas Soundtracks", icon: "💜", songs: "1.078 músicas" },
        { name: "It's GOW time", game: "God Of War", image: "/god-of-war.jpg" },
        { name: "DOOM", songs: "31 músicas", image: "/doom.jpg" },
        { name: "Ghost of Tsushima", game: "Ghost of Tsushima", image: "/ghost.jpg"},
        { name: "Batman Arkham City", game: "Batman Arkham City", image: "/batman.jpeg"},
        { name: "Expedition 33", game: "Expedition 33", image: "/expedition.jpg"},
        { name: "Tony Hawk's Pro Skater 2", game: "Tony Hawk's Pro Skater 2", image: "/tony.jpg"},
        { name: "Marvel's Spider Man", game: "Marvel's Spider Man", image: "/marvel.jpg"},
        { name: "EA FC 26", game: "EA FC 26", image: "/fifa.jpg"}
    ];

    const removeAccents = (str) => str.normalize("NFD").replace(/[^a-zA-Z0-9 ]/g, "").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();

    const filteredPlaylist = playlists.filter(p => {
        const name = removeAccents(p.name);
        const searchTermClean = removeAccents(search)

        return name.includes(searchTermClean)
    });

    return (
        <div className="w-64 bg-black p-4 flex flex-col h-full flex-shrink-0">
                <>
                    <div className="mb-6">
                        <div className="text-green-500  font-semibold mb-3">Últimas Tocadas </div>
                        
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"/>
                            <input
                                type="text"
                                placeholder="Filtrar na coleção"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-gray-900 text-white pl-10 pr-4 py-2 rounded text-sm"
                            />
                        </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto grid grid-cols-2 gap-4">

                        {filteredPlaylist.length === 0 && (
                            <div className="text-gray-400 text-sm col-span-2 text-center mt-4">
                                Nenhuma soundtrack encontrada!
                            </div>
                        )}

                        {filteredPlaylist.map((playlist, idx) => (
                            <div 
                                key={idx} 
                                className="cursor-pointer bg-gray-900/40 hover:bg-gray-900 rounded-lg p-3 
                                    flex flex-col items-center text-center transition-transform duration-300 hover:scale-104"
                            >
                                {playlist.name === "Minhas Soundtracks" ? (
                                    // Mantém seu caso especial da primeira playlist
                                    <div className="w-20 h-20 rounded overflow-hidden bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center mb-2">
                                        <GiElfHelmet className="w-10 h-10 text-white"/>
                                    </div>
                                ) : (
                                    // Aqui você troca o quadrado cinza pela imagem
                                    <div className="w-12 h-20 rounded overflow-hidden mb-2">
                                        <img 
                                            src={playlist.image} 
                                            alt={playlist.name} 
                                            className="w-full h-20 object-cover"
                                        />
                                    </div>
                                )}

                                {/* INFO DA PLAYLIST */}
                                <div className="flex-1 transition-transform duration-300 hover:scale-105">
                                    <div className="text-white text-sm">{playlist.name}</div>

                                    {playlist.songs && (
                                        <div className="text-gray-400 text-xs">
                                            Playlist • {playlist.songs}
                                        </div>
                                    )}

                                    {playlist.game && (
                                        <div className="text-gray-400 text-xs">
                                            Playlist • {playlist.game}
                                        </div>
                                    )}

                                    {playlist.type && (
                                        <div className="text-gray-400 text-xs">
                                            Playlist • {playlist.type}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </>
        </div>
    )
}

export default Sidebar