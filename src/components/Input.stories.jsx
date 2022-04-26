import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "radio",
      options: ["text", "number", "password", "search"],
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "Text input",
  value: "",
};
