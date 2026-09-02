import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { PROJECTS } from '../data/projects';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section id="casos" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('cases.title')}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t('cases.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(({ id, title, description, tag, image, link }) => (
          <a
            key={id}
            href={link}
            className="group relative bg-white/5 border border-white/10 hover:border-volk-green/60 rounded-2xl overflow-hidden transition-colors"
          >
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="w-full h-56 bg-black/60 flex items-center justify-center">
                <span className="text-gray-600 text-sm uppercase tracking-widest">
                  {tag}
                </span>
              </div>
            )}
            <div className="p-6">
              <span className="text-xs font-semibold text-volk-green uppercase tracking-wide">
                {tag}
              </span>
              <h3 className="text-lg font-bold text-white mt-2 mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{description}</p>
              <span className="inline-flex items-center gap-2 text-sm text-white mt-4 group-hover:text-volk-green transition-colors">
                {t('button.look-work')}
                <FaArrowRight />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
