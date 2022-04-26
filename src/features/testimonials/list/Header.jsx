import TrackSelector from "../TrackSelector";
import { Input } from "/src/components";

export default function Header({
  tracks,
  selectedTrack,
  onTrackChange,
  onSearch,
  search,
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
    </header>
  );
}
