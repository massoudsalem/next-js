import Image from 'next/image';
import React from 'react';
import Search from './Search';

export default function NavBar() {
  return (
    <nav className="flex justify-center sm:justify-between items-center w-full h-16 bg-gray-700 text-white sticky top-0 z-50">
      <div className="flex items-center">
        <div className="w-16 h-16 ml-4 hidden sm:block">
          <a href="/">
            <Image src="/logo.png" alt="Movie Land Logo" width={64} height={64} />
          </a>
        </div>
        <h1 className="text-2xl font-bold ml-4 hidden sm:block">Movie Land</h1>
      </div>
      <Search />
    </nav>
  );
}
