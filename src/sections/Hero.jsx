import { useTranslation } from 'react-i18next';
import {
  FaAngleDown,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaAngular,
  FaVuejs,
  FaPhp,
  FaDocker,
  FaAws,
  FaGithub,
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';
import { useState } from 'react';

const Hero = () => {
  const { t } = useTranslation();
  const [icons] = useState([
    { Icon: FaReact, color: '#61DAFB' },
    { Icon: FaAngular, color: '#DD0031' },
    { Icon: FaVuejs, color: '#41B883' },
    { Icon: FaNodeJs, color: '#339933' },
    { Icon: FaPython, color: '#3776AB' },
    { Icon: FaJava, color: '#007396' },
    { Icon: FaPhp, color: '#777BB4' },
    { Icon: SiTypescript, color: '#3178C6' },
    { Icon: FaDatabase, color: '#336791' },
    { Icon: SiMongodb, color: '#47A248' },
    { Icon: SiPostgresql, color: '#4169E1' },
    { Icon: SiRedis, color: '#DC382D' },
    { Icon: FaDocker, color: '#2496ED' },
    { Icon: FaAws, color: '#FF9900' },
  ]);

  return (
    <section className="bg-transparent min-h-screen flex items-center justify-center ">
      {/* Card Container */}
      <div className="flex items-start justify-between gap-5">
        <div className="mx-auto bg-black/30 rounded-2xl shadow-xl p-8 text-center max-w-2xl">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-300 to-gray-100 text-6xl sm:text-5xl font-bold tracking-wide mb-6 p-2">
            {t('home.title')}
          </h2>
          <p className="text-gray-300 text-lg mb-6">{t('home.description')}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition duration-300 cursor-pointer shadow-2xl"
          >
            {t('button.get-started')}
            <FaAngleDown className="ml-2 font-black space-x-1 text-l" />
          </a>
        </div>
        {/* Tech Icons Grid */}
        <div className="flex flex-col justify-center items-center bg-black/30 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto bg-black">
          <h3 className="text-xl font-semibold text-gray-200 mb-6">
            {t('home.subtitle')}
          </h3>
          <div className="grid grid-cols-4 gap-6 w-100">
            {icons.map(({ Icon, color }, index) => (
              <div
                key={index}
                className="aspect-square bg-black/20 rounded-xl hover:bg-black/20 hover:scale-105 transition-all ease-in-out duration-500 group cursor-pointer relative overflow-hidden flex items-center justify-center"
                style={{ '--icon-color': color }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 ease-in-out"
                  style={{
                    backgroundColor: color,
                    filter: 'blur(10px)',
                    transform: 'scale(1.2)',
                  }}
                />
                <Icon className="text-5xl text-gray-300 group-hover:[color:var(--icon-color)] transition-colors duration-500 ease-in-out relative z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
