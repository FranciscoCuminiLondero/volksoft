import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaUsers, FaLightbulb, FaRocket, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="relative rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500"
      style={{
        background: 'linear-gradient(135deg, rgba(33, 77, 88, 0.2) 0%, rgba(46, 160, 165, 0.1) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(46, 160, 165, 0.3)'
      }}
    >
      <div className="absolute inset-0 rounded-2xl backdrop-blur-sm"
           style={{ backgroundColor: 'rgba(5, 22, 38, 0.2)' }}></div>
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
                <FaRocket className="flex-shrink-0 text-xl" style={{ color: 'var(--color-cyan-bright)' }} />
                <span className="text-gray-300">
                  {t('about.section.point1')}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaLightbulb className="flex-shrink-0 text-xl" style={{ color: 'var(--color-teal-medium)' }} />
                <span className="text-gray-300">
                  {t('about.section.point2')}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaUsers className="flex-shrink-0 text-xl" style={{ color: 'var(--color-success)' }} />
                <span className="text-gray-300">
                  {t('about.section.point3')}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/about"
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
              <span className="mr-2">{t('about.section.button')}</span>
              <FaArrowRight className="text-lg" />
            </Link>
          </div>{' '}
          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div 
              className="rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(1, 253, 244, 0.2) 0%, rgba(46, 160, 165, 0.2) 100%)',
                border: '1px solid rgba(1, 253, 244, 0.3)'
              }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {t('about.stats.technologies')}
              </div>
              <div className="text-gray-300 text-sm">
                {t('about.stats.technologiesLabel')}
              </div>
            </div>

            <div 
              className="rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(1, 253, 244, 0.2) 0%, rgba(46, 160, 165, 0.2) 100%)',
                border: '1px solid rgba(1, 253, 244, 0.3)'
              }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {t('about.stats.experience')}
              </div>
              <div className="text-gray-300 text-sm">
                {t('about.stats.experienceLabel')}
              </div>
            </div>

            <div 
              className="rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(1, 253, 244, 0.2) 0%, rgba(46, 160, 165, 0.2) 100%)',
                border: '1px solid rgba(1, 253, 244, 0.3)'
              }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {t('about.stats.delivery')}
              </div>
              <div className="text-gray-300 text-sm">
                {t('about.stats.deliveryLabel')}
              </div>
            </div>

            <div 
              className="rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(1, 253, 244, 0.2) 0%, rgba(46, 160, 165, 0.2) 100%)',
                border: '1px solid rgba(1, 253, 244, 0.3)'
              }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
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
