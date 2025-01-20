"use client";

import React from 'react';
import { Server, Cloud, Code, GitBranch, Users, Layout, Shield, LineChart, Network, Terminal, Eye, Cpu } from 'lucide-react';

const AboutSection = () => {
  const expertise = [
    {
      icon: Cloud,
      title: "Infrastructure & Platform",
      description: "DevOps Engineers, SREs, Platform Engineers, and Infrastructure Experts who build and maintain scalable cloud systems across AWS, GCP, and Azure."
    },
    {
      icon: Terminal,
      title: "System Administration",
      description: "Linux/Unix Experts, System Administrators, and Infrastructure Specialists with deep knowledge of operating systems and server management."
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "IaC specialists proficient in Terraform, CDK, BICEP, ARM templates, and other infrastructure automation tools for cloud provisioning."
    },
    {
      icon: Eye,
      title: "Observability & Reliability",
      description: "Observability Engineers and SREs focused on monitoring, logging, tracing, and maintaining high-availability distributed systems."
    },
    {
      icon: Cpu,
      title: "Container & Orchestration",
      description: "Kubernetes Experts, Container Platform Engineers, and Cloud-Native specialists who design and manage containerized environments."
    },
    {
      icon: GitBranch,
      title: "CI/CD & Automation",
      description: "Pipeline Experts and Automation Engineers specializing in continuous integration, deployment, and delivery automation."
    },
    {
      icon: Shield,
      title: "Security & SecOps",
      description: "Security Engineers and SecOps specialists focusing on cloud security, compliance, and implementing security best practices."
    },
    {
      icon: Network,
      title: "Network & Infrastructure",
      description: "Network Engineers and Infrastructure Specialists who design and maintain robust network architectures and connectivity."
    },
    {
      icon: LineChart,
      title: "Agile Leadership",
      description: "Scrum Masters, RTEs (Release Train Engineers), Agile Coaches, and Product Owners who drive agile transformation and delivery."
    },
    {
      icon: Users,
      title: "Technical Management",
      description: "Platform Managers, Project Managers, and Technical Program Managers who lead complex technical initiatives and teams."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hire Technical Experts Across the Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From DevOps and Platform Engineering to Security and Technical Leadership - we connect you with verified experts who understand your technical needs
          </p>
        </div>

        {/* Main content */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              Our platform connects you with seasoned technical professionals who have proven track records in building, scaling, and managing modern infrastructure and platforms. Every expert in our network brings hands-on experience and deep technical knowledge in their respective domains.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you need DevOps engineers, SREs, platform specialists, or technical leaders, our rigorous peer-based evaluation ensures you're connected with experts who truly understand your technical challenges and can hit the ground running.
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 inline-block mb-4 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                <item.icon className="w-6 h-6 text-indigo-400 group-hover:text-purple-400 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;