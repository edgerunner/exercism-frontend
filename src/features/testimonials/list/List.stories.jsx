import List from "./List";
import fixtures from "./Items.fixtures.js";

export default {
  title: "Features/Testimonials/List",
  component: List,
  argTypes: {
    onPageChange: { action: "onPageChange" },
  },
};

const Template = (args) => <List {...args} />;

export const Full = Template.bind({});
Full.args = {
  testimonials: fixtures,
  current: 1,
  count: 3,
};

export const Few = Template.bind({});
Few.args = {
  testimonials: fixtures.slice(0, 3),
  current: 1,
  count: 1,
};
