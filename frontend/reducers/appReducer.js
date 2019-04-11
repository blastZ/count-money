import { useReducer } from 'react';

const initState = {
  billList: []
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_BILL_LIST': {
      return {
        ...state,
        billList: []
      };
    }
  }
};

const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return {
    state,
    dispatch
  };
};

export default useAppReducer;
