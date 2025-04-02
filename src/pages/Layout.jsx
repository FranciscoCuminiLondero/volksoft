import React from 'react';
// Sections
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Calendar from '../sections/Calendar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen gap-14">
      {/* Header */}
      <Header />
      {/* Section 0: Hero  */}
      <Hero />
      {/* Section 1: Services */}
      <Services />
      {/* Section 2: Portfolio */}
      <Portfolio />
      {/* Section 3: Calendar */}
      <Calendar />
      {/*Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
