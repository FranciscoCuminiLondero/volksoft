import React from 'react';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div 
      className="fixed right-0 top-1/2 transform -translate-y-1/2 p-4 rounded-l-2xl z-50 backdrop-blur-lg"
      style={{
        backgroundColor: 'rgba(33, 77, 88, 0.8)',
        border: '1px solid rgba(46, 160, 165, 0.3)',
        borderRight: 'none'
      }}
    >
      <div className="flex flex-col gap-6">
        <a
          href="mailto:info@volksoft.io"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300"
          style={{ color: 'var(--color-gray-300)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-cyan-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-300)'}
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/volksoft"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300"
          style={{ color: 'var(--color-gray-300)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-cyan-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-300)'}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://wa.me/+5491124087607"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300"
          style={{ color: 'var(--color-gray-300)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-cyan-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-300)'}
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="tel:+5491124087607"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300"
          style={{ color: 'var(--color-gray-300)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-cyan-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-gray-300)'}
        >
          <FaPhone size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
