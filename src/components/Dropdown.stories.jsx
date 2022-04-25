import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export function Default() {
  return (
    <div style={{ position: "relative" }}>
      <button className="Dropdown-trigger">Dropdown</button>
      <Dropdown>
        <li>Item 1</li>
        <li className="selected">Item 2</li>
        <li>Item 3</li>
      </Dropdown>
    </div>
  );
}
