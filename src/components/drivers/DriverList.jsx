import React from 'react';
import { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import DriverItem from './DriverItem';
import F1Context from '../../context/f1/F1Context';

function DriverList() {
  const { drivers, loading, fetchDrivers } = useContext(F1Context);

  useEffect(() => {
    fetchDrivers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {drivers.map((driver) => (
          <DriverItem key={driver.driverId} driver={driver} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default DriverList;
