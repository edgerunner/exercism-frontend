import { useCallback, Fragment } from "react";

export default function Pagination({
  count,
  current,
  children,
  spacer,
  spread = 2,
  cap = 1,
}) {
  const generator = useCallback(
    function* () {
      let next = 1;
      const curr = Math.max(1, Math.min(count, current));

      while (next <= cap) {
        if (next > count) return;
        yield children({ current: next === curr, page: next++ });
      }

      if (next < curr - spread - 1) {
        yield spacer;
        next = Math.max(next, curr - spread);
      }

      while (next <= curr + spread) {
        if (next > count) return;
        yield children({ current: next === curr, page: next++ });
      }

      if (next < count - cap) {
        yield spacer;
        next = Math.max(next, count - cap + 1);
      }

      while (next <= count) {
        yield children({ current: next === curr, page: next++ });
      }
    },
    [count, current, children, spacer, spread, cap]
  );

  return (
    <>
      {[...generator()].map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  );
}
