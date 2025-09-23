import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-14 p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          {t('portfolio.title')}
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          {t('portfolio.subtitle')}
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project Card 1 */}
        <div className="group bg-black/20 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
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
                <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
            <button
              disabled
              className="bg-gray-600/50 text-gray-400 px-6 py-3 rounded-full font-semibold cursor-not-allowed flex items-center gap-2 w-full justify-center"
            >
              <FaExternalLinkAlt className="text-sm" /> Próximamente
            </button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group bg-black/20 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
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
                <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                  SASS
                </span>
                <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">
                  Express
                </span>
              </div>
            </div>
            <button
              disabled
              className="bg-gray-600/50 text-gray-400 px-6 py-3 rounded-full font-semibold cursor-not-allowed flex items-center gap-2 w-full justify-center"
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
