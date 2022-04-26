import "./index.css";
import { Dropdown, Pill, TrackIcon } from "/src/components";
import { useState } from "react";

export default function TrackSelector({ tracks, selected, onSelect }) {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown.Wrapper
      element="button"
      className="TrackSelector"
      onClick={() => setOpen(!open)}
    >
      <TrackIcon src={tracks.find((t) => t.slug === selected).icon_url} />
      <ChevronDown />
      {open ? (
        <Dropdown.Menu radio>
          {tracks.map((track) => (
            <Track
              {...track}
              selected={track.slug === selected}
              onClick={onSelect}
            />
          ))}
        </Dropdown.Menu>
      ) : null}
    </Dropdown.Wrapper>
  );
}

function Track({ title, icon_url, slug, count, selected, onClick }) {
  return (
    <Dropdown.Item selected={selected} onClick={() => onClick(slug)}>
      <TrackIcon src={icon_url} />
      <h6>{title}</h6>
      <Pill value={count} />
    </Dropdown.Item>
  );
}

function ChevronDown() {
  return (
    <svg
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5938 0.960125L7.78708 6.76625C7.71098 6.84246 7.6077 6.88528 7.5 6.88528C7.3923 6.88528 7.28902 6.84246 7.21292 6.76625L1.40625 0.960125"
        stroke="#5C5589"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
