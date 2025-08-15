import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import { useDonations } from './context/DonationContext';
import mtbg from './assets/bg.png';

const App = () => {
  const navigate = useNavigate();
  const { donations } = useDonations();
  const [stats, setStats] = useState({ meals: 0, donors: 0 });

  useEffect(() => {
    // Make sure quantity is treated as a number
    const totalMeals = donations.reduce((sum, item) => sum + (parseFloat(item.quantity) || 0), 0);
    setStats({ meals: totalMeals, donors: donations.length });
  }, [donations]);

  return (
    <div
      className="max-w-md mx-auto p-4 pb-24 font-sans min-h-screen"
      style={{
        backgroundImage: `url(${mtbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <marquee className="text-2xl font-bold mb-5 text-center text-yellow-300 drop-shadow-lg">
        🍱 Food Donation App
      </marquee>

      <div className="bg-green-100 bg-opacity-90 p-5 rounded-2xl shadow-lg mb-6 text-center border border-green-200">
        <h2 className="text-lg font-semibold text-green-800">
          Donate Food to Those In Need
        </h2>
        <button
          className="mt-4 bg-green-600 text-white py-2 px-6 rounded-full text-sm font-medium shadow hover:bg-green-700 transition duration-200"
          onClick={() => navigate('/donate')}
        >
          + Donate Food
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 bg-opacity-90 rounded-xl shadow p-4 text-center border border-blue-200">
          <p className="text-2xl font-bold text-green-700">{stats.meals} <span className="text-sm">(kg)</span></p>
          <p className="text-sm text-blue-700">Meals Donated</p>
        </div>
        <div className="bg-purple-100 bg-opacity-90 rounded-xl shadow p-4 text-center border border-purple-200">
          <p className="text-2xl font-bold text-purple-700">{stats.donors}</p>
          <p className="text-sm text-purple-600">Active Donors</p>
        </div>
      </div>

      <div className="mb-3">
        <h3 className="text-lg font-semibold text-yellow-200 drop-shadow mb-2 text-center">
          🏢 Your Donation Center
        </h3>
        <div className="space-y-3">
          {donations.map((item, index) => (
            <div
              key={index}
              className="border border-green-300 bg-gray-900 bg-opacity-80 rounded-xl p-3 shadow text-yellow-100"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-yellow-300">{item.name}</span>
                <span className="text-sm text-green-400">
                  {item.quantity} <span className="text-xs text-green-300">(kg)</span>
                </span>
              </div>
              <p className="text-xs text-gray-400">Status: {item.status}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default App;
