import { useTranslation } from 'react-i18next';
import {
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaCogs,
  FaClock,
  FaCheckCircle,
  FaInfinity,
  FaCode,
} from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-14 p-8">
      {/* Hero Section */}
      <section className="text-center mb-12 relative transform hover:scale-105 transition-all duration-500">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
          {t('about.title')}
        </h1>
        <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
          {t('about.subtitle')}
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Mission */}
        <div className="group bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <FaRocket className="text-purple-500 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('about.mission.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="group bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <FaLightbulb className="text-blue-500 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('about.vision.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.vision.description')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="group bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <FaHeart className="text-red-500 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('about.values.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.values.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative bg-gradient-to-r from-blue-600/10 to-purple-700/10 rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500">
        <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {t('about.story.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('about.story.paragraph1')}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.story.paragraph2')}
              </p>
            </div>{' '}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center">
                <FaCogs className="text-purple-500 text-3xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {t('about.stats.technologies')}
                </div>
                <div className="text-gray-300 text-sm">
                  {t('about.stats.technologiesLabel')}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center">
                <FaClock className="text-blue-500 text-3xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {t('about.stats.experience')}
                </div>
                <div className="text-gray-300 text-sm">
                  {t('about.stats.experienceLabel')}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center">
                <FaCheckCircle className="text-green-500 text-3xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {t('about.stats.delivery')}
                </div>
                <div className="text-gray-300 text-sm">
                  {t('about.stats.deliveryLabel')}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center">
                <FaInfinity className="text-yellow-500 text-3xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
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

      {/* Why Choose Us */}
      <section className="relative bg-gradient-to-r from-blue-600/10 to-purple-700/10 rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500">
        <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>
        <div className="relative">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('about.whyChoose.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
              <FaCode className="text-purple-500 text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">
                {t('about.whyChoose.experience.title')}
              </h3>
              <p className="text-gray-300 text-sm">
                {t('about.whyChoose.experience.description')}
              </p>
            </div>

            <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
              <FaRocket className="text-blue-500 text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">
                {t('about.whyChoose.innovation.title')}
              </h3>
              <p className="text-gray-300 text-sm">
                {t('about.whyChoose.innovation.description')}
              </p>
            </div>

            <div className="group bg-gradient-to-br from-black/30 to-black/20 rounded-2xl p-6 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2">
              <FaHeart className="text-red-500 text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">
                {t('about.whyChoose.dedication.title')}
              </h3>
              <p className="text-gray-300 text-sm">
                {t('about.whyChoose.dedication.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
