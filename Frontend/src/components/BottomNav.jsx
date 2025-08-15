import React from 'react';
import { Home, Heart, FileText, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-inner flex justify-around py-2">
      <NavItem icon={<Home size={20} />} label="Home" onClick={() => navigate('/')} />
      <NavItem icon={<Heart size={20} />} label="Donate" onClick={() => navigate('/donate')} />
     <NavItem icon={<FileText size={20} />} label="Requests" onClick={() => navigate('/requests')} />

      <NavItem icon={<User size={20} />} label="Profile" onClick={() => navigate('/profile')} />

    </div>
  );
};

const NavItem = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex flex-col items-center text-gray-600 hover:text-black text-xs cursor-pointer"
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default BottomNav;
