import { Row, Col, Container } from 'reactstrap';
import { FaLinkedin, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="backdrop-filter backdrop-blur-lg bg-black/30 px-10 text-white p-5 z-100">
      <Container fluid>
        <Row className="flex flex-col md:flex-row justify-between md:items-start p-x-10">
          <div className=" text-center md:text-left flex flex-col items-center">
            <img
              src="/assets/logotipo-volksoft-light.png"
              alt="Logo Volksoft"
              className="mx-auto mb-2 opacity-50 max-w-20"
            />
            <p className="text-sm ml-2">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>

          <Col className="flex flex-col items-center  mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">
              {t('footer.navigation.title')}
            </h4>
            <ul className=" flex list-none p-0 space-x-4 ">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  {t('footer.navigation.home')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  {t('footer.navigation.services')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  {t('footer.navigation.portfolio')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  {t('footer.navigation.contact')}
                </a>
              </li>
            </ul>
          </Col>

          <Col className="mb-6 md:mb-0 text-center md:text-center">
            <h4 className="text-lg font-bold mb-4">
              {t('footer.social-media.title')}
            </h4>
            <ul className="flex justify-center md:justify-start space-x-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-400"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
