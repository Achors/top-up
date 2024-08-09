"use client";

import { useState } from 'react';
import Image from 'next/image';

const Airtime = () => {
  const [selectedProvider, setSelectedProvider] = useState('');

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl text-green-600 font-bold mb-4">Buy Airtime</h1>
      <p className="text-xl text-slate-600 font-bold mb-4 text-center">
        Buy airtime for any Network <br /> instantly & at no extra cost
      </p>

      {/* Service Provider Images */}
      <div className="mb-4 w-full">
        <div className="flex items-center mb-2">
          <Image src="/Indicator1.png" width={20} height={20} alt="Indicator" />
          <label className="ml-2 text-sm font-medium text-gray-700">
            What is your operator?
          </label>
        </div>
        <div className="flex justify-around">
          <div
            className={`p-1 rounded-lg ${
              selectedProvider === 'Safaricom' ? 'border-2 border-green-600' : ''
            }`}
            onClick={() => handleProviderClick('Safaricom')}
          >
            <Image src="/Safaricom.png" alt="Safaricom Logo" width={50} height={30} />
          </div>
          <div
            className={`p-1 rounded-lg ${
              selectedProvider === 'Airtel' ? 'border-2 border-green-600' : ''
            }`}
            onClick={() => handleProviderClick('Airtel')}
          >
            <Image src="/Airtel.png" alt="Airtel Logo" width={50} height={50} />
          </div>
          <div
            className={`p-1 rounded-lg ${
              selectedProvider === 'Telkom' ? 'border-2 border-green-600' : ''
            }`}
            onClick={() => handleProviderClick('Telkom')}
          >
            <Image src="/Telkom.png" alt="Telkom Logo" width={50} height={50} />
          </div>
        </div>
      </div>

      {/* Phone Number Input */}
      <div className="mb-4 w-full">
        <div className="flex items-center mb-2">
          <Image src="/Indicator2.png" width={20} height={20} alt="Indicator" />
          <label htmlFor="phone" className="ml-2 text-sm font-medium text-gray-700">
            What is your phone number
          </label>
        </div>
        <input
          type="tel"
          id="phone"
          placeholder="+254 xxx xxx xxx"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Amount Input */}
      <div className="mb-4 w-full">
        <div className="flex items-center mb-2">
          <Image src="/Indicator3.png" width={20} height={20} alt="Indicator" />
          <label htmlFor="amount" className="ml-2 text-sm font-medium text-gray-700">
            How much airtime do you want
          </label>
        </div>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
      >
        Top Up
      </button>

      {/* Logo */}
      <div className="mt-6">
        <Image src="/top-up logo.png" alt="Top Up Logo" width={128} height={128} />
      </div>
    </div>
  );
};

export default Airtime;
