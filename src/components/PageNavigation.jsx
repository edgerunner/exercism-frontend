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
          <span className="spacer">⋯</span>
        ) : p.current ? (
          <b key={p.page}>{p.page}</b>
        ) : (
          <a key={p.page} onClick={() => onPageChange(p.page)}>
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
