// src/components/ui/Button.jsx

// import React from 'react';

// const Button = ({ children, className, onClick }) => {
//   return (
//     <button
//       className={`bg-[#FF7B08] hover:bg-[#e25c0fec] text-white px-6 py-2 rounded-full ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;


// Button.jsx
// import React from 'react';

// const Button = ({ children, className = '', onClick, type = 'button', ...rest }) => {
//   return (
//     <button
//       className={`bg-[#E88025] hover:bg-[#E88025] text-white px-6 py-2 rounded-full ${className}`}
//       onClick={onClick}
//       className={`!bg-[#FF7B08] !text-white !border-[#FF7B08] hover:!bg-[#e25c0f] font-semibold px-6 py-2 border ${className || 'rounded-full'}`}

//       {...rest}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

const Button = ({ children, className = '', onClick, type = 'button', ...rest }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`!bg-[#FF7B08] !text-white !border-[#FF7B08] hover:!bg-[#e25c0f] font-semibold px-6 py-2 border rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;