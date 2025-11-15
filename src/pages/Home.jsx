import { Heart } from "lucide-react"
import { AiOutlineAim } from "react-icons/ai";
import { GiElfHelmet } from "react-icons/gi";

function Home() {

    const favoriteCards = [
        { title: "Minhas Soundtracks", color: "bg-green-500"},
        { title: "Clássicos 8-bit", image:"/8bit.jpeg" },
        { title: "MODO: FOCO", image:"/foco.gif"},
        { title: "Chefões Lendários", image:"/bowser.jpeg"},
        { title: "It's GOW time!", image:"/god-of-war.jpg"},
        { title: "NÃO CHORA NEWBIE", image:"/newbie.jpg"},
        { title: "METAL SLUG PLAYLIST", image:"/metal.jpg"},
        { title: "LOFI", image:"/lofi.jpg"}
    ];

    const genreGames = [
        { title: "Jogos de Exploração", image: "/exploration.jpg" },
        { title: "Jogos de Aventura", image: "/hunter.png" },
        { title: "Jogos de Heróis", image: "/avengers.jpg" },
        { title: "Assassin's Creed Collection", image: "/assasins.jpg" },
        { title: "Souls Like", image: "/souls.jpg" },
        { title: "Jogos de Tiro", image: "/cod.jpg" }
    ];
    
    const mainSoundtracks = [
        { title: "Red Dead Redemption II", image: "/reddead.jpg" },
        { title: "Cyberpunk 2077", image: "/cyber.jpg" },
        { title: "Batman Arkham Knight", image: "/batark.jpg" },
        { title: "Tony Hawk's Pro Skater 2", image: "/tony.jpg" },
        { title: "Ghost of Tsushima", image: "/ghost.jpg" },
        { title: "Expedition 33", image: "/expedition.jpg" }
    ];

    return(
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black min-h-screen">
        <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center">
                <span className="text-4xl text-blue-500"><AiOutlineAim/></span>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700">
                SOUNDTRACKS
            </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
            {favoriteCards.map((card, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gradient-to-r from-blue-950 to-blue-900 rounded-lg overflow-hidden max-w-2xl hover:scale-105 transition-transform cursor-pointer shadow-lg">
                        {idx === 0 ? (
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                                <GiElfHelmet className="w-6 h-6 text-white" />
                            </div>
                        ) : (
                            <img src={card.image} alt={card.title} className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0"/>
                        )}
                <span className="text-white font-semibold text-sm">{card.title}</span>
                </div>
            ))}
            </div>

            <div className="mb-8">
            <h2 className="text-green-500 text-2xl font-bold mb-4">
                Soundtracks baseada em seus últimos gêneros jogados
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
                {genreGames.map((game, idx) => (
                <div key={idx} className="px-1 py-2 min-w-[160px] cursor-pointer group transition-transform duration-300 hover:scale-105">
                    <div className="w-40 h-56 rounded overflow-hidden">
                        <img 
                            src={game.image} 
                            alt={game.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-white text-sm font-medium ">{game.title}</div>
                </div>
                ))}
            </div>
            </div>

            <div className="mb-8">
            <h2 className="text-green-500 text-2xl font-bold mb-4">
                Principais Soundtracks do Momento
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
                {mainSoundtracks.map((soundtrack, idx) => (
                <div key={idx} className="px-1.5 py-2 min-w-[160px] cursor-pointer group transition-transform duration-300 hover:scale-105">
                    <div className="w-40 h-56 rounded overflow-hidden">
                        <img 
                            src={soundtrack.image} 
                            alt={soundtrack.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-white text-sm font-medium ">{soundtrack.title}</div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    )
}

export default Home;