'use client';
import React from 'react';
import MovieCard from './MovieCard';

type Props = {
  params: {
    searchTerm: string;
  };
};

const API_URL = 'https://www.omdbapi.com/?apikey=45fd9dce';

export async function generateMetadata({params: {searchTerm}}: Props) {
  return {
    title: `Search results for ${searchTerm} | Movie Land`,
    description: `Search results for ${searchTerm} on Movie Land`,
  };
}

export default function SearchResults({params}: Props) {
  const [searchResults, setSearchResults] = React.useState<Movie[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<String | null>(null);

  React.useEffect(() => {
    const {searchTerm} = params;
    if (searchTerm) {
      setIsLoading(true);
      fetch(`${API_URL}&s=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === 'True') {
            setSearchResults(data.Search);
          } else {
            setError(data.Error);
          }
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    }
  }, [params]);

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-between p-2 sm:p-8 bg-gray-900">
      {isLoading ? (
        <p className="text-2xl text-white">Loading...</p>
      ) : error && error != 'Movie not found!' ? (
        <p className="text-2xl text-white">{error}</p>
      ) : searchResults.length === 0 ? (
        <p className="text-2xl text-white">
          No results found for {params.searchTerm}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-8">
          {searchResults.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
