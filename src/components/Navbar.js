import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/redRootSVGLOGO.svg';
import { FaBars, FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();

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
          <button className='btn'>
            <FaToggleOn />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
