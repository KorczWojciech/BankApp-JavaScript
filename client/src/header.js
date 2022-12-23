import React, { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <header className="bg-gray-900 py-4 px-6 flex justify-between items-center text-white">
      <a href="/" className="text-2xl font-bold">Aplikacja bankowa</a>
      <nav>
        <a className="px-3" href="/">Strona domowa</a>
        <a className="px-3" href="/about">O nas</a>
        {!isLoggedIn ? (
          <a href="/login">
            <button class="bg-blue-500 text-white rounded-md px-2 py-1" onClick={handleLogin}>Zaloguj się</button>
          </a>
        ) : (
          <button class="bg-blue-500 text-white rounded-md px-2 py-1" onClick={handleLogout}>Wyloguj się</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
