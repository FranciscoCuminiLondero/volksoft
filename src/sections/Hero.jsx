import { useTranslation } from 'react-i18next';
import { FaAngleDown } from 'react-icons/fa';
import TechCarousel from '../components/TechCarousel';
import Logo from '../components/Logo';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="inicio"
      className="scroll-mt-24 min-h-[80vh] flex flex-col items-center justify-center w-full"
    >
      <div className="w-full flex flex-col items-center text-center gap-8">
        <Logo className="text-3xl sm:text-4xl" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
          {t('home.title')}
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          {t('home.description')}
        </p>
        <a
          href="#servicios"
          className="inline-flex items-center px-8 py-4 bg-volk-green hover:bg-white text-black font-semibold rounded-full transition-colors duration-300 cursor-pointer text-base sm:text-lg"
        >
          <span>{t('button.get-started')}</span>
          <FaAngleDown className="ml-2 text-lg" />
        </a>

        <div className="w-full overflow-hidden mt-8">
          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
