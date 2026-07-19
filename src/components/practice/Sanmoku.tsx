"use client";

// イベントハンドラのhandleClickとjumpToのロジックを紐解いていけば、コードの流れがわかる

import styles from "./Sanmoku.module.css"
import { useState } from 'react'

type SquareValue = "X" | "O" | null;

type SquareProps = {
  value: SquareValue;
  onSquareClick: () => void;
};

type BoardProps = {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (squares: SquareValue[]) => void;
};

function Square ({ value, onSquareClick }: SquareProps) {
  const colorClass = value === "X" ? styles.squareX : value === "O" ? styles.squareO : "";
  return (
    <button
      className={`${styles.square} ${colorClass}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {

  function handleClick(i:number) {
    // ボード内がクリックされたら発動するイベントハンドラ

    // もし勝敗がついていたら、何も処理せずリターン
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Q1 ここでコピーするのはなぜ？
    const nextSquares = squares.slice();

    // 次がXの番（現在のプレイ順が偶数）だったら、クリックした配列の要素をXに、奇数だったらOに
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // 表示するためのボード情報を引数に渡し、handlePlayを実行
    onPlay(nextSquares);
  }

  // 勝敗が決しているかどうか判別し、その結果によって表示を出しわけ
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return(
    <div className={styles.board_wrapper}>
      <div className={styles.status}>{status}</div>
      <div className={styles.square_row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={styles.square_row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={styles.square_row}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

  // @history        巻き戻し機能用のプレイ履歴を保存する配列 ex [[X, null, null, null, null, null....],[X, O, null, null, null, null....],]
  // @currentMove    現在のプレイ順 ex 0.1.2.3.4
  // @xIsNext        次がXの時にtrueを返す定数　ex 偶数だとtrue 奇数だとfalse
  // @currentSquares 画面に表示するボードのデータ ex [X, null, null, null, null, null....]

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  // Q2 currentSquaresってuseEffect使わなくて良いの？
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    // プレイ履歴のstateを最新化し、プレイ順のstateも最新化
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    // クリックされたプレイ履歴のプレイ順にstateを変更し、変更したことにより、ボードの情報も更新
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    // OXゲームの下に表示されるプレイ履歴をDOM生成し表示する
    let description;

    if (move > 0)  {
      description = 'Go to move #' + move;
    } else {
      description = 'Gon to game start'
    }

    return (
      <li key={move}>
        <button className={styles.moveButton} onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className={styles.game}>
      <h2 className={styles.title}>OXゲーム</h2>
      <div className={styles.gameLayout}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <div className={styles.gameInfo}>
          <p className={styles.historyLabel}>履歴</p>
          <ol className={styles.moveList}>{moves}</ol>
        </div>
      </div>
    </div>
  )
}

function calculateWinner(squares: SquareValue[]): SquareValue {
  // OXゲームの勝利条件（OかXが3列並んだら勝ち）に達しているか判別するロジック
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}