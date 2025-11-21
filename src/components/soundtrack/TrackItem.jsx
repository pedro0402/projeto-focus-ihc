import { Heart } from "lucide-react";
import { useFavorites } from "../../context/FavoritesCotext"; 

export default function TrackItem({
  track,
  index,
  isCurrent,
  isPlaying,
  onClick
}) {
  const { isTrackFavorite, toggleFavorite } = useFavorites();
  
  const isFavorite = isTrackFavorite(track);

  return (
    <div
      onClick={onClick}
      className={`
        group relative cursor-pointer rounded-xl border
        transition-all bg-gradient-to-r hover:scale-[1.02]
        p-3 md:p-5  /* Padding responsivo */
        ${isCurrent 
          ? "border-blue-500 from-green-900/40 to-blue-900/20"
          : "border-white/10 from-white/5 to-transparent hover:from-white/10 hover:to-white/5"}
      `}
    >
      {/* Gap responsivo */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* Ícone de play ou número da faixa (mantido, já tem um bom tamanho) */}
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          {isCurrent && isPlaying ? (
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
                <div className="w-1 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.15s" }}></div>
                <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              </div>
            </div>
          ) : (
            <span className="text-xl md:text-2xl text-gray-500 group-hover:text-green-400 transition-colors">
              {index + 1}
            </span>
          )}
        </div>

        {/* Título e artista */}
        <div className="flex-1 min-w-0">
          {/* Tamanho da fonte do título responsivo */}
          <p className="text-base md:text-lg font-bold truncate">{track.title}</p>
          <p className="text-sm text-gray-400 truncate">{track.artist}</p>
        </div>

        {/* --- CORREÇÃO PRINCIPAL AQUI --- */}
        {/* Botão de curtir sempre visível para funcionar em mobile */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Impede que o clique no botão acione o play da música
            toggleFavorite(track);
          }}
          // O botão agora é sempre visível, com opacidade total no hover (para desktop)
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-green-500 text-green-500" : "text-gray-400 hover:text-white" 
            }`}
          />
        </button>

      </div>

      {/* Barra de música atual (mantida) */}
      {isCurrent && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500 rounded-l-xl"></div>
      )}
    </div>
  );
}