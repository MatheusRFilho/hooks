import { actions } from '../contexts/AppContext';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return {
        ...state,
        title: action.payload != '' ? action.payload : 'String Vazia',
      };
    }
    case actions.INCRESSE_COUNTER: {
      console.log('Mudar título');
      return { ...state, counter: state.counter++ };
    }
  }

  return { ...state };
};
