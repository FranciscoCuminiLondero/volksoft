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
    <div className="flex flex-col gap-14 p-8">
      {' '}
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          {t('contact.title')}
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </section>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <section className="bg-black/30 rounded-2xl p-8">
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
                className="w-full bg-black/20 rounded-lg border border-gray-600 text-white p-3 focus:outline-none focus:border-purple-500"
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
                className="w-full bg-black/20 rounded-lg border border-gray-600 text-white p-3 focus:outline-none focus:border-purple-500"
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
                className="w-full bg-black/20 rounded-lg border border-gray-600 text-white p-3 focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-bold py-3 px-6 rounded-lg transition duration-300 ${
                isLoading
                  ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
              }`}
            >
              {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          {' '}
          <div className="bg-black/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <FaPhone className="text-purple-500 text-xl" />
                <span>
                  <a href="tel:+13322312192">{t('contact.info.phone')}</a>
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-purple-500 text-xl" />
                <span>{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaWhatsapp className="text-purple-500 text-xl" />
                <span>
                  <a
                    href="https://wa.me/13322312192 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.info.whatsapp')}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-2xl p-8">
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
      <section className="bg-black/30 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {t('contact.meeting.title')}
        </h2>
        <div className="relative">
          <InlineWidget
            url="https://calendly.com/volksoft/first-meeting"
            styles={{
              height: '700px',
              width: '100%',
            }}
            pageSettings={{
              primaryColor: '#4F1680',
              textColor: '#000000',
              backgroundColor: '#ffffff',
            }}
          />
        </div>
      </section>
    </div>
  );
};
export default Contact;
