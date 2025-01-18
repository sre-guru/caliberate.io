"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
import GetStartedDialog from './GetStartedDialog';

const HeroSection = ({ isDialogOpen, onGetStarted, onCloseDialog }) => {
  const handleWatchDemo = () => {
    console.log("Watch demo clicked");
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Background Pattern/Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavigationMenu onGetStarted={onGetStarted} />

        {/* Hero Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          {/* Main Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Hiring With{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                AI-Powered Insights
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Streamline your recruitment process with advanced AI screening and expert
              human oversight. Get better candidates, faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 transition-all group text-white"
              >
                Get Started
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 rounded-lg font-medium border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Trusted by leading companies
              </p>
              <div className="flex justify-center space-x-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded opacity-50 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetStartedDialog
        isOpen={isDialogOpen}
        onClose={onCloseDialog}
      />
    </div>
  );
};

export default HeroSection;