import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <main>
      <Hero />
      <section>
        <div className='accordion'>
          <h3 className='accordion-text'>Vision</h3>
        </div>
        <div className='accordion'>
          <h3 className='accordion-text'>Agility</h3>
        </div>
        <div className='accordion'>
          <h3 className='accordion-text'>Growth</h3>
        </div>
      </section>
    </main>
  );
};

export default Home;
