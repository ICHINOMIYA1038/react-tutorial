import { useState, useEffect } from "react";
import React from "react";

// マス目のボタン
function Square({ value, onSquareClick, isLine }) {
  const [isTextLarge, setIsTextLarge] = useState(false);
  const animateText = () => {
    if (value !== "X" && value !== "O") {
      setIsTextLarge(true);

      // 一定の時間（ここでは500ms）後にテキストの大きさを元に戻す
      setTimeout(() => {
        setIsTextLarge(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (isLine) {
      animateText();
    }
  }, [isLine]);

  return (
    <button
      className="square"
      onClick={() => {
        onSquareClick();
        animateText();
      }}
    >
      <span
        style={{
          fontSize: isTextLarge ? "72px" : "48px",
          transition: "font-size 0.5s", // アニメーションの時間
        }}
      >
        {value}
      </span>
    </button>
  );
}

// 盤面のコンポーネント
function Board({ xIsNext, squares, onPlay }) {
  const winnerObject = calculateWinner(squares);
  const [isLine, setisLine] = useState(Array(9).fill(false));
  let status;
  useEffect(() => {
    if (winnerObject.winner) {
      status = "Winner: " + winnerObject.winner;
      const updatedLines = [...isLine];
      winnerObject.lines.forEach((line) => {
        updatedLines[line] = true;
      });
      setisLine(updatedLines);
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  }, [xIsNext]);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares).winner) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isLine={isLine[0]}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isLine={isLine[1]}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isLine={isLine[2]}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isLine={isLine[3]}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isLine={isLine[4]}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isLine={isLine[5]}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isLine={isLine[6]}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isLine={isLine[7]}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isLine={isLine[8]}
        />
      </div>
    </>
  );
}

// 盤面をまとめたコンポーネント
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="next-player-cards">
        <div className={`next-player-card ${xIsNext ? "" : "active"}`}>
          <h3>Player X</h3>
        </div>
        <div className={`next-player-card ${xIsNext ? "active" : ""}`}>
          <h3>Player O</h3>
        </div>
      </div>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], lines: lines[i] };
    }
  }

  return { winner: null, lines: null };
}
