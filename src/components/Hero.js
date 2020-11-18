import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Web Help for Small Businesses</h1>
          <h4>Take Your Business to Where Your Customers Are</h4>
          <button className='btn'>
            <Link className='btn' to='/contact'>
              Start Now
            </Link>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
