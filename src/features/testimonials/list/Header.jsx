import TrackSelector from "./TrackSelector";
import OrderSelector from "./OrderSelector";
import { Input } from "/src/components";

export default function Header({
  tracks,
  selectedTrack,
  onTrackChange,
  onSearch,
  search,
  order = "newest_first",
  onOrderChange,
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
      <OrderSelector order={order} onOrderChange={onOrderChange} />
    </header>
  );
}
