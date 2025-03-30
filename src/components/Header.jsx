import { Col, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="backdrop-filter backdrop-blur-lg bg-black/30  flex items-center justify-between px-10">
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
              <a href="#" className="text-white hover:text-gray-400">
                {t('header.home')}
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                {t('header.services')}
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                {t('header.portfolio')}
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                {t('header.contact')}
              </a>
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
