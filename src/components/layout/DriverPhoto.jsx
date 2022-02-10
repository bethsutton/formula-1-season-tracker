import React from 'react';

function DriverPhoto({ code }) {
  const driverArr = ['VER', 'HAM'];

  let image = require(`./assets/driver.png`);

  driverArr.forEach((driver) => {
    if (driver === code) {
      image = require(`./assets/${code}.jpg`);
    }
  });

  return <img src={image} alt=""></img>;
}

export default DriverPhoto;
