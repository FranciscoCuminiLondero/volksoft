import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import TechCarousel from '../components/TechCarousel';
import Logo from '../../public/assets/logotipo-volksoft-light.png';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-transparent min-h-screen flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Logo y contenido principal */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8 lg:mb-16">
          {/* Contenido de texto */}
          <div className="w-full lg:flex-1 max-w-full lg:max-w-2xl order-2 lg:order-1">
            <div className="text-center lg:text-left px-4 lg:px-0">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-gray-400 via-gray-200 to-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                {t('home.title')}
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed text-center lg:text-left max-w-none">
                {t('home.description')}
              </p>              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform text-base sm:text-lg"
                >
                  <span>{t('button.get-started')}</span>
                  <FaAngleDown className="ml-2 sm:ml-3 text-lg sm:text-xl" />
                </Link>
              </div>
            </div>
          </div>
          {/* Logo Container */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative group cursor-pointer">
              <img
                src={Logo}
                alt="Volksoft Logo"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain drop-shadow-2xl transition-all duration-300 hover:scale-110 transform"
              />
              {/* Efecto de resplandor hover */}
              <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Tech Icons Band */}
        <div className="w-full overflow-hidden">
          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
