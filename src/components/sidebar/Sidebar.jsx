import { useLocation } from "react-router-dom";

import { Search, Heart } from "lucide-react"

import Logo from "../logo/Logo";

function Sidebar() {

    const location = useLocation();

    const playlists = [
        { name: "Músicas Curtidas", icon: "💜", songs: "1.078 músicas" },
        { name: "It's GOW time", game: "GOW", image: "/god-of-war.jpg" },
        { name: "DOOM", songs: "31 músicas", image: "/doom.jpg" },
        { name: "Ghost of Tsushima", type: "Pedro", image: "/ghost.jpg"},
        { name: "Batman Arkham City", songs: "19 músicas", image: "/batman.jpeg"},
        { name: "Expedition 33", type: "Pedro", image: "/expedition.jpg"},
        { name: "Tony Hawk's Pro Skater 2", type: "Pedro", image: "/tony.jpg"},
        { name: "Marvel's Spider Man", type: "Pedro", image: "/marvel.jpg"},
        { name: "EA FC 26", type: "Pedro", image: "/fifa.jpg"}
    ];

    return (
        <div className="w-64 bg-black p-4 flex flex-col h-screen flex-shrink-0">
            <div className="mb-8">
                <Logo/>
            </div>

            {location.pathname === "/" && (
                <>
                    <div className="mb-6">
                        <div className="text-green-500  font-semibold mb-3">Base do Jogador</div>
                        <div className="flex gap-4 text-xs text-gray-400 mb-4"> 
                            <button className="text-white border-b-2 border-white pb-1">Playlists</button>
                            <button>Gêneros</button>
                            <button>Franquias</button>
                        </div>
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"/>
                            <input
                                type="text"
                                placeholder="Filtrar na coleção"
                                className="w-full bg-gray-900 text-white pl-10 pr-4 py-2 rounded text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {playlists.map((playlist, idx) => (
                            <div 
                                key={idx} 
                                className="flex items-center gap-3 mb-3 cursor-pointer hover:bg-gray-900 p-2 rounded"
                            >
                                {idx === 0 ? (
                                    // Mantém seu caso especial da primeira playlist
                                    <div className="w-12 h-15 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center transition-transform duration-300 hover:scale-130">
                                        <Heart className="w-6 h-6 text-white fill-white"/>
                                    </div>
                                ) : (
                                    // Aqui você troca o quadrado cinza pela imagem
                                    <div className="w-12 h-15 rounded overflow-hidden transition-transform duration-300 hover:scale-130">
                                        <img 
                                            src={playlist.image} 
                                            alt={playlist.name} 
                                            className="w-full h-20% object-cover"
                                        />
                                    </div>
                                )}

                                {/* INFO DA PLAYLIST */}
                                <div className="flex-1 transition-transform duration-300 hover:scale-110">
                                    <div className="text-white text-sm">{playlist.name}</div>

                                    {playlist.songs && (
                                        <div className="text-gray-400 text-xs flex items-center gap-1">
                                            <span className="text-green-500">📌</span> Playlist • {playlist.songs}
                                        </div>
                                    )}

                                    {playlist.game && (
                                        <div className="text-gray-400 text-xs flex items-center gap-1">
                                            <span className="text-green-500">📌</span> Playlist • {playlist.game}
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
            )}
        </div>
    )
}

export default Sidebar