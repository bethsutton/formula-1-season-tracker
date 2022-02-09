import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function ResultsItem({ race }) {
  return (
    <tr>
      <td>{race.raceName}</td>
      <td className="hidden md:table-cell">{race.date}</td>
      <td className="hidden md:table-cell">
        {race.Results[0].Driver.familyName}
      </td>
      <td className="md:hidden">{race.Results[0].Driver.code}</td>
      <td>{race.Results[0].Constructor.name}</td>
      <td className="hidden md:table-cell">{race.Results[0].laps}</td>
    </tr>
  );
}

export default ResultsItem;
