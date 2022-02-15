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

  // GET LIST OF DRIVERS
  // fetchDrivers moved to F1Actions

  // GET CURRENT DRIVER STANDINGS FOR SINGLE DRIVER
  // fetchDriverStandings moved to F1Actions

  // GET CURRENT RACE RESULTS FOR SINGLE DRIVER
  // fetchDriverRaceResults moved to F1Actions

  // GET ALL RACE RESULTS
  // fetchResults moved to F1Actions

  // SET LOADING
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  return (
    <F1Context.Provider
      value={{
        // drivers: state.drivers,
        // loading: state.loading,
        // driverStandings: state.driverStandings,
        // driverRaceResults: state.driverRaceResults,
        // results: state.results,
        ...state,
        dispatch,
        // fetchDrivers,
        // fetchDriverStandings,
        // fetchDriverRaceResults,
        // fetchResults,
      }}
    >
      {children}
    </F1Context.Provider>
  );
};

export default F1Context;
