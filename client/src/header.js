import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 py-4 px-6 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold">Aplikacja bankowa</h1>
      <nav>
        <a className="px-3" href="/">Strona domowa</a>
        <a className="px-3" href="/about">O nas</a>
      </nav>
    </header>
  );
};

export default Header;