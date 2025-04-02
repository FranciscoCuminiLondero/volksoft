import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-purple-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')] bg-repeat opacity-10"></div>

        {/* Main: Contenido de la página */}
        <main className="flex-grow  z-100">
          <Layout />
        </main>
      </div>
    </>
  );
}

export default App;
