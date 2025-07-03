import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialSidebar from '../components/SocialSidebar';
import PageTransition from '../components/PageTransition';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative">
        <SocialSidebar />
        <div className="container mx-auto px-4 max-w-7xl">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
