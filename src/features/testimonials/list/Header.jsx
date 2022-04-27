import TrackSelector from "../TrackSelector";
import SortSelector from "./SortSelector";
import { Input } from "/src/components";
import { useState } from "react";

export default function Header({
  tracks,
  selectedTrack,
  onTrackChange,
  onSearch,
  search,
  sort = "newest_first",
  onSort,
}) {
  return (
    <header>
      <TrackSelector
        onSelect={onTrackChange}
        tracks={tracks}
        selected={selectedTrack}
      />
      <Input
        type="search"
        value={search}
        onChange={onSearch}
        placeholder="Filter by exercise title"
      />
      <SortSelector sort={sort} onSort={onSort} />
    </header>
  );
}
