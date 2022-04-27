import { useState } from "react";
import { Dropdown } from "/src/components";

export default function SortSelector({ sort, onSort }) {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown.Wrapper
      element="button"
      className="SortSelector"
      onClick={() => setOpen(!open)}
    >
      <SortBy sort={sort} />
      {open ? (
        <Dropdown.Menu>
          <SortOption onClick={onSort} current={sort} dir="oldest_first" />
          <SortOption onClick={onSort} current={sort} dir="newest_first" />
        </Dropdown.Menu>
      ) : null}
    </Dropdown.Wrapper>
  );
}

function SortOption({ dir, current, onClick }) {
  return (
    <Dropdown.Item onClick={() => onClick(dir)} selected={dir === current}>
      <SortBy sort={dir} />
    </Dropdown.Item>
  );
}

function SortBy({ sort }) {
  return (
    <>Sort by {{ oldest_first: "least", newest_first: "most" }[sort]} recent</>
  );
}
