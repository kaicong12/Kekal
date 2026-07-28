// The DB can't change mid-build, so reads are safely memoizable for its
// duration. No-op at runtime, where `revalidate` and the mutation handlers
// need live rows.
const IS_BUILD = process.env.NEXT_PHASE === "phase-production-build";

// Only wrap reads whose results callers never mutate — the cache hands the same
// object to every page.
export function memoDuringBuild(fn) {
  if (!IS_BUILD) return fn;

  const inFlight = new Map();

  return function memoized(...args) {
    const key = JSON.stringify(args);
    if (!inFlight.has(key)) {
      inFlight.set(
        key,
        Promise.resolve(fn.apply(this, args)).catch((error) => {
          inFlight.delete(key);
          throw error;
        })
      );
    }
    return inFlight.get(key);
  };
}
