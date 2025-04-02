import { useTranslation } from 'react-i18next';

import {
  FaGlobe,
  FaFileAlt,
  FaRegUser,
  FaBlog,
  FaElementor,
} from 'react-icons/fa';

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="container max-w-6xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-700/20 opacity-bg-70 rounded-2xl py-30 px-10">
      <div className="text-center">
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
  );
};

export default Services;
