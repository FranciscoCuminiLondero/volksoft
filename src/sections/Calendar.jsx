import { useTranslation } from 'react-i18next';
import { InlineWidget } from 'react-calendly';

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
    </section>
  );
};

export default Calendar;
