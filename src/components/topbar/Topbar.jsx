import { Home, Search, X } from "lucide-react"
import Logo from "../logo/Logo"
import { useState, useEffect } from "react";
import LinkButton from "../../layouts/LinkButton";
import { gamesData } from "../../data/MostViewedSoundtrackData";
import { GiElfHelmet } from "react-icons/gi";

// Dados das playlists (mantidos como no original)
const favoriteCards = [
  { title: "Curtidos", color: "bg-green-500", path: "/curtidos" },
  { title: "Clássicos 8-bit", image: "/8bit.jpeg", path: "/playlist/classicos-8-bit" },
  { title: "MODO: FOCO", image: "/foco.gif", path: "/playlist/modo-foco"},
  { title: "Chefões Lendários", image: "/bowser.jpeg", path: "/playlist/chefoes-lendarios" },
  { title: "It's GOW time!", image: "/god-of-war.jpg" , path: "/playlist/its-gow-time"},
  { title: "NÃO CHORA NEWBIE", image: "/newbie.jpg" , path: "/playlist/nao-chora-newbie"},
  { title: "FIFA 14 NOSTALGIA", image: "/fifa14.jpg" , path: "/playlist/fifa-14"},
  { title: "LOFI", image: "/lofi.jpg", path: "/playlist/lofi" }
];

const genreGames = [
  { title: "Jogos de Exploração", image: "/exploration.jpg", path: "/playlist/jogos-de-exploracao" },
  { title: "Jogos de Heróis", image: "/avengers.jpg", path: "/playlist/jogos-de-heroi" },
  { title: "Assassin's Creed Collection", image: "/assasins.jpg", path: "/playlist/assassins-creed-collection" },
  { title: "Souls Like", image: "/souls.jpg", path: "/playlist/souls-like" },
];

function Topbar() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Função para remover acentos (mantida como no original)
  const removeAccents = (str) => {
    if (!str) return "";
    return str.normalize("NFD").replace(/[^a-zA-Z0-9 ]/g, "").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
  };

  // Função para renderizar a imagem/ícone (mantida como no original)
  const renderResultImage = (result) => {
    if (result.title === "Curtidos") {
      return (
        <div className="w-12 h-17 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
          <GiElfHelmet className="w-6 h-6 text-white" />
        </div>
      );
    }
    return (
      <div className="w-12 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={result.image || "/placeholder.jpg"} 
          alt={result.title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  // Função de busca (mantida como no original)
  const performSearch = (term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }
    const cleanTerm = removeAccents(term.toLowerCase());
    const results = [];
    favoriteCards.forEach(card => {
      if (removeAccents(card.title).toLowerCase().includes(cleanTerm)) {
        results.push({ type: "playlist", title: card.title, image: card.image, path: card.path });
      }
    });
    genreGames.forEach(genre => {
      if (removeAccents(genre.title).toLowerCase().includes(cleanTerm)) {
        results.push({ type: "playlist", title: genre.title, image: genre.image, path: genre.path });
      }
    });
    gamesData.forEach(game => {
      if (removeAccents(game.title).toLowerCase().includes(cleanTerm)) {
        results.push({ type: "game", title: game.title, image: game.image, path: `/game/${game.slug}`, description: game.description });
      }
      game.tracks.forEach(track => {
        if (removeAccents(track.title).toLowerCase().includes(cleanTerm) || removeAccents(track.artist).toLowerCase().includes(cleanTerm)) {
          results.push({ type: "track", title: track.title, artist: track.artist, game: game.title, image: game.image, path: `/game/${game.slug}` });
        }
      });
    });
    setSearchResults(results);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(true);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setShowResults(false);
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchTerm("");
  };

  return (
    <div className="w-full bg-black border-b border-gray-800 px-4 md:px-6 py-3 relative">
      {/* Container principal com layout responsivo */}
      <div className="max-w-screen-2xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-y-3">
        
        {/* Logo e Avatar (agrupados para telas pequenas) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <Logo/>
          </div>
          {/* Avatar visível aqui em telas pequenas */}
          <div className="md:hidden flex items-center">
            <div 
              className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden cursor-pointer hover:ring-2 hover:ring-gray-600 transition-all"
              onClick={() => setOpen(true)}
            >
              <img 
                src="/user.jpg" 
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Seção central com pesquisa e home */}
        <div className="flex items-center gap-2 sm:gap-4 w-full md:flex-1 md:justify-center md:max-w-2xl md:mx-8 order-3 md:order-2">
          {/* Botão Home (oculto em telas extra pequenas) */}
          <LinkButton 
            to='/' 
            className="p-2.5 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors cursor-pointer hidden sm:block"
          >
            <Home className="w-5 h-5 text-white"/>
          </LinkButton>

          {/* BARRA DE PESQUISA */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Qual soundtrack você quer escutar?"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setShowResults(true)}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white placeholder-gray-400 pl-12 pr-12 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* RESULTADOS DA BUSCA */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl max-h-96 overflow-y-auto z-50">
                <div className="p-2">
                  {searchResults.map((result, index) => (
                    <LinkButton key={index} to={result.path} onClick={handleResultClick} className="block w-full">
                      <div className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer">
                        {renderResultImage(result)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs px-2 py-1 rounded-full ${ result.type === 'game' ? 'bg-blue-500' : result.type === 'playlist' ? 'bg-green-500' : 'bg-purple-500' }`}>
                              {result.type === 'game' ? 'Jogo' : result.type === 'playlist' ? 'Playlist' : 'Música'}
                            </span>
                          </div>
                          <h3 className="text-white font-medium truncate">{result.title}</h3>
                          {result.artist && <p className="text-gray-400 text-sm truncate">{result.artist} • {result.game}</p>}
                          {result.description && <p className="text-gray-400 text-sm truncate">{result.description}</p>}
                        </div>
                      </div>
                    </LinkButton>
                  ))}
                </div>
              </div>
            )}

            {/* MENSAGEM DE NENHUM RESULTADO */}
            {showResults && searchTerm && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl p-4 text-center z-50">
                <p className="text-gray-400">Nenhum resultado encontrado para "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Avatar (visível apenas em telas maiores) */}
        <div className="hidden md:flex items-center order-2 md:order-3">
          <div 
            className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden cursor-pointer hover:ring-2 hover:ring-gray-600 transition-all"
            onClick={() => setOpen(true)}
          >
            <img 
              src="/user.jpg" 
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal do usuário (mantido como no original) */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div 
            className="p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="/user.jpg" 
              alt="User avatar large"
              className="w-50 h-50 rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;