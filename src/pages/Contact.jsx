import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { InlineWidget } from 'react-calendly';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'

  // Auto-ocultar mensajes después de 3 segundos
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage('');
        setStatusType('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  // Manejar redimensionamiento de ventana para calendario responsivo
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para determinar la altura del calendario
  const getCalendarHeight = () => {
    if (windowWidth < 768) return '500px'; // Móvil
    if (windowWidth < 1024) return '700px'; // Tablet
    if (windowWidth < 1440) return '800px'; // Desktop
    return '900px'; // Pantallas grandes
  };

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      // Generar timestamp actual
      const currentTime = new Date().toLocaleString('es-ES', {
        timeZone: 'America/Bogota',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      // Parámetros para EmailJS con los campos especificados
      const templateParams = {
        name: formData.name, // Campo name
        email: formData.email, // Campo email
        message: formData.message, // Campo message
        time: currentTime, // Campo time (autogenerado)
      };

      // Enviar email usando VITE_EMAILJS_TEMPLATE_ID
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatusType('success');
      setStatusMessage(t('contact.form.success'));

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error al enviar email:', error);
      setStatusType('error');
      setStatusMessage(t('contact.form.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 md:gap-14 p-4 md:p-8">
      {' '}
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 
          className="text-4xl font-bold mb-4 text-gradient"
          style={{
            background: 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {t('contact.title')}
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        {/* Contact Form */}
        <section className="rounded-2xl p-6 md:p-8"
                 style={{
                   background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
                   border: '1px solid var(--color-teal-dark)',
                   boxShadow: '0 20px 50px rgba(1, 253, 244, 0.1)'
                 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Mensaje de estado */}
            {statusMessage && (
              <div
                className={`p-4 rounded-lg text-center ${
                  statusType === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {statusMessage}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border text-white p-3 focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-navy-deep)',
                  borderColor: 'var(--color-teal-dark)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-cyan-bright)';
                  e.target.style.boxShadow = '0 0 0 2px rgba(1, 253, 244, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-teal-dark)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border text-white p-3 focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-navy-deep)',
                  borderColor: 'var(--color-teal-dark)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-cyan-bright)';
                  e.target.style.boxShadow = '0 0 0 2px rgba(1, 253, 244, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-teal-dark)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border text-white p-3 focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-navy-deep)',
                  borderColor: 'var(--color-teal-dark)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-cyan-bright)';
                  e.target.style.boxShadow = '0 0 0 2px rgba(1, 253, 244, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-teal-dark)';
                  e.target.style.boxShadow = 'none';
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full font-bold py-3 px-6 rounded-lg transition duration-300 text-white"
              style={{
                background: isLoading 
                  ? '#6b7280' 
                  : 'linear-gradient(135deg, var(--color-cyan-bright) 0%, var(--color-teal-medium) 100%)',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                boxShadow: isLoading 
                  ? 'none' 
                  : '0 10px 30px rgba(1, 253, 244, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(1, 253, 244, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(0px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(1, 253, 244, 0.3)';
                }
              }}
            >
              {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          {' '}
          <div className="rounded-2xl p-6 md:p-8"
               style={{
                 background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
                 border: '1px solid var(--color-teal-dark)',
                 boxShadow: '0 20px 50px rgba(1, 253, 244, 0.1)'
               }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <FaPhone 
                  className="text-xl"
                  style={{ color: 'var(--color-cyan-bright)' }} 
                />
                <span>
                  <a href="tel:+5491124087607">{t('contact.info.phone')}</a>
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope 
                  className="text-xl"
                  style={{ color: 'var(--color-cyan-bright)' }} 
                />
                <span>{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaWhatsapp 
                  className="text-xl"
                  style={{ color: 'var(--color-cyan-bright)' }} 
                />
                <span>
                  <a
                    href="https://wa.me/+5491124087607"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.info.whatsapp')}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-6 md:p-8"
               style={{
                 background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
                 border: '1px solid var(--color-teal-dark)',
                 boxShadow: '0 20px 50px rgba(1, 253, 244, 0.1)'
               }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('contact.schedule.title')}
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>{t('contact.schedule.weekdays')}</p>
              <p>{t('contact.schedule.saturday')}</p>
              <p>{t('contact.schedule.sunday')}</p>
            </div>
          </div>
        </section>
      </div>{' '}
      {/* Calendly Integration */}
      <section className="rounded-2xl p-4 md:p-8"
               style={{
                 background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-teal-dark) 100%)',
                 border: '1px solid var(--color-teal-dark)',
                 boxShadow: '0 20px 50px rgba(1, 253, 244, 0.1)'
               }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4 md:mb-6">
          {t('contact.meeting.title')}
        </h2>
        <div className="relative -mx-4 md:mx-0">
          <div className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden">
            <InlineWidget
              url="https://calendly.com/volksoft/first-meeting"
              styles={{
                height: getCalendarHeight(),
                width: '100%',
                minHeight: '400px',
              }}
              pageSettings={{
                primaryColor: '#01fdf4',
                textColor: '#000000',
                backgroundColor: '#ffffff',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
