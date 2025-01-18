"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ComparisonSection from '@/components/ComparisonSection';
import IntegrationSection from '@/components/IntegrationSection';
import CTASection from '@/components/CTASection';
import AboutSection from '@/components/AboutSection';

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGetStarted = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

return (
  <main>
    <HeroSection
      isDialogOpen={isDialogOpen}
      onGetStarted={handleGetStarted}
      onCloseDialog={handleCloseDialog}
    />
    <AboutSection /> 
    <HowItWorksSection />
    <FeaturesSection />
    <ComparisonSection />
    <TestimonialsSection />
    <IntegrationSection />
    <PricingSection onGetStarted={handleGetStarted} />
    <CTASection onGetStarted={handleGetStarted} />
  </main>
);
}