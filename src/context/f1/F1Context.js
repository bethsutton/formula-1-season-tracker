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
    const finalData = data.MRData.DriverTable.Drivers;

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
      const data = await response.json();
      const finalData = data.MRData.StandingsTable.StandingsLists;

      dispatch({
        type: 'GET_DRIVER_STANDINGS',
        payload: finalData,
      });
    }
    // console.log(finalData[0].season);

    // let driverStandings = {};

    // for (let i = 0; i < finalData.length; i++) {
    //   if (finalData[i].season === '2021') {
    //     console.log(finalData[i]);
    //     console.log(finalData[i].DriverStandings[0].position);
    //     driverStandings = finalData[i];
    //     return driverStandings;
    //   }
    // }
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
