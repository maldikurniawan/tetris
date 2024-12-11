import { Action, actionIsDrop } from "../controls/Input";
import { playerController } from "../controls/PlayerController";

import { useDropTime } from "../../hooks/useDropTime";
import { useInterval } from "../../hooks/useInterval";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats
  });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    });
  };

  const handleButtonClick = (action) => {
    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      if (!dropTime && !actionIsDrop(action)) return;
      handleInput({ action });
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.Rotate)}
        >
          Rotate
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.Left)}
        >
          Left
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.SlowDrop)}
        >
          Down
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.Right)}
        >
          Right
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.FastDrop)}
        >
          Drop
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.Pause)}
        >
          Pause
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.Quit)}
        >
          Quit
        </button>
      </div>
    </div>
  );
};

export default GameController;
