import TrackSelector from "./TrackSelector";
import OrderSelector from "./OrderSelector";
import { Input } from "/src/components";
import { DebouncingInput } from "/src/controllers";

export default function Header({
  tracks,
  selectedTrack,
  onTrackChange,
  exercise,
  onExerciseChange,
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
      <DebouncingInput onChange={onExerciseChange} defaultValue={exercise}>
        {(value, handleInput) => (
          <Input
            type="search"
            value={value}
            onInput={({ target }) => handleInput(target.value)}
            placeholder="Filter by exercise title"
          />
        )}
      </DebouncingInput>
      <OrderSelector order={order} onOrderChange={onOrderChange} />
    </header>
  );
}
