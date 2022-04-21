import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  children: "Enabled button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled button",
  onClick: null,
};
