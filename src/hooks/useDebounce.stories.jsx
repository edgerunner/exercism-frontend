import useDebounce from "./useDebounce";

export default {
  title: "Hooks/useDebounce",
  argTypes: {
    delay: { control: { type: "range", min: 0, max: 10000, step: 100 } },
    onChange: { action: "changed" },
  },
};

export function Debounce({ delay, onChange }) {
  const [value, handleInput] = useDebounce(onChange, { delay });
  return (
    <input
      type="text"
      value={value}
      onInput={(event) => handleInput(event.target.value)}
    />
  );
}
Debounce.args = {
  delay: 1000,
};
