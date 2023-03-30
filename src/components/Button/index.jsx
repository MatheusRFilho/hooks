import React, { useContext } from 'react';
import { Context } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
export const Button = () => {
  const theContext = useContext(Context);
  return (
    <button
      onClick={
        // () =>
        // setContextState({
        //   ...contextState,
        //   counter: contextState.counter + 1,
        // })
        () => theContext.increseCounter()
      }
    >
      Test
    </button>
  );
};
