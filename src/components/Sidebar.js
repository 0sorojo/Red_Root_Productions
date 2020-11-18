import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from '../linkdata';
import logo from '../images/redRootSVGLOGO.svg';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='red root' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className='link'>
              <Link to={url} onClick={closeSidebar}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                onClick={closeSidebar}
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
