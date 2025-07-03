import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Inicia la transición
    setIsTransitioning(true);

    // Scroll al top cuando cambia la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // Termina la transición después de un pequeño delay
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`page-transition ${
        isTransitioning ? 'page-transitioning' : ''
      }`}
      key={location.pathname}
    >
      {children}
    </div>
  );
};

export default PageTransition;
