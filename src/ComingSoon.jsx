import Logo from './components/Logo';
import SocialSidebar from './components/SocialSidebar';

// Pre-launch holding page. Shown instead of the full site while
// COMING_SOON is true in App.jsx — see that file to bring the full site
// back once it's ready to launch.
const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-volk-black px-6">
      <SocialSidebar />
      <Logo stacked className="text-5xl sm:text-6xl md:text-7xl" />
      <h1 className="mt-10 text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl">
        Preparándonos para ustedes
      </h1>
      <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl">
        Estamos construyendo algo nuevo. Muy pronto vas a poder conocer todo
        lo que tenemos para vos.
      </p>
    </div>
  );
};

export default ComingSoon;
