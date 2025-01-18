"use client";

import React from 'react';

const FeatureCard = ({ icon: Icon, title, desc, isHovered, onHover, onLeave }) => {
  return (
    <div
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all cursor-pointer border border-white/10"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
          <Icon
            className={`w-6 h-6 transition-colors ${
              isHovered
                ? 'text-purple-400'
                : 'text-indigo-400'
            }`}
          />
        </div>
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-gray-400">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;