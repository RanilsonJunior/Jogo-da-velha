import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import P from 'prop-types';

export const Square = ({ value, index }) => {
  const {
    state: { squares, isXNext, whoIsWinner },
    dispatch,
  } = useContext(GameContext);

  function handleClick() {
    // Caso o squares tenha algum valor ira retornar e não fazer nada, agora caso não tenha o valor (for null), ira fazer o que está em baixo (que seria configurar o valor).
    if (squares[index]) return;
    // A mesma coisa que o de cima, caso tenha um valor (que seria a vitoria) ele irar parar de funcionar.
    if (whoIsWinner) return;
    // Estou pegando o squares (que é o array com 9 botões/quadrados) e fazendo uma cópia dele em uma nova const, e estou dizendo que quando eu clicar em um botão, o index que vale null, vai fazer uma verificação com 'isXNext' que é true, e caso seja verdadeiro vai ser 'X', caso seja false vai ser 'O'.
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';

    dispatch({ type: 'UPDATE_SQUARES', payload: newSquares });
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: P.string,
  index: P.number.isRequired,
};
