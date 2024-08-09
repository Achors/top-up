import Image from 'next/image';

const Airtime = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl text-green-600 font-bold mb-4">Buy Airtime</h1>
      <p className="text-xl text-slate-600 font-bold mb-4">Buy airtime for any Network <br /> instantly & at no extra cost</p>

      {/* Service Provider Images */}
      
      <div className="flex justify-around mb-4 w-full">
      <label className="block text-sm font-medium text-gray-700">What is your operator?</label>
        <Image src="/provider1.png" alt="Provider 1" width={60} height={60} className="object-cover" />
        <Image src="/provider2.png" alt="Provider 2" width={60} height={60} className="object-cover" />
        <Image src="/provider3.png" alt="Provider 3" width={60} height={60} className="object-cover" />
      </div>

      {/* Phone Number Input */}
      <div className="mb-4 w-full">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">What is your phone number</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter phone number"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Amount Input */}
      <div className="mb-4 w-full">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">How much airtime do you want</label>
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
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Top Up
      </button>

      {/* Logo */}
      <div className="mt-6">
        <Image 
        src="/top-up logo.png" 
        alt="Logo" 
        width={100} 
        height={50} />
      </div>
    </div>
  );
};

export default Airtime;
