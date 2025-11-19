import { usePlayer } from "../context/PlayerContext";

export default function GlobalPlayer() {
  const { currentTrack, isPlaying, pauseTrack, playTrack } = usePlayer();

  if (!currentTrack) return null;

  return (
    <div className="player-container">
      <p>{currentTrack.name}</p>

      {isPlaying ? (
        <button onClick={pauseTrack}>Pause</button>
      ) : (
        <button onClick={() => playTrack(currentTrack)}>Play</button>
      )}
    </div>
  );
}
