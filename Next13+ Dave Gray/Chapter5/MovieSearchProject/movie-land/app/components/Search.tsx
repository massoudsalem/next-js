'use client';
import {useRouter} from 'next/navigation';
import React from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm('');
    router.push(`/${searchTerm}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        className="sm:w-80 h-8 rounded-l-md px-2 bg-gray-500
            focus:outline-none focus:ring-0 focus:border-transparent"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button className="bg-gray-500 text-white rounded-r-md px-2 h-8 sm:mr-8">
        🔎
      </button>
    </form>
  );
}
