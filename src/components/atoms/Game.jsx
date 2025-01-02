import { Menu, Tetris } from "@/components";
import { useGameOver } from "../../hooks/useGameOver";
import { useRef, useEffect } from "react";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const backgroundMusicRef = useRef(null);

  const start = () => {
    resetGameOver();
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.play().catch((error) => {
        console.warn("Background music could not be played:", error);
      });
    }
  };

  // Stop music when the game is over
  useEffect(() => {
    if (gameOver && backgroundMusicRef.current) {
      backgroundMusicRef.current.pause();
      backgroundMusicRef.current.currentTime = 0;
    }
  }, [gameOver]);

  return (
    <div className="Game">
      {/* Background Music */}
      <audio ref={backgroundMusicRef} src="assets/music/tetris.mp3" loop></audio>

      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;
