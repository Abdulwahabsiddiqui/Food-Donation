import React from 'react';

const DonationCard = ({ name, status, details }) => {
  const isClaimed = status.toLowerCase() === 'claimed';
  const badgeClass = isClaimed
    ? 'bg-green-100 text-green-700'
    : 'bg-yellow-100 text-yellow-700';

  return (
    <div className="bg-white shadow p-4 rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-800">{name}</span>
        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${badgeClass}`}>
          {status}
        </span>
      </div>
      {details && <p className="text-xs text-gray-500">{details}</p>}
    </div>
  );
};

export default DonationCard;
