import { useState, useEffect } from "react"
import { AiOutlineAim } from "react-icons/ai";
import { GiElfHelmet } from "react-icons/gi";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LinkButton from "../layouts/LinkButton";

function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);

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

    useEffect(() => {
        const timer = setInterval(() =>  {
            setCurrentIndex((prevIndex) =>
                prevIndex === genreGames.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(timer);
    }, [genreGames.length]);

    const goToNext  = () => {
        setCurrentIndex(currentIndex === genreGames.length - 1 ? 0 : currentIndex + 1);
    }

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? genreGames.length - 1 : currentIndex - 1);
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return(
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black min-h-screen">
        <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center">
                <span className="text-4xl text-blue-500"><AiOutlineAim/></span>
            </div>
            <LinkButton to='/soundtracks' children="SOUNDTRACKS" className={"px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700"}/>
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

            <div className="relative w-full h-[360px] overflow-visible rounded-xl">
                <h2 className="text-green-500 text-2xl font-bold mb-4 text-center">
                    Soundtracks baseada em seus últimos gêneros jogados
                </h2>
                    <div className="relative w-full max-w-3xl h-[300px] mx-auto flex items-center justify-center">
                        
                        {genreGames.map((game, index) => (
                            <div 
                                key={index}
                                className={`
                                    absolute top-0 left-1/2 -translate-x-1/2 
                                    flex flex-col items-center 
                                    transition-opacity duration-300
                                    ${index === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                                `}
                            >
                                <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 z-10">
                                    <img 
                                        src={game.image} 
                                        alt={game.title}
                                        className="w-40 h-56 object-cover rounded-xl mt-4"
                                    />

                                    <h2 className="text-xl md:text-2xl font-bold text-white mt-4 text-center">
                                        {game.title}
                                    </h2>

                                </div>
                            </div>
                        ))}

                        {/* Botões */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition backdrop-blur-sm"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition backdrop-blur-sm"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>

            <div className="py-6 mb-8">
            <h2 className="text-green-500 text-2xl text-center font-bold mb-4">
                Principais Soundtracks do Momento
            </h2>
            <div className="flex items-center justify-center gap-4 overflow-x-auto pb-4">
                {mainSoundtracks.map((soundtrack, idx) => (
                <div key={idx} className="px-1.5 py-2 min-w-[160px] cursor-pointer group transition-transform duration-300 hover:scale-105">
                    <div className="w-40 h-56 rounded overflow-hidden">
                        <img 
                            src={soundtrack.image} 
                            alt={soundtrack.title} 
                            className="w-full h-full object-cover rounded-xl z-10 mt-4"
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