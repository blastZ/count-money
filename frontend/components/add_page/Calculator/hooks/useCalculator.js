import { useReducer } from 'react';

const initState = {
  value: 0,
  add: false,
  subtract: false,
  equal: false
};

const sumValue = ({ value, add, subtract }, operate) => {
  if (add) {
    const valueList = value.split('+').filter(o => o);
    if (valueList.length > 1) {
      if (operate === '=') {
        return `${Number(valueList[0]) + Number(valueList[1])}`;
      } else {
        return `${Number(valueList[0]) + Number(valueList[1])}${operate}`;
      }
    } else {
      return `${value.slice(0, value.length - 1)}${operate}`;
    }
  }

  if (subtract) {
    const valueList = value.split('-').filter(o => o);
    if (valueList.length > 1) {
      if (operate === '=') {
        return `${Number(valueList[0]) - Number(valueList[1])}`;
      } else {
        return `${Number(valueList[0]) - Number(valueList[1])}${operate}`;
      }
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
          equal: add || subtract ? true : false,
          value: `${value}${payload}`
        };
      }
    }
    case 'DELETE': {
      if (value.length > 1) {
        const isAdd = value[value.length - 1] === '+';
        const isSubtract = value[value.length - 1] === '-';
        return {
          ...state,
          add: isAdd ? false : state.add,
          subtract: isSubtract ? false : state.subtract,
          equal: isAdd || isSubtract ? false : state.subtract,
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
            equal: false,
            value: sumValue(state, '-')
          };
        }

        return {
          ...state,
          subtract: true,
          equal: false,
          value: `${value}-`
        };
      } else {
        return {
          ...state,
          equal: false,
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
            equal: false,
            value: sumValue(state, '+')
          };
        }

        return {
          ...state,
          add: true,
          equal: false,
          value: `${value}+`
        };
      } else {
        return {
          ...state,
          equal: false,
          value: sumValue(state, '+')
        };
      }
    }
    case 'EQUAL': {
      return {
        ...state,
        add: false,
        subtract: false,
        equal: false,
        value: sumValue(state, '=')
      };
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
