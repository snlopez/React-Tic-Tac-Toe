import { useState } from 'react';
import './App.css';
import { Square } from './components/Square/Square';

const TURNS = {
  X: 'X',
  O: 'O'
};
export const App = () => {
  const initialBoardState = Array(9).fill(null);
  const [board, setBoard] = useState<(string | null)[]>(initialBoardState);
  const [turn, setTurn] = useState<string>(TURNS.X);

  const updateBoard = (index: number) => {
    if (board[index]) return;

    const auxBoard = [...board];
    auxBoard[index] = turn;
    setBoard(auxBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  const clearBoard = () => {
    setBoard(initialBoardState);
    setTurn(TURNS.X);
  };

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {board.map((_, index) => (
          <Square key={`square-${index}`} updateBoard={updateBoard} index={index}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section>
        <span>Turn: {turn}</span>
      </section>
      <footer>
        <button onClick={clearBoard}>Limpiar tablero</button>
      </footer>
    </main>
  );
};
