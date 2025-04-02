import { useTranslation } from 'react-i18next';
import { FaAngleDown } from 'react-icons/fa';
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-transparent z-10 h-full">
      {/* Card Container */}
      <div className="max-w-4xl mx-auto bg-black/30 rounded-2xl shadow-xl p-8 text-center">
        {/* Title */}
        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-300 to-gray-100 text-6xl sm:text-5xl font-bold tracking-wide mb-6 p-2">
          {t('home.title')}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-6">{t('home.description')}</p>

        {/* Call-to-Action Button with Icon */}
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition duration-300 cursor-pointer shadow-2xl"
        >
          {t('button.get-started')}
          <FaAngleDown className="ml-2 font-black space-x-1 text-l" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
