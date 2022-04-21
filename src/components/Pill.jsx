import "./Pill.css";

export default function Pill({ value }) {
  return (
    <data value={value} className="Pill">
      {value}
    </data>
  );
}
