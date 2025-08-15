import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDonations } from '../context/DonationContext.jsx';
import BottomNav from '../components/BottomNav';
import mtbg from '../assets/bg.png';

const AddDonationPage = () => {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState('');
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();
  const { addDonation } = useDonations();

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericQty = parseFloat(quantity);

    if (isNaN(numericQty) || numericQty <= 0) {
      alert('Please enter a valid positive quantity (e.g. 10, 5.5)');
      return;
    }

    if (!location) {
      alert('Getting your location. Please wait a moment and try again.');
      return;
    }

    const newDonation = {
      name: foodType,
      quantity: numericQty,
      expiry,
      location, // object { lat, lng }
    };

    addDonation(newDonation);
    setFoodType('');
    setQuantity('');
    setExpiry('');
    navigate('/requests');
  };

  // Get location when component loads
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error('Location error:', err);
          alert('Could not get location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }, []);

  return (
    <div
      className="max-w-md mx-auto p-4 pb-24 min-h-screen"
      style={{
        backgroundImage: `url(${mtbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-xl font-bold mb-6 text-center text-yellow-200 drop-shadow">
        Post a Donation
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-800 bg-opacity-90 p-4 rounded-lg shadow"
      >
        <div>
          <label className="block text-yellow-300 mb-1">Food Type</label>
          <input
            type="text"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-lg bg-gray-100 text-gray-800"
            placeholder="e.g. Rice, Bread"
            required
          />
        </div>

        <div>
          <label className="block text-yellow-300 mb-1">Quantity (kg)</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-lg bg-gray-100 text-gray-800"
            placeholder="e.g. 10"
            required
          />
        </div>

        <div>
          <label className="block text-yellow-300 mb-1">Expiry Date</label>
          <input
            type="date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-lg bg-gray-100 text-gray-800"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
        >
          Post Donation
        </button>

        {location ? (
          <p className="text-xs text-green-300 text-center mt-2">
            Location captured: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </p>
        ) : (
          <p className="text-xs text-yellow-200 text-center mt-2">Fetching your location...</p>
        )}
      </form>

      <BottomNav />
    </div>
  );
};

export default AddDonationPage;
