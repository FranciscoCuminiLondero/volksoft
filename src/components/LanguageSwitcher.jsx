import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div 
      className="flex justify-center rounded-lg overflow-hidden backdrop-blur-sm"
      style={{
        border: '1px solid var(--color-teal-medium)',
        backgroundColor: 'rgba(5, 22, 38, 0.3)'
      }}
    >
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 text-sm font-medium transition-all duration-200 flex-1`}
        style={{
          backgroundColor: i18n.language === 'en' ? 'var(--color-cyan-bright)' : 'transparent',
          color: i18n.language === 'en' ? 'var(--color-navy-deep)' : 'var(--color-white)'
        }}
        onMouseEnter={(e) => {
          if (i18n.language !== 'en') {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.color = 'var(--color-gray-300)';
          }
        }}
        onMouseLeave={(e) => {
          if (i18n.language !== 'en') {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--color-white)';
          }
        }}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-4 py-2 text-sm font-medium transition-all duration-200 flex-1`}
        style={{
          backgroundColor: i18n.language === 'es' ? 'var(--color-cyan-bright)' : 'transparent',
          color: i18n.language === 'es' ? 'var(--color-navy-deep)' : 'var(--color-white)'
        }}
        onMouseEnter={(e) => {
          if (i18n.language !== 'es') {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.color = 'var(--color-gray-300)';
          }
        }}
        onMouseLeave={(e) => {
          if (i18n.language !== 'es') {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--color-white)';
          }
        }}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
