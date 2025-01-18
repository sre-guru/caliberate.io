"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = ({ onGetStarted }) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join forward-thinking companies that are revolutionizing their recruitment process with AI-powered insights and expert oversight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 transition-all group text-white"
            >
              Get Started Now
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 rounded-lg font-medium border border-gray-700 hover:bg-gray-800 transition-all text-white">
              Schedule Demo
            </button>
          </div>

          <p className="mt-6 text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;