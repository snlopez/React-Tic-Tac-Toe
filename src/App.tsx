import { useState } from 'react';
import './App.css';
import { Board } from './components/Board/Board';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Turn } from './components/Turn/Turn';
import { Winner } from './components/Winner/Winner';
import { TURNS } from './constants/constants';

export const App = () => {
  const [turn, setTurn] = useState<string>(TURNS.X);
  const [winner, setWinner] = useState<string | null>(null);

  const updateWinner = (newWinner: string | null) => {
    setWinner(newWinner);
  };

  const updateTurn = (newTurn: string) => {
    setTurn(newTurn);
  };

  return (
    <main className='board'>
      <Header />
      <Board
        winner={winner}
        updateWinner={updateWinner}
        turn={turn}
        updateTurn={updateTurn}
      />
      <Turn turn={turn} winner={winner} />
      <Winner winner={winner} />
      <Footer />
    </main>
  );
};
