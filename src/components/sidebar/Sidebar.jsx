import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react"
import { usePlayer } from "../../context/PlayerContext";
import LinkButton from "../../layouts/LinkButton";

function Sidebar() {
    const location = useLocation();
    const [search, setSearch] = useState("");
    const { recentlyPlayed } = usePlayer();

    const removeAccents = (str) => {
        if (!str) return "";
        return str.normalize("NFD").replace(/[^a-zA-Z0-9 ]/g, "").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
    };

    // Função para determinar a URL correta
    const getTrackUrl = (track) => {
        if (!track) return "#";
        
        // Se for playlist
        if (track.type === 'playlist' && track.playlistSlug) {
            return `/playlist/${track.playlistSlug}`;
        }
        
        // Se for jogo (default)
        if (track.gameSlug) {
            return `/game/${track.gameSlug}`;
        }
        
        // Fallback
        return "#";
    };

    const filteredRecentlyPlayed = recentlyPlayed.filter(track => {
        if (!track) return false;
        
        const searchTermClean = removeAccents(search);
        if (!searchTermClean) return true;
        
        const title = track.title || "";
        const artist = track.artist || "";
        const gameTitle = track.gameTitle || "";
        
        const titleMatch = removeAccents(title).includes(searchTermClean);
        const artistMatch = removeAccents(artist).includes(searchTermClean);
        const gameMatch = removeAccents(gameTitle).includes(searchTermClean);
        
        return titleMatch || artistMatch || gameMatch;
    });

    return (
        <div className="w-64 bg-black p-4 flex flex-col h-full flex-shrink-0">
            
            {/* CAMPO DE BUSCA */}
            <div className="mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"/>
                    <input
                        type="text"
                        placeholder="Buscar nas últimas tocadas"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-gray-900 text-white pl-10 pr-4 py-2 rounded text-sm"
                    />
                </div>
            </div>
            
            {/* TÍTULO SEMPRE VISÍVEL */}
            <div className="text-green-500 font-semibold mb-3">
                Últimas Tocadas ({filteredRecentlyPlayed.length})
            </div>
            
            {/* CONTEÚDO DINÂMICO */}
            {filteredRecentlyPlayed.length > 0 ? (
                <div className="flex-1 overflow-y-auto">
                    {/* GRID DAS ÚLTIMAS TOCADAS */}
                    <div className="grid grid-cols-2 gap-4">
                        {filteredRecentlyPlayed.map((track, index) => (
                            <LinkButton 
                                key={`${track?.title || 'unknown'}-${index}`}
                                to={getTrackUrl(track)}
                                className="cursor-pointer bg-gray-900/40 hover:bg-gray-900 rounded-lg p-3 flex flex-col items-center text-center transition-transform duration-300 hover:scale-104"
                            >
                                <div className="w-12 h-20 rounded overflow-hidden mb-2">
                                    <img 
                                        src={track?.image || "/placeholder.jpg"} 
                                        alt={track?.title || "Música"} 
                                        className="w-full h-20 object-cover"
                                    />
                                </div>
                                
                                {/* TEXTO COM LIMITAÇÃO DE LINHAS */}
                                <div className="flex-1 w-full min-w-0">
                                    <div className="text-white text-sm line-clamp-2 leading-tight mb-1">
                                        {track?.title || "Título desconhecido"}
                                    </div>
                                    
                                    <div className="text-gray-400 text-xs truncate leading-tight mb-1">
                                        {track?.artist || "Artista desconhecido"}
                                    </div>
                                    
                                    <div className="text-gray-400 text-xs truncate leading-tight">
                                        {/* MOSTRAR SE É MÚSICA OU PLAYLIST */}
                                        {track?.type === 'playlist' ? 'Playlist' : 'Música'} • {track?.gameTitle || "Desconhecido"}
                                    </div>
                                </div>
                            </LinkButton>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-gray-400 text-sm text-center italic">
                        {search ? "Nenhuma música encontrada na busca" : "Suas músicas recentes aparecerão aqui"}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar;