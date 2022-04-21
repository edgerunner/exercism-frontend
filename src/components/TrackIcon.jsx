import "./TrackIcon.css";

export default function TrackIcon({ track, size = "normal" }) {
  return (
    <img
      src={`https://dg8krxphbh767.cloudfront.net/tracks/${track}.svg`}
      className={`TrackIcon ${size}`}
    />
  );
}
