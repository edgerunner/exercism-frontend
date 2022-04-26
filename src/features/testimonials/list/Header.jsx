import TrackSelector from "../TrackSelector";

export default function Header({ tracks, selectedTrack, onTrackChange }) {
  return (
    <header>
      <TrackSelector
        onSelect={onTrackChange}
        tracks={tracks}
        selected={selectedTrack}
      />
    </header>
  );
}
