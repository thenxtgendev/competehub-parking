import React from 'react';
import { NotifyButton } from './NotifyButton';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Prepare for Success</span>
                <span className="block text-blue-600">Coming Soon..!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Your journey to excellence begins here. Join us for comprehensive exam preparation resources, expert guidance, and a supportive community.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <NotifyButton />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}