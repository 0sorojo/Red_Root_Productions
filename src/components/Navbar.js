import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/redRootSVGLOGO.svg';
import { FaBars, FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();

  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={`${isSidebarOpen ? 'nav hide-nav' : 'nav'}`}>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='btn bounce' onClick={openSidebar}>
            <FaBars />
          </button>

          <Link to='/'>
            <img src={logo} alt='red root' className='nav-logo' />
          </Link>
          <button className='btn toggle' onClick={toggleTheme}>
            {theme === 'light-theme' ? <FaToggleOn /> : <FaToggleOff />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
