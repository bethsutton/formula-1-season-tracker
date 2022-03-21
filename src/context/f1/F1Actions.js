// GET LIST OF DRIVERS
export const fetchDrivers = async () => {
  const response = await fetch(`https://ergast.com/api/f1/2022/drivers.json`);

  const data = await response.json();
  const finalData = await data.MRData.DriverTable.Drivers;

  return finalData;
};

// GET CURRENT DRIVER STANDINGS FOR SINGLE DRIVER
export const fetchDriverStandings = async (driverId) => {
  const response = await fetch(
    `https://ergast.com/api/f1/2022/drivers/${driverId}/driverStandings.json`
  );

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();
    const finalData = data.MRData.StandingsTable.StandingsLists;

    const score = finalData[0].DriverStandings[0];
    const driver = finalData[0].DriverStandings[0].Driver;
    const constructor = finalData[0].DriverStandings[0].Constructors[0];

    return { score, driver, constructor };
  }
};

// GET CURRENT RACE RESULTS FOR SINGLE DRIVER
export const fetchDriverRaceResults = async (driverId) => {
  const response = await fetch(
    `https://ergast.com/api/f1/2022/drivers/${driverId}/results.json`
  );

  const data = await response.json();
  const finalData = data.MRData.RaceTable.Races;

  return finalData;
};

// GET ALL RACE RESULTS
export const fetchResults = async () => {
  const response = await fetch(`https://ergast.com/api/f1/2022/results/1.json`);

  const data = await response.json();
  const finalData = data.MRData.RaceTable.Races;

  return finalData;
};
