import { useEffect, useRef, useState } from "react";
import { NowListening } from "~/actions/now-listening.server";
import { NowReading } from "~/actions/now-reading.server";
import { NowWatching } from "~/actions/now-watching.server";
import {
  POLLING_INTERVAL_LISTENING,
  POLLING_INTERVAL_READING,
  POLLING_INTERVAL_WATCHING,
} from "~/lib/constants";

interface UseApiDataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  isInitialLoad: boolean;
}

function useApiData<T>(url: string, interval?: number): UseApiDataState<T> {
  const [state, setState] = useState<UseApiDataState<T>>({
    data: null,
    loading: true,
    error: null,
    isInitialLoad: true,
  });

  const urlRef = useRef(url);
  urlRef.current = url;

  useEffect(() => {
    let cancelled = false;

    const fetchData = async (isInitial: boolean) => {
      try {
        setState((prev) => ({
          ...prev,
          loading: isInitial ? true : prev.data === null,
          error: null,
        }));
        const response = await fetch(urlRef.current);

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        if (!cancelled) {
          setState({ data, loading: false, error: null, isInitialLoad: false });
        }
      } catch (error) {
        if (!cancelled) {
          setState((prev) => ({
            ...prev,
            loading: false,
            error: error instanceof Error ? error.message : "An error occurred",
            isInitialLoad: false,
          }));
        }
      }
    };

    fetchData(true);

    if (interval) {
      const intervalId = setInterval(() => fetchData(false), interval);
      return () => {
        cancelled = true;
        clearInterval(intervalId);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [url, interval]);

  return state;
}

export function useNowListening() {
  return useApiData<NowListening>("/api/now-listening", POLLING_INTERVAL_LISTENING);
}

export function useNowReading() {
  return useApiData<NowReading>("/api/now-reading", POLLING_INTERVAL_READING);
}

export function useNowWatching() {
  return useApiData<NowWatching>("/api/now-watching", POLLING_INTERVAL_WATCHING);
}
