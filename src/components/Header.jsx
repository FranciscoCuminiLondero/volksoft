import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 transition-colors duration-300 ${
        isScrolled ? 'bg-black/30' : 'bg-black'
      } text-white px-6 w-full flex justify-between z-50 shadow-lg mb-10`}
    >
      <div className="flex gap-4 items-center">
        <a href="#" className="m-0 p-0">
          <img
            src="./assets/logotipo-light.png"
            alt="Logo Volksoft"
            className="w-50"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 ">
        <nav>
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                {t('header.home')}
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-400">
                {t('header.services')}
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-white hover:text-gray-400">
                {t('header.portfolio')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-400">
                {t('header.contact')}
              </Link>
            </li>
          </ul>
        </nav>
        {/* Change language buttons */}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
