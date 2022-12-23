import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
        <div class="flex justify-center items-center w-screen h-screen bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
    
            <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div class="flex">
                    <h1 class="font-bold uppercase text-5xl">Skontaktuj się z nami</h1>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Imie" />
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Nazwisko" />
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email*" />
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number" placeholder="Numer telefonu*" />
            </div>
                    <div class="my-4">
                        <textarea placeholder="Wiadomość" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div class="my-2 w-1/2 lg:w-1/4">
                        <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline">
                Wyślij wiadomość
              </button>
                    </div>
                </div>
    
                <div
                    class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                    <div class="flex flex-col text-white">
                        <h1 class="font-bold uppercase text-4xl my-4">Wyślij listownie</h1>
                        <p class="text-gray-400">Masz dokumenty do banku? Wyślij je listownie.</p>
    
                        <div class="flex my-4 w-2/3 lg:w-1/2">
                            <div class="flex flex-col">
                                <i class="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div class="flex flex-col">
                  <h2 class="text-2xl">Siedziba główna</h2>
                  <p class="text-gray-400">Powstańców Wielkopolskich 5, 61-895 Poznań</p>
                </div>
              </div>
              
              <div class="flex my-4 w-2/3 lg:w-1/2">
                <div class="flex flex-col">
                  <i class="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div class="flex flex-col">
                  <h2 class="text-2xl">Zadzwoń do nas</h2>
                  <p class="text-gray-400">Tel: 123456789</p>
                  <p class="text-gray-400">Fax: 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default ContactForm;
