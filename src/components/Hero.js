import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import light from '../images/sample-R2-svgHeroYellowv2.svg';
import dark from '../images/sample-R2-svgHeroBluev1.svg';

const Hero = () => {
  const { theme } = useGlobalContext();
  const [themeStyle, setThemeStyle] = useState({});

  const heroStyle = useCallback(() => {
    if (theme === 'light-theme') {
      setThemeStyle({
        // '--hero': `url(${light})`,
        // position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        background: `url(${light}) center center`,
        // backgroundOrigin: 'inherit',
        // backgroundClip: 'content-box',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // zIndex: '-1',
        transition: 'opacity 250ms',
      });
    }
    if (theme === 'dark-theme') {
      setThemeStyle({
        // '--hero': `url(${dark})`,
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        background: `url(${dark}) center center / cover no-repeat`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // zIndex: '-1',
        transition: 'opacity 250ms',
      });
    }
  }, [theme]);

  useEffect(() => {
    heroStyle();
  }, [theme, heroStyle]);

  return (
    <section className='hero' style={themeStyle}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>A Full-Stack Engineer</h1>
          <h3>with Empathy, Skills, and Willingness to Learn</h3>
          <button className='btn'>
            <Link className='btn' to='/contact'>
              Contact Me Now
            </Link>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
