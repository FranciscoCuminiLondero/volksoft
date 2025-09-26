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
        <h1 
          className="text-4xl font-bold mb-4 text-gradient"
          style={{
            background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {t('about.title')}
        </h1>
        <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
          {t('about.subtitle')}
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Mission */}
        <div className="group bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2"
             style={{
               background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
               border: '1px solid var(--color-teal-dark)',
               boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 253, 244, 0.2)';
               e.currentTarget.style.transform = 'translateY(-8px)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 253, 244, 0.1)';
               e.currentTarget.style.transform = 'translateY(0px)';
             }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{
                 background: 'linear-gradient(135deg, var(--color-cyan-bright)/10 0%, var(--color-teal-medium)/10 100%)'
               }}
          ></div>
          <div className="relative">
            <FaRocket 
              className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
              style={{ color: 'var(--color-cyan-bright)' }} 
            />
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('about.mission.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="group bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2"
             style={{
               background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
               border: '1px solid var(--color-teal-dark)',
               boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 253, 244, 0.2)';
               e.currentTarget.style.transform = 'translateY(-8px)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 253, 244, 0.1)';
               e.currentTarget.style.transform = 'translateY(0px)';
             }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{
                 background: 'linear-gradient(135deg, var(--color-cyan-bright)/10 0%, var(--color-teal-medium)/10 100%)'
               }}
          ></div>
          <div className="relative">
            <FaLightbulb 
              className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
              style={{ color: 'var(--color-teal-medium)' }} 
            />
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('about.vision.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.vision.description')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="group bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 hover:bg-black/40 transition-all duration-500 transform hover:-translate-y-2"
             style={{
               background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
               border: '1px solid var(--color-teal-dark)',
               boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 253, 244, 0.2)';
               e.currentTarget.style.transform = 'translateY(-8px)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 253, 244, 0.1)';
               e.currentTarget.style.transform = 'translateY(0px)';
             }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{
                 background: 'linear-gradient(135deg, var(--color-cyan-bright)/10 0%, var(--color-teal-medium)/10 100%)'
               }}
          ></div>
          <div className="relative">
            <FaHeart 
              className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
              style={{ color: '#ff6b6b' }} 
            />
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
      <section className="relative rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500"
               style={{
                 background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
                 border: '1px solid var(--color-teal-dark)',
                 boxShadow: '0 20px 50px rgba(1, 253, 244, 0.1)'
               }}
      >
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
              <div className="rounded-xl p-6 text-center"
                   style={{
                     background: 'linear-gradient(135deg, var(--color-teal-dark)/40 0%, var(--color-cyan-bright)/20 100%)',
                     border: '1px solid var(--color-teal-medium)',
                     boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
                   }}
              >
                <FaCogs 
                  className="text-3xl mx-auto mb-2"
                  style={{ color: 'var(--color-cyan-bright)' }}
                />
                <div className="text-2xl font-bold text-white">
                  {t('about.stats.technologies')}
                </div>
                <div className="text-gray-300 text-sm">
                  {t('about.stats.technologiesLabel')}
                </div>
              </div>
              <div className="rounded-xl p-6 text-center"
                   style={{
                     background: 'linear-gradient(135deg, var(--color-teal-dark)/40 0%, var(--color-cyan-bright)/20 100%)',
                     border: '1px solid var(--color-teal-medium)',
                     boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
                   }}
              >
                <FaClock 
                  className="text-3xl mx-auto mb-2"
                  style={{ color: 'var(--color-teal-medium)' }} 
                />
                <div className="text-2xl font-bold text-white">
                  {t('about.stats.experience')}
                </div>
                <div className="text-gray-300 text-sm">
                  {t('about.stats.experienceLabel')}
                </div>
              </div>
              <div className="rounded-xl p-6 text-center"
                   style={{
                     background: 'linear-gradient(135deg, var(--color-teal-dark)/40 0%, var(--color-cyan-bright)/20 100%)',
                     border: '1px solid var(--color-teal-medium)',
                     boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
                   }}
              >
                <FaCheckCircle 
                  className="text-3xl mx-auto mb-2"
                  style={{ color: '#10b981' }} 
                />
                <div className="text-2xl font-bold text-white">
                  {t('about.stats.delivery')}
                </div>
                <div className="text-gray-300 text-sm">
                  {t('about.stats.deliveryLabel')}
                </div>
              </div>
              <div className="rounded-xl p-6 text-center"
                   style={{
                     background: 'linear-gradient(135deg, var(--color-teal-dark)/40 0%, var(--color-cyan-bright)/20 100%)',
                     border: '1px solid var(--color-teal-medium)',
                     boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
                   }}
              >
                <FaInfinity 
                  className="text-3xl mx-auto mb-2"
                  style={{ color: '#fbbf24' }} 
                />
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
      <section className="relative rounded-2xl py-16 px-8 transform hover:scale-[1.02] transition-all duration-500"
               style={{
                 background: 'linear-gradient(135deg, var(--color-teal-dark)/20 0%, var(--color-cyan-bright)/10 100%)',
                 border: '1px solid var(--color-teal-dark)',
                 boxShadow: '0 20px 50px rgba(1, 253, 244, 0.1)'
               }}
      >
        <div className="absolute inset-0 rounded-2xl backdrop-blur-sm"
             style={{ backgroundColor: 'var(--color-navy-deep)/20' }}
        ></div>
        <div className="relative">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('about.whyChoose.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2"
                 style={{
                   background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
                   border: '1px solid var(--color-teal-dark)',
                   boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 253, 244, 0.2)';
                   e.currentTarget.style.transform = 'translateY(-8px)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 253, 244, 0.1)';
                   e.currentTarget.style.transform = 'translateY(0px)';
                 }}
            >
              <FaCode 
                className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                style={{ color: 'var(--color-cyan-bright)' }} 
              />
              <h3 className="text-xl font-bold text-white mb-3">
                {t('about.whyChoose.experience.title')}
              </h3>
              <p className="text-gray-300 text-sm">
                {t('about.whyChoose.experience.description')}
              </p>
            </div>

            <div className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2"
                 style={{
                   background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
                   border: '1px solid var(--color-teal-dark)',
                   boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 253, 244, 0.2)';
                   e.currentTarget.style.transform = 'translateY(-8px)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 253, 244, 0.1)';
                   e.currentTarget.style.transform = 'translateY(0px)';
                 }}
            >
              <FaRocket 
                className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                style={{ color: 'var(--color-teal-medium)' }} 
              />
              <h3 className="text-xl font-bold text-white mb-3">
                {t('about.whyChoose.innovation.title')}
              </h3>
              <p className="text-gray-300 text-sm">
                {t('about.whyChoose.innovation.description')}
              </p>
            </div>

            <div className="group rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2"
                 style={{
                   background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
                   border: '1px solid var(--color-teal-dark)',
                   boxShadow: '0 10px 30px rgba(1, 253, 244, 0.1)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 253, 244, 0.2)';
                   e.currentTarget.style.transform = 'translateY(-8px)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 253, 244, 0.1)';
                   e.currentTarget.style.transform = 'translateY(0px)';
                 }}
            >
              <FaHeart 
                className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                style={{ color: '#ff6b6b' }} 
              />
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
