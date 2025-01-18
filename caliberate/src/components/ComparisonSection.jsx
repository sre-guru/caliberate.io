"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      traditional: "Manual resume screening",
      modern: "AI-powered candidate analysis",
      benefit: "90% faster initial screening"
    },
    {
      traditional: "Subjective interviews",
      modern: "Structured AI + expert assessment",
      benefit: "70% more accurate predictions"
    },
    {
      traditional: "Limited candidate pool",
      modern: "Global talent access",
      benefit: "5x larger qualified candidate pool"
    },
    {
      traditional: "Bias-prone decisions",
      modern: "Objective data-driven choices",
      benefit: "80% reduction in hiring bias"
    },
    {
      traditional: "Delayed feedback loops",
      modern: "Real-time insights",
      benefit: "Immediate performance metrics"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Modern Hiring
          </h2>
          <p className="text-xl text-gray-400">
            See how our platform transforms traditional recruitment
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left text-gray-400">Traditional Process</th>
                <th className="py-4 px-6 text-left text-gray-400">Our Platform</th>
                <th className="py-4 px-6 text-left text-gray-400">Your Benefit</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <X className="w-5 h-5 text-red-500 mr-2" />
                      <span className="text-gray-300">{item.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-300">{item.modern}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-indigo-400 font-medium">{item.benefit}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;