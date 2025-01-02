import { Action, actionIsDrop } from "../controls/Input";
import { playerController } from "../controls/PlayerController";

import { useDropTime } from "../../hooks/useDropTime";
import { useInterval } from "../../hooks/useInterval";
import { FaAngleDoubleDown, FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaPause } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

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
      if (actionIsDrop(action)) {
        // Handle drop actions directly without affecting the drop timer.
        handleInput({ action });
      } else {
        handleInput({ action });
      }
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-4 bottom-[-150px] flex flex-col justify-center items-center gap-2">
        <div className="flex">
          <button
            className="bg-purple-500 p-2 text-white rounded-full shadow hover:bg-purple-600 focus:outline-none"
            onClick={() => handleButtonClick(Action.Rotate)}
          >
            <FaArrowUp className="w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-purple-500 p-2 text-white rounded-full shadow hover:bg-purple-600 focus:outline-none"
            onClick={() => handleButtonClick(Action.Left)}
          >
            <FaArrowLeft className="w-6 h-6" />
          </button>
          <button
            className="bg-purple-500 p-2 text-white rounded-full shadow hover:bg-purple-600 focus:outline-none"
            onClick={() => handleButtonClick(Action.SlowDrop)}
          >
            <FaArrowDown className="w-6 h-6" />
          </button>
          <button
            className="bg-purple-500 p-2 text-white rounded-full shadow hover:bg-purple-600 focus:outline-none"
            onClick={() => handleButtonClick(Action.Right)}
          >
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex">
          <button
            className="bg-purple-500 p-2 text-white rounded-full shadow hover:bg-purple-600 focus:outline-none"
            onClick={() => handleButtonClick(Action.FastDrop)}
          >
            <FaAngleDoubleDown className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="absolute right-4 bottom-[-110px] flex gap-4">
        <button
          className="bg-yellow-500 p-4 text-white rounded-full shadow hover:bg-yellow-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.Pause)}
        >
          <FaPause className="w-6 h-6" />
        </button>
        <button
          className="bg-red-500 p-4 text-white rounded-full shadow hover:bg-red-600 focus:outline-none"
          onClick={() => handleButtonClick(Action.Quit)}
        >
          <FaHouseChimney className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default GameController;
