type Entry<T> = { value: T; staleAt: number };

const store = new Map<string, Entry<unknown>>();
const inflight = new Map<string, Promise<unknown>>();

export const TTL = {
  listening: 60_000,
  playing: 5 * 60_000,
  watching: 30 * 60_000,
  reading: 12 * 60 * 60_000,
} as const;

export interface CachedResult<T> {
  value: T;
  stale: boolean;
}

export function cached<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>,
  opts: { wait?: boolean } = {}
): Promise<CachedResult<T>> {
  const entry = store.get(key) as Entry<T> | undefined;

  if (entry && Date.now() < entry.staleAt) {
    return Promise.resolve({ value: entry.value, stale: false });
  }

  const revalidation = revalidate(key, ttlMs, fetcher);

  if (!entry) {
    return revalidation.then((value) => ({ value, stale: false }));
  }

  if (opts.wait) {
    return revalidation
      .then((value) => ({ value, stale: false }))
      .catch(() => ({ value: entry.value, stale: true }));
  }

  revalidation.catch(() => {});
  return Promise.resolve({ value: entry.value, stale: true });
}

function revalidate<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const existing = inflight.get(key) as Promise<T> | undefined;
  if (existing) return existing;

  const pending = fetcher()
    .then((value) => {
      store.set(key, { value, staleAt: Date.now() + ttlMs });
      return value;
    })
    .catch((err) => {
      console.error(`[cache] revalidate ${key} failed:`, err);
      throw err;
    })
    .finally(() => {
      inflight.delete(key);
    });

  inflight.set(key, pending);
  return pending;
}

export function __resetCacheForTests(): void {
  store.clear();
  inflight.clear();
}
