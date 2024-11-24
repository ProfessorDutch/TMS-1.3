import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BusinessSupport() {
  const navigate = useNavigate();

  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-12 h-12 text-patriot-red" />
            <div>
              <h1 className="text-4xl font-bold text-patriot-navy">Business Partnership</h1>
              <p className="text-xl text-patriot-blue">Join a community of businesses committed to youth impact</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <Building2 className="w-12 h-12 text-patriot-red mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Join as a Business</h2>
              <p className="text-patriot-blue mb-6">
                Partner with us to support youth through faith-based education and mentorship. 
                Claim your business listing or add your business to our directory.
              </p>
              <button
                onClick={() => navigate('/claim-business')}
                className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors flex items-center gap-2 mx-auto"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-patriot-cream rounded-xl p-6">
                <h3 className="text-lg font-semibold text-patriot-navy mb-3">Legacy Builder</h3>
                <p className="text-patriot-blue">Support youth education and career development through substantial partnership.</p>
              </div>

              <div className="bg-patriot-cream rounded-xl p-6">
                <h3 className="text-lg font-semibold text-patriot-navy mb-3">Harvest Partner</h3>
                <p className="text-patriot-blue">Provide mentorship opportunities and resources for skill development.</p>
              </div>

              <div className="bg-patriot-cream rounded-xl p-6">
                <h3 className="text-lg font-semibold text-patriot-navy mb-3">Seed Sponsor</h3>
                <p className="text-patriot-blue">Begin your journey of impact with entry-level support options.</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-patriot-blue">
                Our business partnership is built on a simple principle: be helpful where you can, when you can. 
                There are no mandatory commitments or forced obligations – just a community of businesses willing 
                to make a difference in their own way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}