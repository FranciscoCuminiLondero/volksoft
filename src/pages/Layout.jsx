import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="z-50" />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer className="sticky bottom-0" />
    </div>
  );
};

export default Layout;
