import { createContext, useReducer } from 'react';
import f1Reducer from './F1Reducer';

const F1Context = createContext();

const URL = 'http://ergast.com/api/f1';

export const F1Provider = ({ children }) => {
  const initialState = {
    drivers: [],
    driverStandings: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(f1Reducer, initialState);

  // GET LIST OF DRIVERS
  const fetchDrivers = async () => {
    setLoading();

    const response = await fetch(`http://ergast.com/api/f1/2021/drivers.json`);

    const data = await response.json();
    const finalData = await data.MRData.DriverTable.Drivers;

    dispatch({
      type: 'GET_DRIVERS',
      payload: finalData,
    });
  };

  // GET CURRENT DRIVER STANDINGS FOR SINGLE DRIVER
  const fetchDriverStandings = async (driverId) => {
    setLoading();

    const response = await fetch(
      `http://ergast.com/api/f1/2021/drivers/${driverId}/driverStandings.json`
    );

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      // console.log('before data');
      const data = await response.json();
      // console.log(data);
      const finalData = data.MRData.StandingsTable.StandingsLists;
      // console.log(finalData);

      // dispatch({
      //   type: 'GET_DRIVER_STANDINGS',
      //   payload: finalData,
      // });

      // TRYING SOMETHING NEW
      const score = finalData[0].DriverStandings[0];
      // console.log(score);
      const driver = finalData[0].DriverStandings[0].Driver;
      // console.log(driver);
      const constructor = finalData[0].DriverStandings[0].Constructors[0];
      // console.log(constructor);

      dispatch({
        type: 'GET_DRIVER_STANDINGS',
        payload: {
          score: score,
          driver: driver,
          constructor: constructor,
        },
      });
    }
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
        driverStandings: state.driverStandings,
        fetchDrivers,
        fetchDriverStandings,
      }}
    >
      {children}
    </F1Context.Provider>
  );
};

export default F1Context;
