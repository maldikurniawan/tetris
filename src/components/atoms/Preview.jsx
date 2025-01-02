import React from "react";

import { buildBoard } from "../controls/BoardController";
import { transferToBoard } from "../controls/Tetrominoes";

import { BoardCell } from "@/components";

const Preview = ({ tetromino, index }) => {
  const { shape, className } = tetromino;

  // Build a 4x4 board
  const board = buildBoard({ rows: 4, columns: 4 });

  // Dynamic positioning
  const style = { top: `${index * 5}rem` };

  // Transfer tetromino to the board
  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape,
  });

  return (
    <div
      className="absolute border border-purple-600 max-[450px]:right-3 right-14 rounded-lg mt-4 p-2 flex justify-center items-center"
      style={style}
    >
      <div className="Preview-board">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={y * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Preview);
