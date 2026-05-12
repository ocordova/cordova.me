type Entry<T> = { value: T; expiresAt: number };

const store = new Map<string, Entry<unknown>>();
const inflight = new Map<string, Promise<unknown>>();

export const TTL = {
  listening: 60_000,
  watching: 30 * 60_000,
  reading: 12 * 60 * 60_000,
} as const;

export function cached<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const now = Date.now();
  const entry = store.get(key) as Entry<T> | undefined;

  if (entry && now < entry.expiresAt) {
    return Promise.resolve(entry.value);
  }

  const existing = inflight.get(key) as Promise<T> | undefined;
  if (existing) return existing;

  const pending = fetcher()
    .then((value) => {
      store.set(key, { value, expiresAt: Date.now() + ttlMs });
      return value;
    })
    .catch((err) => {
      const previous = store.get(key) as Entry<T> | undefined;
      if (previous) {
        console.error(`[cache] ${key} serving stale due to:`, err);
        return previous.value;
      }
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
