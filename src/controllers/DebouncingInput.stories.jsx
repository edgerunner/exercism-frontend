import DebouncingInput from "./DebouncingInput";

export default {
  title: "Controllers/DebouncingInput",
  component: DebouncingInput,
  argTypes: {
    delay: { control: { type: "range", min: 0, max: 10000, step: 100 } },
    onChange: { action: "changed" },
  },
};

export function Debounce(args) {
  return (
    <DebouncingInput {...args}>
      {(value, handleInput) => (
        <input
          type="text"
          value={value}
          onInput={(event) => handleInput(event.target.value)}
        />
      )}
    </DebouncingInput>
  );
}
Debounce.args = {
  delay: 1000,
};
