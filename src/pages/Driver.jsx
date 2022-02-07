import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import F1Context from '../context/f1/F1Context';

function Driver() {
  const { fetchDriverStandings, driverStandings } = useContext(F1Context);

  const params = useParams();
  const name = driverStandings[0].DriverStandings[0].Driver.givenName;

  useEffect(() => {
    fetchDriverStandings(params.driverId);
  }, []);

  return <div>DRIVER INFORMATION FOR {name}</div>;
}

export default Driver;
