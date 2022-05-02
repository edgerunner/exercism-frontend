import MyTestimonials from "./MyTestimonials";
import * as ListStories from "./list/index.stories";

export default {
  title: "Features/Testimonials/MyTestimonials",
  component: MyTestimonials,
};

const Template = (args) => <MyTestimonials {...args} />;

export const Full = Template.bind({});
Full.args = ListStories.Full.args;
