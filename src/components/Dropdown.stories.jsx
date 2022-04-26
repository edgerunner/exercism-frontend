import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export function Default({ radio }) {
  return (
    <Dropdown.Wrapper>
      <button>Dropdown</button>
      <Dropdown.Menu radio={radio}>
        <Dropdown.Item data-try={75}>Item 1</Dropdown.Item>
        <Dropdown.Item selected className="extra">
          Item 2
        </Dropdown.Item>
        <Dropdown.Item id="third">Item 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Wrapper>
  );
}
Default.args = {
  radio: false,
};
