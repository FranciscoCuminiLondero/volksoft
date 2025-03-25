// src/components/Footer.jsx
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FaLinkedin, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <Container fluid>
        <Row className="flex flex-col md:flex-row justify-between md:items-start px-10">
          <Col className="mb-6 md:mb-0 text-center md:text-left flex flex-col items-center">
            <img
              src="/assets/logotipo-volksoft-light.png"
              alt="Logo Volksoft"
              width="100"
              className="mx-auto md:mx-0 mb-4 opacity-50"
            />
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Volksoft. All rights reserved.
            </p>
          </Col>

          <Col className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="list-none p-0 space-y-1">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col className="mb-6 md:mb-0 text-center md:text-center">
            <h4 className="text-lg font-bold mb-4">Follow us</h4>
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
