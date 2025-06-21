import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaUsers, FaLightbulb, FaRocket, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-r from-blue-600/10 to-purple-700/10 rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500">
      <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('about.section.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t('about.section.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.section.description')}
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <FaRocket className="text-purple-500 text-xl flex-shrink-0" />
                <span className="text-gray-300">
                  {t('about.section.point1')}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaLightbulb className="text-blue-500 text-xl flex-shrink-0" />
                <span className="text-gray-300">
                  {t('about.section.point2')}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaUsers className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-300">
                  {t('about.section.point3')}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform"
            >
              <span className="mr-2">{t('about.section.button')}</span>
              <FaArrowRight className="text-lg" />
            </Link>
          </div>{' '}
          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {t('about.stats.technologies')}
              </div>
              <div className="text-gray-300 text-sm">
                {t('about.stats.technologiesLabel')}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {t('about.stats.experience')}
              </div>
              <div className="text-gray-300 text-sm">
                {t('about.stats.experienceLabel')}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {t('about.stats.delivery')}
              </div>
              <div className="text-gray-300 text-sm">
                {t('about.stats.deliveryLabel')}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {t('about.stats.innovation')}
              </div>
              <div className="text-gray-300 text-sm">
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
