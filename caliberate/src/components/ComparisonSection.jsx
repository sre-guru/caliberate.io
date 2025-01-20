"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      traditional: "Non-technical recruiters screening developers",
      modern: "Senior developers reviewing technical skills",
      benefit: "95% better technical assessment accuracy"
    },
    {
      traditional: "Generic behavioral interviews",
      modern: "In-depth technical discussions & pair programming",
      benefit: "85% better skill evaluation"
    },
    {
      traditional: "Keyword matching resumes",
      modern: "Real-world coding challenges & system design",
      benefit: "3x more qualified candidates identified"
    },
    {
      traditional: "Standardized technical tests",
      modern: "Customized technical interviews by domain experts",
      benefit: "90% hiring manager satisfaction"
    },
    {
      traditional: "HR-driven technical screening",
      modern: "Peer-level technical assessment",
      benefit: "4x reduction in bad hires"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Developer-Led Hiring
          </h2>
          <p className="text-xl text-gray-400">
            See how technical experts transform your engineering recruitment
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left text-gray-400">Traditional Process</th>
                <th className="py-4 px-6 text-left text-gray-400">Our Technical Process</th>
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