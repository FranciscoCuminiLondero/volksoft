import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header: Barra de navegación */}
        <Header />

        {/* Main: Contenido de la página */}
        <main className="flex-grow"></main>

        {/* Footer: Pie de página */}
        <Footer />
      </div>
    </>
  );
}

export default App;
