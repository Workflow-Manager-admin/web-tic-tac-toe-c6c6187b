import React from "react";
import "./GameBoard.css";

// PUBLIC_INTERFACE
function GameBoard({ board, onCellClick, disabled }) {
  /**
   * Displays the main 3x3 Tic Tac Toe board.
   * Applies highlight to the cells of winning line if win.
   * Disables board on win/draw.
   * Handles simple animated pop on mark placement.
   */
  return (
    <div className="ttt-board-outer">
      <div className="ttt-board-inner">
        {board.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <button
              key={`${rowIdx}-${colIdx}`}
              className={
                "ttt-cell" +
                (cell ? " ttt-cell-filled" : "") +
                (disabled ? " ttt-cell-disabled" : "")
              }
              onClick={() => onCellClick(rowIdx, colIdx)}
              tabIndex={disabled ? -1 : 0}
              disabled={!!cell || disabled}
            >
              {cell && (
                <span
                  className={
                    "ttt-anim" + (cell === "X" ? " ttt-x" : " ttt-o")
                  }
                  aria-label={cell === "X" ? "X" : "O"}
                >
                  {cell}
                </span>
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default GameBoard;
