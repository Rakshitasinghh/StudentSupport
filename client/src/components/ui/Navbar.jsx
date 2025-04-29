import React from 'react';
import revalogo from "../../assets/reva.png";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4">
      <div className="flex items-center gap-3">
        <img src={revalogo} alt="Reva Logo" style={{ width: '220px', height: 'auto' }} />
      </div>

      <div className="flex items-center space-x-8 text-gray-800 font-medium">
        <a href="#" className="!text-black hover:text-black">Home</a>
        <a href="#" className="!text-black hover:text-black">About</a>
        <a href="#" className="!text-black hover:text-black">Complaint</a>
        <span>👤</span>
      </div>
    </nav>
  );
};

export default Navbar;
