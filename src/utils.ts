import { WINNER_COMBOS } from './constants/constants';

export const verifyWinner = (board: (string | null)[]) => {
  let winner: string | null = null;
  WINNER_COMBOS.every(combo => {
    const comboValue = board[combo[0]];
    if (comboValue && combo.every(index => board[index] === comboValue)) {
      winner = comboValue;
      return false;
    }
    return true;
  });

  return winner;
};

export const checkTie = (board: (string | null)[]): boolean =>
  board.find(position => position === null) === undefined && !verifyWinner(board);
