import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export const Winner = () => {
  const {
    state: { whoIsWinner },
  } = useContext(GameContext);

  if (!whoIsWinner) return <></>;
  return <p className="winner">{whoIsWinner} Ganhou</p>;
};
