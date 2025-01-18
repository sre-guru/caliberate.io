"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ContactDialog from './ContactDialog';

const NavigationMenu = ({ handleGetStarted }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const menuItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="border-b border-gray-800 fixed w-full top-0 bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-white">
                hire<span className="text-indigo-500">AI</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleContactClick}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>

              <button
                onClick={handleGetStarted}
                className="bg-indigo-600 px-4 py-2 rounded-lg text-white hover:bg-indigo-500 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
                <button
                  onClick={handleGetStarted}
                  className="bg-indigo-600 px-4 py-2 rounded-lg text-white hover:bg-indigo-500 transition-colors inline-block"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ContactDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default NavigationMenu;