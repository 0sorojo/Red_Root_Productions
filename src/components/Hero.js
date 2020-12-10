import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import light from '../images/sample-R2-svgHeroYellowv2.svg';
import dark from '../images/sample-R2-svgHeroBluev1.svg';

const Hero = () => {
  const { theme } = useGlobalContext();
  const [themeStyle, setThemeStyle] = useState({});

  const heroStyle = () => {
    if (theme === 'light-theme') {
      setThemeStyle({
        background: `url(${light}) center center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      });
    }
    if (theme === 'dark-theme') {
      setThemeStyle({
        background: `url(${dark}) center center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      });
    }
    return themeStyle;
  };

  useEffect(() => {
    heroStyle();
    console.log('i work');
  }, [theme]);

  return (
    <section className='hero' style={themeStyle}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>A Full-Stack Engineer</h1>
          <h3>with Empathy, Skills, and Willingness to Learn</h3>
          <button className='btn'>
            <Link className='btn' to='/contact'>
              Contact Now
            </Link>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
