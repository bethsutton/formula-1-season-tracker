import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function DriverItem({
  driver: { permanentNumber, givenName, familyName, driverId },
}) {
  return (
    <Link
      className="text-base-content text-opacity-40"
      to={`/driver/${driverId}`}
    >
      <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
          <p className="justify-self-start">
            <strong className="text-red-700 text-xl">{permanentNumber} </strong>
          </p>
          <h2 className="card-title">
            {givenName} {familyName}
          </h2>
        </div>
      </div>
    </Link>
  );
}

DriverItem.propTypes = {
  driver: PropTypes.object.isRequired,
};

export default DriverItem;
