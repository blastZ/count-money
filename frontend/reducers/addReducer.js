import React, { useReducer } from 'react';

const initState = {
  type: 'exp',
  category: null,
  calculator: {
    value: 0,
    info: '',
    add: false,
    subtract: false,
    equal: false
  }
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
  const {
    calculator: { add, subtract, value }
  } = state;

  switch (type) {
    case 'SET_CATEGORY': {
      return {
        ...state,
        category: payload
      };
    }
    case 'CALCULATOR_NUMBER': {
      if (String(value).length === 1 && Number(value) === 0) {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            value: payload
          }
        };
      } else {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            equal: add || subtract ? true : false,
            value: `${value}${payload}`
          }
        };
      }
    }
    case 'CALCULATOR_DELETE': {
      if (value.length > 1) {
        const isAdd = value[value.length - 1] === '+';
        const isSubtract = value[value.length - 1] === '-';
        return {
          ...state,
          calculator: {
            ...state.calculator,
            add: isAdd ? false : state.add,
            subtract: isSubtract ? false : state.subtract,
            equal: isAdd || isSubtract ? false : state.subtract,
            value: value.slice(0, value.length - 1)
          }
        };
      } else {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            value: 0
          }
        };
      }
    }
    case 'CALCULATOR_SUBTRACT': {
      if (!subtract) {
        if (add) {
          return {
            ...state,
            calculator: {
              ...state.calculator,
              subtract: true,
              add: false,
              equal: false,
              value: sumValue(state.calculator, '-')
            }
          };
        }

        return {
          ...state,
          calculator: {
            ...state.calculator,
            subtract: true,
            equal: false,
            value: `${value}-`
          }
        };
      } else {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            equal: false,
            value: sumValue(state.calculator, '-')
          }
        };
      }
    }
    case 'CALCULATOR_ADD': {
      if (!add) {
        if (subtract) {
          return {
            ...state,
            calculator: {
              ...state.calculator,
              add: true,
              subtract: false,
              equal: false,
              value: sumValue(state.calculator, '+')
            }
          };
        }

        return {
          ...state,
          calculator: {
            ...state.calculator,
            add: true,
            equal: false,
            value: `${value}+`
          }
        };
      } else {
        return {
          ...state,
          calculator: {
            ...state.calculator,
            equal: false,
            value: sumValue(state.calculator, '+')
          }
        };
      }
    }
    case 'CALCULATOR_EQUAL': {
      return {
        ...state,
        calculator: {
          ...state.calculator,
          add: false,
          subtract: false,
          equal: false,
          value: sumValue(state.calculator, '=')
        }
      };
    }
    case 'default':
      return state;
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
