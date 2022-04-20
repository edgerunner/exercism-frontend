import "./Avatar.css";

export default function Avatar({ src, handle }) {
  return src ? (
    <img src={src} alt={handle} title={handle} className="Avatar" />
  ) : (
    <div className="Avatar" title={handle}>
      {handle?.charAt(0).toUpperCase() || "?"}
    </div>
  );
}
