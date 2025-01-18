"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingSection = ({ onGetStarted }) => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: [
        "Up to 10 interviews/month",
        "Basic AI analysis",
        "Email support",
        "Basic reporting",
        "1 team member"
      ]
    },
    {
      name: "Professional",
      price: "149",
      popular: true,
      features: [
        "Up to 50 interviews/month",
        "Advanced AI analysis",
        "Priority support",
        "Advanced reporting",
        "5 team members",
        "Custom branding"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited interviews",
        "Full AI suite",
        "24/7 dedicated support",
        "Custom reporting",
        "Unlimited team members",
        "API access"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 transform scale-105'
                  : 'bg-gradient-to-br from-gray-800 to-gray-900'
              } hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-300">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <ArrowRight className="w-5 h-5 mr-2 text-indigo-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={onGetStarted}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-white text-indigo-600 hover:bg-gray-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;