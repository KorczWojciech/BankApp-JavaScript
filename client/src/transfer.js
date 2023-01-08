import React, { useState, useEffect } from 'react';
import HomePage from "./home";
import axios from "./api/axios";
//const { useState } = require("react");
const TRANSFER_URL = "/transfer";

const TransferPage = () => {
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(TRANSFER_URL, {
            "receiver": receiver,
            "amount": amount,
            "title": title
        })
            .then((response) => {
                    console.log(response);
                }
            )
            .catch((error) => {
                    console.log(error);
                }
            );
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Przelew</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input autoComplete="off" id="receiver" name="receiver" type="text"
                                           className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                           placeholder="Nr konta odbiorcy" onChange={event => setReceiver(event.target.value)}/>
                                    <label htmlFor="receiver"
                                           className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Nr konta odbiorcy</label>
                                </div>
                                <div className="relative">
                                    <input autoComplete="off" id="amount" name="amount" type="number"
                                           className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                           placeholder="Kwota przelewu" onChange={event => setAmount(event.target.value)}/>
                                    <label htmlFor="amount"
                                           className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Kwota przelewu</label>
                                </div>
                                <div className="relative">
                                    <input autoComplete="off" id="title" name="title" type="text"
                                           className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                           placeholder="Tytuł przlewu"
                                           onChange={event => setTitle(event.target.value)}/>
                                    <label htmlFor="title"
                                           className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Tytuł przelewu</label>
                                </div>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-2 py-1"
                                            onClick={handleSubmit}>Wykonaj przelew
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TransferPage;