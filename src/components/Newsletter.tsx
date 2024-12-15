import React from 'react';
import { Mail } from 'lucide-react';
import { NotifyButton } from './NotifyButton';

export function Newsletter() {
  return (
    <div id="notify" className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Be the first to know when we launch. No spam, just important updates.
          </p>
          <div className="mt-8 flex justify-center">
            <NotifyButton />
          </div>
        </div>
      </div>
    </div>
  );
}