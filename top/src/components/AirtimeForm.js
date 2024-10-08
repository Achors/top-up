"use client";

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';


const api = axios.create({
  baseURL: 'http://localhost:3002', 
  headers: {
    'Content-Type': 'application/json',
  },
});

const Airtime = () => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});
  const [showSuccessImage, setShowSuccessImage] = useState(false);

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
    setErrors({ ...errors, provider: '' });
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    setErrors({ ...errors, phoneNumber: '' });
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setErrors({ ...errors, amount: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!selectedProvider) {
      validationErrors.provider = 'Please select a service provider.';
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = 'Please enter your phone number.';
    } else if (!/^254\d{9}$/.test(phoneNumber)) {
      validationErrors.phoneNumber = 'Please enter a valid phone number (254xxx xxxxxxx).';
    }

    if (!amount) {
      validationErrors.amount = 'Please enter the amount of airtime.';
    } else if (amount <= 0) {
      validationErrors.amount = 'Amount must be greater than 0.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await api.post('/airtime/purchase', {
          provider: selectedProvider,
          phoneNumber: phoneNumber, 
          amount: parseInt(amount, 10),
        });

        console.log('Airtime purchased successfully:', response.data);
        setShowSuccessImage(true);
        //clearing form field
        setSelectedProvider('');
        setPhoneNumber('');
        setAmount('');
        setErrors({});
      } catch (error) {
        console.error('There was an error processing the airtime purchase:', error.response?.data || error.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl text-green-600 font-bold mb-4">Buy Airtime</h1>
      <p className="text-xl text-slate-600 font-bold mb-4 text-center">
        Buy airtime for any Network <br /> instantly & at no extra cost
      </p>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4 w-full">
          <div className="flex items-center mb-2">
            <Image src="/Indicator1.png" width={20} height={20} alt="Indicator" />
            <label className="ml-2 text-sm font-medium text-gray-700">
              What is your operator?
            </label>
          </div>
          <div className="flex justify-around">
            <div
              className={`p-1 rounded-lg ${selectedProvider === 'Safaricom' ? 'border-2 border-green-600' : ''}`}
              onClick={() => handleProviderClick('Safaricom')}
            >
              <Image src="/Safaricom.png" alt="Safaricom Logo" width={50} height={30} style={{height:'auto'}} />
            </div>
            <div
              className={`p-1 rounded-lg ${selectedProvider === 'Airtel' ? 'border-2 border-green-600' : ''}`}
              onClick={() => handleProviderClick('Airtel')}
            >
              <Image src="/Airtel.png" alt="Airtel Logo" width={50} height={50} />
            </div>
            <div
              className={`p-1 rounded-lg ${selectedProvider === 'Telkom' ? 'border-2 border-green-600' : ''}`}
              onClick={() => handleProviderClick('Telkom')}
            >
              <Image src="/Telkom.png" alt="Telkom Logo" width={50} height={50} />
            </div>
          </div>
          {errors.provider && (
            <p className="text-red-600 text-sm mt-1">{errors.provider}</p>
          )}
        </div>

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
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="254xxx xxxxxxx"
            className="mt-1 block w-full px-3 font-medium text-slate-900 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

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
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            className="mt-1 font-medium text-slate-900 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.amount && (
            <p className="text-red-600 text-sm mt-1">{errors.amount}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Top Up
        </button>

        <div className="flex justify-center mt-6">
          <Image
            src="/top-up logo.png" 
            alt="lipad Logo"
            width={110} 
            height={50} 
          />
        </div>
      </form>

      {showSuccessImage && (
        <div className="fixed top-4 right-4">
          <div className="relative">
            <Image
              src="/green rec.png"
              alt="Green Background"
              width={200}
              height={80}
              className="absolute z-0"
            />
            <div className="relative z-10 flex space-x-1">
              <Image src="/check_circle_24px.png" alt="Check Circle" width={24} height={20} />
              <Image src="/req.png" alt="Request Icon" width={100} height={14} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Airtime;
