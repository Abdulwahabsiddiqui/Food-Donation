import React from 'react';
import { useDonations } from '../context/DonationContext.jsx';
import BottomNav from '../components/BottomNav';
import mtbg from "../assets/bg.png";

const RequestsPage = () => {
  const { donations, claimDonation } = useDonations();

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
      <h1 className="text-xl font-bold mb-4 text-yellow-300 drop-shadow">Requests</h1>
      {donations.length === 0 ? (
        <p className="text-yellow-200 bg-black bg-opacity-60 p-2 rounded">No donations yet.</p>
      ) : (
        donations.map((item, index) => (
          <div
            key={index}
            className="border p-3 rounded mb-3 shadow-sm bg-gray-900 bg-opacity-80 text-yellow-100"
          >
            <h2 className="font-semibold text-yellow-300">{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Expiry: {item.expiry}</p>

            <p>
              Location:{" "}
              {item.location && item.location.lat !== undefined ? (
                <a
                  href={`https://www.google.com/maps?q=${item.location.lat},${item.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300"
                >
                  View on Map
                </a>
              ) : (
                "Not provided"
              )}
            </p>

            <p>Status: {item.status}</p>

            {item.status === 'Pending' && (
              <button
                onClick={() => claimDonation(index)}
                className="mt-2 bg-green-600 text-white py-1 px-3 rounded-full hover:bg-green-700 transition"
              >
                Accept
              </button>
            )}
          </div>
        ))
      )}
      <BottomNav />
    </div>
  );
};

export default RequestsPage;
