"use client";

import React from 'react';

const testimonials = [
  {
    quote: "This platform has transformed our hiring process. We've reduced time-to-hire by 50% while finding better candidates.",
    author: "Sarah Chen",
    role: "Head of HR, TechCorp",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "The AI-powered interviews are incredibly insightful. We get deep candidate insights we never had before.",
    author: "Michael Rodriguez",
    role: "Tech Lead, StartupX",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "Outstanding platform that combines the best of AI and human expertise. Game-changer for our recruitment.",
    author: "Emily Thompson",
    role: "COO, InnovateNow",
    image: "/api/placeholder/64/64"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Trusted by Industry Leaders
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition-all duration-300"
            >
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;