import React, { useContext, useEffect } from 'react';
import calculateWinner from '../utils/calculateWinner';
import { GameContext } from '../contexts/GameContext';
import { Square } from './Square';
import { Player } from './Player';
import { Reset } from './Reset';
import { Winner } from './Winner';
import { History } from './History';

export const Board = () => {
  const {
    state: { squares, history },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    // Para saber quem ganhou.
    const winner = calculateWinner(squares);
    console.log(winner);
    // Caso tenha um vencedor ele vai colocar quem ganhou dentro de setWhoIsWinner.
    if (winner) {
      dispatch({ type: 'UPDATE_WINNER', payload: winner });
    }
  }, [dispatch, history, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          // Está passando o value e o index para saber qual botão está apertando.
          <Square key={Math.random()} value={value} index={index} />
        ))}
      </div>
      <History />
    </div>
  );
};
