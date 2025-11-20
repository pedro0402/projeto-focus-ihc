import LinkButton from "../../layouts/LinkButton";

export default function GameHeader({ game, dominantColor }) {
  return (
    <div
      className="relative h-96 overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${dominantColor}, black)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative h-full flex items-end px-12 pb-10">

        <div className="flex items-end gap-10">

          {/* Capa */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-700 blur-2xl opacity-40 group-hover:opacity-60"></div>

            <div className="relative w-48 h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-400/20">
              <img 
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="text-green-400 text-sm font-bold tracking-wider mb-1">
              OFFICIAL GAME SOUNDTRACK
            </p>

            <h1 className="text-5xl font-black mb-2">
              {game.title}
            </h1>

            <p className="text-gray-300 max-w-xl mb-3">
              {game.description}
            </p>

            <div className="text-gray-400 text-sm flex items-center gap-3">
              <span className="font-semibold text-white cursor-pointer group transition-transform duration-300 hover:scale-105">
                <LinkButton to={game.companyUrl} target="_blank">
                  {game.company}
                </LinkButton>
              </span>
              <span>•</span>
              <span>{game.tracks.length} songs</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
