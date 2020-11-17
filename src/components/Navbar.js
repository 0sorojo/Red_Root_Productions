import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/redRootSVGLOGO.svg';
import { FaBars, FaToggleOff, FaToggleOn } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='btn'>
            <FaBars />
          </button>

          <Link to='/'>
            <img src={logo} alt='red root' className='nav-logo' />
          </Link>
          <button className='btn'>
            <FaToggleOn />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
