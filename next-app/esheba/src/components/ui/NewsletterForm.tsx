'use client';

import type { Field } from '@sitecore-content-sdk/nextjs';
import { Send } from 'lucide-react';

interface NewsletterFormProps {
  placeholder: Field<string>;
}

export const NewsletterForm = ({}: NewsletterFormProps) => {
  return (
    <div className="bg-white rounded-full p-2 flex items-center gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-6 py-3 outline-none text-gray-700"
      />
      <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};
