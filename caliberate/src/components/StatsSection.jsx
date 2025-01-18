"use client";

import React from 'react';

const stats = [
  { number: "10k+", label: "Interviews" },
  { number: "98%", label: "Success Rate" },
  { number: "24h", label: "Average Time" }
];

const StatsSection = () => {
  return (
    <div className="mt-20 grid grid-cols-3 gap-8 text-center">
      {stats.map((stat, i) => (
        <div key={i}>
          <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            {stat.number}
          </div>
          <div className="text-gray-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;