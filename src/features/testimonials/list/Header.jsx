import TrackSelector from "./TrackSelector";
import OrderSelector from "./OrderSelector";
import ExerciseSearchBox from "./ExerciseSearchBox";

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
      <ExerciseSearchBox onChange={onExerciseChange} defaultValue={exercise} />
      <OrderSelector order={order} onOrderChange={onOrderChange} />
    </header>
  );
}
