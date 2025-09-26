import { useTranslation } from 'react-i18next';
import { InlineWidget } from 'react-calendly';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Calendar = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para determinar la altura del calendario basada en el tamaño de pantalla
  const getCalendarHeight = () => {
    if (windowWidth < 768) return '500px'; // Móvil
    if (windowWidth < 1024) return '700px'; // Tablet
    if (windowWidth < 1440) return '1000px'; // Desktop
    return '1000px'; // Pantallas grandes (sin scroll)
  };

  return (
    <section className="px-4 md:px-8 lg:px-0">
      <div className="flex flex-col justify-center items-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white pb-4 text-center">
          {t('calendar.title')}
        </h2>
        <p className="text-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-gray-300 text-sm md:text-base leading-relaxed px-4">
          {t('calendar.description')}
        </p>
      </div>
      <div className="relative mb-8 md:mb-12">
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
          <InlineWidget
            url="https://calendly.com/volksoft/first-meeting"
            styles={{
              height: getCalendarHeight(),
              width: '100%',
              minHeight: '400px',
            }}
            pageSettings={{
              primaryColor: '#01fdf4',
              textColor: '#051626',
              backgroundColor: '#ffffff',
            }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-12 md:mb-20">
        <Link
          to={'/contact'}
          className="btn-base btn-primary text-sm md:text-base transform hover:scale-105 transition-all duration-300"
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
          {t('button.contact-us')}
        </Link>
      </div>
    </section>
  );
};

export default Calendar;
