import { useState } from "react";
import { Dropdown } from "/src/components";

export default function OrderSelector({ order, onOrderChange }) {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown.Wrapper
      element="button"
      className="OrderSelector"
      onClick={() => setOpen(!open)}
    >
      <OrderBy order={order} />
      {open ? (
        <Dropdown.Menu>
          <OrderOption
            onClick={onOrderChange}
            current={order}
            dir="oldest_first"
          />
          <OrderOption
            onClick={onOrderChange}
            current={order}
            dir="newest_first"
          />
        </Dropdown.Menu>
      ) : null}
    </Dropdown.Wrapper>
  );
}

function OrderOption({ dir, current, onClick }) {
  return (
    <Dropdown.Item onClick={() => onClick(dir)} selected={dir === current}>
      <OrderBy order={dir} />
    </Dropdown.Item>
  );
}

function OrderBy({ order }) {
  return (
    <>Sort by {{ oldest_first: "least", newest_first: "most" }[order]} recent</>
  );
}
