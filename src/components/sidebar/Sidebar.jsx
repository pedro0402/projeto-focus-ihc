import { useLocation } from "react-router-dom";

import { Search } from "lucide-react"

import Logo from "../logo/Logo";

function Sidebar() {

    const location = useLocation();

    const playlists = [
        { name: "Músicas Curtidas", icon: "💜", songs: "1.078 músicas" },
        { name: "It's GOW time", game: "GOW" },
        { name: "DOOM", songs: "31 músicas" },
        { name: "Ghost of Tsushima", type: "Pedro" },
        { name: "Batman Arkham City", songs: "19 músicas" },
        { name: "Expedition 33", type: "Pedro" },
        { name: "Tony Hawk's Pro Skater 2", type: "Pedro" },
        { name: "Marvel's Spider Man", type: "Pedro" },
        { name: "EA FC 26", type: "Pedro" }
    ];

    return (
        <div className="w-64 bg-black p-4 flex flex-col h-full">
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
                        
                    </div>

                </>
            )}
        </div>
    )
}

export default Sidebar