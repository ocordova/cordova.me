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

    expect(a).toEqual({ value: "v1", stale: false });
    expect(b).toEqual({ value: "v1", stale: false });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it("serves the stale value immediately after the TTL and revalidates in the background", async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce("v1")
      .mockResolvedValueOnce("v2");

    await cached("k", 1_000, fetcher);
    vi.setSystemTime(Date.now() + 1_001);

    const second = await cached("k", 1_000, fetcher);
    expect(second).toEqual({ value: "v1", stale: true });
    expect(fetcher).toHaveBeenCalledTimes(2);

    // let the background revalidation settle
    await vi.runAllTimersAsync();

    const third = await cached("k", 1_000, fetcher);
    expect(third).toEqual({ value: "v2", stale: false });
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it("waits for the fresh value when wait is set on a stale entry", async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce("v1")
      .mockResolvedValueOnce("v2");

    await cached("k", 1_000, fetcher);
    vi.setSystemTime(Date.now() + 1_001);

    const fresh = await cached("k", 1_000, fetcher, { wait: true });

    expect(fresh).toEqual({ value: "v2", stale: false });
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it("keeps serving the stale value when background revalidation fails", async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce("v1")
      .mockRejectedValue(new Error("upstream down"));

    await cached("k", 1_000, fetcher);
    vi.setSystemTime(Date.now() + 1_001);

    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    const second = await cached("k", 1_000, fetcher);
    await vi.runAllTimersAsync();

    expect(second).toEqual({ value: "v1", stale: true });
    expect(consoleError).toHaveBeenCalled();

    const third = await cached("k", 1_000, fetcher);
    await vi.runAllTimersAsync();
    expect(third).toEqual({ value: "v1", stale: true });
    consoleError.mockRestore();
  });

  it("falls back to the stale value when wait is set and revalidation fails", async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce("v1")
      .mockRejectedValueOnce(new Error("upstream down"));

    await cached("k", 1_000, fetcher);
    vi.setSystemTime(Date.now() + 1_001);

    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    const result = await cached("k", 1_000, fetcher, { wait: true });
    consoleError.mockRestore();

    expect(result).toEqual({ value: "v1", stale: true });
  });

  it("propagates the rejection when there is no previous value", async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error("cold start fail"));

    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    await expect(cached("k", 1_000, fetcher)).rejects.toThrow("cold start fail");
    consoleError.mockRestore();
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

    expect(a).toEqual({ value: "v1", stale: false });
    expect(b).toEqual({ value: "v1", stale: false });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it("de-duplicates concurrent revalidations of a stale entry", async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce("v1")
      .mockResolvedValueOnce("v2");

    await cached("k", 1_000, fetcher);
    vi.setSystemTime(Date.now() + 1_001);

    const [a, b] = await Promise.all([
      cached("k", 1_000, fetcher),
      cached("k", 1_000, fetcher),
    ]);
    await vi.runAllTimersAsync();

    expect(a).toEqual({ value: "v1", stale: true });
    expect(b).toEqual({ value: "v1", stale: true });
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it("exposes TTL constants for listening, watching, reading", () => {
    expect(TTL.listening).toBe(60_000);
    expect(TTL.watching).toBe(30 * 60_000);
    expect(TTL.reading).toBe(12 * 60 * 60_000);
  });
});
