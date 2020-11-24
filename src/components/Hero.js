import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
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
