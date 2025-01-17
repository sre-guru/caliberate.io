// src/components/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "px-4 py-2 rounded-lg transition duration-300 ";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-white hover:bg-gray-100 text-blue-600 border border-blue-600",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-600"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;