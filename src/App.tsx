import './App.css';
import { Square } from './components/Square/Square';

const board = Array(9).fill(null);

export const App = () => {
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {board.map((_, index) => (
          <Square key={`square-${index}`}>{index}</Square>
        ))}
      </section>
    </main>
  );
};
