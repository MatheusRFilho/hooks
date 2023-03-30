import { createContext, useReducer } from 'react';
import P from 'prop-types';
import { reducer } from '../../reducers/reducer';
import { globalState } from './data';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
  INCRESSE_COUNTER: 'INCRESSE_COUNTER',
};

export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  const increseCounter = () => {
    dispatch({ type: actions.INCRESSE_COUNTER });
  };

  return (
    <Context.Provider value={{ state, changeTitle, increseCounter }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
