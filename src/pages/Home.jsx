import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Calendar from '../sections/Calendar';

const Home = () => {
  return (
    <div className="flex flex-col gap-14">
      <Hero />
      <Services />
      <About />
      {/* <Portfolio /> */}
      <Calendar />
    </div>
  );
};

export default Home;
