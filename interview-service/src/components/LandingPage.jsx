import React, { useState } from 'react';
import { Calendar, Users, CheckCircle, ArrowRight, Search, Star, Code } from 'lucide-react';

const ModernLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              InterviewPro
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition">Solutions</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Process</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Pricing</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:opacity-90 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Master Your Interview Game
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Get personalized interview coaching from top industry professionals.
              Real-time feedback, advanced practice scenarios, and AI-powered insights.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full hover:opacity-90 transition flex items-center">
                Start Practice
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-6 h-6" />,
              title: "AI-Powered Analysis",
              description: "Get instant feedback on your responses with our advanced AI system"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Expert Reviewers",
              description: "Practice with professionals from FAANG and Fortune 500 companies"
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: "Technical & Behavioral",
              description: "Comprehensive coverage of both technical and soft skills"
            }
          ].map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-sm hover:transform hover:-translate-y-1 transition duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Top Candidates</h2>
          <div className="flex justify-center space-x-8 mt-8">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white/10 px-8 py-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="relative p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Excel?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who have mastered their interview skills with us
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:opacity-90 transition font-semibold">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLandingPage;