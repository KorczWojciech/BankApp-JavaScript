import React from "react";
import axios from "./api/axios";

const HISTORY_URL = "http://localhost:5000/history";
const { useState } = require("react");
const tokenString =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5ZTE4ZWI2M2E3MDI4NzhkY2QwM2MyIiwiZW1haWwiOiJ0ZXN0NUBtYWlsLmNvbSIsImlhdCI6MTY3MzM3OTIzNiwiZXhwIjoxNjczMzg2NDM2fQ.XVfrsj7ggVPjUuPDSH4UcxejIU68a1C6FcQsdfX8Yyw";

const HistoryPage = () => {
  const [transfers, setTransfers] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(HISTORY_URL, {
        token: tokenString,
      })
      .then((response) => {
        setTransfers(response);
        console.log(response);
      })
      .then(() => {
        setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white rounded-md px-2 py-1"
        onClick={handleSubmit}
      >
        Pokaż transakcje
      </button>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center"></div>
            </th>
            <th scope="col" className="px-6 py-3">
              Nadawca
            </th>
            <th scope="col" className="px-6 py-3">
              Odbiorca
            </th>
            <th scope="col" className="px-6 py-3">
              Kwota przelewu
            </th>
            <th scope="col" className="px-6 py-3">
              Tytuł przelewu
            </th>
            <th scope="col" className="px-6 py-3">
              Data przelewu
            </th>
          </tr>
        </thead>
        <tbody>
          {status?.type === "success" &&
            transfers.data.map((data, i) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={i}
              >
                <td className="w-4 p-4"></td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {data.sender}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {data.receiver}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {data.amount}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {data.title}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {data.date}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;
