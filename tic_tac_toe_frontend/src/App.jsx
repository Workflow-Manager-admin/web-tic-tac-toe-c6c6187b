import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";
import RestartButton from "./components/RestartButton";

// Returns empty 3x3 board
function getEmptyBoard() {
  return Array(3).fill(null).map(() => Array(3).fill(null));
}

// Checks for winner: returns 'X' or 'O' or null
function calculateWinner(board) {
  const lines = [
    // rows
    [ [0,0],[0,1],[0,2] ],
    [ [1,0],[1,1],[1,2] ],
    [ [2,0],[2,1],[2,2] ],
    // columns
    [ [0,0],[1,0],[2,0] ],
    [ [0,1],[1,1],[2,1] ],
    [ [0,2],[1,2],[2,2] ],
    // diagonals
    [ [0,0],[1,1],[2,2] ],
    [ [0,2],[1,1],[2,0] ]
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (
      board[a[0]][a[1]] &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return board[a[0]][a[1]];
    }
  }
  return null;
}

function boardFull(board) {
  return board.flat().every(cell => cell);
}

// PUBLIC_INTERFACE
function App() {
  /**
   * Main entry point for the Tic Tac Toe UI.
   * Handles state (board, scores, turn, outcome), passing props to children.
   * Displays Scoreboard, board, outcome, and restart control.
   */
  const [board, setBoard] = useState(getEmptyBoard());
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [status, setStatus] = useState(""); // "win", "draw", ""

  // Returns {winner} or "draw" or null
  function getStatus(board) {
    const winner = calculateWinner(board);
    if (winner) return { winner };
    if (boardFull(board)) return { draw: true };
    return null;
  }

  // Handle a move
  function handleCellClick(row, col) {
    if (board[row][col] || status) return;

    const newBoard = board.map(r => r.slice());
    newBoard[row][col] = xIsNext ? "X" : "O";

    const result = getStatus(newBoard);

    setBoard(newBoard);
    setXIsNext(!xIsNext);

    if (result?.winner) {
      setStatus("win");
      setScores({
        ...scores,
        [result.winner]: scores[result.winner] + 1,
      });
    } else if (result?.draw) {
      setStatus("draw");
    }
  }

  // Restart game
  function handleRestart() {
    setBoard(getEmptyBoard());
    setXIsNext(true);
    setStatus("");
  }

  // Current outcome or turn indicator
  let displayStatus = "";
  if (status === "win") {
    const winner = xIsNext ? "O" : "X";
    displayStatus = `Winner: Player ${winner}`;
  } else if (status === "draw") {
    displayStatus = "It's a draw!";
  } else {
    displayStatus = `Turn: Player ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--bg-light)",
      }}
    >
      <Scoreboard scores={scores} turn={xIsNext ? "X" : "O"} />
      <div style={{ margin: "0.5rem 0", fontSize: "1.2rem", minHeight: 32, color: status === "draw" ? "var(--accent)" : status === "win" ? "var(--secondary)" : "var(--primary)", fontWeight: 600, letterSpacing: 1, transition: "color 0.18s" }}>
        {displayStatus}
      </div>
      <GameBoard board={board} onCellClick={handleCellClick} winLine={status === "win" ? calculateWinner(board) : null} disabled={!!status} />
      <RestartButton onRestart={handleRestart} />
      <footer style={{marginTop:"1rem", fontSize:"0.9rem", color:"#b0bac1"}}>Tic Tac Toe &copy; 2024</footer>
    </div>
  );
}

export default App;
