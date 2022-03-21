import React from 'react';
import Slider from '../components/layout/Slider';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Slider />
      <br />
      <br />
      <div className="container mx-auto mt-6 pb-12">
        <div className="w-full mx-auto lg:w-10/12">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 md:gap-20">
            <Link to="/drivers" className="btn px-6 m-2 text-lg rounded-lg">
              2022 Driver Lineup
            </Link>
            <Link to="/results" className="btn px-6 m-2 text-lg rounded-lg">
              2022 Race Results
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
