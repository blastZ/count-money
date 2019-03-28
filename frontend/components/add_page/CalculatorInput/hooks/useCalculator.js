import { useReducer } from 'react';

const initState = {
  value: 0,
  add: false,
  subtract: false
};

const sumValue = ({ value, add, subtract }, operate) => {
  if (add) {
    const valueList = value.split('+').filter(o => o);
    if (valueList.length > 1) {
      return `${Number(valueList[0]) + Number(valueList[1])}${operate}`;
    } else {
      return `${value.slice(0, value.length - 1)}${operate}`;
    }
  }

  if (subtract) {
    const valueList = value.split('-').filter(o => o);
    if (valueList.length > 1) {
      return `${Number(valueList[0]) - Number(valueList[1])}${operate}`;
    } else {
      return `${value.slice(0, value.length - 1)}${operate}`;
    }
  }
};

const reducer = (state, { type, payload }) => {
  const { value, add, subtract } = state;

  switch (type) {
    case 'NUMBER': {
      if (String(value).length === 1 && Number(value) === 0) {
        return {
          ...state,
          value: payload
        };
      } else {
        return {
          ...state,
          value: `${value}${payload}`
        };
      }
    }
    case 'DELETE': {
      if (value.length > 1) {
        return {
          ...state,
          add: value[value.length - 1] === '+' ? false : state.add,
          subtract: value[value.length - 1] === '-' ? false : state.subtract,
          value: value.slice(0, value.length - 1)
        };
      } else {
        return {
          ...state,
          value: 0
        };
      }
    }
    case 'SUBTRACT': {
      if (!subtract) {
        if (add) {
          return {
            ...state,
            subtract: true,
            add: false,
            value: sumValue(state, '-')
          };
        }

        return {
          ...state,
          subtract: true,
          value: `${value}-`
        };
      } else {
        return {
          ...state,
          value: sumValue(state, '-')
        };
      }
    }
    case 'ADD': {
      if (!add) {
        if (subtract) {
          return {
            ...state,
            add: true,
            subtract: false,
            value: sumValue(state, '+')
          };
        }

        return {
          ...state,
          add: true,
          value: `${value}+`
        };
      } else {
        return {
          ...state,
          value: sumValue(state, '+')
        };
      }
    }
    default:
      return state;
  }
};

const useCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return {
    state,
    dispatch
  };
};

export default useCalculator;
