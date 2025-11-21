import LinkButton from "../../layouts/LinkButton";

export default function GameHeader({ game, dominantColor }) {
  return (
    <div
      className="relative h-auto md:h-96"
      style={{ background: `linear-gradient(to bottom, ${dominantColor}, black)` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative flex h-full items-center justify-center p-6 pt-10 md:items-end md:justify-start md:p-12 md:pb-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:gap-10">
          
          <div className="relative group flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-700 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative w-40 h-64 md:w-48 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-400/20">
              <img 
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* --- CORREÇÃO APLICADA AQUI --- */}
          {/* Adicionado 'w-full' para ocupar a largura disponível em telas pequenas */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
            <span className="text-xs font-bold tracking-wider mb-2">TRILHA SONORA DO JOGO</span>

            <h1 className="text-4xl md:text-5xl font-black mb-2">
              {game.title}
            </h1>

            {/* A classe max-w-xl agora funciona corretamente dentro do container w-full */}
            <p className="text-gray-300 max-w-xl mb-4 text-sm md:text-base">
              {game.description}
            </p>

            <div className="text-gray-400 text-sm flex items-center gap-3">
              <LinkButton to={game.companyUrl} target="_blank" className="font-semibold text-white cursor-pointer hover:underline">
                {game.company}
              </LinkButton>
              <span>•</span>
              <span>{game.tracks.length} músicas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}