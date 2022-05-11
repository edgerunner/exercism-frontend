import "./PageNavigation.css";
import { usePagination } from "/src/hooks";
import { Button } from "/src/components";

export default function PageNavigation({ count, current, onPageChange }) {
  const pageGenerator = usePagination({ count, current });
  return (
    <nav className="PageNavigation">
      <Button
        className="prev"
        onClick={current > 1 ? () => onPageChange(current - 1) : null}
        arrow="left"
      >
        Previous
      </Button>
      {[...pageGenerator()].map((p) =>
        p.spacer ? (
          <span className="spacer" key={p.key}>
            ⋯
          </span>
        ) : p.current ? (
          <b key={p.key}>{p.page}</b>
        ) : (
          <a key={p.key} onClick={() => onPageChange(p.page)}>
            {p.page}
          </a>
        )
      )}
      <Button
        className="next"
        onClick={current < count ? () => onPageChange(current + 1) : null}
        arrow="right"
      >
        Next
      </Button>
    </nav>
  );
}
