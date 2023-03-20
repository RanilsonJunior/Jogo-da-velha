import React from 'react';
import { GameContextProvider } from '../contexts/GameContext';
import { Board } from '../components/Board';

import './Home.css';

export const Home = () => {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
};
