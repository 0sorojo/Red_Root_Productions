import React, { useState } from 'react';
import Hero from '../components/Hero';
import data from '../accordionData';
import AccordionInfo from '../components/AccordionInfo';
import BlogList from '../components/BlogList';

const Home = () => {
  const [accordion, setAccordion] = useState(data);

  return (
    <main>
      <Hero />
      <section>
        {accordion.map((item) => {
          return <AccordionInfo key={item.id} {...item}></AccordionInfo>;
        })}
      </section>
      <BlogList />
    </main>
  );
};

export default Home;
