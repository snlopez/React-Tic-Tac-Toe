import { ReactNode } from 'react';
import './square.css';

interface SquareProps {
  children: ReactNode;
  updateBoard: (index: number) => void;
  /* updateTurn: () => void; */
  index: number;
}
export const Square = ({ children, updateBoard, index }: SquareProps) => {
  const handleClick = () => {
    updateBoard(index);
    /* updateTurn(); */
  };
  return (
    <div className='square' onClick={handleClick}>
      {children}
    </div>
  );
};
