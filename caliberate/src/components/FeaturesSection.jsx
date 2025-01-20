"use client";

import React from 'react';
import { Code, Terminal, Users, Clock, FileCode, Laptop } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: "Expert Technical Screening",
    description: "Senior developers conduct in-depth technical interviews tailored to your stack."
  },
  {
    icon: Users,
    title: "Peer Assessment",
    description: "Developers evaluating developers ensures accurate skill assessment."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose between face-to-face or remote technical interviews at your convenience."
  },
  {
    icon: Code,
    title: "Real-world Challenges",
    description: "Live coding sessions and system design discussions based on actual scenarios."
  },
  {
    icon: FileCode,
    title: "Custom Evaluation",
    description: "Technical assessments customized to your team's specific requirements."
  },
  {
    icon: Laptop,
    title: "Comprehensive Reports",
    description: "Detailed technical feedback from experienced developers after each interview."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Hiring Done Right
          </h2>
          <p className="text-xl text-gray-400">
            Developer-led interviews that actually assess technical capability
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