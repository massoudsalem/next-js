import React from 'react';
import Image from 'next/image';

type Props = {
  movie: Movie;
};

export default function MovieCard({movie}: Props) {
  return (
    <div className="flex flex-col items-center justify-between w-60 h-84 bg-gray-800 rounded-md shadow-md overflow-hidden">
      <div className="w-60 h-64 rounded-t-md">
        <div className="w-60 h-64 bg-gray-700 rounded-t-md">
          {movie.Poster === 'N/A' ? (
            <Image
              src="/no-poster.png"
              alt={movie.Title}
              width={256}
              height={256}
            />
          ) : (
            <Image
              src={movie.Poster}
              alt={movie.Title}
              layout='responsive'
              width={256}
              height={256}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-20 bg-gray-700 rounded-b-md">
        <h2 className="text-lg font-bold text-white text-center">
          {movie.Title}
        </h2>
        <p className="text-sm text-white">{movie.Year}</p>
      </div>
    </div>
  );
}
