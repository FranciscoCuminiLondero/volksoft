import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  FaGlobe,
  FaFileAlt,
  FaRegUser,
  FaBlog,
  FaElementor,
  FaArrowRight,
} from 'react-icons/fa';

const Services = () => {
  const { t } = useTranslation();
  return (
    <section 
      className="rounded-2xl py-30 px-10 transform hover:scale-[1.02] transition-all duration-500"
      style={{
        background: 'linear-gradient(135deg, rgba(33, 77, 88, 0.3) 0%, rgba(46, 160, 165, 0.2) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(46, 160, 165, 0.3)'
      }}
    >
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
            <FaGlobe className="transition-transform duration-300 group-hover:scale-110 mb-4 text-3xl" 
                     style={{ color: 'var(--color-teal-medium)' }} />
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
            <FaFileAlt className="transition-transform duration-300 group-hover:scale-110 mb-4 text-3xl" 
                       style={{ color: 'var(--color-cyan-bright)' }} />
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
            <FaRegUser className="transition-transform duration-300 group-hover:scale-110 mb-4 text-3xl" 
                       style={{ color: 'var(--color-teal-dark)' }} />
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
            <FaBlog className="transition-transform duration-300 group-hover:scale-110 mb-4 text-3xl" 
                    style={{ color: 'var(--color-error)' }} />
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
            <FaElementor className="transition-transform duration-300 group-hover:scale-110 mb-4 text-3xl" 
                         style={{ color: 'var(--color-warning)' }} />
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
              </a>{' '}
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-24 w-full sm:w-3/4 lg:w-1/2 mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">
              {t('services.cta.description')}
            </p>
            <Link
              to="/services"
              className="btn-base btn-primary transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)',
                boxShadow: 'var(--shadow-cyan)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--btn-primary-hover)';
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = 'var(--shadow-cyan)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--btn-primary-bg)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'var(--shadow-lg)';
              }}
            >
              <span className="mr-2">{t('services.cta.button')}</span>
              <FaArrowRight className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
