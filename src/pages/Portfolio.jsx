import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-14 p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 
          className="text-4xl font-bold mb-4 text-gradient"
          style={{
            background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {t('portfolio.title')}
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          {t('portfolio.subtitle')}
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project Card 1 */}
        <div className="group rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
             style={{
               background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
               border: '1px solid var(--color-teal-dark)',
               boxShadow: '0 20px 50px rgba(1, 253, 244, 0.1)'
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.boxShadow = '0 30px 60px rgba(1, 253, 244, 0.2)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.boxShadow = '0 20px 50px rgba(1, 253, 244, 0.1)';
             }}
        >
          <div className="relative">
            <img
              src="../../public/assets/images/portfolio-1.png"
              alt=""
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('portfolio.cards.web-ejemplo.title')}
            </h3>
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              {t('portfolio.cards.web-ejemplo.description')}
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                Tecnologías utilizadas:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm text-white"
                      style={{
                        backgroundColor: 'var(--color-cyan-bright)/30',
                        border: '1px solid var(--color-cyan-bright)/50'
                      }}
                >
                  React
                </span>
                <span className="px-3 py-1 rounded-full text-sm text-white"
                      style={{
                        backgroundColor: 'var(--color-teal-medium)/30',
                        border: '1px solid var(--color-teal-medium)/50'
                      }}
                >
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 rounded-full text-sm text-white"
                      style={{
                        backgroundColor: 'var(--color-teal-dark)/30',
                        border: '1px solid var(--color-teal-dark)/50'
                      }}
                >
                  Node.js
                </span>
              </div>
            </div>
            <button
              disabled
              className="px-6 py-3 rounded-full font-semibold cursor-not-allowed flex items-center gap-2 w-full justify-center text-gray-400"
              style={{
                backgroundColor: 'var(--color-teal-dark)/30',
                border: '1px solid var(--color-teal-dark)/50'
              }}
            >
              <FaExternalLinkAlt className="text-sm" /> Próximamente
            </button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
             style={{
               background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
               border: '1px solid var(--color-teal-dark)',
               boxShadow: '0 20px 50px rgba(1, 253, 244, 0.1)'
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.boxShadow = '0 30px 60px rgba(1, 253, 244, 0.2)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.boxShadow = '0 20px 50px rgba(1, 253, 244, 0.1)';
             }}
        >
          <div className="relative">
            <img
              src="../../public/assets/images/portfolio-1.png"
              alt=""
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('portfolio.cards.web-ejemplo.title')}
            </h3>
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              {t('portfolio.cards.web-ejemplo.description')}
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                Tecnologías utilizadas:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm text-white"
                      style={{
                        backgroundColor: 'var(--color-cyan-bright)/30',
                        border: '1px solid var(--color-cyan-bright)/50'
                      }}
                >
                  Vue.js
                </span>
                <span className="px-3 py-1 rounded-full text-sm text-white"
                      style={{
                        backgroundColor: 'var(--color-teal-medium)/30',
                        border: '1px solid var(--color-teal-medium)/50'
                      }}
                >
                  SASS
                </span>
                <span className="px-3 py-1 rounded-full text-sm text-white"
                      style={{
                        backgroundColor: 'var(--color-teal-dark)/30',
                        border: '1px solid var(--color-teal-dark)/50'
                      }}
                >
                  Express
                </span>
              </div>
            </div>
            <button
              disabled
              className="px-6 py-3 rounded-full font-semibold cursor-not-allowed flex items-center gap-2 w-full justify-center text-gray-400"
              style={{
                backgroundColor: 'var(--color-teal-dark)/30',
                border: '1px solid var(--color-teal-dark)/50'
              }}
            >
              <FaExternalLinkAlt className="text-sm" /> Próximamente
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
