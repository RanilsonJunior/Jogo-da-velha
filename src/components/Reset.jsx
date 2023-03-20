import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export const Reset = () => {
  const { dispatch } = useContext(GameContext);

  const handleClick = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
};
