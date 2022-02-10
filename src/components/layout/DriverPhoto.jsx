import React from 'react';

function DriverPhoto({ code }) {
  const driverArr = [
    'ALO',
    'BOT',
    'GAS',
    'GIO',
    'HAM',
    'KUB',
    'LAT',
    'LEC',
    'MAZ',
    'NOR',
    'OCO',
    'PER',
    'RAI',
    'RIC',
    'RUS',
    'SAI',
    'MSC',
    'STR',
    'TSU',
    'VER',
    'VET',
  ];

  let image = require(`./assets/driver.png`);

  driverArr.forEach((driver) => {
    if (driver === code) {
      image = require(`./assets/${code}.png`);
    }
  });

  return <img src={image} alt=""></img>;
}

export default DriverPhoto;
