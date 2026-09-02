import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();

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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      const currentTime = new Date().toLocaleString('es-ES', {
        timeZone: 'America/Bogota',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: currentTime,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatusType('success');
      setStatusMessage(t('contact.form.success'));

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
    <section id="contacto" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {statusMessage && (
              <div
                className={`p-4 rounded-lg text-center border ${
                  statusType === 'success'
                    ? 'bg-volk-green/10 text-volk-green border-volk-green/30'
                    : 'bg-red-500/10 text-red-400 border-red-500/30'
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
                className="w-full bg-black/40 rounded-lg border border-white/10 text-white p-3 focus:outline-none focus:border-volk-green transition-colors"
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
                className="w-full bg-black/40 rounded-lg border border-white/10 text-white p-3 focus:outline-none focus:border-volk-green transition-colors"
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
                className="w-full bg-black/40 rounded-lg border border-white/10 text-white p-3 focus:outline-none focus:border-volk-green transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${
                isLoading
                  ? 'bg-gray-700 cursor-not-allowed text-gray-400'
                  : 'bg-volk-green hover:bg-white text-black'
              }`}
            >
              {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <FaPhone className="text-volk-green text-xl flex-shrink-0" />
                <a href="tel:+5491124087607">{t('contact.info.phone')}</a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-volk-green text-xl flex-shrink-0" />
                <span>{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaWhatsapp className="text-volk-green text-xl flex-shrink-0" />
                <a
                  href="https://wa.me/+5491124087607"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.info.whatsapp')}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              {t('contact.schedule.title')}
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>{t('contact.schedule.weekdays')}</p>
              <p>{t('contact.schedule.saturday')}</p>
              <p>{t('contact.schedule.sunday')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
