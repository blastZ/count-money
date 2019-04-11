import { createContext } from 'react';

import useAddReducer from './addReducer';
import useAppReducer from './appReducer';

export const Context = createContext();

const Provider = ({ children }) => {
  const { state: addState, dispatch: addDispatch } = useAddReducer();
  const { state: appState, dispatch: appDispatch } = useAppReducer();

  return (
    <Context.Provider
      value={{
        state: {
          addState,
          appState
        },
        dispatch: {
          addDispatch,
          appDispatch
        }
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
