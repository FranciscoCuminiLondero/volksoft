import { Col, Row } from 'reactstrap';

const Header = () => {
  return (
    <header className="backdrop-filter backdrop-blur-lg bg-black/30  flex items-center justify-between px-10">
      <div className="flex gap-4 items-center">
        <a href="#" className="m-0 p-0">
          <img
            src="./assets/logotipo-light.png"
            alt="Logo Volksoft"
            className="w-50"
          />
        </a>
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
