import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 px-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <p>Aplikacja bankowa</p>
        <nav>
          <a className="px-3" href="/">Strona domowa</a>
          <a className="px-3" href="/about">O nas</a>
          <a className="px-3" href="/contact">Kontakt</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
