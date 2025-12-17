import React, { useRef } from 'react';
import WorkshopHero from '../components/workshops/WorkshopHero';
import WorkshopList from '../components/workshops/WorkshopList';
import WorkshopCTA from '../components/workshops/WorkshopCTA';

const WorkshopsPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-creamy-vanilla text-deep-matcha">
      
      {/* 1. Hero Section */}
      <WorkshopHero />

      {/* 2. Event Lineup */}
      <WorkshopList />

      {/* 3. Private Event CTA */}
      <WorkshopCTA />

    </div>
  );
};

export default WorkshopsPage;