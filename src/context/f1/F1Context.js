import { createContext, useReducer } from 'react';
import f1Reducer from './F1Reducer';

const F1Context = createContext();

const URL = 'http://ergast.com/api/f1';

export const F1Provider = ({ children }) => {
  const initialState = {
    drivers: [],
    driverStandings: {},
    driverRaceResults: [],
    results: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(f1Reducer, initialState);

  return (
    <F1Context.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </F1Context.Provider>
  );
};

export default F1Context;
