import { useTranslation } from 'react-i18next';
import { InlineWidget } from 'react-calendly';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-white pb-2">
          {t('calendar.title')}
        </h2>
        <p className="text-center w-1/3">{t('calendar.description')}</p>
      </div>
      <div className="relative">
        <InlineWidget
          url="https://calendly.com/volksoft/first-meeting"
          styles={{
            height: '700px',
            width: '100%',
          }}
          pageSettings={{
            primaryColor: '#4F1680',
            textColor: '#000000 ',
            backgroundColor: '#ffffff',
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center mb-20">
        <Link
          to={'/contact'}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition duration-300 cursor-pointer shadow-2xl"
        >
          {t('button.contact-us')}
        </Link>
      </div>
    </section>
  );
};

export default Calendar;
