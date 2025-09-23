import { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPhp,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';

const TechCarousel = () => {
  const [icons] = useState([
    { Icon: FaReact, color: '#61DAFB', name: 'React' },
    { Icon: FaNodeJs, color: '#339933', name: 'Node.js' },
    { Icon: FaVuejs, color: '#41B883', name: 'Vue.js' },
    { Icon: FaPhp, color: '#777BB4', name: 'PHP' },
    { Icon: FaDocker, color: '#2496ED', name: 'Docker' },
    { Icon: FaAws, color: '#FF9900', name: 'AWS' },
    { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
    { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { Icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
    { Icon: SiRedis, color: '#DC382D', name: 'Redis' },
  ]);

  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="flex space-x-8 sm:space-x-12 md:space-x-16 py-4 sm:py-6 md:py-8 tech-scroll">
          {duplicatedIcons.map(({ Icon, color, name }, index) => (
            <div
              key={`${name}-${index}`}
              className="group/icon cursor-pointer flex items-center justify-center flex-shrink-0 relative"
              style={{ '--icon-color': color }}
            >
              <Icon className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300 group-hover/icon:[color:var(--icon-color)] transition-colors duration-500 ease-in-out" />
              <span className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 text-white text-xs sm:text-sm whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes techScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .tech-scroll {
            animation: techScroll 30s linear infinite;
          }
          @media (max-width: 640px) {
            .tech-scroll {
              animation: techScroll 20s linear infinite;
            }
          }
          @media (min-width: 1024px) {
            .tech-scroll {
              animation: techScroll 40s linear infinite;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default TechCarousel;
