import React from "react";
import axios from "./api/axios";
import { useNavigate } from "react-router-dom";

const { useState } = require("react");
const LOGIN_URL = "http://localhost:5000/register";

const RegistrationForm = () => {
	const [status, setStatus] = useState(undefined);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(LOGIN_URL, {
        first_name: FirstName,
        last_name: LastName,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      })
		.then(() => {
			setStatus({ type: 'success' })
		})
		.catch((error) => {
			setStatus({ type: 'error', error });
		});
  };
	let navigate = useNavigate();
	const goTo=()=>{
		navigate("/");
	}

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Zarejestruj się do banku</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="firstName"
                    name="firstName"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Imie"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Imie
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="lastName"
                    name="lastName"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Nazwisko"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nazwisko
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Hasło
                  </label>
					{status?.type === 'success' && <button class="bg-green-700 text-white rounded-md px-2 py-1" onClick={goTo}>Zarejestrowałeś się prawidłowo. Przejdź do strony głównej!</button>}
					{status?.type === 'error' && (
						<p style={{color: "red"}}>Rejestracja nie powiodła się :(</p>
					)}
                </div>
                <div class="relative">
                  <button
                    class="bg-blue-500 text-white rounded-md px-2 py-1"
                    onClick={handleSubmit}
                  >
                    Zarejestruj się
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
