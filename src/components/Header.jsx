import { Col, Row } from 'reactstrap';

const Header = () => {
  return (
    <header className="bg-black text-white py-6 px-10 flex items-center justify-between ">
      <div className="flex gap-4 items-center">
        <img
          src="./assets/logo-volksoft-light.png"
          alt="Logo Volksoft"
          className="w-25"
        />
        <h1 className="font-bold text-white text-3xl hidden md:block transition-all duration-300">
          Volksoft
        </h1>
      </div>
      <nav>
        <ul className="flex flex-col md:flex-row gap-4">
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
