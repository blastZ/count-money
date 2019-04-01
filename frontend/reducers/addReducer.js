import React, { useReducer } from 'react';

const initState = {
  showCalculator: false
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_CALCULATOR':
      return {
        ...state,
        showCalculator: true
      };
  }
};

const useAddReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return {
    state,
    dispatch
  };
};

export default useAddReducer;
