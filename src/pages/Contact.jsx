import { useTranslation } from 'react-i18next';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
  const { t } = useTranslation();

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
          <form className="space-y-6">
            {' '}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
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
                className="w-full bg-black/20 rounded-lg border border-gray-600 text-white p-3 focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {t('contact.form.submit')}
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
              {/* <div className="flex items-center gap-4 text-gray-300">
                <FaPhone className="text-purple-500 text-xl" />
                <span>{t('contact.info.phone')}</span>
              </div> */}
              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-purple-500 text-xl" />
                info@volksoft.io
              </div>
              {/* <div className="flex items-center gap-4 text-gray-300">
                <FaWhatsapp className="text-purple-500 text-xl" />
                <span>{t('contact.info.whatsapp')}</span>
              </div> */}
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
