import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Witaj w naszym banku!
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Jesteśmy bankiem stworzonym na potrzeby projektu w technologii NodeJS oraz React.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Wykonuj przelewy
            </h2>
            <p className="text-gray-700 mb-4">
              Dzięki naszej aplikacji będziesz mógł wykonać przelewy między użytkownikami.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Oszczędzaj pieniądze
            </h2>
            <p className="text-gray-700 mb-4">
              Wpłacaj pieniądze na swoje konta.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Kredyty
            </h2>
            <p className="text-gray-700 mb-4">
              Najniższe oprocentowanie na rynku kredytowym.
            </p>
          </div>
        </div>
        <div className="container mx-auto py-12 px-4 flex justify-center">
            <div className="flex justify-between items-center">
                <a href="/signup" className="btn-blue rounded mr-4">
                <button class="rounded-full">Zarejestruj się</button>
                </a>
                <a href="/login" className="btn btn-green rounded">
                    Masz już konto? Zaloguj się
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
