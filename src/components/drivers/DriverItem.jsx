import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function DriverItem({ driver: { givenName, familyName, code } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <h2 className="card-title">
          {givenName} {familyName}
        </h2>
        <Link
          className="text-base-content text-opacity-40"
          to={`/driver/${code}`}
        >
          View Stats
        </Link>
      </div>
    </div>
  );
}

DriverItem.propTypes = {
  driver: PropTypes.object.isRequired,
};

export default DriverItem;
