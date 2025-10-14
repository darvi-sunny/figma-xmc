'use client';

import { Search, User, MapPin } from 'lucide-react';

export const SearchForm = () => {
  return (
    <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2 max-w-2xl">
      <div className="flex items-center gap-2 flex-1 px-4">
        <User className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Doctor's Name"
          className="flex-1 outline-none text-gray-700"
        />
      </div>
      <div className="w-px h-8 bg-gray-200" />
      <div className="flex items-center gap-2 flex-1 px-4">
        <MapPin className="w-5 h-5 text-gray-400" />
        <input type="text" placeholder="Location" className="flex-1 outline-none text-gray-700" />
      </div>
      <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};
