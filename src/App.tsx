import React from 'react';
import { ClipboardCheck, BookOpen, Target, Infinity } from 'lucide-react';
import { Hero } from './components/Hero';
import { Feature } from './components/Feature';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Feature
                icon={<ClipboardCheck className="h-6 w-6 text-blue-600" />}
                title="Customized Tests"
                description="Tailored preliminary tests designed to match your preparation level"
              />
              <Feature
                icon={<BookOpen className="h-6 w-6 text-blue-600" />}
                title="Detailed Explanations"
                description="In-depth solutions with step-by-step reasoning for better understanding"
              />
              <Feature
                icon={<Target className="h-6 w-6 text-blue-600" />}
                title="Performance Analytics"
                description="Comprehensive self-analysis tools to track your progress"
              />
              <Feature
                icon={<Infinity className="h-6 w-6 text-blue-600" />}
                title="Unlimited Practice"
                description="Practice without limits to perfect your exam strategy"
              />
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;