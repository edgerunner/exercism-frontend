import Items from "./Items";
import fixtures from "./Items.fixtures.js";

export default {
  title: "Features/Testimonials/List/Items",
  component: Items,
};

const Template = (args) => <Items {...args} />;

export const FullPage = Template.bind({});
FullPage.args = {
  testimonials: fixtures,
};

export const Empty = Template.bind({});
Empty.args = {
  testimonials: [],
};

export const FewItems = Template.bind({});
FewItems.args = {
  testimonials: fixtures.slice(0, 3),
};
