import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen text-white dark-theme" 
         style={{ 
           background: 'var(--gradient-hero)',
           minHeight: '100vh'
         }}>
      {/* Textura de fondo sutil */}
      <div 
        className="absolute inset-0 bg-repeat opacity-5"
        style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/sandpaper.png')"
        }}
      ></div>
      
      {/* Overlay gradient adicional para profundidad */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(1, 253, 244, 0.1) 0%, transparent 50%)'
        }}
      ></div>
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
