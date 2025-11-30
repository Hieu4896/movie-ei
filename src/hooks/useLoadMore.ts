import { useCallback, useMemo } from 'react';
import type { MovieSearchResponse } from '../types/movie';

interface UseLoadMoreProps {
  data: MovieSearchResponse[] | undefined;
  isValidating: boolean;
  size: number;
  setSize: (size: number | ((size: number) => number)) => void;
}

export default function useLoadMore({
  data,
  isValidating,
  size,
  setSize,
}: UseLoadMoreProps) {
  const movies = useMemo(() => {
    return data ? data.flatMap(page => (page.Search ? page.Search : [])) : [];
  }, [data]);

  const totalResults = useMemo(() => {
    return data && data[0] && data[0].totalResults
      ? parseInt(data[0].totalResults, 10)
      : 0;
  }, [data]);

  const hasMore = useMemo(() => {
    if (!data || !totalResults) return false;
    return movies.length < totalResults;
  }, [data, movies.length, totalResults]);

  const loadMore = useCallback(() => {
    if (!isValidating && hasMore) {
      setSize(size + 1);
    }
  }, [isValidating, hasMore, setSize, size]);

  return {
    movies,
    totalResults,
    hasMore,
    loadMore,
  };
}
