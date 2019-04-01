import useAddReducer from './addReducer';

const useMyReducer = () => {
  const { state: addState, dispatch: addDispatch } = useAddReducer();

  return {
    state: {
      addState
    },
    dispatch: {
      addDispatch
    }
  };
};

export default useMyReducer;
