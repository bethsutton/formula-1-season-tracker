import { createContext, useState } from 'react';

const F1Context = createContext();

const URL = 'http://ergast.com/api/f1';

export const F1Provider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDrivers = async () => {
    const response = await fetch(`http://ergast.com/api/f1/2021/drivers.json`);

    const data = await response.json();

    setDrivers(data.MRData.DriverTable.Drivers);
    setLoading(false);
  };

  return (
    <F1Context.Provider
      value={{
        drivers,
        loading,
        fetchDrivers,
      }}
    >
      {children}
    </F1Context.Provider>
  );
};

export default F1Context;
