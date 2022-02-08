import React from 'react';
import { PropTypes } from 'prop-types';

function RaceItem({ race }) {
  return (
    <tr>
      <th>{race.round}</th>
      <td>{race.raceName}</td>
      <td className="hidden md:table-cell">{race.date}</td>
      <td>{race.Results[0].position}</td>
      <td>{race.Results[0].points}</td>
    </tr>
  );
}

export default RaceItem;
