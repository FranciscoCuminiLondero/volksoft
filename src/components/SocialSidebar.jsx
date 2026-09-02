import { FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white/5 border border-white/10 p-4 rounded-l-2xl z-50">
      <div className="flex flex-col gap-6">
        <a
          href="mailto:volk-softwares@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-volk-green transition-colors"
          aria-label="Email"
        >
          <FaEnvelope size={22} />
        </a>
        <a
          href="https://www.linkedin.com/company/volksoft"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-volk-green transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://www.instagram.com/volk.softwares"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-volk-green transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://wa.me/5493412272769"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-volk-green transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="tel:+5493412272769"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-volk-green transition-colors"
          aria-label="Teléfono"
        >
          <FaPhone size={22} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
