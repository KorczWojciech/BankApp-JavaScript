import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-4">
        <br /><br />
      <h1 className="text-4xl font-bold mb-4">O naszym projekcie</h1>
      <br />
      <p className="text-xl mb-4">
      Projekt jest aplikacją internetową, która została zbudowana z wykorzystaniem języka programowania JavaScript. Został on przygotowany na potrzeby przedmiotu związanego z tym językiem, a jego celem jest przedstawienie możliwości, jakie daje JavaScript w połączeniu z innymi technologiami.
      <br /><br />
Backend aplikacji został wykonany w technologii Node.js, która jest popularnym narzędziem do tworzenia aplikacji internetowych opartych o JavaScript. Node.js pozwala na tworzenie serwerów internetowych oraz obsługę ruchu sieciowego, co umożliwia aplikacji komunikowanie się z bazami danych oraz innymi usługami.
<br /><br />
Frontend aplikacji został zbudowany z wykorzystaniem technologii React.js, która jest biblioteką JavaScript do tworzenia interfejsów użytkownika. React.js pozwala na tworzenie dynamicznych, responsywnych i przyjaznych dla użytkownika aplikacji internetowych, a także umożliwia łatwą integrację z backendem.
<br /><br />
Do przechowywania danych w aplikacji została użyta baza danych MongoDB, która jest rozproszoną bazą danych NoSQL. MongoDB jest elastyczna i skalowalna, co sprawia, że jest dobrym wyborem dla aplikacji internetowych o dużym natężeniu ruchu.
<br /><br />
Do stylizacji elementów interfejsu aplikacji został użyty framework Tailwind CSS, który umożliwia łatwe i szybkie tworzenie stylów dla modułów aplikacji. Tailwind CSS pozwala na łatwiejsze dostosowywanie wyglądu elementów do potrzeb projektu.
<br /><br />
Projekt został wykonany przez studentów Wyższej Szkoły Bankowej w Poznaniu.
      </p>
      <br /><br /><br /><br /><br />
      <h2 className="text-2xl font-bold mb-4">Zespół projektowy</h2>
      <ul className="flex flex-col items-center space-y-4">
        <li className="text-lg font-bold">Adam Bialik</li>
        <li className="text-lg font-bold">Mikołaj Kujawa</li>
        <li className="text-lg font-bold">Wojtek Korcz</li>
      </ul>
    </div>
  );
}

export default AboutUs;