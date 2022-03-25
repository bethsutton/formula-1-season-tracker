import React from 'react';
import { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import ResultsItem from './ResultsItem';
import F1Context from '../../context/f1/F1Context';

import { fetchResults } from '../../context/f1/F1Actions';

function ResultsList() {
  const { results, loading, dispatch } = useContext(F1Context);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getResultsData = async () => {
      const resultsData = await fetchResults();
      dispatch({ type: 'GET_RESULTS', payload: resultsData });
    };

    getResultsData();
  }, [dispatch]);

  if (!loading) {
    return (
      <div>
        <h1 className="text-5xl font-bold align-middle mb-6">
          2022 RACE RESULTS
        </h1>
        <table className="table w-full table-zebra table-auto tableContents">
          <thead>
            <tr>
              <th>Grand Prix</th>
              <th className="hidden md:table-cell">Date</th>
              <th>Winner</th>
              <th>Car</th>
              <th className="hidden md:table-cell">Laps</th>
            </tr>
          </thead>
          <tbody>
            {results.map((race) => (
              <ResultsItem key={race.round} race={race} />
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default ResultsList;
