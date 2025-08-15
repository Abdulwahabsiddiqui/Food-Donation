import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import mtbg from '../assets/bg.png';

const ProfilePage = () => {
  const [step, setStep] = useState(1); // 1: form, 2: role selection
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill all fields');
      return;
    }
    setStep(2); // move to role selection
  };

  const handleRoleSelect = (role) => {
    if (role === 'Donater') {
      navigate('/donate');
    } else if (role === 'Accepter') {
      navigate('/requests');
    }
  };

  return (
    <div
      className="max-w-md mx-auto p-4 pb-24 min-h-screen"
      style={{
        backgroundImage: `url(${mtbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-xl font-bold mb-4 text-center text-yellow-300 drop-shadow">
        {step === 1 ? 'Register Your Profile' : 'Select Your Role'}
      </h1>

      {step === 1 && (
        <form
          onSubmit={handleFormSubmit}
          className="bg-gray-900 bg-opacity-80 p-4 rounded-xl shadow space-y-4"
        >
          <div>
            <label className="block text-yellow-300 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-400 bg-gray-100 text-gray-800"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-yellow-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-400 bg-gray-100 text-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-yellow-300 mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-400 bg-gray-100 text-gray-800"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      )}

      {step === 2 && (
        <div className="bg-gray-900 bg-opacity-80 p-4 rounded-xl shadow space-y-4 text-center">
          <p className="text-yellow-200 mb-2">Welcome, {name}!</p>
          <p className="text-yellow-300 mb-4">Please select your role:</p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleRoleSelect('Donater')}
              className="w-1/2 bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
            >
              Donater
            </button>
            <button
              onClick={() => handleRoleSelect('Accepter')}
              className="w-1/2 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
            >
              Accepter
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default ProfilePage;
