import "./TrackSelector.css";
import { Dropdown, Pill, TrackIcon } from "/src/components";
import { useState, useMemo } from "react";

const ALL_TRACKS_ICON_URL =
  "https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/all-tracks-5723af830c1df04c577e2aefdc8003f62c4270ec.svg";

export default function TrackSelector({ tracks, selected, onSelect }) {
  const [open, setOpen] = useState(false);

  const tracksWithAll = useMemo(() => {
    if (tracks.length < 2) return tracks;
    const allTracks = {
      slug: "all-tracks",
      title: "All tracks",
      icon_url: ALL_TRACKS_ICON_URL,
      count: tracks.reduce((acc, track) => acc + track.count, 0),
    };
    return [allTracks, ...tracks];
  }, [tracks]);

  return (
    <Dropdown.Wrapper
      element="button"
      className="TrackSelector"
      onClick={() => setOpen(!open)}
    >
      <TrackIcon
        src={
          tracks.find((t) => t.slug === selected)?.icon_url ||
          ALL_TRACKS_ICON_URL
        }
      />
      <ChevronDown />
      {open ? (
        <Dropdown.Menu radio>
          {tracksWithAll.map((track) => (
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
