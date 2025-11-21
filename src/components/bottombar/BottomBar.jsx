import React, { useState, useRef, useEffect } from 'react';
import { SkipBack, Pause, Play, SkipForward, Volume2 } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';

function BottomBar({ currentTrack, isPlaying, setIsPlaying }) {
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(75);
    const { nextTrack } = usePlayer();
    const audioRef = useRef(null);

    // --- LÓGICA DO PLAYER (SEM ALTERAÇÕES) ---
    useEffect(() => {
        if (currentTrack && audioRef.current) {
            audioRef.current.src = currentTrack.url;
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Erro ao tocar áudio:", e));
            }
        }
    }, [currentTrack]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !currentTrack) return;
        if (isPlaying) {
            audio.play().catch(e => console.error("Erro ao tocar áudio:", e));
        } else {
            audio.pause();
        }
    }, [isPlaying, currentTrack]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };
        const handleEnded = () => nextTrack(); // Pula para a próxima ao terminar

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("ended", handleEnded);
        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [nextTrack]);
    
    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = volume / 100;
    }, [volume]);

    const handleSeek = (e, isMobile = false) => {
        const bar = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - bar.left;
        const percent = Math.min(Math.max((clickX / bar.width) * 100, 0), 100);
        
        const audio = audioRef.current;
        if (audio && audio.duration) {
            audio.currentTime = (audio.duration * percent) / 100;
            setProgress(percent);
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t-2 border-cyan-500/30 px-4 py-3 z-50">
            
            {/* --- BARRA DE PROGRESSO RESPONSIVA --- */}
            {/* Em mobile, fica no topo. Em desktop, é a do meio. */}
            <div 
                className="absolute top-0 left-0 right-0 h-1 md:hidden bg-gray-800 cursor-pointer"
                onClick={(e) => handleSeek(e, true)}
            >
                <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ width: `${progress}%` }}
                />
            </div>
            
            <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">
                {/* ESQUERDA - Info da música */}
                <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                    <div className="relative group flex-shrink-0">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gray-700 rounded-lg overflow-hidden">
                            <img 
                                src={currentTrack?.image || "/placeholder.jpg"} 
                                alt={currentTrack?.title || "Album"} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-cyan-400 font-bold text-sm truncate">
                            {currentTrack?.title || "Nenhuma música"}
                        </h3>
                        <p className="text-cyan-300/60 text-xs truncate">
                            {currentTrack?.artist || ""}
                        </p>
                    </div>
                </div>

                {/* CENTRO - Controles (Desktop) */}
                <div className="hidden md:flex flex-col items-center gap-2 flex-1 max-w-2xl">
                    <div className="flex items-center gap-4">
                        <button className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" onClick={() => audioRef.current && (audioRef.current.currentTime = 0)}>
                            <SkipBack className="w-5 h-5" strokeWidth={2} />
                        </button>
                        <button onClick={() => setIsPlaying(!isPlaying)} disabled={!currentTrack} className="relative group cursor-pointer">
                            <div className="absolute inset-0 border border-cyan-400/50 rounded-full group-hover:scale-110 transition-transform"></div>
                            <div className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-105 ${currentTrack ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/50" : "bg-gray-600 cursor-not-allowed"}`}>
                                {isPlaying ? <Pause className="w-5 h-5 text-white fill-white" /> : <Play className="w-5 h-5 text-white fill-white ml-0.5" />}
                            </div>
                        </button>
                        <button className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" onClick={nextTrack}>
                            <SkipForward className="w-5 h-5" strokeWidth={2} />
                        </button>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                        <span className="text-cyan-400 text-xs font-mono w-10 text-center">{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
                        <div className="flex-1 group">
                            <div className="relative h-1 bg-gray-800 rounded-full cursor-pointer" onClick={handleSeek}>
                                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative" style={{ width: `${progress}%` }}>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-lg opacity-0 group-hover:opacity-100"></div>
                                </div>
                            </div>
                        </div>
                        <span className="text-cyan-400 text-xs font-mono w-10 text-center">{audioRef.current?.duration ? formatTime(audioRef.current.duration) : "0:00"}</span>
                    </div>
                </div>

                {/* DIREITA - Controles Mobile e Volume Desktop */}
                <div className="flex items-center gap-4 justify-end">
                    {/* Controles para Mobile */}
                    <div className="flex md:hidden items-center gap-4">
                        <button onClick={() => setIsPlaying(!isPlaying)} disabled={!currentTrack} className="text-cyan-400">
                            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7" />}
                        </button>
                        <button className="text-cyan-400" onClick={nextTrack}>
                           <SkipForward className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Controle de Volume para Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        <button className="text-cyan-400"><Volume2 className="w-5 h-5" /></button>
                        <div className="w-24 group">
                            <div className="relative h-1 bg-gray-800 rounded-full cursor-pointer" onClick={(e) => setVolume((e.clientX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth * 100)}>
                                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative" style={{ width: `${volume}%` }}>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <audio ref={audioRef} src={currentTrack?.url} preload="metadata" />
        </div>
    );
}

export default BottomBar;