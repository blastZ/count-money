import { useReducer } from 'react';

const date = new Date();

const initState = {
  billList: [],
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
  date
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_DATE': {
      return {
        ...state,
        date: payload
      };
    }
    case 'GET_BILL_LIST': {
      return {
        ...state,
        billList: payload
      };
    }
    default:
      return state;
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
