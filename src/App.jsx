import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-black via-black to-blue-900 h-screen gap-8 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
        Welcome to our website!
      </h1>

      <img
        src="/logotipo-volksoft-light.png"
        alt="Logo Volksoft"
        className="w-40 sm:w-56 object-contain"
      />

      <p className="text-sm sm:text-base text-gray-300 max-w-md text-center">
        Right now we are working on the website. It will be available soon!
      </p>

      <Button route={'mailto:info@volksoft.com'}>Contact Us →</Button>
    </div>
  );
}

export default App;
