// src/components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;