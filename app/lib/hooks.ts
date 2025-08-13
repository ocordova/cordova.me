import { useEffect, useState } from "react";
import { NowListening } from "~/actions/now-listening.server";
import { NowReading } from "~/actions/now-reading.server";
import { NowWatching } from "~/actions/now-watching.server";

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
      
      const data = await response.json();
      setState({ data, loading: false, error: null, isInitialLoad: false });
    } catch (error) {
      setState({ 
        data: null, 
        loading: false, 
        error: error instanceof Error ? error.message : "An error occurred",
        isInitialLoad: false
      });
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

export function useNowListening(interval = 30000) {
  return useApiData<NowListening>("/api/now-listening", interval);
}

export function useNowReading(interval = 30000) {
  return useApiData<NowReading>("/api/now-reading", interval);
}

export function useNowWatching(interval = 30000) {
  return useApiData<NowWatching>("/api/now-watching", interval);
}