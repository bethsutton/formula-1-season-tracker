// GET LIST OF DRIVERS
export const fetchDrivers = async () => {
  // setLoading();

  const response = await fetch(`http://ergast.com/api/f1/2021/drivers.json`);

  const data = await response.json();
  const finalData = await data.MRData.DriverTable.Drivers;

  return finalData;

  // dispatch({
  //   type: 'GET_DRIVERS',
  //   payload: finalData,
  // });
};

// GET CURRENT DRIVER STANDINGS FOR SINGLE DRIVER
export const fetchDriverStandings = async (driverId) => {
  // setLoading();

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

    return { score, driver, constructor };

    // dispatch({
    //   type: 'GET_DRIVER_STANDINGS',
    //   payload: {
    //     score: score,
    //     driver: driver,
    //     constructor: constructor,
    //   },
    // });
  }
};

// GET CURRENT RACE RESULTS FOR SINGLE DRIVER
export const fetchDriverRaceResults = async (driverId) => {
  // setLoading();

  const response = await fetch(
    `http://ergast.com/api/f1/2021/drivers/${driverId}/results.json`
  );

  const data = await response.json();
  const finalData = data.MRData.RaceTable.Races;

  return finalData;

  // dispatch({
  //   type: 'GET_DRIVER_RACE_RESULTS',
  //   payload: finalData,
  // });
};

// GET ALL RACE RESULTS
export const fetchResults = async () => {
  // setLoading();

  const response = await fetch(`http://ergast.com/api/f1/2021/results/1.json`);

  const data = await response.json();
  // console.log(data);
  const finalData = data.MRData.RaceTable.Races;
  // console.log(finalData);

  return finalData;

  // dispatch({
  //   type: 'GET_RESULTS',
  //   payload: finalData,
  // });
};
