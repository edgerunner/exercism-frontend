import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    arrow: { control: "inline-radio", options: [null, "left", "right"] },
  },
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

export const Arrow = Template.bind({});
Arrow.args = {
  children: "Arrow",
  arrow: "left",
};
