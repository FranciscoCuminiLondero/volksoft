import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    const handleClickOutside = (event) => {
      // Solo cierra si el menú está abierto y el clic no es en el header o en el botón del menú
      if (
        isMobileMenuOpen &&
        !event.target.closest('header') &&
        !event.target.closest('[aria-label="Toggle mobile menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Añadir un pequeño retraso para evitar conflictos con el toggle
    if (isMobileMenuOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (event) => {
    event.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 transition-colors duration-300 ${
        isScrolled ? 'bg-black/30' : 'bg-black'
      } text-white px-6 w-full z-50 shadow-lg`}
    >
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="m-0 p-0">
            <img
              src="./assets/logotipo-light.png"
              alt="Logo Volksoft"
              className="w-50"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  {t('header.services')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  {t('header.about')}
                </Link>
              </li>
              {/* <li>
                <Link to="/portfolio" className="text-white hover:text-gray-400 transition-colors">
                  {t('header.portfolio')}
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-gray-400 transition-colors p-4 -mr-2 touch-manipulation"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-7 h-7" />
          ) : (
            <FaBars className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg shadow-lg mobile-menu-enter border-t border-gray-700">
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-400 transition-colors block py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white hover:text-gray-400 transition-colors block py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  {t('header.services')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-400 transition-colors block py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  {t('header.about')}
                </Link>
              </li>
              {/* <li>
                <Link 
                  to="/portfolio" 
                  className="text-white hover:text-gray-400 transition-colors block py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  {t('header.portfolio')}
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-400 transition-colors block py-2 text-lg"
                  onClick={closeMobileMenu}
                >
                  {t('header.contact')}
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-600">
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
