import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddDonationPage from './pages/AddDonationPage';
import RequestsPage from './pages/RequestsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DonationProvider } from './context/DonationContext.jsx'; // 👈 new
import './index.css';  // ← CSS import here
import ProfilePage from './pages/ProfilePage.jsx'; // 👈 import
ReactDOM.createRoot(document.getElementById('root')).render(
  <DonationProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/donate" element={<AddDonationPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </DonationProvider>
);
