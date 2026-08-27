import { useEffect, useState } from "react";
import { NowListening } from "~/actions/now-listening.server";
import { NowPlaying } from "~/actions/now-playing.server";
import { NowReading } from "~/actions/now-reading.server";
import { NowWatching } from "~/actions/now-watching.server";

interface UseApiDataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  isInitialLoad: boolean;
}

function useApiData<T>(
  url: string,
  interval?: number,
  initialData?: T | null
): UseApiDataState<T> {
  const hasSeed = initialData != null;
  const [state, setState] = useState<UseApiDataState<T>>({
    data: initialData ?? null,
    loading: !hasSeed,
    error: null,
    isInitialLoad: !hasSeed,
  });

  const fetchData = async (isInitial = false) => {
    try {
      setState(prev => ({
        ...prev,
        loading: isInitial ? true : prev.data === null,
        error: null
      }));
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const { data, stale } = await response.json();
      setState({ data, loading: false, error: null, isInitialLoad: false });

      if (stale) {
        // Stale-while-revalidate: the server answered from cache and is
        // refreshing in the background; ask again, waiting for fresh data.
        const freshResponse = await fetch(`${url}?wait=1`);
        if (freshResponse.ok) {
          const fresh = await freshResponse.json();
          setState({
            data: fresh.data,
            loading: false,
            error: null,
            isInitialLoad: false,
          });
        }
      }
    } catch (error) {
      setState(prev => ({
        data: prev.data,
        loading: false,
        error: error instanceof Error ? error.message : "An error occurred",
        isInitialLoad: false
      }));
    }
  };

  useEffect(() => {
    fetchData(true);

    if (interval) {
      const intervalId = setInterval(() => fetchData(false), interval);
      return () => clearInterval(intervalId);
    }
  }, [url, interval]);

  return state;
}

export function useNowListening(
  interval: number | undefined = 60_000,
  initialData?: NowListening | null
) {
  return useApiData<NowListening>("/api/now-listening", interval, initialData);
}

export function useNowReading(initialData?: NowReading | null) {
  return useApiData<NowReading>("/api/now-reading", undefined, initialData);
}

export function useNowWatching(initialData?: NowWatching | null) {
  return useApiData<NowWatching>("/api/now-watching", undefined, initialData);
}

export function useNowPlaying(initialData?: NowPlaying | null) {
  return useApiData<NowPlaying>("/api/now-playing", undefined, initialData);
}