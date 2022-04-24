import Item from "./Item";
import fixtures from "./Items.fixtures.js";

export default {
  title: "Features/Testimonials/List/Item",
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = fixtures[0];
