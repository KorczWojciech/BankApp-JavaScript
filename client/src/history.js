import React, { useState, useEffect } from 'react';



const HistoryPage = () => {


    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">

                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Nr konta odbiorcy
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
            <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">

                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    1111 1111 1111 1111 1111 1111 11
                </th>
                <td className="px-6 py-4">
                    100 zł
                </td>
                <td className="px-6 py-4">
                    Tytuł
                </td>
                <td className="px-6 py-4">
                    07.01.2023
                </td>

            </tr>
            </tbody>
        </table>
    )
};

export default HistoryPage;