import "./TrackIcon.css";

export default function TrackIcon({ src, size = "normal" }) {
  return <img src={src} className={`TrackIcon ${size}`} />;
}
