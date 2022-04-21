import "./Button.css";

export default function Button({ children, onClick, arrow = "" }) {
  return (
    <button className={`Button ${arrow}`} onClick={onClick} disabled={!onClick}>
      {children}
    </button>
  );
}
