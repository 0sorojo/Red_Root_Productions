import React from 'react';
import logo from '../images/react-native-firebase-1.svg';
import RR from '../images/react-router.png';
import netlify from '../images/netlify-logo.png';
import git from '../images/Git-Icon.png';

const AboutThisSite = () => {
  return (
    <main className='about-container'>
      <div className='logo-container'>
        <img src={logo} alt='FiReStack' className='logo-img' />
      </div>
      <h3>Built Using the FiRe Stack</h3>
      <div className='small-logo-container'>
        <img src={netlify} alt='Netlify' className='small-logo' />
        <img src={RR} alt='React-Router' className='small-logo' />
        <img src={git} alt='Git' className='small-logo' />
      </div>
    </main>
  );
};

export default AboutThisSite;
