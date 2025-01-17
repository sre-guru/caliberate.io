// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Services', href: '#services' },
    { title: 'How It Works', href: '#how-it-works' },
    { title: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">InterviewPro</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                {link.title}
              </a>
            ))}
            <Button onClick={() => console.log('Book Now clicked!')}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map(link => (
              <a
                key={link.title}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => {
                console.log('Book Now clicked!');
                setIsMenuOpen(false);
              }}
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;