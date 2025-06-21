import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  FaGlobe,
  FaFileAlt,
  FaRegUser,
  FaBlog,
  FaCode,
  FaPhone,
  FaCheckCircle,
} from 'react-icons/fa';
import TechCarousel from '../components/TechCarousel';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-14 p-8 relative">
      {/* Hero Section with improved styling */}
      <section className="text-center mb-12 relative transform hover:scale-105 transition-all duration-500">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
          {t('services.title')}
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          {t('services.subtitle')}
        </p>
      </section>

      {/* Pricing Cards with hexagonal elements */}
      <section className="relative bg-gradient-to-r from-blue-600/10 to-purple-700/10 rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500">
        <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>{' '}
        <h2 className="text-3xl font-bold text-white text-center mb-12 relative">
          {t('services.pricing.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Web Estática */}
          <div className="group relative bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>{' '}
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('services.pricing.static.title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('services.pricing.static.description')}
              </p>{' '}
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                {t('services.pricing.static.price')}
              </div>
              <Link
                to="/contact"
                className="group-hover:scale-105 inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full text-center transform"
              >
                {t('button.contact')}
              </Link>
            </div>
          </div>

          {/* E-commerce with featured styling */}
          <div className="group relative bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2 scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>{' '}
            <div className="absolute -top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm px-4 py-1 rounded-full">
              {t('services.pricing.ecommerce.badge')}
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('services.pricing.ecommerce.title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('services.pricing.ecommerce.description')}
              </p>{' '}
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                {t('services.pricing.ecommerce.price')}
              </div>
              <Link
                to="/contact"
                className="group-hover:scale-105 inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full text-center transform"
              >
                {t('button.contact')}
              </Link>
            </div>
          </div>

          {/* Páginas Personalizadas */}
          <div className="group relative bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>{' '}
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('services.pricing.custom.title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('services.pricing.custom.description')}
              </p>{' '}
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                {t('services.pricing.custom.price')}
              </div>
              <Link
                to="/contact"
                className="group-hover:scale-105 inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full text-center transform"
              >
                {t('button.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid with improved cards */}
      <section className="relative bg-gradient-to-r from-blue-600/10 to-purple-700/10 rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500">
        <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Web Development */}
          <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <FaGlobe className="text-purple-500 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.cards.web-development.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('services.cards.web-development.description')}
            </p>
          </div>

          {/* Landing Pages */}
          <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <FaFileAlt className="text-blue-500 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.cards.landing-page.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('services.cards.landing-page.description')}
            </p>
          </div>

          {/* Portfolio */}
          <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <FaRegUser className="text-green-500 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.cards.portfolio.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('services.cards.portfolio.description')}
            </p>
          </div>

          {/* Blogs */}
          <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <FaBlog className="text-red-500 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.cards.blogs.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('services.cards.blogs.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Icons Band with improved styling */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600/10 to-purple-700/10 rounded-2xl py-8 px-4 transform hover:scale-[1.02] transition-all duration-500">
        <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>{' '}
        <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
          {t('services.technologies.title')}
        </h2>
        <TechCarousel />
      </div>

      {/* Proceso de Trabajo with improved design */}
      <section className="relative bg-gradient-to-r from-blue-600/10 to-purple-700/10 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-500">
        <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>{' '}
        <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
          {t('services.process.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative flex justify-center">
              <FaPhone className="text-4xl text-purple-500 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-2 -right-2 bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">
                1
              </div>
            </div>{' '}
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              {t('services.process.step1.title')}
            </h3>
            <p className="text-gray-300 text-sm text-center">
              {t('services.process.step1.description')}
            </p>
          </div>

          <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative flex justify-center">
              <FaCode className="text-4xl text-blue-500 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">
                2
              </div>
            </div>{' '}
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              {t('services.process.step2.title')}
            </h3>
            <p className="text-gray-300 text-sm text-center">
              {t('services.process.step2.description')}
            </p>
          </div>

          <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative flex justify-center">
              <FaCheckCircle className="text-4xl text-green-500 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-2 -right-2 bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">
                3
              </div>
            </div>{' '}
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              {t('services.process.step3.title')}
            </h3>
            <p className="text-gray-300 text-sm text-center">
              {t('services.process.step3.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
