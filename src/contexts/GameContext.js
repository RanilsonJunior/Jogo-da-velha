import React, { createContext, useReducer } from 'react';
import P from 'prop-types';

// Criou o contexto.
export const GameContext = createContext();

// Criando o valor inicial.
const initialState = {
  squares:
    Array(9).fill(
      null,
    ) /* Está criando um array com 9 posições e com o valor dele sendo null. */,
  isXNext: true,
  whoIsWinner: '',
  history: [],
};

// É uma função que vai receber o children (que é todo tipo de formato), dentro dele vai pegar o contexto criado e fazer o provider dele.
export const GameContextProvider = ({ children }) => {
  // Criando o reducer.
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_SQUARES': {
        // Ele está pegando do estado atual.
        const { squares, history, isXNext, whoIsWinner } = state;
        const newHistory = [
          // Ele está pegando o histórico anterior, e está jogando dentro do history (squares,isXNext,whoIsWinner).
          ...history,
          {
            squares,
            isXNext,
            whoIsWinner,
          },
        ];

        const newState = { ...state };
        newState.squares = action.payload;
        //  Vai ficar mudando de true e false, e com isso vai saber se tem que colocar 'X' ou 'O'.
        newState.isXNext = !isXNext;
        newState.whoIsWinner = whoIsWinner;
        newState.history = newHistory;
        return newState;
      }
      case 'UPDATE_WINNER': {
        return { ...state, whoIsWinner: action.payload };
      }
      case 'RESET': {
        return initialState;
      }
      case 'UPDATE_HISTORY': {
        const [history, index] = action.payload;
        const { squares, whoIsWinner, isXNext } = history[index];

        const newHistory = [...history];
        newHistory.splice(index, history.length);

        const newState = {
          ...state,
          squares,
          whoIsWinner,
          isXNext,
          history: newHistory,
        };
        return newState;
      }
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

GameContextProvider.propTypes = {
  children: P.node.isRequired,
};
