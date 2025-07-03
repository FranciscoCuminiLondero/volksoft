import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-center border border-gray-600 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 text-sm font-medium transition-all duration-200 flex-1 ${
          i18n.language === 'en'
            ? 'bg-white text-black'
            : 'text-white hover:text-gray-300 hover:bg-white/10'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-4 py-2 text-sm font-medium transition-all duration-200 flex-1 ${
          i18n.language === 'es'
            ? 'bg-white text-black'
            : 'text-white hover:text-gray-300 hover:bg-white/10'
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
