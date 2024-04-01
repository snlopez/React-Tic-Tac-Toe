import { useState } from 'react';
import { TURNS, WINNER_COMBOS } from '../../constants/constants';
import { Square } from '../Square/Square';

interface BoardProps {
  winner: string | null;
  updateWinner: (winner: string | null) => void;
  turn: string;
  updateTurn: (turn: string) => void;
}
export const Board = ({ winner, updateWinner, turn, updateTurn }: BoardProps) => {
  const initialBoardState = Array(9).fill(null);

  const [board, setBoard] = useState<(string | null)[]>(initialBoardState);
  const updateBoard = (index: number) => {
    if (board[index] || winner) return;

    const auxBoard = [...board];
    auxBoard[index] = turn;
    setBoard(auxBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    updateTurn(newTurn);
    verifyWinner(auxBoard);
  };

  const clearBoard = () => {
    setBoard(initialBoardState);
    updateTurn(TURNS.X);
    updateWinner(null);
  };

  const verifyWinner = (newBoard: (string | null)[]) => {
    WINNER_COMBOS.every(combo => {
      const comboValue = newBoard[combo[0]];
      if (comboValue && combo.every(index => newBoard[index] === comboValue)) {
        updateWinner(comboValue);
        return false;
      }
      return true;
    });
  };
  return (
    <section className='game'>
      {board.map((_, index) => (
        <Square key={`square-${index}`} updateBoard={updateBoard} index={index}>
          {board[index]}
        </Square>
      ))}
    </section>
  );
};
