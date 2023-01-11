import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  let test;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  test = localStorage.getItem("ifLogged") === "error";
  const logout = () => {
    localStorage.setItem("ifLogged", "error");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="bg-gray-900 py-4 px-6 flex justify-between items-center text-white">
      <a href="/" className="text-2xl font-bold">
        Aplikacja bankowa
      </a>
      <nav>
        <a className="px-3" href="/">
          Strona domowa
        </a>
        <a className="px-3" href="/about">
          O nas
        </a>
        {test ? (
          <a href="/login">
            <button class="bg-blue-500 text-white rounded-md px-2 py-1">
              Zaloguj się
            </button>
          </a>
        ) : (
          <button
            class="bg-blue-500 text-white rounded-md px-2 py-1"
            onClick={logout}
          >
            Wyloguj się
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
