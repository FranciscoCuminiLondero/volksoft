import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-center border px-4 py-2 rounded-md border-gray-300 gap-2 w-25">
      <button
        onClick={() => changeLanguage('en')}
        className={`text-sm px-2 py-1 rounded ${
          i18n.language === 'en' ? 'bg-white text-black' : 'text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`text-sm px-2 py-1 rounded ${
          i18n.language === 'es' ? 'bg-white text-black' : 'text-white'
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
