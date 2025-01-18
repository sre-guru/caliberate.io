"use client";

import React from 'react';
import { Upload, Search, FileClock, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Upload Job Requirements",
    description: "Define your role requirements and candidate criteria in our intuitive interface."
  },
  {
    icon: Search,
    title: "AI Screening",
    description: "Our AI conducts initial screenings through smart questionnaires and assessments."
  },
  {
    icon: FileClock,
    title: "Expert Review",
    description: "Industry experts review AI-filtered candidates and provide detailed insights."
  },
  {
    icon: UserCheck,
    title: "Make Your Decision",
    description: "Receive comprehensive reports and make data-driven hiring decisions."
  }
];

const HowItWorksSection = () => {
  return (
      <section id="how-it-works" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Four simple steps to transform your hiring process
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute hidden lg:block top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gray-900 rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                {/* Circle with gradient border */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black p-0.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;