import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="mx-auto mb-5">
        <div className="flex items-center justify-between pb-2">
          <h1 className="text-4xl font-bold">{t('portfolio.title')}</h1>
          <p className="text-2xl font-extralight">{t('portfolio.subtitle')}</p>
        </div>
        <p className="">{t('portfolio.description')}</p>
      </div>
      {/* Card Container */}
      <div className="grid grid-cols-5 grid-rows-4 gap-5 max-h-200 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="group relative bg-black/20 rounded-2xl shadow-xl col-span-3 row-span-2">
          <img
            src="../../public/assets/images/portfolio-1.png"
            alt=""
            className="rounded-xl w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4">
            <h3 className="text-lg font-bold mb-2">
              {t('portfolio.cards.web-ejemplo.title')}
            </h3>
            <p className="text-sm text-center mb-4">
              {t('portfolio.cards.web-ejemplo.description')}
            </p>
            <a
              src="#"
              className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-600  transition-colors duration-500 cursor-pointer"
            >
              {t('button.look-work')}
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="group relative bg-black/20 rounded-2xl shadow-xl col-span-2 row-span-2 col-start-4">
          <img
            src="../../public/assets/images/portfolio-1.png"
            alt=""
            className="rounded-xl w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4">
            <h3 className="text-lg font-bold mb-2">
              {t('portfolio.cards.web-ejemplo.title')}
            </h3>
            <p className="text-sm text-center mb-4">
              {t('portfolio.cards.web-ejemplo.description')}
            </p>
            <a
              src="#"
              className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-600  transition-colors duration-500 cursor-pointer"
            >
              {t('button.look-work')}
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="group relative bg-black/20 rounded-2xl shadow-xl col-span-2 row-span-2 row-start-3">
          <img
            src="../../public/assets/images/portfolio-1.png"
            alt=""
            className="rounded-xl w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4">
            <h3 className="text-lg font-bold mb-2">
              {t('portfolio.cards.web-ejemplo.title')}
            </h3>
            <p className="text-sm text-center mb-4">
              {t('portfolio.cards.web-ejemplo.description')}
            </p>
            <a
              src="#"
              className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-600  transition-colors duration-500 cursor-pointer"
            >
              {t('button.look-work')}
            </a>
          </div>
        </div>
        {/* Card 4 */}
        <div className="group relative bg-black/20 rounded-2xl shadow-xl col-span-3 row-span-2 col-start-3 row-start-3">
          <img
            src="../../public/assets/images/portfolio-1.png"
            alt=""
            className="rounded-xl w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4">
            <h3 className="text-lg font-bold mb-2">
              {t('portfolio.cards.web-ejemplo.title')}
            </h3>
            <p className="text-sm text-center mb-4">
              {t('portfolio.cards.web-ejemplo.description')}
            </p>
            <a
              src="#"
              className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-600  transition-colors duration-500 cursor-pointer"
            >
              {t('button.look-work')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
