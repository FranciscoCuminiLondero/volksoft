import React from 'react';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-black/30 p-4 rounded-l-2xl z-50">
      <div className="flex flex-col gap-6">
        <a
          href="mailto:info@volksoft.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/volksoft"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://wa.me/+5491124087607"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="tel:+5491124087607"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaPhone size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
