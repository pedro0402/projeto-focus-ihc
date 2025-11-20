import React, { useState, useRef, useEffect } from 'react';
import { SkipBack, Pause, Play, SkipForward, Volume2 } from 'lucide-react';

function BottomBar({ currentTrack, isPlaying, setIsPlaying }) {

    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(75);
    const [isLiked, setIsLiked] = useState(false);

    const audioRef = useRef(null);

    // ---- INICIALIZAR ÁUDIO ----
    useEffect(() => {
        if (currentTrack && audioRef.current) {
            audioRef.current.src = currentTrack.url;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrack]);

    // ---- PLAY / PAUSE ----
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !currentTrack) return;

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying, currentTrack]);

    // ---- PROGRESSO AUTOMÁTICO ----
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                const p = (audio.currentTime / audio.duration) * 100;
                setProgress(p);
            }
        };

        audio.addEventListener("timeupdate", updateProgress);
        return () => audio.removeEventListener("timeupdate", updateProgress);
    }, []);

    // ---- QUANDO A MÚSICA TERMINAR ----
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
            audio.currentTime = 0;
        };

        audio.addEventListener("ended", handleEnded);
        return () => audio.removeEventListener("ended", handleEnded);
    }, [setIsPlaying]);

    // ---- VOLUME ----
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    // ---- CLICAR NA BARRA DE PROGRESSO ----
    const handleSeek = (e) => {
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
        <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t-2 border-cyan-500/30 px-4 py-3 relative">
        
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            
        <div className="flex items-center justify-between gap-4 max-w-screen-2xl mx-auto">

                {/* ESQUERDA - Info da música */}
                <div className="flex items-center gap-4 min-w-0 flex-1">

                    {/* Capinha - AGORA DINÂMICA */}
                    <div className="relative group flex-shrink-0">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative w-10 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg overflow-hidden">
                            <img 
                                src={currentTrack?.image || "/reddead.jpg"} 
                                alt={currentTrack?.title || "Album"} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>

                    {/* Info - AGORA DINÂMICA */}
                    <div className="min-w-0 flex-1">
                        <h3 className="text-cyan-400 font-bold text-sm truncate">
                            {currentTrack?.title || "Selecione uma música"}
                        </h3>
                        <p className="text-cyan-300/60 text-xs truncate">
                            {currentTrack?.artist || ""}
                        </p>
                    </div>

                </div>

                {/* CENTRO - Controles */}
                <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">

                    {/* Botões */}
                    <div className="flex items-center gap-4">

                        <button 
                            className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110"
                            onClick={() => {
                                const audio = audioRef.current;
                                if (!audio) return;
                                audio.currentTime = 0;
                                setProgress(0);
                            }}
                        >
                            <SkipBack className="w-5 h-5" strokeWidth={2} />
                        </button>

                        {/* PLAY / PAUSE */}
                        <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            disabled={!currentTrack}
                            className="relative group"
                        >
                            <div className="absolute inset-0 border border-cyan-400/50 rounded-full group-hover:scale-110 transition-transform"></div>
                            <div className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-105 ${
                                currentTrack 
                                    ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/50 group-hover:shadow-cyan-400/70" 
                                    : "bg-gray-600 cursor-not-allowed"
                            }`}>
                                {isPlaying && currentTrack ? (
                                    <Pause className="w-5 h-5 text-white fill-white" strokeWidth={2} />
                                ) : (
                                    <Play className="w-5 h-5 text-white fill-white ml-0.5" strokeWidth={2} />
                                )}
                            </div>
                        </button>

                        <button 
                            className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110"
                            onClick={() => {
                                const audio = audioRef.current;
                                if (!audio) return;

                                audio.pause();
                                audio.currentTime = 0;
                                setIsPlaying(false);
                                setProgress(0);
                                alert("Próxima música ainda não implementada!");
                            }}
                        >
                            <SkipForward className="w-5 h-5" strokeWidth={2} />
                        </button>

                    </div>

                    {/* PROGRESSO */}
                    <div className="flex items-center gap-3 w-full">
                        
                        <span className="text-cyan-400 text-xs font-mono">
                            {audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}
                        </span>

                        <div className="flex-1 group">
                            <div 
                                className="relative h-1 bg-gray-800 rounded-full overflow-hidden cursor-pointer"
                                onClick={handleSeek}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
                                <div 
                                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative transition-all"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </div>

                        <span className="text-cyan-400 text-xs font-mono">
                            {audioRef.current && audioRef.current.duration ? formatTime(audioRef.current.duration) : "0:00"}
                        </span>

                    </div>

                </div>

                {/* DIREITA - Volume */}
                <div className="flex items-center gap-4 min-w-0 flex-1 justify-end">
                    <div className="flex items-center gap-2">
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Volume2 className="w-5 h-5" />
                        </button>
                        <div className="w-24 group">
                            <div 
                                className="relative h-1 bg-gray-800 rounded-full overflow-hidden cursor-pointer"
                                onClick={(e) => {
                                    const bar = e.currentTarget.getBoundingClientRect();
                                    const clickX = e.clientX - bar.left;
                                    const percent = Math.min(Math.max((clickX / bar.width) * 100, 0), 100);
                                    setVolume(percent);
                                }}
                            >
                                <div 
                                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative"
                                    style={{ width: `${volume}%` }}
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ELEMENTO DE ÁUDIO */}
            <audio
                ref={audioRef}
                src={currentTrack?.url || ""}
                preload="metadata"
            />
        </div>
    )
}

export default BottomBar;