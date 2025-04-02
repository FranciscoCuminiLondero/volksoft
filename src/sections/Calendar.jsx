import { useTranslation } from 'react-i18next';

const Calendar = () => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto max-w-6xl">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-white pb-2">
          {t('calendar.title')}
        </h2>
        <p className="text-center w-1/3">{t('calendar.description')}</p>
      </div>
      <div className="calendly-container">
        <iframe
          src="https://calendly.com/volksoft/first-meeting"
          width="100%"
          height="800"
        ></iframe>
      </div>
    </section>
  );
};

export default Calendar;
