// context/DonationContext.jsx
import React, { createContext, useContext, useState } from 'react';

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);

  const addDonation = (donation) => {
    setDonations(prev => [...prev, { ...donation, status: 'Pending' }]);
  };

  const claimDonation = (index) => {
    setDonations(prev =>
      prev.map((item, i) => i === index ? { ...item, status: 'Claimed' } : item)
    );
  };

  return (
    <DonationContext.Provider value={{ donations, addDonation, claimDonation }}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonations = () => useContext(DonationContext);
