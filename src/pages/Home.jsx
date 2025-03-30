import React from 'react';
import {
  FaAngleDown,
  FaGlobe,
  FaFileAlt,
  FaRegUser,
  FaCalendar,
  FaBlog,
  FaUserAlt,
  FaElementor,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Section 0: Welcome Section  */}
      <section className="container my-20 mx-auto bg-transparent z-10">
        <div className="container mx-auto px-4">
          {/* Card Container */}
          <div className="max-w-4xl mx-auto bg-black/30 rounded-2xl shadow-xl p-8 text-center">
            {/* Title */}
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-300 to-gray-100 text-6xl sm:text-5xl font-bold tracking-wide mb-6 p-2">
              {t('home.title')}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-6">
              {t('home.description')}
            </p>

            {/* Call-to-Action Button with Icon */}
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition duration-300 cursor-pointer shadow-2xl"
            >
              {t('button.get-started')}
              <FaAngleDown className="ml-2 font-black space-x-1 text-l" />
            </a>
          </div>
        </div>
      </section>
      {/* Section 1: Services */}
      <section className="container my-20 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          {/* Description */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            {t('services.subtitle')}
          </p>
          {/* List of Services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
            {/* Web Development */}
            <div className="card group relative flex flex-col items-center space-y-2 cursor-pointer">
              <FaGlobe className="text-purple-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <div className="relative w-full">
                <a
                  href="#web-development"
                  className="group flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <span className="text-gray-300 text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                    {t('services.cards.web-development.title')}
                  </span>
                  <p className="absolute inset-0 text-white text-sm bg-opacity-60 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t('services.cards.web-development.description')}
                  </p>
                </a>
              </div>
            </div>

            {/* Landing Pages */}
            <div className="card group relative flex flex-col items-center space-y-2 cursor-pointer">
              <FaFileAlt className="text-blue-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <div className="relative w-full">
                <a
                  href="#landing-page"
                  className="group flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <span className="text-gray-300 text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                    {t('services.cards.landing-page.title')}
                  </span>
                  <p className="absolute inset-0 text-white text-sm bg-opacity-60 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t('services.cards.landing-page.description')}
                  </p>
                </a>
              </div>
            </div>

            {/* Portfolios */}
            <div className="card group relative flex flex-col items-center space-y-2 cursor-pointer">
              <FaRegUser className="text-green-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <div className="relative w-full">
                <a
                  href="#portfolio"
                  className="group flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <span className="text-gray-300 text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                    {t('services.cards.portfolio.title')}
                  </span>
                  <p className="absolute inset-0 text-white text-sm bg-opacity-60 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t('services.cards.portfolio.description')}
                  </p>
                </a>
              </div>
            </div>

            {/* Blogs */}
            <div className="card group relative flex flex-col items-center space-y-2 cursor-pointer">
              <FaBlog className="text-red-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <div className="relative w-full">
                <a
                  href="#blogs"
                  className="group flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <span className="text-gray-300 text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                    {t('services.cards.blogs.title')}
                  </span>
                  <p className="absolute inset-0 text-white text-sm bg-opacity-60 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t('services.cards.blogs.description')}
                  </p>
                </a>
              </div>
            </div>
            {/* One Pages */}
            <div className="card group relative flex flex-col items-center space-y-2 cursor-pointer">
              <FaElementor className="text-yellow-500 text-3xl transition-transform duration-300 group-hover:scale-110 mb-4" />
              <div className="relative w-full">
                <a
                  href="#one-pages"
                  className="group flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <span className="text-gray-300 text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                    {t('services.cards.one-pages.title')}
                  </span>
                  <p className="absolute inset-0 text-white text-sm bg-opacity-60 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t('services.cards.one-pages.description')}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Portfolio */}
      <section className="container my-23 mx-auto">
        <div className="max-w-6xl mx-auto mb-5">
          <div className="flex items-center justify-between pb-2">
            <h1 className="text-4xl font-bold">{t('portfolio.title')}</h1>
            <p className="text-2xl font-extralight">
              {t('portfolio.subtitle')}
            </p>
          </div>
          <p className="">{t('portfolio.description')}</p>
        </div>
        {/* Card Container */}
        <div className="grid grid-cols-5 grid-rows-4 gap-5 max-h-200 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group relative bg-black/20 rounded-2xl shadow-xl col-span-3 row-span-2">
            <img
              src="../../public/assets/images/portfolio-1.webp"
              alt=""
              className="rounded-xl w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-lg font-bold mb-2">
                {t('portfolio.cards.web-ejemplo.title')}
              </h3>
              <p className="text-sm text-center mb-4">
                {t('portfolio.cards.web-ejemplo.description')}
              </p>
              <a
                src="#"
                className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-600  transition-colors duration-500 cursor-pointer"
              >
                {t('button.look-work')}
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group relative bg-black/20 rounded-2xl shadow-xl col-span-2 row-span-2 col-start-4">
            <img
              src="../../public/assets/images/portfolio-1.webp"
              alt=""
              className="rounded-xl w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-lg font-bold mb-2">
                {t('portfolio.cards.web-ejemplo.title')}
              </h3>
              <p className="text-sm text-center mb-4">
                {t('portfolio.cards.web-ejemplo.description')}
              </p>
              <a
                src="#"
                className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-600  transition-colors duration-500 cursor-pointer"
              >
                {t('button.look-work')}
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group relative bg-black/20 rounded-2xl shadow-xl col-span-2 row-span-2 row-start-3">
            <img
              src="../../public/assets/images/portfolio-1.webp"
              alt=""
              className="rounded-xl w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-lg font-bold mb-2">
                {t('portfolio.cards.web-ejemplo.title')}
              </h3>
              <p className="text-sm text-center mb-4">
                {t('portfolio.cards.web-ejemplo.description')}
              </p>
              <a
                src="#"
                className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-600  transition-colors duration-500 cursor-pointer"
              >
                {t('button.look-work')}
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group relative bg-black/20 rounded-2xl shadow-xl col-span-3 row-span-2 col-start-3 row-start-3">
            <img
              src="../../public/assets/images/portfolio-1.webp"
              alt=""
              className="rounded-xl w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-lg font-bold mb-2">
                {t('portfolio.cards.web-ejemplo.title')}
              </h3>
              <p className="text-sm text-center mb-4">
                {t('portfolio.cards.web-ejemplo.description')}
              </p>
              <a
                src="#"
                className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-600  transition-colors duration-500 cursor-pointer"
              >
                {t('button.look-work')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
