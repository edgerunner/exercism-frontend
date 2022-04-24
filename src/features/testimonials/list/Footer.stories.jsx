import Footer from "./Footer";

export default {
  title: "Features/Testimonials/List/Footer",
  component: Footer,
  argTypes: {
    count: { control: "number" },
    current: { control: "number" },
    onPageChange: { action: "onPageChange" },
  },
};

const Template = (args) => <Footer {...args} />;

export const Dummy = Template.bind({});
Dummy.args = {
  count: 15,
  current: 8,
};
