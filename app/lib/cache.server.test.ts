import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cached, TTL, __resetCacheForTests } from "./cache.server";

describe("cached", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    __resetCacheForTests();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("calls the fetcher once on first miss and caches the value", async () => {
    const fetcher = vi.fn().mockResolvedValue("v1");

    const a = await cached("k", 1_000, fetcher);
    const b = await cached("k", 1_000, fetcher);

    expect(a).toBe("v1");
    expect(b).toBe("v1");
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it("refetches after the TTL expires", async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce("v1")
      .mockResolvedValueOnce("v2");

    await cached("k", 1_000, fetcher);
    vi.setSystemTime(Date.now() + 1_001);
    const second = await cached("k", 1_000, fetcher);

    expect(second).toBe("v2");
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it("serves the stale value when the fetcher rejects after the TTL", async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce("v1")
      .mockRejectedValueOnce(new Error("upstream down"));

    await cached("k", 1_000, fetcher);
    vi.setSystemTime(Date.now() + 1_001);

    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    const second = await cached("k", 1_000, fetcher);

    expect(second).toBe("v1");
    expect(consoleError).toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it("propagates the rejection when there is no previous value", async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error("cold start fail"));

    await expect(cached("k", 1_000, fetcher)).rejects.toThrow("cold start fail");
  });

  it("de-duplicates concurrent misses to a single fetcher call", async () => {
    let resolveInner!: (v: string) => void;
    const fetcher = vi.fn(
      () => new Promise<string>((resolve) => (resolveInner = resolve))
    );

    const p1 = cached("k", 1_000, fetcher);
    const p2 = cached("k", 1_000, fetcher);

    resolveInner("v1");
    const [a, b] = await Promise.all([p1, p2]);

    expect(a).toBe("v1");
    expect(b).toBe("v1");
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it("exposes TTL constants for listening, watching, reading", () => {
    expect(TTL.listening).toBe(60_000);
    expect(TTL.watching).toBe(30 * 60_000);
    expect(TTL.reading).toBe(12 * 60 * 60_000);
  });
});
