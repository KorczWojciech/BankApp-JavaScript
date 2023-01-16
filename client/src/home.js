import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [currencyData, setCurrencyData] = useState(null);

  const myHeaders = new Headers();
  myHeaders.append("apikey", "cc6EHIgJIIV1KssSkf2CZDaXEqOlDoED");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    const fetchCurrencyData = async () => {
      const response = await fetch(
        "https://api.apilayer.com/currency_data/live?source=PLN&currencies=EUR%2CGBP%2CUSD",
        requestOptions
      );
      const data = await response.json();
      setCurrencyData(data);
    };

    fetchCurrencyData();
  }, []);

  return (
    <div class="bg-gray-100 h-screen flex flex-col">
      <div class="container mx-auto py-12 px-4">
        <h1 class="text-3xl font-bold text-center text-gray-900 mb-6">
          Witaj w naszym banku!
        </h1>
        <p class="text-gray-700 text-center mb-8">
          Jesteśmy bankiem stworzonym na potrzeby projektu w technologii NodeJS
          oraz React.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a class="bg-white p-8 shadow-md rounded-lg " href="/transfer">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
              Wykonuj przelewy
            </h2>
            <p class="text-gray-700 mb-4">
              Dzięki naszej aplikacji będziesz mógł wykonać przelewy między
              użytkownikami.
            </p>
          </a>
          <a class="bg-white p-8 shadow-md rounded-lg" href="/history">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
              Zobacz historie przelewów
            </h2>
            <p class="text-gray-700 mb-4">Kontroluj swoje przelewy</p>
          </a>
          {/*<a class="bg-white p-8 shadow-md rounded-lg" href="/credit">*/}
          {/*  <h2 class="text-xl font-bold text-gray-900 mb-4">*/}
          {/*    Kredyty*/}
          {/*  </h2>*/}
          {/*  <p class="text-gray-700 mb-4">*/}
          {/*  Najniższe oprocentowanie na rynku kredytowym.*/}
          {/*  </p>*/}
          {/*</a>*/}
        </div>
        <div class="container mx-auto py-12 px-4 flex justify-center">
          <div class="flex justify-between items-center space-x-10">
            <a href="/signup">
              <button class="bg-blue-500 text-white rounded-md px-2 py-1 w-96">
                Zarejestruj się
              </button>
            </a>
            <div class="relative">
              <a href="/login">
                <button class="bg-blue-500 text-white rounded-md px-2 py-1 w-96">
                  Masz już konto? Zaloguj się
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        {currencyData && (
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Aktualne kursy walut
            </h2>
            <h4>Zobacz ile warte jest 1PLN w innych walutach:</h4>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-4">Euro</p>
                <p className="text-gray-700 mb-4">
                  {currencyData.quotes.PLNEUR} EUR
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  Funt Brytyjski
                </p>
                <p className="text-gray-700 mb-4">
                  {currencyData.quotes.PLNGBP} GBP
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  Dolar Amerykański
                </p>
                <p className="text-gray-700 mb-4">
                  {currencyData.quotes.PLNUSD} USD
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
