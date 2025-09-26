import { Row, Col, Container } from 'reactstrap';
import { FaLinkedin, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer 
      className="backdrop-filter backdrop-blur-lg px-10 p-5 z-100"
      style={{
        backgroundColor: 'var(--footer-bg)',
        color: 'var(--footer-text)'
      }}
    >
      <Container fluid>
        <Row className="flex flex-col md:flex-row justify-between md:items-start p-x-10 gap-4">
          <div className=" text-center md:text-left flex flex-col items-center">
            <img
              src="/assets/logotipo-volksoft-light.png"
              alt="Logo Volksoft"
              className="mx-auto mb-2 max-w-20"
            />
            <p className="text-sm fw-lighter text-light ml-2">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>

          <Col className="flex flex-col items-center  mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">
              {t('footer.navigation.title')}
            </h4>
            <ul className=" flex list-none p-0 space-x-4 ">
              <li>
                <Link 
                  to="/" 
                  className="transition-colors duration-300"
                  style={{ color: 'var(--footer-link)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--footer-link-hover)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--footer-link)'}
                >
                  {t('footer.navigation.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="transition-colors duration-300"
                  style={{ color: 'var(--footer-link)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--footer-link-hover)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--footer-link)'}
                >
                  {t('footer.navigation.services')}
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/portfolio"
                  className="text-white hover:text-gray-400"
                >
                  {t('footer.navigation.portfolio')}
                </Link>
              </li> */}
              <li>
                <Link 
                  to="/about" 
                  className="transition-colors duration-300"
                  style={{ color: 'var(--footer-link)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--footer-link-hover)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--footer-link)'}
                >
                  {t('footer.navigation.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="transition-colors duration-300"
                  style={{ color: 'var(--footer-link)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--footer-link-hover)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--footer-link)'}
                >
                  {t('footer.navigation.contact')}
                </Link>
              </li>
            </ul>
          </Col>

          <Col className="mb-6 md:mb-0 text-center md:text-center">
            <h4 className="text-lg font-bold mb-4">
              {t('footer.social-media.title')}
            </h4>
            <ul className="flex justify-center  space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/company/volksoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: 'var(--footer-link)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--footer-link-hover)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--footer-link)'}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare size={24} />
                </a>
              </li> */}
              {/* <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-400"
                  aria-label="Contact"
                >
                  <FaEnvelope size={24} />
                </Link>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
