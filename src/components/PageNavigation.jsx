import "./PageNavigation.css";
import { Pagination } from "/src/controllers";
import { Button } from "/src/components";

export default function PageNavigation({ count, current, onPageChange }) {
  return (
    <nav className="PageNavigation">
      <Button
        className="prev"
        onClick={current > 1 ? () => onPageChange(current - 1) : null}
        arrow="left"
      >
        Previous
      </Button>
      <Pagination
        {...{ count, current }}
        spacer={<span className="spacer">⋯</span>}
      >
        {(p) =>
          p.current ? (
            <b key={p.page}>{p.page}</b>
          ) : (
            <a key={p.page} onClick={() => onPageChange(p.page)}>
              {p.page}
            </a>
          )
        }
      </Pagination>
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
