import React from 'react';
import { links, social } from '../linkdata';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-links'>
        {links.map((link) => {
          const { id, url, icon } = link;
          return (
            <div key={id} className='f-links'>
              <Link to={url}>{icon}</Link>
            </div>
          );
        })}
      </div>
      <div className='footer-social'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <div key={id} className='f-links'>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                {icon}
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
