import { Input } from "/src/components";
import { useDebounce } from "/src/hooks";

export default function ExerciseSearchBox({ onChange, defaultValue }) {
  const [value, handleInput] = useDebounce(onChange, { defaultValue });
  return (
    <Input
      type="search"
      value={value}
      onInput={({ target }) => handleInput(target.value)}
      placeholder="Filter by exercise title"
    />
  );
}
