"use client";

import React from 'react';

const Navigation = ({ onGetStarted }) => {
  return (
    <nav className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Caliberate
          </div>
          <div className="flex gap-8">
            <button className="text-white/70 hover:text-white transition-colors">Product</button>
            <button className="text-white/70 hover:text-white transition-colors">Solutions</button>
            <button className="text-white/70 hover:text-white transition-colors">Pricing</button>
          </div>
          <button
            onClick={onGetStarted}
            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;