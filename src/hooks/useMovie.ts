import { useState, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import type { MovieSearchResponse } from '../types/movie';
import useDebounce from './useDebounce';
import useLoadMore from './useLoadMore';
import { fetcher } from '@/utils/fetch';

interface UseMovieProps {
  initialSearchTerm?: string;
}

export const useMovie = ({ initialSearchTerm = '' }: UseMovieProps = {}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const getKey = (
    pageIndex: number,
    previousPageData: MovieSearchResponse | null
  ) => {
    if (!debouncedSearchTerm) return null;
    if (previousPageData && previousPageData.Response === 'False') return null;
    return `/api/movies?s=${encodeURIComponent(debouncedSearchTerm)}&page=${pageIndex + 1}&type=movie`;
  };

  const { data, error, size, setSize, isLoading, isValidating } =
    useSWRInfinite<MovieSearchResponse>(getKey, fetcher, {
      revalidateFirstPage: false,
      persistSize: true,
    });

  const { movies, totalResults, hasMore, loadMore } = useLoadMore({
    data,
    isValidating,
    size,
    setSize,
  });

  const errorMessage = useMemo(() => {
    if (error) return 'Failed to fetch movies.';
    if (data && data[0] && data[0].Error) return data[0].Error;
    return null;
  }, [data, error]);

  return {
    movies,
    loading: isLoading || isValidating,
    error: errorMessage,
    searchTerm,
    setSearchTerm,
    hasMore,
    loadMore,
    totalResults,
  };
};
