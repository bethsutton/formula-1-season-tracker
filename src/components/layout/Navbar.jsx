import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className="navbar shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex flex-row">
        <div className="flex-none hidden md:inline px-2 mx-2">
          <FaTrophy className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/results" className="btn btn-ghost btn-sm rounded-btn">
              Results
            </Link>
            <Link to="/drivers" className="btn btn-ghost btn-sm rounded-btn">
              Drivers
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Formula 1 - 2022 Season Tracker',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
