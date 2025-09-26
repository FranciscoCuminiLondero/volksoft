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
        <h1 
          className="text-4xl font-bold mb-4 text-gradient"
          style={{
            background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {t('services.title')}
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          {t('services.subtitle')}
        </p>
      </section>

      {/* Pricing Cards */}
      <section 
        className="relative rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(33, 77, 88, 0.3) 0%, rgba(46, 160, 165, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(46, 160, 165, 0.3)'
        }}
      >
        <div 
          className="absolute inset-0 rounded-2xl backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(5, 22, 38, 0.2)' }}
        ></div>
        <h2 className="text-3xl font-bold text-white text-center mb-12 relative">
          {t('services.pricing.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Web Estática */}
          <div 
            className="group relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.8) 0%, rgba(33, 77, 88, 0.6) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(1, 253, 244, 0.1) 0%, rgba(46, 160, 165, 0.1) 100%)' }}
            ></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('services.pricing.static.title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('services.pricing.static.description')}
              </p>
              <div 
                className="text-3xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {/* {t('services.pricing.static.price')} */}
              </div>
              <Link
                to="/contact"
                className="btn-base btn-primary w-full text-center transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                  boxShadow: 'var(--shadow-cyan)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--btn-primary-hover)';
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--btn-primary-bg)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
              >
                {t('button.contact')}
              </Link>
            </div>
          </div>

          {/* E-commerce with featured styling */}
          <div 
            className="group relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 scale-105 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.8) 0%, rgba(33, 77, 88, 0.6) 100%)',
              border: '2px solid var(--color-cyan-bright)'
            }}
          >
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(1, 253, 244, 0.15) 0%, rgba(46, 160, 165, 0.15) 100%)' }}
            ></div>
            <div 
              className="absolute -top-4 right-4 text-white text-sm px-4 py-1 rounded-full"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                color: 'var(--color-navy-deep)'
              }}
            >
              {t('services.pricing.ecommerce.badge')}
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('services.pricing.ecommerce.title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('services.pricing.ecommerce.description')}
              </p>
              <div 
                className="text-3xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {/* {t('services.pricing.ecommerce.price')} */}
              </div>
              <Link
                to="/contact"
                className="btn-base btn-primary w-full text-center transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                  boxShadow: 'var(--shadow-cyan)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--btn-primary-hover)';
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--btn-primary-bg)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
              >
                {t('button.contact')}
              </Link>
            </div>
          </div>

          {/* Páginas Personalizadas */}
          <div 
            className="group relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.8) 0%, rgba(33, 77, 88, 0.6) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(1, 253, 244, 0.1) 0%, rgba(46, 160, 165, 0.1) 100%)' }}
            ></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('services.pricing.custom.title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('services.pricing.custom.description')}
              </p>
              <div 
                className="text-3xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {/* {t('services.pricing.custom.price')} */}
              </div>
              <Link
                to="/contact"
                className="btn-base btn-primary w-full text-center transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                  boxShadow: 'var(--shadow-cyan)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--btn-primary-hover)';
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--btn-primary-bg)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
              >
                {t('button.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section 
        className="relative rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(33, 77, 88, 0.2) 0%, rgba(46, 160, 165, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(46, 160, 165, 0.3)'
        }}
      >
        <div 
          className="absolute inset-0 rounded-2xl backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(5, 22, 38, 0.2)' }}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Web Development */}
          <div 
            className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.6) 0%, rgba(33, 77, 88, 0.4) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <FaGlobe 
              className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" 
              style={{ color: 'var(--color-teal-medium)' }}
            />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.cards.web-development.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('services.cards.web-development.description')}
            </p>
          </div>

          {/* Landing Pages */}
          <div 
            className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.6) 0%, rgba(33, 77, 88, 0.4) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <FaFileAlt 
              className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" 
              style={{ color: 'var(--color-cyan-bright)' }}
            />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.cards.landing-page.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('services.cards.landing-page.description')}
            </p>
          </div>

          {/* Portfolio */}
          <div 
            className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.6) 0%, rgba(33, 77, 88, 0.4) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <FaRegUser 
              className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" 
              style={{ color: 'var(--color-teal-dark)' }}
            />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.cards.portfolio.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('services.cards.portfolio.description')}
            </p>
          </div>

          {/* Blogs */}
          <div 
            className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.6) 0%, rgba(33, 77, 88, 0.4) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <FaBlog 
              className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" 
              style={{ color: 'var(--color-error)' }}
            />
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.cards.blogs.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('services.cards.blogs.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Icons Band */}
      <div 
        className="relative w-full overflow-hidden rounded-2xl py-8 px-4 transform hover:scale-[1.02] transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(33, 77, 88, 0.2) 0%, rgba(46, 160, 165, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(46, 160, 165, 0.3)'
        }}
      >
        <div 
          className="absolute inset-0 rounded-2xl backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(5, 22, 38, 0.2)' }}
        ></div>
        <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
          {t('services.technologies.title')}
        </h2>
        <TechCarousel />
      </div>

      {/* Proceso de Trabajo */}
      <section 
        className="relative rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(33, 77, 88, 0.2) 0%, rgba(46, 160, 165, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(46, 160, 165, 0.3)'
        }}
      >
        <div 
          className="absolute inset-0 rounded-2xl backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(5, 22, 38, 0.2)' }}
        ></div>
        <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
          {t('services.process.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div 
            className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.6) 0%, rgba(33, 77, 88, 0.4) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <div className="relative flex justify-center">
              <FaPhone 
                className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" 
                style={{ color: 'var(--color-cyan-bright)' }}
              />
              <div 
                className="absolute -top-2 -right-2 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm"
                style={{ backgroundColor: 'var(--color-cyan-bright)', color: 'var(--color-navy-deep)' }}
              >
                1
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              {t('services.process.step1.title')}
            </h3>
            <p className="text-gray-300 text-sm text-center">
              {t('services.process.step1.description')}
            </p>
          </div>

          <div 
            className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.6) 0%, rgba(33, 77, 88, 0.4) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <div className="relative flex justify-center">
              <FaCode 
                className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" 
                style={{ color: 'var(--color-teal-medium)' }}
              />
              <div 
                className="absolute -top-2 -right-2 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm"
                style={{ backgroundColor: 'var(--color-teal-medium)', color: 'var(--color-navy-deep)' }}
              >
                2
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              {t('services.process.step2.title')}
            </h3>
            <p className="text-gray-300 text-sm text-center">
              {t('services.process.step2.description')}
            </p>
          </div>

          <div 
            className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 card-hover"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 38, 0.6) 0%, rgba(33, 77, 88, 0.4) 100%)',
              border: '1px solid rgba(46, 160, 165, 0.3)'
            }}
          >
            <div className="relative flex justify-center">
              <FaCheckCircle 
                className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" 
                style={{ color: 'var(--color-success)' }}
              />
              <div 
                className="absolute -top-2 -right-2 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm"
                style={{ backgroundColor: 'var(--color-success)', color: 'var(--color-white)' }}
              >
                3
              </div>
            </div>
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