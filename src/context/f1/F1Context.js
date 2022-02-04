import { createContext, useReducer } from 'react';
import f1Reducer from './F1Reducer';

const F1Context = createContext();

const URL = 'http://ergast.com/api/f1';

export const F1Provider = ({ children }) => {
  const initialState = {
    drivers: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(f1Reducer, initialState);

  // GET DRIVERS
  const fetchDrivers = async () => {
    setLoading();

    const response = await fetch(`http://ergast.com/api/f1/2021/drivers.json`);

    const data = await response.json();
    const finalData = data.MRData.DriverTable.Drivers;

    dispatch({
      type: 'GET_DRIVERS',
      payload: finalData,
    });
  };

  // SET LOADING
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  return (
    <F1Context.Provider
      value={{
        drivers: state.drivers,
        loading: state.loading,
        fetchDrivers,
      }}
    >
      {children}
    </F1Context.Provider>
  );
};

export default F1Context;
