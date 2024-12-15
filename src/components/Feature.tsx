import React from 'react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}