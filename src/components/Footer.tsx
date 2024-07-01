const Footer = () => {
  return (
    <footer className="bg-red-500 p-4 flex flex-col items-center">
      <p className="text-white">
        Copyright © {new Date().getFullYear()}. Made with by
        <a href="https://github.com/Luxspero" target="_blank">
          {" "}
          Luxspero
        </a>
      </p>
    </footer>
  );
};

export default Footer;
