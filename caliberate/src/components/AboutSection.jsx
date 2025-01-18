"use client";

import React from 'react';
import { Server, Cloud, Code, GitBranch, Users, Layout } from 'lucide-react';

const AboutSection = () => {
  const expertise = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Extensive experience in AWS, Azure, and GCP. Expert in containerization, Kubernetes orchestration, and cloud-native architectures."
    },
    {
      icon: Server,
      title: "Infrastructure & Linux",
      description: "Deep knowledge of Linux systems administration, infrastructure automation, and scalable system design. Proven track record in implementing robust production environments."
    },
    {
      icon: GitBranch,
      title: "CI/CD & Automation",
      description: "Built and maintained advanced CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions. Expertise in automation using Python, Shell scripting, and Infrastructure as Code."
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Proficient in Terraform, CloudFormation, and Ansible. Experience in implementing infrastructure automation at scale using modern IaC practices."
    },
    {
      icon: Layout,
      title: "Solution Architecture",
      description: "Led architecture design for enterprise solutions, focusing on scalability, security, and cost optimization. Experience in microservices architecture and distributed systems."
    },
    {
      icon: Users,
      title: "Product Ownership",
      description: "Successfully managed product roadmaps, stakeholder relationships, and development teams. Balanced technical excellence with business objectives."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Bringing over a decade of expertise in DevOps, cloud architecture, and technical leadership
          </p>
        </div>

        {/* Main content */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              With over 10 years of experience in the tech industry, I've led numerous successful digital transformations and cloud migrations. My expertise spans the entire DevOps lifecycle, from infrastructure automation to platform architecture.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As both a hands-on architect and product owner, I bring a unique blend of technical expertise and business acumen. My approach focuses on creating scalable, efficient solutions that drive business value while maintaining technical excellence.
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