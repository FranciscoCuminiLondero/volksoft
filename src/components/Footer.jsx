import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '#inicio', key: 'footer.navigation.home' },
  { href: '#servicios', key: 'footer.navigation.services' },
  { href: '#casos', key: 'footer.navigation.portfolio' },
  { href: '#nosotros', key: 'footer.navigation.about' },
  { href: '#contacto', key: 'footer.navigation.contact' },
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-volk-black border-t border-white/10 text-white px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo className="text-xl" />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400">
            {t('footer.navigation.title')}
          </h4>
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ href, key }) => (
              <li key={href}>
                <a href={href} className="text-white hover:text-volk-green transition-colors">
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400">
            {t('footer.social-media.title')}
          </h4>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.linkedin.com/company/volk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-volk-green transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/volk.softwares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-volk-green transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
