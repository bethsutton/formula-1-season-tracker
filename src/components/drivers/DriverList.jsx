import React from 'react';
import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';

function DriverList() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    const response = await fetch(`http://ergast.com/api/f1/2021/drivers.json`);

    const data = await response.json();

    setDrivers(data.MRData.DriverTable.Drivers);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {drivers.map((driver) => (
          <h3 key={driver.driverId}>
            {driver.givenName} {driver.familyName}
          </h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default DriverList;
