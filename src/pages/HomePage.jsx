import { useState, useEffect } from "react"
import { AiOutlineAim } from "react-icons/ai";
import { GiElfHelmet } from "react-icons/gi";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LinkButton from "../layouts/LinkButton";
import { gamesData } from "../data/MostViewedSoundtrackData";

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const favoriteCards = [
        { title: "Curtidos", color: "bg-green-500", path: "/curtidos" },
        { title: "Clássicos 8-bit", image: "/8bit.jpeg", path: "/playlist/classicos-8-bit" },
        { title: "MODO: FOCO", image: "/foco.gif", path: "/playlist/modo-foco"},
        { title: "Chefões Lendários", image: "/bowser.jpeg", path: "/playlist/chefoes-lendarios" },
        { title: "It's GOW time!", image: "/god-of-war.jpg" , path: "/playlist/its-gow-time"},
        { title: "NÃO CHORA NEWBIE", image: "/newbie.jpg" , path: "/playlist/nao-chora-newbie"},
        { title: "FIFA 14 NOSTALGIA", image: "/fifa14.jpg" , path: "/playlist/fifa-14"},
        { title: "LOFI", image: "/lofi.jpg", path: "playlist/lofi" }
    ];

    const genreGames = [
        { title: "Jogos de Exploração", image: "/exploration.jpg", path: "/playlist/jogos-de-exploracao" },
        { title: "Jogos de Heróis", image: "/avengers.jpg", path: "/playlist/jogos-de-heroi" },
        { title: "Assassin's Creed Collection", image: "/assasins.jpg", path: "/playlist/assassins-creed-collection" },
        { title: "Souls Like", image: "/souls.jpg", path: "/playlist/souls-like" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === genreGames.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(timer);
    }, [genreGames.length]);

    const goToNext = () => {
        setCurrentIndex(currentIndex === genreGames.length - 1 ? 0 : currentIndex + 1);
    }

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? genreGames.length - 1 : currentIndex - 1);
    }
    
    function slugify(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");
    }

    return (
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black min-h-screen">
            <div className="p-4 md:p-6">
                
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <span className="text-4xl text-blue-500"><AiOutlineAim /></span>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                    {favoriteCards.map((card, idx) => (
                        <LinkButton key={idx} to={card.path} className="block">
                            <div className="flex items-center gap-4 bg-gradient-to-r from-blue-950 to-blue-900 rounded-lg overflow-hidden w-full hover:scale-105 transition-transform cursor-pointer shadow-lg">
                                {card.image ? (
                                    <img src={card.image} alt={card.title} className="w-14 h-22 object-cover flex-shrink-0" />
                                ) : (
                                    <div className="w-14 h-22 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                                        <GiElfHelmet className="w-6 h-6 text-white" />
                                    </div>
                                )}
                                <span className="text-white font-semibold text-sm">{card.title}</span>
                            </div>
                        </LinkButton>
                    ))}
                </div>

                <div className="relative w-full h-[380px] overflow-hidden rounded-xl">
                    <h2 className="text-green-500 text-xl md:text-2xl font-bold mb-4 text-center">
                        Soundtracks baseadas em seus últimos gêneros jogados
                    </h2>
                    <div className="relative w-full max-w-3xl h-[300px] mx-auto flex items-center justify-center">
                        {genreGames.map((game, index) => (
                            <LinkButton key={index} to={game.path}>
                                <div
                                    className={`
                                        absolute top-0 left-1/2 -translate-x-1/2 
                                        flex flex-col items-center 
                                        transition-all duration-500 ease-in-out
                                        ${index === currentIndex ? 'opacity-100 transform scale-100 pointer-events-auto' : 'opacity-0 transform scale-90 pointer-events-none'}
                                    `}
                                >
                                    <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 z-10">
                                        <img
                                            src={game.image}
                                            alt={game.title}
                                            className="w-36 h-48 sm:w-40 sm:h-56 object-cover rounded-xl mt-4 shadow-2xl"
                                        />
                                        <h2 className="text-lg md:text-xl font-bold text-white mt-4 text-center max-w-[200px] sm:max-w-xs">
                                            {game.title}
                                        </h2>
                                    </div>
                                </div>
                            </LinkButton>
                        ))}

                        <button
                            onClick={goToPrevious}
                            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition backdrop-blur-sm z-20"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition backdrop-blur-sm z-20"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>

                <div className="py-6 mb-8">
                    <h2 className="text-green-500 text-xl md:text-2xl text-center font-bold mb-4">
                        Principais Soundtracks do Momento
                    </h2>
                    
                    <div className="flex items-start justify-start md:justify-center gap-4 overflow-x-auto pb-4 -mx-4 px-4">
                        {gamesData.map((soundtrack, idx) => (
                            <LinkButton
                                key={idx}
                                to={`/game/${slugify(soundtrack.title)}`}
                                className="flex-shrink-0"
                            >
                                <div className="w-40 cursor-pointer group transition-transform duration-300 hover:scale-105">
                                    <div className="w-40 h-56 rounded-xl overflow-hidden shadow-lg">
                                        <img
                                            src={soundtrack.image}
                                            alt={soundtrack.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-white text-sm font-medium mt-2 truncate">{soundtrack.title}</div>
                                </div>
                            </LinkButton>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;