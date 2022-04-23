import PageNavigation from "./PageNavigation";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Components/PageNavigation",
  component: PageNavigation,
  argTypes: {
    count: { control: "number" },
    current: { control: "number" },
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  return (
    <PageNavigation
      {...args}
      onPageChange={(current) => updateArgs({ current })}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  count: 15,
  current: 8,
};

export const Short = Template.bind({});
Short.args = {
  count: 5,
  current: 1,
};
