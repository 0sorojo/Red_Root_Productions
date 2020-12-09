import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/redRootSVGLOGO.svg';
import { FaBars, FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { openSidebar, isSidebarOpen, theme, setTheme } = useGlobalContext();

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  return (
    <nav className={`${isSidebarOpen ? 'nav hide-nav' : 'nav'}`}>
      <div className='nav-center'>
        <div className='nav-header'>
          <button
            className='btn bounce'
            onClick={openSidebar}
            title='Click to See Menu'
          >
            <FaBars />
          </button>

          <Link to='/'>
            <img
              src={logo}
              alt='red root'
              className='nav-logo'
              title='click to go home'
            />
          </Link>
          <button
            className='btn toggle'
            onClick={toggleTheme}
            title='click to toggle theme'
          >
            {theme === 'light-theme' ? <FaToggleOn /> : <FaToggleOff />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
