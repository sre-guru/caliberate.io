import React, { useState } from "react";
import { ArrowRight, ChevronRight, Users, Code, Terminal, Play, X, Check, Sparkles, Award, Clock } from "lucide-react";
import NavigationMenu from "./NavigationMenu";
import GetStartedDialog from "./GetStartedDialog";

// Video Modal Component remains the same
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
      <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/oqiWQrzCnEw?autoplay=1&rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const HeroSection = ({ isDialogOpen, onGetStarted, onCloseDialog }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const mainFeatures = [
    {
      icon: Code,
      title: "Tech-to-Tech Interviews",
      description: "Real developers and DevOps engineers conducting technical interviews, ensuring genuine expertise evaluation."
    },
    {
      icon: Users,
      title: "Peer-Level Assessment",
      description: "Senior engineers assess candidates through hands-on coding sessions and architecture discussions."
    },
    {
      icon: Terminal,
      title: "Deep Technical Screening",
      description: "In-depth technical discussions and real-world problem-solving scenarios led by industry veterans."
    },
    {
      icon: Clock,
      title: "Flexible Interview Formats",
      description: "Choose between face-to-face or remote technical interviews based on your team's preferences."
    }
  ];

  const testimonials = [
    {
      quote: "Finally, a platform where actual engineers handle the technical screening. The quality of discussions and candidate assessment is unmatched.",
      author: "David Kumar",
      role: "Senior DevOps Lead, CloudScale",
      image: null
    },
    {
      quote: "The technical depth of the interviewing engineers is impressive. They know exactly what to look for in a developer.",
      author: "Maria Santos",
      role: "Engineering Director, TechFlow",
      image: null
    }
  ];

  const metrics = [
    { label: "Technical Accuracy", value: "97%", description: "Hire success rate for technical roles" },
    { label: "Expert Network", value: "500+", description: "Active technical interviewers" },
    { label: "Retention Rate", value: "92%", description: "1-year technical hire retention" },
    { label: "Team Satisfaction", value: "96%", description: "Hiring team satisfaction rate" }
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-50/30 dark:from-indigo-900/20 to-transparent" />
      </div>

      <div className="relative z-10">
        <NavigationMenu onGetStarted={onGetStarted} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                By Developers, For Developers
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Technical Hiring Done{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Right
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Connect with a network of senior developers and DevOps engineers who conduct thorough technical interviews. Because the best technical hires come from technical experts who know what to look for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Hiring
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-gray-700 dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch How It Works
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {metrics.map(({ label, value, description }) => (
              <div key={label} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{value}</div>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">{label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{description}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {mainFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30">
                    <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-600 text-white font-bold text-lg shrink-0"
                  >
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <GetStartedDialog isOpen={isDialogOpen} onClose={onCloseDialog} />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
};

export default HeroSection;