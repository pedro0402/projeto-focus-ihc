function Home() {

    const favoriteCards = [
        { title: "Clássicos 8-bit" },
        { title: "MODO: FOCO" },
        { title: "Trilhas Favoritas", color: "bg-green-500" },
        { title: "Chefões Lendários" },
        { title: "It's GOW time!" },
        { title: "NÃO CHORA NEWBIE" },
        { title: "METAL SLUG PLAYLIST" },
        { title: "LOTI" }
    ];

    const genreGames = [
        { title: "Jogos de Exploração", image: "/api/placeholder/160/160" },
        { title: "Jogos de Aventura", image: "/api/placeholder/160/160" },
        { title: "Jogos de Heróis", image: "/api/placeholder/160/160" },
        { title: "Assassin's Creed Collection", image: "/api/placeholder/160/160" },
        { title: "Souls Like", image: "/api/placeholder/160/160" },
        { title: "Jogos de Tiro", image: "/api/placeholder/160/160" }
    ];
    
      const mainSoundtracks = [
    { title: "Red Dead Redemption II", image: "/api/placeholder/160/220" },
    { title: "Cyberpunk 2077", image: "/api/placeholder/160/220" },
    { title: "Batman Arkham Knight", image: "/api/placeholder/160/220" },
    { title: "Tony Hawk's Pro Skater 2", image: "/api/placeholder/160/220" },
    { title: "Ghost of Tsushima", image: "/api/placeholder/160/220" },
    { title: "Expedition 33", image: "/api/placeholder/160/220" }
  ];

    return(
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
        <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎵</span>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700">
                SOUNDTRACKS
            </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
            {favoriteCards.map((card, idx) => (
                <div key={idx} className={`${idx === 0 ? 'bg-gradient-to-br from-green-600 to-green-800' : 'bg-gray-800'} rounded p-4 flex items-center gap-3 hover:bg-gray-700 cursor-pointer`}>
                <div className="w-16 h-16 bg-gray-900 rounded" />
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
                <div key={idx} className="min-w-[160px] cursor-pointer group">
                    <div className="w-40 h-40 bg-gray-800 rounded mb-2 group-hover:opacity-80" />
                    <div className="text-white text-sm font-medium">{game.title}</div>
                </div>
                ))}
            </div>
            </div>

            <div>
            <h2 className="text-green-500 text-2xl font-bold mb-4">
                Principais Soundtracks do Momento
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
                {mainSoundtracks.map((soundtrack, idx) => (
                <div 
                    key={idx} 
                    className="min-w-[160px] cursor-pointer group"
                    onClick={() => {
                    setSelectedAlbum(soundtrack);
                    setCurrentView('album');
                    }}
                >
                    <div className="w-40 h-56 bg-gray-800 rounded mb-2 group-hover:opacity-80" />
                    <div className="text-white text-sm font-medium">{soundtrack.title}</div>
                </div>
                ))}
            </div>
            </div>

            <div className="fixed bottom-20 right-8 bg-blue-900 rounded-lg p-4 max-w-sm">
            <div className="flex items-start gap-3">
                <div className="w-16 h-16 bg-gray-800 rounded" />
                <div className="flex-1">
                <div className="text-white text-sm font-semibold mb-1">Exodus in America</div>
                <div className="text-gray-300 text-xs mb-2">Bill Elm, Woody Jackson</div>
                <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xs">✓</span>
                    <span className="text-gray-400 text-xs">Franquia</span>
                </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="text-white text-xl font-bold">Red Dead Redemption</div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Home;