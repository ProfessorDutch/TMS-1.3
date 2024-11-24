import React from 'react';
import MonthlyBlessingCircle from '../components/subscription/MonthlyBlessingCircle';
import ImpactDashboard from '../components/subscription/ImpactDashboard';
import CareerPathsPreview from '../components/CareerPathsPreview';
import { Heart } from 'lucide-react';

const mockMetrics = {
  totalSeeds: 1234,
  studentsSupported: 89,
  coursesEnabled: 45,
  communityMembers: 567
};

export default function Support() {
  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Heart className="w-12 h-12 text-patriot-red mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-patriot-navy mb-4">
            Foundation Members: Our First Seed Planters
          </h2>
          <div className="text-lg text-patriot-blue">
            <p>
              Most Foundation Members grew up in the church—it shaped their lives, taught them resilience, 
              and revealed God's unwavering faithfulness. Now, they feel called to do something bigger: 
              to give today's youth opportunities they never had, or to pass on the same life-changing 
              blessings they received. They understand this moment is historic—a chance to take action, 
              to ensure our children grow up rooted in faith, surrounded by a powerful community, and 
              guided by Jesus. This is more than a movement; it's a mission. Foundation Members are the 
              ones bold enough to plant the first seeds.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-5">
          <MonthlyBlessingCircle />
        </div>
      </section>
      
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-5">
          <ImpactDashboard metrics={mockMetrics} />
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-5">
          <CareerPathsPreview />
        </div>
      </section>
    </main>
  );
}