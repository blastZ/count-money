import React from 'react';
import useMyReducer from '../../reducers';

const Provider = () => {
  const { state, dispatch } = useMyReducer();
};

export default Provider;
