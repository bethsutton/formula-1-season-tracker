import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';
import F1Context from '../context/f1/F1Context';
import Spinner from '../components/layout/Spinner';
import RaceList from '../components/races/RaceList';
import RaceItem from '../components/races/RaceItem';
import DriverPhoto from '../components/layout/DriverPhoto';

import {
  fetchDriverStandings,
  fetchDriverRaceResults,
} from '../context/f1/F1Actions';

function Driver() {
  const { driverStandings, driverRaceResults, loading, dispatch } =
    useContext(F1Context);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getStandingsData = async () => {
      const standingsData = await fetchDriverStandings(params.driverId);
      dispatch({ type: 'GET_DRIVER_STANDINGS', payload: standingsData });
    };

    const getRaceResultsData = async () => {
      const raceResultsData = await fetchDriverRaceResults(params.driverId);
      dispatch({ type: 'GET_DRIVER_RACE_RESULTS', payload: raceResultsData });
    };

    getStandingsData();
    getRaceResultsData();
  }, [dispatch]);

  if (driverStandings.driver === undefined) {
    // return <div>No driver information found</div>;
    return <Spinner />;
  }

  if (!loading) {
    return (
      <div className="container mx-auto mt-6 pb-12">
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/drivers" className="btn btn-ghost">
              Back to Drivers
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="rounded-lg shadow-xl card image-full">
                {/* PHOTO AND NAME */}
                <figure>
                  <DriverPhoto code={driverStandings.driver.code} />
                </figure>
                <div className="card-body justify-end">
                  <h2 className="card-title mb-0">
                    {driverStandings.driver.givenName}{' '}
                    {driverStandings.driver.familyName}
                  </h2>
                  <p>{driverStandings.constructor.name}</p>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl card-title">
                  {driverStandings.driver.givenName}{' '}
                  {driverStandings.driver.familyName}
                  {driverStandings.score.position === '1' && (
                    <div className="ml-2 mr-1 badge badge-error">
                      <FaTrophy className="inline pr-2 text-2xl" />
                      Leader
                    </div>
                  )}
                </h1>

                {/* STATS */}

                <p>Nationality: {driverStandings.driver.nationality}</p>
                <p>Date of Birth: {driverStandings.driver.dateOfBirth}</p>

                {/* WIKIPEDIA LINK */}
                <div className="mt-4 mb-4 card-actions">
                  <a
                    href={driverStandings.driver.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Visit Wikipedia Page
                  </a>
                </div>

                {/* RACE STATS*/}
                <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                  <div className="stat">
                    <div className="stat-title text-md">Position</div>
                    <div className="text-lg stat-value">
                      {driverStandings.score.position}
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-title text-md">Points</div>
                    <div className="text-lg stat-value">
                      {driverStandings.score.points}
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-title text-md">Races Won</div>
                    <div className="text-lg stat-value">
                      {driverStandings.score.wins}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RACELIST IS BROKEN, SO RACEITEM WILL LIVE IN THE DRIVER PAGE FOR NOW */}
          <div>
            <table className="table w-full table-zebra table-auto tableContents">
              <thead>
                <tr>
                  <th></th>
                  <th>Grand Prix</th>
                  <th className="hidden md:table-cell">Date</th>
                  <th>Position</th>
                  <th>PTS</th>
                </tr>
              </thead>
              <tbody>
                {driverRaceResults.map((race) => (
                  <RaceItem key={race.round} race={race} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Driver;
