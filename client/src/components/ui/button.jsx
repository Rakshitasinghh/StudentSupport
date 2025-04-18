// src/components/ui/Button.jsx

import React from 'react';

const button = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-[#f26a21] hover:bg-[#e25c0f] text-white px-6 py-2 rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default button;
