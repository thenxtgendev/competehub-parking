import React from 'react';
import { Mail } from 'lucide-react';
import { NOTIFY_FORM_URL } from '../config/constants';

export function NotifyButton() {
  return (
    <div className="inline-flex rounded-md shadow">
      <a
        href={NOTIFY_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
      >
        <Mail className="h-5 w-5 mr-2" />
        Notify Me
      </a>
    </div>
  );
}