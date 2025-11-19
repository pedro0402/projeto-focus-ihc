import { useParams } from "react-router-dom";

import { gamesData } from "../data/gamesData";

export default function GameSoundtrack() {
    const { gameId } = useParams();

    const game = gamesData[gameId];

    if (!game) {
        return <h1 className="text-white p-4">Jogo não encontrado.</h1>
    }

    return (
        <div className="text-white p-6">
            <h1 className="text-3xl font-bold mb-4">{game.title}</h1>

            <img 
                src={game.image}
                alt={game.title}
                className="w-72 rounded-xl mb-6"
            />

            <h2 className="text-xl font-semibold mb-2">Faixas:</h2>

            <ul className="space-y-2">
                {game.tracks.map((track, idx) => (
                    <li key={idx} className="bg-gray-900 p-3 rounded-lg">
                        {track.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}