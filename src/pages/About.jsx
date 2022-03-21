import React from 'react';

function About() {
  return (
    <div className="container mx-auto mt-12 pb-12">
      <h1 className="text-6xl mb-4">Formula 1 Season Tracker</h1>
      <p className="mb-4 text-2xl">
        A React app to keep track of statistics and data from the Formula 1 2022
        season.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-black">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        By <span className="text-black">Beth Sutton and Luke Oxner</span>
      </p>
    </div>
  );
}

export default About;
