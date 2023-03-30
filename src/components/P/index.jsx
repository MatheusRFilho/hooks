import React, { useContext } from 'react';
import { Context } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
export const P = () => {
  const theContext = useContext(Context);
  return <p>{theContext.state.counter}</p>;
};
