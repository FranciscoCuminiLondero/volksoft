import { useTranslation } from 'react-i18next';
import {
  FaGlobe,
  FaFileAlt,
  FaRegUser,
  FaBlog,
  FaElementor,
  FaArrowRight,
} from 'react-icons/fa';

const SERVICE_CARDS = [
  { Icon: FaGlobe, key: 'web-development' },
  { Icon: FaFileAlt, key: 'landing-page' },
  { Icon: FaRegUser, key: 'portfolio' },
  { Icon: FaBlog, key: 'blogs' },
  { Icon: FaElementor, key: 'one-pages' },
];

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="servicios" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('services.title')}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t('services.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {SERVICE_CARDS.map(({ Icon, key }) => (
          <div
            key={key}
            className="flex flex-col items-center text-center gap-3 bg-white/5 border border-white/10 hover:border-volk-green/60 rounded-2xl p-6 transition-colors"
          >
            <Icon className="text-volk-green text-3xl" />
            <span className="text-white text-sm font-semibold">
              {t(`services.cards.${key}.title`)}
            </span>
            <p className="text-gray-400 text-sm">
              {t(`services.cards.${key}.description`)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          {t('services.cta.title')}
        </h3>
        <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto">
          {t('services.cta.description')}
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center px-8 py-4 bg-volk-green hover:bg-white text-black font-semibold rounded-full transition-colors duration-300"
        >
          <span className="mr-2">{t('services.cta.button')}</span>
          <FaArrowRight className="text-lg" />
        </a>
      </div>
    </section>
  );
};

export default Services;
