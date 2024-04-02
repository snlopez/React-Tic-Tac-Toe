import { useState, useEffect } from 'react';
import { TURNS } from '../../constants/constants';
import { checkTie, verifyWinner } from '../../utils';
import { Square } from '../Square/Square';

interface BoardProps {
  winner: string | null;
  updateWinner: (winner: string | null) => void;
  turn: string;
  updateTurn: (turn: string) => void;
  updateTie: (tie: boolean) => void;
  resetFlag: boolean;
  clearResetFlag: (resetFlag: boolean) => void;
}
export const Board = ({
  winner,
  updateWinner,
  turn,
  updateTurn,
  updateTie,
  resetFlag,
  clearResetFlag
}: BoardProps) => {
  const initialBoardState = Array(9).fill(null);
  console.log(initialBoardState);

  const [board, setBoard] = useState<(string | null)[]>(initialBoardState);

  useEffect(() => {
    const storageState: string | null = localStorage.getItem('board');
    storageState && setBoard(JSON.parse(storageState).data);
  }, []);

  useEffect(() => {
    if (resetFlag) {
      localStorage.removeItem('board');
      setBoard(initialBoardState);
    }
  }, [resetFlag]);

  useEffect(() => {
    resetFlag && clearResetFlag(false);
  }, [board]);

  const updateBoard = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const storagedata = {
      data: newBoard
    };
    localStorage.setItem('board', JSON.stringify(storagedata));

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    updateTurn(newTurn);
    const newWinner = verifyWinner(newBoard);
    updateWinner(newWinner);
    if (!winner) {
      const isTie = checkTie(newBoard);
      updateTie(isTie);
    }
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
