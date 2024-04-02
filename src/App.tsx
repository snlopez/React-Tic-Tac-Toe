import { useState } from 'react';
import { Board } from './components/Board/Board';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Turn } from './components/Turn/Turn';
import { Winner } from './components/Winner/Winner';
import { TURNS } from './constants/constants';
import confetti from 'canvas-confetti';
import './App.css';

export const App = () => {
  const [turn, setTurn] = useState<string>(TURNS.X);
  const [winner, setWinner] = useState<string | null>(null);
  const [isTie, setIsTie] = useState<boolean>(false);
  const [resetGame, setResetGame] = useState<boolean>(false);

  const updateWinner = (newWinner: string | null) => {
    setWinner(newWinner);
    newWinner && confetti();
  };

  const updateTurn = (newTurn: string) => setTurn(newTurn);
  const updateTie = (tieStatus: boolean) => setIsTie(tieStatus);

  const clearBoard = () => {
    setResetGame(true);
    updateTurn(TURNS.X);
    setWinner(null);
    setIsTie(false);
  };

  return (
    <main className='board'>
      <Header />
      <Board
        winner={winner}
        updateWinner={updateWinner}
        turn={turn}
        updateTurn={updateTurn}
        updateTie={updateTie}
        resetFlag={resetGame}
        clearResetFlag={setResetGame}
      />
      <Turn turn={turn} winner={winner} />
      <Winner winner={winner} isTie={isTie} clearBoard={clearBoard} />
      <Footer clearBoard={clearBoard} />
    </main>
  );
};
