import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '#inicio', key: 'header.home' },
  { href: '#servicios', key: 'header.services' },
  { href: '#casos', key: 'header.portfolio' },
  { href: '#nosotros', key: 'header.about' },
  { href: '#contacto', key: 'header.contact' },
];

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
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
        isScrolled ? 'bg-volk-black/90 backdrop-blur-sm' : 'bg-volk-black'
      } text-white px-6 w-full z-50 border-b border-white/10`}
    >
      <div className="flex justify-between items-center py-4">
        <a href="#inicio" className="m-0 p-0">
          <Logo className="text-2xl" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              {NAV_LINKS.map(({ href, key }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white hover:text-volk-green transition-colors"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-volk-green transition-colors p-4 -mr-2 touch-manipulation"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-volk-black/95 backdrop-blur-lg shadow-lg mobile-menu-enter border-t border-white/10">
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map(({ href, key }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white hover:text-volk-green transition-colors block py-2 text-lg"
                    onClick={closeMobileMenu}
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
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
