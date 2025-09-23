import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-purple-950">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')] bg-repeat opacity-10"></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
