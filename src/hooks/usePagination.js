import { useCallback } from "react";

export default function usePagination({ count, current, spread = 2, cap = 1 }) {
  const generator = useCallback(
    function* () {
      let next = 1;
      const curr = Math.max(1, Math.min(count, current));

      while (next <= cap) {
        if (next > count) return;
        yield {
          current: next === curr,
          first: next === 1,
          last: next === count,
          page: next++,
        };
      }

      if (next < curr - spread - 1) {
        yield { spacer: true };
        next = Math.max(next, curr - spread);
      }

      while (next <= curr + spread) {
        if (next > count) return;
        yield { current: next === curr, last: next === count, page: next++ };
      }

      if (next < count - cap) {
        yield { spacer: true };
        next = Math.max(next, count - cap + 1);
      }

      while (next <= count) {
        yield { current: next === curr, last: next === count, page: next++ };
      }
    },
    [count, current, spread, cap]
  );
  return generator;
}
