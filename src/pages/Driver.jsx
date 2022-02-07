import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';

import F1Context from '../context/f1/F1Context';
import Spinner from '../components/layout/Spinner';
import driverPhoto from '../components/layout/assets/driver.png';

function Driver() {
  const { fetchDriverStandings, driverStandings, loading } =
    useContext(F1Context);

  const params = useParams();

  // IF THIS BREAKS, ADD ASYNC AWAIT
  useEffect(() => {
    fetchDriverStandings(params.driverId);
    // fetchRaceResults(params.driverId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (driverStandings.driver === undefined) {
    return <div>No driver information found</div>;
  }

  if (!loading) {
    return (
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={driverPhoto} alt="" />
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
              {/* PHOTO AND NAME */}
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
              <p>Position: {driverStandings.score.position}</p>
              <p>Points: {driverStandings.score.points}</p>
              <p>Constructor: {driverStandings.constructor.name}</p>
              <p>Date of Birth: {driverStandings.driver.dateOfBirth}</p>
              <p>Nationality: {driverStandings.driver.nationality}</p>

              {/* WIKIPEDIA LINK */}
              <div className="mt-4 card-actions">
                <a
                  href={driverStandings.driver.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Wikipedia Page
                </a>
              </div>

              {/* YOU NEED TO FIX THIS */}
              {/* RACE STATS*/}
              <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                <div className="stat">
                  <div className="stat-title text-md">Points</div>
                  <div className="text-lg stat-value">10</div>
                </div>
                <div className="stat">
                  <div className="stat-title text-md">Position</div>
                  <div className="text-lg stat-value">1</div>
                </div>
                <div className="stat">
                  <div className="stat-title text-md">Races Won</div>
                  <div className="text-lg stat-value">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RACE 1 */}
        <div className="w-full py-2 mb-2 rounded-lg shadow-md bg-base-100 stats">
          {/* STAT */}
          <div className="stat">
            <div className="stat-title pr-5">Monza</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              Race stats
            </div>
            <div className="stat-figure text-error">Race win</div>
          </div>
          <div className="stat">
            <div className="stat-title pr-5">Monza</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              Race stats
            </div>
            <div className="stat-figure text-error">Race win</div>
          </div>
          <div className="stat">
            <div className="stat-title pr-5">Monza</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              Race stats
            </div>
            <div className="stat-figure text-error">Race win</div>
          </div>
        </div>
        {/* RACE 2 */}
        <div className="w-full py-2 mb-2 rounded-lg shadow-md bg-base-100 stats">
          {/* STAT */}
          <div className="stat">
            <div className="stat-title pr-5">Monza</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              Race stats
            </div>
            <div className="stat-figure text-error">Race win</div>
          </div>
          <div className="stat">
            <div className="stat-title pr-5">Monza</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              Race stats
            </div>
            <div className="stat-figure text-error">Race win</div>
          </div>
          <div className="stat">
            <div className="stat-title pr-5">Monza</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              Race stats
            </div>
            <div className="stat-figure text-error">Race win</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Driver;
