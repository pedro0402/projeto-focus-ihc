import React, { useState } from 'react';
import { SkipBack, Pause, Play, SkipForward, Volume2, Shuffle, Repeat, Heart, List, Maximize2 } from 'lucide-react';


function BottomBar() {

    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(35);
    const [volume, setVolume] = useState(75);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t-2 border-cyan-500/30 px-4 py-3 relative">
        
        {/* Borda decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">
                {/* SEÇÃO ESQUERDA - Info da música */}
                <div className="flex items-center gap-4 min-w-0 flex-1">
                {/* Capa do álbum */}
                <div className="relative group flex-shrink-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg overflow-hidden">
                        <div className="w-full flex items-center justify-center text-3xl">
                            <img src="/reddead.jpg" alt="Album image" />
                        </div>
                    </div>
                </div>

                {/* Info da música */}
                <div className="min-w-0 flex-1">
                    <h3 className="text-cyan-400 font-bold text-sm truncate">EXODUS IN AMERICA</h3>
                    <p className="text-cyan-300/60 text-xs truncate">Bill Elm, Woody Jackson</p>
                </div>

                {/* Botão de curtir */}
                <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className="flex-shrink-0 text-cyan-400 hover:scale-110 transition-transform"
                >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-cyan-400' : ''}`} />
                </button>
                </div>

                {/* SEÇÃO CENTRAL - Controles e Progress */}
                <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
                {/* Controles */}
                <div className="flex items-center gap-4">
                    {/* Shuffle */}
                    <button className="text-cyan-400/60 hover:text-cyan-400 transition-colors">
                    <Shuffle className="w-4 h-4" />
                    </button>

                    {/* Previous */}
                    <button className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110">
                    <SkipBack className="w-5 h-5" strokeWidth={2} />
                    </button>

                    {/* Play/Pause */}
                    <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="relative group"
                    >
                    {/* Anel pulsante */}
                    <div className="absolute inset-0 border border-cyan-400/50 rounded-full group-hover:scale-110 transition-transform"></div>
                    
                    {/* Botão principal */}
                    <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all group-hover:scale-105">
                        {isPlaying ? (
                        <Pause className="w-5 h-5 text-white fill-white" strokeWidth={2} />
                        ) : (
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" strokeWidth={2} />
                        )}
                    </div>
                    </button>

                    {/* Next */}
                    <button className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110">
                    <SkipForward className="w-5 h-5" strokeWidth={2} />
                    </button>

                    {/* Repeat */}
                    <button className="text-cyan-400/60 hover:text-cyan-400 transition-colors">
                    <Repeat className="w-4 h-4" />
                    </button>
                </div>

                {/* Barra de progresso */}
                <div className="flex items-center gap-3 w-full">
                    <span className="text-cyan-400 text-xs font-mono">1:34</span>
                    
                    <div className="flex-1 group">
                    <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden cursor-pointer">
                        {/* Fundo com gradiente sutil */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
                        
                        {/* Progresso */}
                        <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative transition-all"
                        style={{ width: `${progress}%` }}
                        >
                        {/* Indicador */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                    
                    {/* Marcadores */}
                    <div className="flex justify-between mt-0.5">
                        {[...Array(30)].map((_, i) => (
                        <div key={i} className={`w-px h-0.5 ${i < progress/3.33 ? 'bg-cyan-500/50' : 'bg-gray-700/30'}`}></div>
                        ))}
                    </div>
                    </div>
                    
                    <span className="text-cyan-400 text-xs font-mono">3:44</span>
                </div>
                </div>

                {/* SEÇÃO DIREITA - Volume e extras */}
                <div className="flex items-center gap-4 min-w-0 flex-1 justify-end">
                {/* Lista de reprodução */}
                <button className="text-cyan-400/60 hover:text-cyan-400 transition-colors">
                    <List className="w-5 h-5" />
                </button>

                {/* Volume */}
                <div className="flex items-center gap-2">
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Volume2 className="w-5 h-5" />
                    </button>
                    <div className="w-24 group">
                    <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden cursor-pointer">
                        <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative"
                        style={{ width: `${volume}%` }}
                        >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Maximizar */}
                <button className="text-cyan-400/60 hover:text-cyan-400 transition-colors">
                    <Maximize2 className="w-5 h-5" />
                </button>

                {/* Indicador de status */}
                <div className="flex items-center gap-2 ml-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                </div>
            </div>
        </div>
    )
}   

export default BottomBar