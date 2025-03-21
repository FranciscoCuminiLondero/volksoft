const Button = ({ children, route }) => {
  return (
    <a
      href={route}
      className="rounded bg-white text-black px-3 py-1 font-medium hover:bg-transparent hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </a>
  );
};

export default Button;
