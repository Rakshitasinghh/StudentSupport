// src/components/ui/Button.jsx

import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-[#E88025] hover:bg-[#E88025] text-white px-6 py-2 rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
