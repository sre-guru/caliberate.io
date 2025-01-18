"use client";

import React from 'react';
import { Code, Brain, Shield, Clock, Cloud, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Screening",
    description: "Advanced algorithms analyze candidate responses in real-time for deeper insights."
  },
  {
    icon: Shield,
    title: "Bias Prevention",
    description: "Structured evaluation criteria ensure fair and objective assessments."
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Reduce hiring time by 60% with automated initial screenings."
  },
  {
    icon: Code,
    title: "Technical Assessment",
    description: "Built-in coding challenges and architecture design interviews."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamlessly integrate with your existing HR management systems."
  },
  {
    icon: Zap,
    title: "Instant Reports",
    description: "Get detailed candidate evaluations immediately after interviews."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Hiring
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to streamline your recruitment process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;