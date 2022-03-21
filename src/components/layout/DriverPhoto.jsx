import React from 'react';

function DriverPhoto({ code }) {
  const driverArr = [
    'ALB',
    'ALO',
    'BOT',
    'GAS',
    'GIO',
    'HAM',
    'HUL',
    'LAT',
    'LEC',
    'MAG',
    'MSC',
    'NOR',
    'OCO',
    'PER',
    'RIC',
    'RUS',
    'SAI',
    'STR',
    'TSU',
    'VER',
    'VET',
    'ZHO',
  ];

  let image = require(`./assets/driver-photo/driver.jpeg`);

  driverArr.forEach((driver) => {
    if (driver === code) {
      image = require(`./assets/driver-photo/${code}.jpeg`);
    }
  });

  return <img src={image} alt=""></img>;
}

export default DriverPhoto;
