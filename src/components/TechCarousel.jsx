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
    { Icon: FaReact, name: 'React' },
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: FaVuejs, name: 'Vue.js' },
    { Icon: FaPhp, name: 'PHP' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: FaAws, name: 'AWS' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiRedis, name: 'Redis' },
  ]);

  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="flex space-x-8 sm:space-x-12 md:space-x-16 py-4 sm:py-6 md:py-8 tech-scroll">
          {duplicatedIcons.map(({ Icon, name }, index) => (
            <div
              key={`${name}-${index}`}
              className="group/icon cursor-pointer flex items-center justify-center flex-shrink-0 relative"
            >
              <Icon className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-600 group-hover/icon:text-volk-green transition-colors duration-300" />
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
