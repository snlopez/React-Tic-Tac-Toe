import { useState, useEffect } from 'react';
import { TURNS } from '../../constants/constants';
import { StoredData } from '../../interfaces';
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
  const storageState: string | null = localStorage.getItem('appStoredData');
  const initialBoardState = Array(9).fill(null);
  const storageData: StoredData | null = storageState
    ? JSON.parse(storageState)
    : null;

  const [board, setBoard] = useState<(string | null)[]>(
    storageData ? storageData.board : initialBoardState
  );

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

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    updateTurn(newTurn);
    const newWinner = verifyWinner(newBoard);
    updateWinner(newWinner);

    let isTie = false;
    if (!winner) {
      isTie = checkTie(newBoard);
      updateTie(isTie);
    }
    const updatedData: StoredData = {
      tie: isTie,
      turn: newTurn,
      winner: newWinner,
      board: newBoard
    };
    localStorage.setItem('appStoredData', JSON.stringify(updatedData));
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
