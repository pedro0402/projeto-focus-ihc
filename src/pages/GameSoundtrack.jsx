import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share2, List } from 'lucide-react';
import { useParams } from "react-router-dom";
import { gamesData } from "../data/gamesData";

export default function GameSoundtrackPage() {

  function getDominantColor(imageUrl, callback) {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imageUrl;

  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let r = 0, g = 0, b = 0, count = 0;

    // Pega poucos pixels para acelerar o processo
    for (let i = 0; i < data.length; i += 4 * 50) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    r = Math.round(r / count);
    g = Math.round(g / count);
    b = Math.round(b / count);

    const [r2, g2, b2] = boostSaturation(r,g,b, 4.0);

    callback(`rgb(${r2}, ${g2}, ${b2})`);
  };
} 

function boostSaturation(r, g, b, boost = 4.0) {
  // Converte RGB → [0,1]
  r /= 255; g /= 255; b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Aumenta saturação multiplicando
  s = Math.min(1, s * boost);

  // Converte HSL → RGB
  let rOut, gOut, bOut;

  if (s === 0) {
    rOut = gOut = bOut = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    rOut = hue2rgb(p, q, h + 1/3);
    gOut = hue2rgb(p, q, h);
    bOut = hue2rgb(p, q, h - 1/3);
  }

  return [
    Math.round(rOut * 255),
    Math.round(gOut * 255),
    Math.round(bOut * 255),
  ];
}


  const { gameId } = useParams();
  const game = gamesData.find(g => g.slug === gameId);

  const [dominantColor, setDominantColor] = useState("rgb(0,0,0)");

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState(new Set());

  useEffect(() => {
    if (game?.image) {
        getDominantColor(game.image, (color) => {
        setDominantColor(color);
        });
    }
  }, [game]);

  if (!game) {
    return <h1 className="text-white p-6">Jogo não encontrado.</h1>;
  }

  const toggleLike = (id) => {
    const newLiked = new Set(likedTracks);
    newLiked.has(id) ? newLiked.delete(id) : newLiked.add(id);
    setLikedTracks(newLiked);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <div className="flex-1 overflow-y-auto pb-32">

        <div className="relative h-96 overflow-hidden"
            style={{background: `linear-gradient(to bottom, ${dominantColor}, black)`}}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>

          <div className="relative h-full flex items-end px-12 pb-8">
            <div className="flex items-end gap-8">

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-700 blur-2xl opacity-50 group-hover:opacity-70"></div>

                <div className="relative w-46 h-64 rounded-lg shadow-2xl overflow-hidden border-4 border-blue-400/20">
                  <img 
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pb-4">
                <div className="text-sm font-bold text-green-400 mb-2 tracking-wider">
                  OFFICIAL GAME SOUNDTRACK
                </div>

                <h1 className="text-6xl font-black mb-4 tracking-tight">
                  {game.title}
                </h1>

                <p className="text-gray-300 mb-4 max-w-xl">
                  Uma coleção completa das músicas icônicas deste jogo.
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="font-semibold text-white">Game OST</span>
                  <span>•</span>
                  <span>{game.tracks.length} songs</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="px-12 py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-16 h-16 flex items-center justify-center hover:scale-105"
            >
              {isPlaying ? <Pause className="w-7 h-7"/> : <Play className="w-7 h-7 ml-1"/>}
            </button>
          </div>
        </div>
        <div className="px-12 py-8">
          <div className="flex items-center gap-3 mb-6">
            <List className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-bold">Tracks</h2>
          </div>

          <div className="space-y-3">
            {game.tracks.map((track, index) => (
              <div
                key={track.title + index}
                onClick={() => setCurrentTrack(index)}
                className={`group relative cursor-pointer border rounded-xl p-5 transition-all
                  ${currentTrack === index
                    ? "from-green-900/40 to-blue-900/20 border-black shadow-black-900/20"
                    : "from-white/5 to-transparent border-white/5 hover:from-white/10 hover:to-white/5"}
                  bg-gradient-to-r hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-6">

                  <div className="w-12 h-12 flex items-center justify-center">
                    {currentTrack === index && isPlaying ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25"></div>
                        <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                          <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
                          <div className="w-1 h-6 bg-white rounded-full animate-pulse" style={{animationDelay: "0.15s"}}></div>
                          <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{animationDelay: "0.3s"}}></div>
                        </div>
                      </div>
                    ) : (
                      <span className="text-2xl text-gray-500 group-hover:text-green-400">
                        {index + 1}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-lg font-bold truncate">
                      {track.title}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(index);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedTracks.has(index)
                          ? "fill-green-500 text-green-500"
                          : "text-gray-400 hover:text-white"
                      }`}
                    />
                  </button>

                </div>

                {currentTrack === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500 rounded-l-xl"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
