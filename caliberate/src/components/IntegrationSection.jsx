"use client";

import React from 'react';
import { Code } from 'lucide-react';

const IntegrationSection = () => {
  const integrations = [
    {
      category: "ATS Systems",
      platforms: ["Workday", "Greenhouse", "Lever", "iCIMS"]
    },
    {
      category: "HRIS",
      platforms: ["BambooHR", "Namely", "ADP", "Rippling"]
    },
    {
      category: "Calendar",
      platforms: ["Google Calendar", "Outlook", "iCloud", "Microsoft 365"]
    },
    {
      category: "Communication",
      platforms: ["Slack", "Microsoft Teams", "Discord", "Zoom"]
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-400">
            Works with your existing tools and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {integration.category}
              </h3>
              <div className="space-y-3">
                {integration.platforms.map((platform, pIndex) => (
                  <div
                    key={pIndex}
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <Code className="w-5 h-5 mr-2" />
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* API Section */}
        <div className="mt-16 bg-gray-900 rounded-xl p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Developer-Friendly API
            </h3>
            <p className="text-gray-400">
              Build custom integrations with our comprehensive API
            </p>
          </div>

          <div className="bg-black rounded-lg p-6 font-mono text-sm">
            <pre className="text-gray-300">
              <code>{`// Example API Integration
const response = await fetch('https://api.platform.com/v1/candidates', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    position_id: 'YOUR_POSITION_ID',
    candidate_data: candidateInfo
  })
});`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;