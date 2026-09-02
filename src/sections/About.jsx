import { useTranslation } from 'react-i18next';
import { FaUsers, FaLightbulb, FaRocket, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="nosotros"
      className="scroll-mt-24 bg-white/5 border border-white/10 rounded-2xl py-16 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('about.section.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t('about.section.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.section.description')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <FaRocket className="text-volk-green text-xl flex-shrink-0" />
                <span className="text-gray-300">{t('about.section.point1')}</span>
              </div>
              <div className="flex items-center gap-4">
                <FaLightbulb className="text-volk-green text-xl flex-shrink-0" />
                <span className="text-gray-300">{t('about.section.point2')}</span>
              </div>
              <div className="flex items-center gap-4">
                <FaUsers className="text-volk-green text-xl flex-shrink-0" />
                <span className="text-gray-300">{t('about.section.point3')}</span>
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 bg-volk-green hover:bg-white text-black font-semibold rounded-full transition-colors duration-300"
            >
              <span className="mr-2">{t('about.section.button')}</span>
              <FaArrowRight className="text-lg" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-volk-green mb-2">
                {t('about.stats.technologies')}
              </div>
              <div className="text-gray-400 text-sm">
                {t('about.stats.technologiesLabel')}
              </div>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-volk-green mb-2">
                {t('about.stats.experience')}
              </div>
              <div className="text-gray-400 text-sm">
                {t('about.stats.experienceLabel')}
              </div>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-volk-green mb-2">
                {t('about.stats.delivery')}
              </div>
              <div className="text-gray-400 text-sm">
                {t('about.stats.deliveryLabel')}
              </div>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-volk-green mb-2">
                {t('about.stats.innovation')}
              </div>
              <div className="text-gray-400 text-sm">
                {t('about.stats.innovationLabel')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
