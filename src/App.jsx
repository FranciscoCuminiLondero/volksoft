import './App.css';
import ComingSoon from './ComingSoon';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';

// Site is in pre-launch mode: shows just the logo + "Preparándonos para
// ustedes". Flip this to false to bring the full site back — nothing
// below it was removed.
const COMING_SOON = true;

function App() {
  if (COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <div className="relative flex flex-col min-h-screen text-white bg-volk-black">
      <Header />
      <main className="flex-grow relative">
        <SocialSidebar />
        <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-24 md:gap-32 py-16 md:py-24">
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
