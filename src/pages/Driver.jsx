import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import F1Context from '../context/f1/F1Context';
import Spinner from '../components/layout/Spinner';

function Driver() {
  const { fetchDriverStandings, driverStandings, loading } =
    useContext(F1Context);

  const params = useParams();

  // IF THIS BREAKS, ADD ASYNC AWAIT
  useEffect(() => {
    fetchDriverStandings(params.driverId);
  }, []);

  if (driverStandings.driver === undefined) {
    return <div>No driver information found</div>;
  }

  if (!loading) {
    return (
      <div>
        <h1>Driver Information:</h1>
        <p>Driver: {driverStandings.driver.familyName}</p>
        <p>Position: {driverStandings.score.position}</p>
        <p>Points: {driverStandings.score.points}</p>
        <p>Constructor: {driverStandings.constructor.name}</p>
        <p>Date of Birth: {driverStandings.driver.dateOfBirth}</p>
        <p>Nationality: {driverStandings.driver.nationality}</p>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Driver;
