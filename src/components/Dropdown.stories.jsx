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
        <Dropdown.Item data-try={75}>Item 1</Dropdown.Item>
        <Dropdown.Item selected className="extra">
          Item 2
        </Dropdown.Item>
        <Dropdown.Item id="third">Item 3</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
