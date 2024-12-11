import React from "react";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="absolute top-[220px] right-5 bg-opacity-90 text-white p-4 rounded-lg shadow-md w-16">
      <li className="text-xs font-semibold text-gray-400 uppercase">Level</li>
      <li className="text-md font-bold text-white mb-4">{level}</li>

      <li className="text-xs font-semibold text-gray-400 uppercase">
        Lines to level
      </li>
      <li className="text-md font-bold text-white mb-4">{linesToLevel}</li>

      <li className="text-xs font-semibold text-gray-400 uppercase">Points</li>
      <li className="text-md font-bold text-white">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
