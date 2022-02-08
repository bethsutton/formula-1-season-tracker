import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import RaceItem from './RaceItem';
import F1Context from '../../context/f1/F1Context';

// NOT WOKRING, PUT RACEITEM INTO DRIVER PAGE FOR NOW
function RaceList() {
  const { fetchDriverRaceResults, driverRaceResults, loading } =
    useContext(F1Context);

  const params = useParams();

  // CURRENTLY CAUSING AN INFINITE LOOP
  useEffect(() => {
    fetchDriverRaceResults(params.driverId);
  }, []);

  if (!loading) {
    return (
      <div>
        {driverRaceResults.map((race) => (
          <RaceItem key={race.round} race={race} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default RaceList;
